import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import errorImg from "../../assets/error-404.png";

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
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto  px-4 py-12">
      <div className="text-center  mb-10">
        <h1 className="text-4xl font-bold">All Applications</h1>
        <p className="text-gray-500   mt-2">
          Explore all available apps in one place
        </p>
      </div>

      <div className="flex  flex-col md:flex-row  justify-between items-center gap-4 mb-8">
        <h2 className="text-xl font-semibold">Total Apps: {apps.length}</h2>

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
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="bg-white border border-slate-200 shadow-sm min-h-[60vh] flex items-center justify-center">
            <div className="w-full max-w-5xl border border-dashed border-sky-300 px-6 py-12 md:px-10 text-center">
              <img
                src={errorImg}
                alt="App not found"
                className="w-64 md:w-80 mx-auto mb-6 object-contain"
              />

              <h2 className="text-3xl  md:text-5xl font-bold text-slate-900 mb-4 uppercase">
                Opps!! App Not Found
              </h2>

              <p className="text-slate-500 text-sm md:text-lg mb-6 max-w-2xl mx-auto">
                The App you are requesting is not found on our system. Please
                try another apps.
              </p>
            </div>
          </div>
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

                  <div className="flex justify-between  text-sm text-gray-500">
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