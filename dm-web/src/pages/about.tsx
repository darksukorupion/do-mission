import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>DO MISSIONとは</h1>
        <h1>あなたのモチベーション管理をサポートします</h1>
        <div className={`pt-4`}>
          <Link href="/" className={`text-blue-600`}>
            ← 戻る
          </Link>
        </div>
      </div>
    </>
  );
}
