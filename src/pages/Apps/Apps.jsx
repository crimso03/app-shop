import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">All Applications</h1>
        <p className="text-gray-500 mt-2">
          Explore all available apps in one place
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h2 className="text-xl font-semibold">
          Total Apps: {filteredApps.length}
        </h2>

        <input
          type="text"
          placeholder="Search by app title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full md:w-80"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredApps.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-500">No App Found</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <Link to={`/apps/${app.id}`} key={app.id}>
              <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 h-full">
                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-44 w-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{app.title}</h2>

                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{app.downloads.toLocaleString()} downloads</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                      <FaStar />
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Apps;