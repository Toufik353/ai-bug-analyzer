import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-5">
        AI Bug Analyzer
      </h1>

      <p className="text-zinc-400 mb-6">
        Analyze software bugs using AI
      </p>

      <Link
        href="/login"
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Get Started
      </Link>
    </div>
  );
}