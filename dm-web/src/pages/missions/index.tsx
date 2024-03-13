import Link from "next/link";

import { PrimaryButton } from "@/components/atoms/botton/PrimaryButton";

export default function Home() {
  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-5xl`}>ユーザーのホーム画面</h1>
        <div className={`pt-10`}>
          <PrimaryButton>
            <Link href="">あなたの努力を記録しましょう</Link>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
