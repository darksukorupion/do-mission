import { useEffect, useState } from "react";
import Link from "next/link";

import { axiosInstance } from "@/utils/axios";
import { PrimaryButton } from "@/components/atoms/botton/PrimaryButton";
import { Card } from "@/components/atoms/card/card";
import { Mission } from "@/types/mission";

export default function MissionsIndex() {
  const [missions, setMissions] = useState<Mission[]>();
  const today = new Date();
  today.setDate(today.getDate() + 1);

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get("/missions");
      setMissions(res.data);
    };
    f();
  }, []);

  const getDaysDiff = (date1: Date, date2: Date) => {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <>
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>ユーザーのホーム画面</h1>
        <p>ミッション一覧</p>
        <ul className={`mx-auto stdWidth`}>
          {missions?.map((mission) => (
            <Link href={`/missions/${mission.id}`} key={mission.id}>
              <Card>
                <div className={`flex justify-between p-4`}>
                  <li className={`link`}>{mission.title}</li>
                  {mission.datetime && (
                    <p>
                      残り{getDaysDiff(new Date(mission.datetime), today)}日
                    </p>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </ul>
        <div>
          <PrimaryButton>
            <Link href="/missions/create">ミッションを新規作成</Link>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
