import { FaDownload, FaStar } from "react-icons/fa";

const installedApps = [
  {
    id: 1,
    title: "Forest: Focus For Productivity",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=60",
    downloads: "9M",
    rating: 5,
    size: "25 MB",
  },
  {
    id: 2,
    title: "Forest: Focus For Productivity",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=60",
    downloads: "9M",
    rating: 5,
    size: "25 MB",
  },
  {
    id: 3,
    title: "Forest: Focus For Productivity",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=60",
    downloads: "9M",
    rating: 5,
    size: "25 MB",
  },
];

const Installation = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white border border-slate-200 shadow-sm">
        
        <div className="px-6 md:px-10 pt-10 pb-6 text-center border-b border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Your Installed Apps
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

       
        <div className="px-6 md:px-10 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-200">
          <p className="font-semibold text-slate-700">
            {installedApps.length} Apps Found
          </p>

          <select className="select select-bordered select-sm w-full md:w-40">
            <option>Sort By Size</option>
            <option>High-Low</option>
            <option>Low-High</option>
          </select>
        </div>

        
        <div className="px-6 md:px-10 py-6 space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-slate-50 border border-slate-200 rounded-md p-4"
            >
             
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-16 object-cover rounded"
                />

                <div>
                  <h2 className="font-semibold text-slate-800 text-sm md:text-base">
                    {app.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-green-500">
                      <FaDownload />
                      {app.downloads}
                    </span>

                    <span className="flex items-center gap-1 text-orange-400">
                      <FaStar />
                      {app.rating}
                    </span>

                    <span>{app.size}</span>
                  </div>
                </div>
              </div>

              
              <div>
                <button className="btn btn-success btn-sm text-white">
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installation;