import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className=" w-full absolute h-full overflow-hidden ">
      {/* Floating Bubbles */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white opacity-30"
          style={{
            width: `${Math.random() * 80 + 40}px`,
            height: `${Math.random() * 80 + 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
            y: ["100%", "-100%"],
            x: ["100%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: Math.random() * 4 + 4,
            duration: Math.random() * 12 + 6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
