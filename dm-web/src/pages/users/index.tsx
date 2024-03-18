import Link from "next/link";
import { useEffect, useState } from "react";

import { PrimaryButton } from "@/components/atoms/botton/PrimaryButton";
import { axiosInstance } from "@/utils/axios";

import React from "react";

type Users = {
  id: number;
  name: string;
  email: string;
  password: string | null;
  profile_image: string | null;
  level: number | null;
  created_at: Date;
  update_at: Date;
};

export default function UsersIndex() {
  const [users, setUsers] = useState<Users[]>();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get("/users");
      setUsers(res.data);
    };
    f();
  }, []);

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-5xl`}>ユーザー一覧</h1>
        <div>
          <ul className={`mx-auto w-1/2`}>
            {users?.map((user) => (
              <Link href={`/users/${user.id}`} key={user.id}>
                <div
                  className={`mt-2 bg-white border-none py-4 rounded-2xl shadow-lg mx-auto flex justify-center gap-4`}
                >
                  <li className={`text-blue-600 hover:text-blue-400  `}>
                    {user.name}
                  </li>
                </div>
              </Link>
            ))}
          </ul>
          <div className={`pt-10`}>
            <PrimaryButton>
              <Link href="/missions">ホームへ</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
