
import React, { useEffect, useMemo, useState } from "react";
import { getInstalled, uninstallApp } from "../../utils/storage.js";
import { Star, Download } from "lucide-react";
import { toast } from "react-toastify";

export default function Installation() {
  const [apps, setApps] = useState([]);
  const [sort, setSort] = useState("desc");

  useEffect(() => {
    setApps(getInstalled());
  }, []);

  const sorted = useMemo(() => {
    const copy = apps.slice();
    copy.sort((a, b) =>
      sort === "asc" ? a.downloads - b.downloads : b.downloads - a.downloads
    );
    return copy;
  }, [apps, sort]);

  const handleUninstall = (id, title) => {
    uninstallApp(id);
    setApps((prev) => prev.filter((a) => String(a.id) !== String(id)));
    toast.info(`Uninstalled ${title}`, {
      position: "top-right",
      autoClose: 1800,
      theme: "colored",
    });
  };

  return (
    <section className="bg-[#f7f9fb] px-[24px] md:px-[80px] py-10">
  
      <div className="text-black flex flex-col justify-center items-center text-center gap-[12px]">
        <h1 className="font-bold text-[32px] md:text-[48px] leading-tight">
          Your Installed Apps
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Manage installed apps stored in your browser
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mt-6">
        <h2 className="font-semibold text-[#001931]">
          ({apps.length}) Apps Found
        </h2>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Sort by Downloads</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered rounded-xl"
          >
            <option value="desc">High-Low</option>
            <option value="asc">Low-High</option>
          </select>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          No apps installed yet.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6">
          {sorted.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm w-full p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-md bg-gray-100"
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-[#001931]">{app.title}</h2>
                  <div className="flex items-center gap-4 text-sm mt-1">
                    <span className="flex items-center gap-1 text-[#00D390]">
                      <Download className="w-4 h-4" /> {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 text-[#FF8811]">
                      <Star className="w-4 h-4" /> {app.ratingAvg}
                    </span>
                    <span className="text-gray-500">{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="btn bg-[#00D390] text-white rounded-xl px-5"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
