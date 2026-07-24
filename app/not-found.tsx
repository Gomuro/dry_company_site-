import { headers } from "next/headers";
import Link from "next/link";

export default async function GlobalNotFound() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const lang = acceptLanguage.startsWith("es") ? "es" : "en";

  return (
    <html lang={lang}>
      <body className="bg-white text-slate-900 antialiased">
        <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-4 text-center">
          <h1 className="text-6xl font-bold text-cyan-600">404</h1>
          <p className="mt-4 text-xl font-semibold">
            {lang === "es"
              ? "Página no encontrada"
              : "Page not found"}
          </p>
          <p className="mt-2 text-slate-600">
            {lang === "es"
              ? "La página que buscas no existe o ha sido movida."
              : "The page you are looking for does not exist or has been moved."}
          </p>
          <Link
            href={lang === "es" ? "/es" : "/en"}
            className="mt-8 inline-flex rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-cyan-500"
          >
            {lang === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
        </main>
      </body>
    </html>
  );
}
