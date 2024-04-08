import Link from "next/link";

import { PrimaryButton } from "../components/atoms/botton/PrimaryButton";
import { Calendar } from "@/functions/datePicker";

export default function Home() {
  return (
    <>
      <div className={`text-center space-y-4 mt-20`}>
        <h1 className={`headingLg`}>DO MISSIONへようこそ</h1>
        <div className={`pt-10 space-y-4`}>
          <Calendar />
          <PrimaryButton>
            <Link href="/about">DO MISSIONとは？</Link>
          </PrimaryButton>
          <br />
          <PrimaryButton>
            <Link href="/signup">ユーザー登録</Link>
          </PrimaryButton>
          <br />
          <PrimaryButton>
            <Link href="/login">ログイン</Link>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
