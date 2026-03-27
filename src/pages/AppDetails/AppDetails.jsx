import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaDownload ,FaUserAlt} from "react-icons/fa";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  const app = apps.find((item) => item.id === Number(id));

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App installed successfully");
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">App Not Found</h2>
        <p className="text-gray-500 mt-2">
          The app you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="card lg:card-side bg-base-100 shadow-xl p-6 mb-10">
        <figure className="lg:w-1/3">
          <img
            src={app.image}
            alt={app.title}
            className="rounded-xl w-full max-w-sm object-cover"
          />
        </figure>

        <div className="card-body lg:w-2/3">
          <h1 className="card-title text-3xl">{app.title}</h1>
          <p className="text-gray-500">{app.companyName}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            

            <div className="bg-base-200 p-4 rounded-xl text-center">
  <p className="font-semibold flex justify-center items-center gap-1">
    <FaDownload className="text-green-500" />
    Downloads
  </p>
  <p className="text-lg font-bold">
    {app.downloads.toLocaleString()}
  </p>
</div>

            <div className="bg-base-200 p-4 rounded-xl text-center">
  <p className="font-semibold flex justify-center items-center gap-1">
    <FaStar className="text-yellow-500" />
    Rating
  </p>
  <p className="text-lg font-bold">{app.ratingAvg}</p>
</div>

            <div className="bg-base-200 p-4 rounded-xl text-center">
              <p className="font-semibold flex justify-center items-center gap-1">
    <FaUserAlt className="text-purple-500" />
    Reviews
  </p>
              <p className="font-bold text-xl">{app.reviews.toLocaleString()}</p>
            </div>

          </div>

          <div className="mt-6 flex justify-start">
  <button
    onClick={handleInstall}
    disabled={installed}
    className={`px-5 py-2 rounded text-white font-semibold ${
      installed
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-600"
    }`}
  >
    {installed ? "Installed" : `Install Now (${app.size} MB)`}
  </button>
</div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl p-6 mb-10">
        <h2 className="text-2xl font-bold mb-6">App Review Chart</h2>

        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
  <BarChart
    data={[...app.ratings].reverse()} 
    layout="vertical"
    margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
  >
    <XAxis type="number" hide /> 
    <YAxis
      dataKey="name"
      type="category"
      tick={{ fontSize: 12 }}
    />
    <Tooltip />
    <Bar
      dataKey="count"
      fill="#f97316" 
      barSize={18}
      radius={[0, 0, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-600 leading-7">{app.description}</p>
      </div>
    </section>
  );
};

export default AppDetails;