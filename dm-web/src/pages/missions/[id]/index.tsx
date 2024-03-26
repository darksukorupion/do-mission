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
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>ミッション詳細</h1>
        <div className={`w-1/2 mx-auto`}>
          <Card>
            <div className={`py-4 space-y-4`}>
              <p>{missionData.title}</p>
              <div className={`font-normal text-xl`}>
                <p>{missionData.summary}</p>
              </div>
              <div className={`flex justify-end gap-3 mr-6 `}>
                <Link
                  href={`/missions/${missionData.id}/edit`}
                  className={`text-lg font-normal text-gray-400 hover:text-gray-300`}
                >
                  編集
                </Link>
                <Link
                  href={`/missions/${missionData.id}/delete`}
                  className={`text-lg font-normal text-gray-400 hover:text-gray-300`}
                >
                  削除
                </Link>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Link
            href="/missions"
            className={`mx-auto text-blue-600 hover:text-blue-400`}
          >
            戻る
          </Link>
        </div>
      </div>
    </>
  );
}
