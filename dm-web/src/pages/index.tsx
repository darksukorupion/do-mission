import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-5xl`}>DO MISSIONへようこそ</h1>
        <div className={`pt-10`}>
          <Link href="/about" className={`text-blue-600`}>
            DO MISSIONとは？
          </Link>
        </div>
      </div>
    </>
  );
}
