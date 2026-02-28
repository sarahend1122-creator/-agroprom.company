import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">
          Международная агро-платформа
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Продажа и аренда сельхозтехники и других агроактивов. Это MVP-версия
          проекта, на базе которой будет развиваться полный функционал
          маркетплейса.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link
          href="/listings"
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">Объявления по технике</h2>
          <p className="mt-2 text-sm text-slate-600">
            Смотреть список доступной сельхозтехники для продажи и аренды.
          </p>
        </Link>

        <Link
          href="/dashboard"
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">Личный кабинет</h2>
          <p className="mt-2 text-sm text-slate-600">
            Управление своими объявлениями и сообщениями (каркас MVP).
          </p>
        </Link>

        <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4">
          <h2 className="text-lg font-semibold">Планы на развитие</h2>
          <p className="mt-2 text-sm text-slate-600">
            Земля, животноводство, аукционы, платежи и международная
            масштабируемость будут добавляться поэтапно.
          </p>
        </div>
      </section>
    </div>
  );
}

