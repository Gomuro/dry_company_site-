import { brand } from "@/lib/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} {brand.name}. Servicio informativo para solicitudes en la provincia de Málaga.
        </p>
        <p className="text-xs text-slate-500">
          Este sitio no sustituye la lectura de condiciones contractuales ni informes periciales.
        </p>
      </div>
    </footer>
  );
}
