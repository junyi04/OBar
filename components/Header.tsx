import Link from "next/link";

export const Header = () => {
  return (
    <main className="flex justify-between items-center px-6 lg:px-12 w-full h-20 bg-yellow-500">
      <Link href="/" className="text-4xl font-bold">OBar</Link>
      <div className="flex gap-6">
        <Link href="/dashboard" className="text-2xl font-semibold">Dashboard</Link>
        <Link href="/about" className="text-2xl font-semibold">About</Link>
      </div>
    </main>
  );
}