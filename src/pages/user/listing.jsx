import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import ModelS from "../../assets/images (3).jpeg";
import Model3 from "../../assets/images (6).jpeg";
import ModelX from "../../assets/images (7).jpeg";
import ModelY from "../../assets/tesla-car-models-list1.jpg";

const ListingPage = () => {
  const cars = [
    { name: "Model S", price: "$74,990", range: "396 mi", img: ModelS },
    { name: "Model 3", price: "$38,990", range: "341 mi", img: Model3 },
    { name: "Model X", price: "$79,990", range: "348 mi", img: ModelX },
    { name: "Model Y", price: "$43,990", range: "330 mi", img: ModelY },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl font-bold text-gray-800">Explore Our Models</h1>
        <p className="text-gray-600 mt-2">Choose the Tesla that fits your lifestyle.</p>
      </motion.div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-20">
        {cars.map((car, index) => (
          <motion.div
            key={car.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
          >
            <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">{car.name}</h2>
              <p className="text-gray-500 mb-1">Range: {car.range}</p>
              <p className="text-red-600 font-bold text-lg">{car.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
