import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Личный кабинет
        </h1>
        <p className="text-slate-600">
          Для доступа к личному кабинету необходимо войти в систему.
        </p>
        <Link
          href="/auth/login?callbackUrl=/dashboard"
          className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
        >
          Войти
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">
          Личный кабинет
        </h1>
        <p className="mt-2 text-slate-600">
          Привет, {session.user.name ?? session.user.email}! Здесь появятся
          управление объявлениями, статистика и сообщения.
        </p>
      </header>

      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
        Сейчас это базовый защищённый раздел. Следующим шагом можно добавить
        создание объявлений и просмотр их списка.
      </div>
    </div>
  );
}


