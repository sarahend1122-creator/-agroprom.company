export default function ListingsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">
          Объявления по сельхозтехнике
        </h1>
        <p className="mt-2 text-slate-600">
          Здесь будет список объявлений с фильтрами по стране, региону, городу,
          бренду и другим параметрам. Пока это статический каркас страницы.
        </p>
      </header>

      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
        Функционал списка объявлений и фильтрации будет подключён после
        настройки базы данных и API.
      </div>
    </div>
  );
}

