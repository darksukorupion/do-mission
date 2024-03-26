import Link from "next/link";
import { useEffect, useState } from "react";

import { PrimaryButton } from "@/components/atoms/botton/PrimaryButton";
import { axiosInstance } from "@/utils/axios";

import React from "react";
import { Card } from "@/components/atoms/card/card";

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
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>ユーザー一覧</h1>
        <div>
          <ul className={`mx-auto stdWidth`}>
            {users?.map((user) => (
              <Link href={`/users/${user.id}`} key={user.id}>
                <Card>
                  <div className={`flex justify-between p-4`}>
                    <li className={`text-blue-600 hover:text-blue-400  `}>
                      {user.name}
                    </li>
                    <p>Lv.30</p>
                  </div>
                </Card>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <PrimaryButton>
            <Link href="/">ホームへ</Link>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
