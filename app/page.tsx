import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-4xl font-bold">Bem-vindo à Worknation</h1>

      <p className="text-lg max-w-xl">
        Transformando ideias em soluções sólidas, com tecnologia moderna e
        foco na excelência.
      </p>

      <Link
        href="/contato"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Ir para Contato
      </Link>
    </main>
  );
}
