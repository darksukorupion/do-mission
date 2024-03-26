import Link from "next/link";

export const Header = () => {
  return (
    <header className={`bg-white w-full p-4 flex justify-between shadow-lg`}>
      <h1 className={`text-4xl font-bold italic`}>DO MISSION</h1>
      <div className={`mt-1`}>
        <Link href="/" className={`mr-10 text-xl`}>
          HOME
        </Link>
        <Link href="/missions" className={`text-xl`}>
          USERS
        </Link>
      </div>
    </header>
  );
};
