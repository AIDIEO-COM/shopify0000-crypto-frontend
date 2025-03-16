import { useEffect, useState } from "react";

const bgColors = [
  "bg-purple-600",
  "bg-yellow-600",
  "bg-orange-600",
  "bg-red-500",
  "bg-green-500",
  "bg-teal-500",
];

const formatMarketCap = (value) => {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
};

const FloatingCrypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(bgColors[0]);
  const [shakeX, setShakeX] = useState(0);
  const [shakeY, setShakeY] = useState(0);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://frontend-api-v3.pump.fun/coins?meta=solana&includeNsfw=true"
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  useEffect(() => {
    if (cryptoData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cryptoData.length);
      setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
    }, 600); // 100 times per minute

    return () => clearInterval(interval);
  }, [cryptoData]);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShakeX(Math.random() * 35 - 2);
      setShakeY(Math.random() * 0 - 2);
    }, 100);

    return () => clearInterval(shakeInterval);
  }, []);

  if (cryptoData.length === 0) return null;

  const currentCrypto = cryptoData[currentIndex];

  return (
    <div
      className={`fixed bottom-2 z-50 text-sm left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-8 py-1`}
      style={{ transform: `translate(${shakeX}px, ${shakeY}px)` }}
    >
      <span>{currentCrypto.symbol}</span> hit{" "}
      {currentCrypto.market_cap} market cap 🔥
    </div>
  );
};

export default FloatingCrypto;
