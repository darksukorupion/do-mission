import Link from "next/link";

export const Footer = () => {
  return (
    <header
      className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4`}
    >
      <h1></h1>
      <Link href="/">HOME</Link>
      <Link href="/missions">USERS</Link>
    </header>
  );
};
