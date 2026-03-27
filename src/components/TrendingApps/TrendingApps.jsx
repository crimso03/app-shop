import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const TrendingApps = () => {

     const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const topApps = apps.slice(0, 8);
    return (
        <div>
              <section className="py-16">

      
      <div className="text-center  mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trending Apps
        </h2>
        <p className="text-gray-500  mt-2">
          Explore our most popular applications
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">

        {topApps.map((app) => (
          <Link to={`/apps/${app.id}`} key={app.id}>

            <div className="card bg-base-100 shadow-md hover:shadow-xl  hover:scale-105 transition duration-300">

              <figure>
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-44 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-lg">
                  {app.title}
                </h2>

                <div className="flex  justify-between text-sm  text-gray-400">
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

      
      <div className="text-center mt-10">
        <Link to="/apps">
          <button className="btn btn-primary  px-6">
            Show All
          </button>
        </Link>
      </div>

    </section>
        </div>
    );
};

export default TrendingApps;