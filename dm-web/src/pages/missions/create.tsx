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
          <label htmlFor="ミッションタイトル">ミッションタイトル</label>
          <input
            id="title"
            type="text"
            {...register("title", {
              required: "タイトルは必須です",
              maxLength: { value: 20, message: "20文字以内にしてください" },
            })}
            className={`border border-gray-400 w-1/3`}
          />
          <p>{errors.title?.message}</p>

          <label htmlFor="概要">概要</label>
          <input
            id="summary"
            type="text"
            {...register("summary", {
              required: "概要は必須です",
              maxLength: { value: 60, message: "60文字以内にしてください" },
            })}
            className={`border border-gray-400 w-1/3`}
          />
          <p>{errors.summary?.message}</p>

          <div>
            <button type="submit" className={`primary-button`}>
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
