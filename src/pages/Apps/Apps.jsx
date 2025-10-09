import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApps from './SingleApps';

export default function Apps() {
  const data1 = useLoaderData() || [];
  const [rawQ, setRawQ] = useState('');
  const [q, setQ] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    const t = setTimeout(() => {
      setQ(rawQ);
      setSearching(false);
    }, 300);
    return () => clearTimeout(t);
  }, [rawQ]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return data1;
    return data1.filter(app => (app?.title || '').toLowerCase().includes(term));
  }, [data1, q]);

  return (
    <div className="bg-[#f7f9fb] p-[80px] gap-[40px] flex flex-col">
      <div className="text-black flex flex-col justify-center items-center text-center gap-[12px]">
        <h1 className="font-bold text-[48px] leading-tight">Our All Applications</h1>
        <p className="text-sm md:text-base text-gray-600">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-left font-semibold">
            ({filtered.length}) Apps Found
            {searching && <span className="ml-2 loading loading-dots loading-sm align-[-2px]" />}
          </div>

          <div className="relative w-full md:w-[420px]">
            <input
              type="text"
              value={rawQ}
              onChange={(e) => setRawQ(e.target.value)}
              placeholder="Search apps"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Search apps by title"
            />
          </div>
        </div>

        <Suspense fallback={<span>l<span className="loading loading-spinner loading-xl"></span>ading.......</span>}>
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 py-12">No App Found</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((singleApp1) => (
                <SingleApps key={singleApp1.id} singleApp1={singleApp1} />
              ))}
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}
