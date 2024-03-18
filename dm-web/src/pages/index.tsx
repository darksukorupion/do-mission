import Link from "next/link";

import { PrimaryButton } from "../components/atoms/botton/PrimaryButton";

export default function Home() {
  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-5xl`}>DO MISSIONへようこそ</h1>
        <div className={`pt-10`}>
          <PrimaryButton>
            <Link href="/about">DO MISSIONとは？</Link>
          </PrimaryButton>
          <br />
          <div className={`mt-6`}>
            <PrimaryButton>
              <Link href="/signup">ユーザー登録</Link>
            </PrimaryButton>
          </div>
          <div className={`mt-6`}>
            <PrimaryButton>
              <Link href="/login">ログイン</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
