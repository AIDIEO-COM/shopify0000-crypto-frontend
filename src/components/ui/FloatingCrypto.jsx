import { useEffect, useState } from "react";

const cryptoList = [
  { name: "Bitcoin", symbol: "btc", price: "$83953.00", icon: "₿" }, 
  { name: "Solana", symbol: "sol", price: "$133.44", icon: "🌞" }, 
  { name: "Bonk", symbol: "bonk", price: "$0.00", icon: "💥" }, 
  { name: "Popcat", symbol: "popcat", price: "$0.19", icon: "🐱" }, 
  { name: "MAGA", symbol: "trump", price: "$0.29", icon: "💥" }, 
];

const multipliers = ["50x", "60x", "100x", "120x"];
const bgColors = ["bg-purple-600", "bg-yellow-600", "bg-blue-600", "bg-red-500", "bg-green-500"];
const textColors = ["text-white", "text-white", "text-white", "text-white"];

const FloatingCrypto = () => {
  const [crypto, setCrypto] = useState(cryptoList[0]);
  const [multiplier, setMultiplier] = useState(multipliers[0]);
  const [bgColor, setBgColor] = useState(bgColors[0]);
  const [textColor, setTextColor] = useState(textColors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCrypto = cryptoList[Math.floor(Math.random() * cryptoList.length)];
      const randomMultiplier = multipliers[Math.floor(Math.random() * multipliers.length)];
      const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
      const randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];

      setCrypto(randomCrypto);
      setMultiplier(randomMultiplier);
      setBgColor(randomBgColor);
      setTextColor(randomTextColor);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-2 z-50 left-1/2 transform -translate-x-1/2">
      <div className={`w-max py-1  px-6 rounded-lg shadow-lg transition-all duration-500 ${bgColor} ${textColor} flex items-center space-x-4`}>
        <div className="text-2xl">
          <span>{crypto.icon}</span> 
        </div>
        <div className="flex items-center space-x-2">
          <span>{crypto.name}</span>
          <span className="text-sm">{crypto.price}</span>
          <span className="text-sm">{multiplier} 🔥</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingCrypto;
