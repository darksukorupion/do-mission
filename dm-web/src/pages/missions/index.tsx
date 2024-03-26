import Link from "next/link";
import { useEffect, useState } from "react";

import { PrimaryButton } from "@/components/atoms/botton/PrimaryButton";
import { axiosInstance } from "@/utils/axios";

import React from "react";
import { Card } from "@/components/atoms/card/card";

type Missions = {
  id: number;
  title: string;
  summary: string;
  archivement: number | null;
  dead_line: Date | null;
  created_at: Date;
  update_at: Date;
};

export default function MissionsIndex() {
  const [missions, setMissions] = useState<Missions[]>();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get("/missions");
      setMissions(res.data);
    };
    f();
  }, []);

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-5xl`}>ユーザーのホーム画面</h1>
        <div>
          <p className={`mt-10`}>ミッション一覧</p>
          <ul className={`mx-auto w-1/3`}>
            {missions?.map((mission) => (
              <Link href={`/missions/${mission.id}`} key={mission.id}>
                <Card>
                  <div className={`flex justify-between p-4`}>
                    <li className={`text-blue-600 hover:text-blue-400  `}>
                      {mission.title}
                    </li>
                    <p>残り3日</p>
                  </div>
                </Card>
              </Link>
            ))}
          </ul>
          <div className={`pt-10`}>
            <PrimaryButton>
              <Link href="/missions/create">ミッションを新規作成</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
