import {
  FileText,
  Building2,
  Bot,
  MessageCircle,
} from "lucide-react";

function SearchCard({ gr, onOpenSummary, onAskAI }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-5 md:p-6 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-emerald-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]">

      <h2 className="text-xl md:text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
        {gr.title}
      </h2>

      <div className="flex gap-2 mt-3 flex-wrap">

        <span className="rounded-full bg-emerald-100 px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium text-emerald-700">
          🏛️ {gr.department}
        </span>

        <span className="rounded-full bg-sky-100 px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium text-sky-700">
          📅 {gr.date}
        </span>

      </div>

      <p
  className="mt-5 overflow-hidden text-slate-600 leading-6 md:leading-7 text-sm md:text-base"
  style={{
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  }}
>
  {gr.summary}
</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">

        <a
          href={gr.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto h-11 items-center justify-center rounded-xl bg-emerald-600 px-5 font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]"
        >
          <>
  <FileText size={18} className="mr-2" />
  Open PDF
</>
        </a>
{gr.official_source_url && (
  <a
    href={gr.official_source_url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-full sm:w-auto h-11 items-center justify-center rounded-xl bg-amber-600 px-5 font-medium text-white transition-all duration-300 hover:bg-amber-700"
  >
    <>
  <Building2 size={18} className="mr-2" />
  Official Source
</>
  </a>
)}
        <button
          onClick={() => onOpenSummary(gr)}
          className="inline-flex w-full sm:w-auto h-11 items-center justify-center rounded-xl bg-sky-600 px-5 font-medium text-white transition-all duration-300 hover:bg-sky-700"
        >
         <>
  <Bot size={18} className="mr-2" />
  AI Summary
</>
        </button>
<button
  onClick={() => onAskAI(gr)}
  className="inline-flex w-full sm:w-auto h-11 items-center justify-center rounded-xl bg-violet-600 px-5 font-medium text-white transition-all duration-300 hover:bg-violet-700"
>
  <>
  <MessageCircle size={18} className="mr-2" />
  Ask AI
</>
</button>
      </div>

    </div>
  );
}

export default SearchCard;