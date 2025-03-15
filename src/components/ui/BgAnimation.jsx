const BgAnimation = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-50 animate-floating"
            style={{
              width: `${30 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  export default BgAnimation;
  