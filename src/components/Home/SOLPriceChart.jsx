import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const SOLPriceChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=8&interval=daily&x_cg_demo_api_key=CG-hug1nT2kpVQ8MMbfQDFu4NeK"
        );
        const result = await response.json();

       
        const transformedData = result.prices?.slice(0 ,-1).map(([timestamp, price]) => ({
          date:new Date(timestamp).getDate(),
          price: parseFloat(price.toFixed(2)), 
        }));

        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Find min & max price for dynamic Y-axis
  const minPrice =Math.min(...data.map((item) => item.price));
  const maxPrice =Math.max(...data.map((item) => item.price));
  const yTicks = Array.from({ length: 7 }, (_, i) =>
    (minPrice + ((maxPrice - minPrice) / 6) * i).toFixed(2)
  );

  return (
    <div className="mb-12 input-gradient-border animate-border backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10">
      <h2 className="text-xl font-semibold lg:p-8 text-purple-200 mb-4">
        SOL Price Chart (7 Days)
      </h2>
      <div className="w-full lg:px-12  h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="date" stroke="#A78BFA" />
            <YAxis
              stroke="#A78BFA"
              tickCount={7}
              ticks={yTicks}
              domain={[minPrice, maxPrice]}
              orientation="right"
            />
            <Tooltip
              contentStyle={{
                background: "#1E1B2F",
                borderColor: "#A78BFA",
                color: "#fff",
              }}
            />
            <ReferenceLine
              y={(minPrice + maxPrice) / 2}
              stroke="#A78BFA"
              strokeDasharray="3 3"
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#A78BFA"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SOLPriceChart;
