
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Download, Star, ThumbsUp } from "lucide-react";
import RatingsChart from "./Recharts";
import { installApp, isInstalled } from "../../utils/storage.js";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData() || [];
  const singleapp = data.find((app) => app.id === appId);

  if (!singleapp) {
    return (
      <section className="p-[80px] bg-white text-black">
        <div className="min-h-[40vh] flex items-center justify-center">
          <h2 className="text-2xl font-bold text-[#001931]">
            App not found
          </h2>
        </div>
      </section>
    );
  }

  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
    ratings,
    size,
  } = singleapp;

  const [installed, setInstalled] = useState(() =>
    isInstalled(String(appId))
  );

  const handleInstall = () => {
    if (installed) return;
    installApp(singleapp);
    setInstalled(true);
    toast.success(" Installed successfully!", {
      position: "top-right",
      autoClose: 1800,
      theme: "colored",
    });
  };

  return (
    <section className="px-4 sm:px-10 md:px-14 lg:px-[80px] py-10 md:py-12 lg:py-[80px] bg-white text-black">
    
      <div className="flex flex-col md:flex-row gap-10">
  
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[350px] aspect-square object-cover rounded-xl shadow-sm"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div>
            <h1 className="font-bold text-[#001931] text-2xl md:text-3xl">
              {title}
            </h1>
            <p>
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          <div className="border border-blue-200"></div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex flex-col items-center">
              <Download className="text-[#00D390]" />
              <span>Downloads</span>
              <span className="font-semibold">{downloads}</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="text-[#FF8811]" />
              <span>Average Rating</span>
              <span className="font-semibold">{ratingAvg}</span>
            </div>
            <div className="flex flex-col items-center">
              <ThumbsUp className="text-[#632EE3]" />
              <span>Total Reviews</span>
              <span className="font-semibold">{reviews}</span>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn rounded-xl px-6 ${
              installed
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#00D390] text-white"
            }`}
          >
            {installed ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>

      <div className="border border-blue-200 my-10"></div>
      <div>
        <h1 className="font-bold text-[#001931] text-xl md:text-2xl mb-4">
          Ratings
        </h1>
        <RatingsChart ratings={ratings} />
      </div>

      <div className="border border-blue-200 my-10"></div>

      <div className="gap-10">
        <h1 className="font-bold text-[#001931] text-xl md:text-2xl mb-3">
          Description
        </h1>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </section>
  );
};

export default AppDetails;
