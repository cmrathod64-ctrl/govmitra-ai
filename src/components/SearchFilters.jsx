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
        className="w-full border rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-4 mt-5">

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded-xl p-3"
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
  className="border rounded-xl p-3"
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
  className="border rounded-xl p-3"
>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
</select>

      </div>

    </>
  );
}

export default SearchFilters;