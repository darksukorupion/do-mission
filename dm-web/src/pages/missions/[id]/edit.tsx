import Link from "next/link";
import { axiosInstance } from "../../../utils/axios";
import { useState } from "react";
import { useRouter } from "next/router";

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

export default function MissionEdit({
  missionData,
}: {
  missionData: Missions;
}) {
  const [title, setTitle] = useState<string>(missionData.title);
  const [summary, setSummary] = useState<string>(missionData.summary);
  const router = useRouter();

  const onClick = async () => {
    await axiosInstance.post(`/missions/${missionData.id}/update`, {
      title,
      summary,
    });
    router.push("/missions");
  };

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>ミッション編集</h1>
        <p>ミッションタイトル</p>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`border border-gray-400 w-1/3`}
          />
        </div>
        <p>概要</p>
        <div>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={`border border-gray-400 w-1/3 h-32`}
          />
        </div>
        <div>
          <button onClick={onClick} className={`primary-button`}>
            ミッションを編集
          </button>
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
