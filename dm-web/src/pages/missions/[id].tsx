import Link from "next/link";
import { axiosInstance } from "../../utils/axios";

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
        <div
          className={`border-none bg-white w-1/2 mx-auto py-4 rounded-2xl shadow-lg`}
        >
          <div className={`mt-4`}>
            <p>{missionData.title}</p>
          </div>
          <div className={`mt-4 font-normal text-lg`}>
            <p>{missionData.summary}</p>
          </div>
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
