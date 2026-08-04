import { Link } from "react-router-dom";

function DepartmentCard({ icon, title, value }) {
  const searchValue = value || title;

  return (
    <Link
      to={
  searchValue === "OTHER_DOCS"
    ? "/search?type=other"
    : `/search?department=${encodeURIComponent(searchValue)}`
}
    >
      <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-5xl transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-110">
  <span className="group-hover:scale-110 transition-all duration-300">
    {icon}
  </span>
</div>

       <h2 className="mt-6 min-h-[64px] flex items-center justify-center text-center text-lg font-bold text-slate-800 leading-6">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default DepartmentCard;