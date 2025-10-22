import React from "react";
import { motion } from "framer-motion";

const card = ({ icon, title, description, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition cursor-pointer"
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default card;
