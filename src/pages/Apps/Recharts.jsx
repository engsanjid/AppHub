import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const RatingsChart = ({ ratings = [] }) => {
  const data = ratings.slice().sort((a, b) => {
    const n = (s) => parseInt(String(s.name).split(" ")[0], 10);
    return n(b) - n(a);
  });

  const maxCount = Math.max(...data.map((d) => d.count), 0);

  return (
    <div className="mt-6 w-full max-w-[900px] h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 24, bottom: 10, left: 56 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, maxCount + 1000]}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={60}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(255,136,17,0.1)" }}
            formatter={(value) => [`${value}`, "Ratings"]}
            labelStyle={{ fontWeight: "bold", color: "#001931" }}
          />

          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={22}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
