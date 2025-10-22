import React from "react";
import { motion } from "framer-motion";

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const styles = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-semibold transition ${styles[type]}`}
    >
      {label}
    </motion.button>
  );
};

export default PrimaryButton;
