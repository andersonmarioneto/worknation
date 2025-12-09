import Link from "next/link";

export default function Contato() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-3xl font-bold">Contato</h1>

      <p className="text-lg max-w-md">
        Fale connosco para consultoria, parcerias ou serviços corporativos.
        Estamos aqui para ajudar.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all"
      >
        Voltar à Home
      </Link>
    </main>
  );
}
