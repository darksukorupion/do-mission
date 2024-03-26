import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={`text-center space-y-6 pt-10`}>
        <h1 className={`headingLg`}>DO MISSIONとは</h1>
        <p>あなたのモチベーション管理をサポートします</p>
        <div>
          <Link href="/" className={`link`}>
            ← 戻る
          </Link>
        </div>
      </div>
    </>
  );
}
