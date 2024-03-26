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
      <div className={`text-center space-y-4 pt-10`}>
        <h1 className={`headingMd`}>ミッションの新規作成</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-2`}>
          <label htmlFor="タイトル">タイトル</label>
          <br />
          <input
            id="title"
            type="text"
            placeholder="タイトルを入力"
            {...register("title", {
              required: "タイトルは必須です",
              maxLength: { value: 20, message: "20文字以内にしてください" },
            })}
            className={`input stdWidth`}
          />
          <p className={`error`}>{errors.title?.message}</p>

          <label htmlFor="概要">概要</label>
          <br />
          <textarea
            id="summary"
            placeholder="具体的な内容を入力"
            {...register("summary", {
              required: "概要は必須です",
              maxLength: { value: 60, message: "60文字以内にしてください" },
            })}
            className={`input stdWidth h-40 resize-none`}
          />
          <p className={`error`}>{errors.summary?.message}</p>

          <div>
            <button type="submit" className={`primary-button`}>
              ミッションを作成する
            </button>
          </div>
        </form>

        <div>
          <Link href="/missions" className={`link`}>
            ← 戻る
          </Link>
        </div>
      </div>
    </>
  );
}
