import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center bg-slate-950">
      <h1 className="text-6xl font-bold text-pink-500">OBar</h1>
      <p className="mt-4 text-xl text-yellow-300">DATA ON THE ROCKS</p>
      <Link href="/dashboard" className="mt-15 bg-purple-700 text-white font-semibold px-6 py-3 transition duration-300">ENTER OBAR WORLD</Link>
    </main>
  );
}