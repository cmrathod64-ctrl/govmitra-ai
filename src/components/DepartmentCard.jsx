import { Link } from "react-router-dom";

function DepartmentCard({ icon, title, value }) {
  const searchValue = value || title;

  return (
    <Link
      to={
        searchValue === "other"
          ? "/other-documents"
          : `/search?department=${encodeURIComponent(searchValue)}`
      }
    >
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center cursor-pointer">
        <div className="text-5xl">{icon}</div>

        <h2 className="mt-4 text-lg font-bold">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default DepartmentCard;