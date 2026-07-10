function DepartmentCard({ icon, title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center cursor-pointer">
      <div className="text-5xl">{icon}</div>

      <h2 className="mt-4 text-lg font-bold">
        {title}
      </h2>
    </div>
  );
}

export default DepartmentCard;