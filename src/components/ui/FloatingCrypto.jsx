import { useEffect, useState, useRef, useMemo } from "react";

const bgColors = [
  "bg-purple-600",
  "bg-yellow-600",
  "bg-orange-600",
  "bg-red-500",
  "bg-green-500",
  "bg-teal-600",
  "bg-blue-500",
  "bg-indigo-600",
  "bg-pink-600",
];

const formatter = new Intl.NumberFormat("en", { notation: "compact" });

const FloatingCrypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(bgColors[0]);
  const [visible, setVisible] = useState(false); // Controls toast visibility

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
      setVisible(false); // Start fade-out effect

      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          let newIndex = getRandomExcluding(prevIndex, cryptoData.length - 1);
          if (newIndex !== previousIndexRef.current) {
            previousIndexRef.current = newIndex;
            return newIndex;
          }
          return prevIndex;
        });

        setBgColor(bgColors[Math.floor(Math.random() * bgColors.length)]);
        setVisible(true); // Show new toast
      }, 400); // Wait for fade-out before changing
    }, 1000); // Change every 2s

    return () => clearInterval(interval);
  }, [cryptoData]);

  const currentCrypto = useMemo(() => {
    return cryptoData.length > 0
      ? cryptoData[getRandomExcluding(0, cryptoData.length - 1)]
      : null;
  }, [cryptoData, currentIndex]);

  if (!currentCrypto) return null;

  return (
    <>
      <div
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-400 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        <div className={`w-[80vw] md:w-[50vw] py-[6px] px-2 md:px-2 flex items-center space-x-4 flex-nowrap bg-[#161B22]/90 backdrop-blur-sm border border-purple-500/20 rounded-md p-2 shadow-lg max-w-sm mx-auto text-xs`}>
          <div className="text-center w-full sm:text-sm text-white">

            <span className="capitalize">{currentCrypto.symbol}</span> {" "} hit {" "}
            {formatter.format(Math.floor(Math.random() * (10_000_000 - 500_000 + 1)) + 500_000)} market cap 🔥
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-14 left-1/2 -translate-x-1/2 z-50 transition-all duration-400 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        <div className={`w-[80vw] md:w-[50vw] py-[6px] px-2 md:px-2 flex items-center space-x-4 flex-nowrap bg-[#161B22]/90 backdrop-blur-sm border border-purple-500/20 rounded-md p-2 shadow-lg max-w-sm mx-auto text-xs`}>
          <div className="text-center w-full sm:text-sm text-white">

            <span className="capitalize">{currentCrypto.symbol}</span> {" "} rugged {" "}
            {formatter.format(Math.floor(Math.random() * (100000)) + 500_000)}$ 🔥
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCrypto;
