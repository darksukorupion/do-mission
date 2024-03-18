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
  const title = missionData.title;
  const summary = missionData.summary;
  const router = useRouter();

  const onClick = async () => {
    await axiosInstance.delete(`/missions/${missionData.id}`);
    router.push("/missions");
  };

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>本当に削除しますか？</h1>
        <div
          className={`border-none bg-white w-1/2 mx-auto py-4 rounded-2xl shadow-lg`}
        >
          <div className={`mt-4`}>
            <p>{title}</p>
          </div>
          <div className={`mt-4 font-normal text-lg`}>
            <p>{summary}</p>
          </div>

          <div className={`mt-6`}>
            <button onClick={onClick} className={`secondary-button`}>
              ミッションを削除
            </button>
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
