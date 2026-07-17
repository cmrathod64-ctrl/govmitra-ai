import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SearchFilters from "../components/SearchFilters";
import SearchCard from "../components/SearchCard";
import AISummaryModal from "../components/AISummaryModal";

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
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [year, setYear] = useState("All");
  const [selectedGR, setSelectedGR] = useState(null);

  const departments = [
    "All",
    ...new Set(grs.map((gr) => gr.department)),
  ];

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
      department === "All" ||
      gr.department === department;

    const matchesYear =
      year === "All" ||
      gr.date.startsWith(year)
    return (
      matchesSearch &&
      matchesDepartment &&
      matchesYear
    );

  });

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-green-700 mb-6">
          🔍 Search Government Resolutions
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
        />

        <div className="mt-6 mb-6">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            📄 Total Results : {filteredGRs.length}
          </span>
        </div>

        <div className="space-y-4">
          {filteredGRs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-red-600">
                😔 No Government Resolution Found
              </h2>

              <p className="mt-3 text-gray-600">
                Try searching with another keyword, department or year.
              </p>
            </div>
          ) : (
            filteredGRs.map((gr) => (
              <SearchCard
                key={gr.id}
                gr={gr}
                onOpenSummary={setSelectedGR}
              />
            ))
          )}
        </div>
                <AISummaryModal
          gr={selectedGR}
          onClose={() => setSelectedGR(null)}
        />

      </div>

      <Footer />
    </>
  );
}

export default Search;