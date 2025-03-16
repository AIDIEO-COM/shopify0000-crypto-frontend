import { useEffect, useState, useRef, useMemo } from "react";

const bgColors = [
  "bg-purple-600",
  "bg-yellow-600",
  "bg-orange-600",
  "bg-red-500",
  "bg-green-500",
  "bg-teal-500",
];

const formatter = new Intl.NumberFormat("en", { notation: "compact" });

const FloatingCrypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(bgColors[0]);

  const previousIndexRef = useRef(0);
  const cryptoCache = useRef(null);

  function getRandomExcluding(excludeValue, arrayLength) {
    let randomNum = Math.floor(Math.random() * arrayLength);
    return randomNum >= excludeValue ? randomNum + 1 : randomNum;
  }

  useEffect(() => {
    const fetchCryptoData = async () => {
      if (cryptoCache.current) {
        setCryptoData(cryptoCache.current);
        return;
      }

      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-meme-coins&x_cg_demo_api_key=CG-hug1nT2kpVQ8MMbfQDFu4NeK"
        );
        const data = await response.json();
        console.log(data)
        cryptoCache.current = data;
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
      setCurrentIndex((prevIndex) => {
        let newIndex = getRandomExcluding(prevIndex, cryptoData.length - 1);
        if (newIndex !== previousIndexRef.current) {
          previousIndexRef.current = newIndex;
          return newIndex;
        }
        return prevIndex;
      });

      setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
    }, 400);

    return () => clearInterval(interval);
  }, [cryptoData]);

  const currentCrypto = useMemo(() => {
    return cryptoData.length > 0
      ? cryptoData[getRandomExcluding(0, cryptoData.length - 1)]
      : null;
  }, [cryptoData, currentIndex]);

  if (!currentCrypto) return null;

  return (
    <div className="fixed bottom-4 z-50 left-1/2 transform -translate-x-1/2">
      <div className={`w-max py-1 px-6 rounded-md shadow-lg ${bgColor} flex items-center space-x-4 shake-effect`}>

        <div className="">
          <span className="capitalize">{currentCrypto.symbol}</span> {" "} hit {" "}
          {formatter.format(Math.floor(Math.random() * (10_000_000 - 500_000 + 1)) + 500_000)} market cap 🔥
        </div>
      </div>
    </div>
  );
};

export default FloatingCrypto;
