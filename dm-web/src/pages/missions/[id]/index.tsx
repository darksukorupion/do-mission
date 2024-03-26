import Link from "next/link";
import { axiosInstance } from "../../../utils/axios";
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

type Params = {
  params: { id: number };
};

const getAllMissionIds = async () => {
  const res = await axiosInstance.get("/missions");
  const missions: Missions[] = res.data;
  return missions.map((mission) => {
    return {
      params: {
        id: mission.id.toString(),
      },
    };
  });
};

export async function getStaticProps({ params }: Params) {
  const res = await axiosInstance.get(`/missions/${params.id}`);
  const missionData: Missions = res.data;
  return {
    props: {
      missionData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllMissionIds();
  return {
    paths,
    fallback: false,
  };
}

export default function MissionShow({
  missionData,
}: {
  missionData: Missions;
}) {
  return (
    <>
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>ミッション詳細</h1>
        <div className={`stdWidth mx-auto`}>
          <Card>
            <div className={`p-3 lg:p-4 space-y-3`}>
              <p>{missionData.title}</p>
              <div className={`font-normal`}>
                <p>{missionData.summary}</p>
              </div>
              <div className={`flex justify-end gap-3`}>
                <Link
                  href={`/missions/${missionData.id}/edit`}
                  className={`grayLink`}
                >
                  編集
                </Link>
                <Link
                  href={`/missions/${missionData.id}/delete`}
                  className={`grayLink`}
                >
                  削除
                </Link>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Link href="/missions" className={`link`}>
            ← 戻る
          </Link>
        </div>
      </div>
    </>
  );
}
