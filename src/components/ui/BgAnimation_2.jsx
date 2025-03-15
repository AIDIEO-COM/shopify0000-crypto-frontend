

const getRandom = (min, max) => Math.random() * (max - min) + min;

const BgAnimation_2 = () => {
  
  const particles = Array(10).fill(null);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0" style={{ transform: 'translateX(4.42618px) translateY(2.21309px)' }}>
      {particles.map((_, index) => (
        <div
          key={index}
          className="absolute bg-blue-500 rounded-full opacity-50"
          style={{
            width: `${getRandom(20, 60)}px`, 
            height: `${getRandom(20, 70)}px`, 
            top: `${getRandom(0, 100)}vh`, 
            left: `${getRandom(0, 100)}vw`, 
            transform: `translateY(-${getRandom(10, 50)}px) scale(${getRandom(1, 2)})`, 
            animation: `particleAnimation ${getRandom(4, 6)}s linear infinite`,
            animationDelay: `${getRandom(0, 3)}s`, 
          }}
        ></div>
      ))}
    </div>
  );
};

export default BgAnimation_2;
