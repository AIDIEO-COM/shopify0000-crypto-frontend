import { motion } from "framer-motion";

const AnimatedBorderBox = ({ children }) => {
  return (
    <div className="relative mb-12 backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 overflow-hidden">
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-purple-500"
          style={{
            boxShadow: "0px 0px 10px rgba(168, 85, 247, 0.8)",
          }}
          animate={{
            rotate: [0, 360],
            borderRadius: ["20%", "40%", "20%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Content */}
      {children}
    </div>
  );
};

export default AnimatedBorderBox;
