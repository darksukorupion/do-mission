import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../utils/axios";

type DataForm = {
  title: string;
  summary: string;
};

export default function MissionCreate() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataForm>();

  const onSubmit = async (data: DataForm) => {
    const { title, summary } = data;
    await axiosInstance.post("/missions", { title, summary });
    router.push("/missions");
  };

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>ミッションの新規作成</h1>
        <p>タイトル、概要を入力してください</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="ミッションタイトル">タイトル</label>
          <br />
          <input
            id="title"
            type="text"
            placeholder="タイトルを入力しよう"
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
              ミッションを作成する
            </button>
          </div>
        </form>

        <div>
          <Link
            href="/missions"
            className={`mx-auto text-blue-600 hover:text-blue-400`}
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </>
  );
}
