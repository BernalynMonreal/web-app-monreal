import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const OrderPage = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mt-12 bg-white shadow-md rounded-2xl p-10"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Tesla Order Page
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Order Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Select Model</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option>Model S</option>
                <option>Model 3</option>
                <option>Model X</option>
                <option>Model Y</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Delivery Address</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Enter your address"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Submit Order
            </button>
          </form>

          {/* Photo Upload Section */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6">
            {photo ? (
              <img
                src={photo}
                alt="Uploaded"
                className="w-64 h-64 object-cover rounded-xl shadow-md"
              />
            ) : (
              <div className="text-gray-500 text-center">
                <p className="mb-4">Upload your photo</p>
                <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
                  Choose File
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderPage;
