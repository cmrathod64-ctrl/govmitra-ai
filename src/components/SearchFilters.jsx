function SearchFilters({
    search,
  setSearch,
  department,
  setDepartment,
  year,
  setYear,
  departments,
  years,
sortOrder,
setSortOrder,
}) {
  return (
    <>

      <input
        type="text"
        placeholder="Search by Title, Department or Keyword..."
        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg shadow-lg shadow-slate-900/10 transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-4 mt-5">

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-2xl border border-slate-300 bg-white p-4 shadow-lg shadow-slate-900/10 transition-all duration-300 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
        >
          {departments.map((dept) => (
            <option key={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
  value={year}
  onChange={(e) => setYear(e.target.value)}
  className="rounded-2xl border border-slate-300 bg-white p-4 shadow-lg shadow-slate-900/10 transition-all duration-300 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
>
          {years.map((yr) => (
            <option key={yr}>
              {yr}
            </option>
          ))}
        </select>
        <select
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
 className="rounded-2xl border border-slate-300 bg-white p-4 shadow-lg shadow-slate-900/10 transition-all duration-300 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
</select>

      </div>

    </>
  );
}

export default SearchFilters;