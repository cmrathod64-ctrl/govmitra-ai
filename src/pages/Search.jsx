import { useEffect, useState } from "react";
import SearchFilters from "../components/SearchFilters";
import SearchCard from "../components/SearchCard";
import AISummaryModal from "../components/AISummaryModal";
import AskAIModal from "../components/AskAIModal";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Search() {
const [grs, setGrs] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchGRs = async () => {
    const { data, error } = await supabase
      .from("grs")
      .select("*")
      .order("gr_date", { ascending: false });
      console.log("Supabase GR Data:", data);

    if (error) {
      console.error("Error fetching GRs:", error);
      setLoading(false);
      return;
    }

    const formattedGRs = (data || []).map((gr) => ({
      ...gr,
      date: gr.gr_date || "",
      pdf: gr.pdf_url || "",
      keywords: Array.isArray(gr.keywords) ? gr.keywords : [],
    }));

    setGrs(formattedGRs);
    setLoading(false);
  };

  fetchGRs();
}, []);
  const [searchParams] = useSearchParams();
  const pageType = searchParams.get("type") || "";
const [search, setSearch] = useState(
  searchParams.get("query") || ""
);

const [department, setDepartment] = useState(
  searchParams.get("department") || "All"
);

const [year, setYear] = useState("All");
const [sortOrder, setSortOrder] = useState("newest");
const [selectedGR, setSelectedGR] = useState(null);
const [askAIGR, setAskAIGR] = useState(null);

const departments = [
  "All",
  ...new Set(grs.map((gr) => gr.department)),
];

const handleResetFilters = () => {
  setSearch("");
  setDepartment("All");
  setYear("All");
  setSortOrder("newest");
};
  const years = [
    "All",
    ...new Set(
      grs.map((gr) => gr.date.split("-")[0])
    ),
  ].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return b - a;
  });
  const filteredGRs = grs.filter((gr) => {

    const matchesSearch =

      gr.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      gr.department
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      gr.summary
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      gr.keywords.some((keyword) =>
        keyword
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    const matchesDepartment =
  pageType === "other"
    ? (
        gr.department === "नियमावली" ||
        gr.department === "पुस्तिका" ||
        gr.department === "मार्गदर्शक सूचना"
      )
    : (
        department === "All" ||
        gr.department === department
      );
    const matchesYear =
      year === "All" ||
      gr.date.startsWith(year)
    return (
      matchesSearch &&
      matchesDepartment &&
      matchesYear
    );

  });
 const hasFilters =
  pageType === "other" ||
  search.trim() !== "" ||
  department !== "All" ||
  year !== "All";
const sortedGRs = [...filteredGRs].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return sortOrder === "newest"
    ? dateB - dateA
    : dateA - dateB;
});
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-10 md:px-8">

        <h1 className="mb-3 text-4xl font-extrabold text-slate-900">
          Search Government Resolutions
          <p className="mb-8 text-lg text-slate-600">
  Search Government Resolutions by title, department, keyword or year.
</p>
        </h1>
                        <SearchFilters
  search={search}
  setSearch={setSearch}
  department={department}
  setDepartment={setDepartment}
  year={year}
  setYear={setYear}
  departments={departments}
  years={years}
  sortOrder={sortOrder}
  setSortOrder={setSortOrder}
/>

   {hasFilters && (
<div className="mt-6 mb-6 flex items-center justify-between">

  <span className="rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700 shadow-sm">
    📄 Total Results : {filteredGRs.length}
  </span>

  <button
    onClick={handleResetFilters}
    className="rounded-xl bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600 hover:shadow-lg"
  >
    🔄 Reset Filters
  </button>

</div>
)}
        <div className="space-y-4">
     {!hasFilters ? (

  <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-14 text-center shadow-xl shadow-slate-900/10">
    <h2 className="text-4xl font-extrabold text-emerald-600">
      🔍 Start Searching
    </h2>

    <p className="mt-5 text-lg leading-8 text-slate-600">
      Search by keyword, department or year.
      <br />
      Results will appear here.
    </p>
  </div>

) : filteredGRs.length === 0 ? (

  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
    <h2 className="text-2xl font-bold text-red-600">
      😔 No Government Resolution Found
    </h2>

    <p className="mt-3 text-gray-600">
      Try searching with another keyword, department or year.
    </p>
  </div>

) : (

  sortedGRs.map((gr) => (
    <SearchCard
      key={gr.id}
      gr={gr}
      onOpenSummary={setSelectedGR}
      onAskAI={setAskAIGR}
    />
  ))

)}
        </div>
                <AISummaryModal
                
          gr={selectedGR}
          onClose={() => setSelectedGR(null)}
        />
<AskAIModal
  gr={askAIGR}
  onClose={() => setAskAIGR(null)}
/>
      </div>

</>
  );
}

export default Search;