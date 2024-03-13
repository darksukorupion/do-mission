import Link from "next/link";
import { useState } from "react";
import { axiosInstance } from "../../utils/axios";
import { useRouter } from "next/router";

export default function MissionCreate() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const router = useRouter();

  const onClick = async () => {
    await axiosInstance.post("/missions", { title, summary });
    router.push("/missions");
  };

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>ミッションの新規作成</h1>
        <p>タイトル、概要を入力してください</p>

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
            ミッションを作成する
          </button>
        </div>

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
