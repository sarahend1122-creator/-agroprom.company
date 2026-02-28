import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agroprom",
  description: "Международная платформа Agroprom для продажи и аренды сельхозактивов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6">
          <header className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="text-lg font-semibold">Agroprom</div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-8 border-t border-slate-200 pt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} Agroprom
          </footer>
        </div>
      </body>
    </html>
  );
}

