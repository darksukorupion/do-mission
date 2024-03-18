import Link from "next/link";
import { axiosInstance } from "../../../utils/axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

type DataForm = {
  title: string;
  summary: string;
};

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
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();

  const onSubmit = async (data: DataForm) => {
    const { title, summary } = data;
    await axiosInstance.put(`/missions/${missionData.id}`, {
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="ミッションタイトル">タイトル</label>
          <br />
          <input
            id="title"
            type="text"
            placeholder="タイトルを入力しよう"
            defaultValue={missionData.title}
            {...register("title", {
              required: "タイトルは必須です",
              maxLength: { value: 20, message: "20文字以内にしてください" },
            })}
            className={`border-2 w-1/3 bg-white border-gray-300 p-2 rounded-xl`}
          />
          <p className={`font-normal text-lg text-red-500`}>
            {errors.title?.message}
          </p>

          <label htmlFor="概要">概要</label>
          <br />
          <textarea
            id="summary"
            placeholder="具体的な内容を入力しよう"
            defaultValue={missionData.summary}
            {...register("summary", {
              required: "概要は必須です",
              maxLength: { value: 60, message: "60文字以内にしてください" },
            })}
            className={`border-2 w-1/3 bg-white border-gray-300 p-2 rounded-xl h-32 resize-none`}
          />
          <p className={`font-normal text-lg text-red-500`}>
            {errors.summary?.message}
          </p>

          <div>
            <button type="submit" className={`primary-button mt-4`}>
              ミッションを編集する
            </button>
          </div>
        </form>

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
