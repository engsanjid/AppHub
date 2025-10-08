import React from 'react';
import hero from '../../assets/hero.png'
import playstore from '../../assets/google-play-store-icon-logo-symbol-free-png-removebg-preview.png'
import appstore from '../../assets/app-store-logo-icon-software-apple-phone-symbol-blue-design-mobile-illustration-free-vector-removebg-preview.png'
import TrendingApps from '../Apps/TrendingApps';
import { useLoaderData } from 'react-router';
const Home = () => {
  const data=useLoaderData();
    return (
 <>    
  <section className="bg-[#f7f9fb] pt-8">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#001931]">
        We Build
        <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          {" "}Productive{" "}
          </span>
        Apps
      </h1>

      <p className="mt-4 text-base sm:text-lg text-[#627382]">
        At AppHub, we craft innovative apps designed to make everyday life simpler,
        smarter, and more exciting. Our goal is to turn your ideas into digital
        experiences that truly make an impact.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href=" "
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:px-5"
        >
          <img className="h-6 w-6" src={playstore} alt="Google Play" />
          <span className="font-medium text-[#001931]">Google Play</span>
        </a>

        <a
          href=" "
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm  md:px-5"
        >
          <img className="h-6 w-6" src={appstore} alt="App Store" />
          <span className="font-medium text-[#001931]">App Store</span>
        </a>
      </div>
    </div>
    <div className="mt-6 sm:mt-10">
      <img
        src={hero}
        alt=" "
        className="block mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
      />
    </div>
  </section>
<section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-20">
  <h1 className="text-3xl md:text-4xl font-bold">
    Trusted By Millions, Built For You
  </h1>

  <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-10">

    <div>
      <p className="text-sm opacity-80 mb-2">Total Downloads</p>
      <h2 className="text-5xl font-bold">29.6M</h2>
      <p className="text-sm mt-2 opacity-80">21% More Than Last Month</p>
    </div>

    <div>
      <p className="text-sm opacity-80 mb-2">Total Reviews</p>
      <h2 className="text-5xl font-bold">906K</h2>
      <p className="text-sm mt-2 opacity-80">46% More Than Last Month</p>
    </div>

    
    <div>
      <p className="text-sm mb-2 opacity-80">Active Apps</p>
      <h2 className="text-5xl font-bold">132+</h2>
      <p className="mt-2 opacity-80 text-sm">31 More Will Launch</p>
    </div>
  </div>
</section>
<TrendingApps data={data}></TrendingApps>
</>

    );
};

export default Home;