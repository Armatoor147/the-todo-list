import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-purple-500">
      <div className="text-center p-8 bg-green-800 rounded-lg">
        <h1 className="text-5xl font-bold text-black mb-6">
          Welcome to the TODO App
        </h1>
        <Link
          href="/todos"
          className="text-xl text-black hover:underline"
        >
          Go to TODO List
        </Link>
      </div>
    </main>
  );
}
