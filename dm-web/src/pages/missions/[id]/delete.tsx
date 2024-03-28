import Link from "next/link";
import { useRouter } from "next/router";

import { axiosInstance } from "../../../utils/axios";
import { Card } from "@/components/atoms/card/card";
import { getAllMissionIds } from "@/functions/getAllMissionIds";
import { Mission } from "@/types/mission";
import { Params } from "@/types/params";

export async function getStaticProps({ params }: Params) {
  const res = await axiosInstance.get(`/missions/${params.id}`);
  const missionData: Mission = res.data;
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

export default function MissionEdit({ missionData }: { missionData: Mission }) {
  const title = missionData.title;
  const summary = missionData.summary;
  const router = useRouter();

  const onClick = async () => {
    await axiosInstance.delete(`/missions/${missionData.id}`);
    router.push("/missions");
  };

  return (
    <>
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>本当に削除しますか？</h1>
        <div className={`mx-auto stdWidth`}>
          <Card>
            <div className={`py-4 space-y-4`}>
              <p>{title}</p>
              <div className={`font-normal`}>
                <p>{summary}</p>
              </div>
              <button onClick={onClick} className={`delete-button`}>
                ミッションを削除
              </button>
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
