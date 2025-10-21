import React from "react";
import Navbar from "../../components/Navbar";
import aventadorBg from "../../assets/2017_Lamborghini_Huracan_LP610.jpg";

export default function OrderPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${aventadorBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <Navbar />

        {/* Content */}
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-500 text-center drop-shadow-lg">
            Reserve Your Lamborghini
          </h2>
          <p className="text-gray-300 mb-10 text-center max-w-lg">
            Complete the form below to start your Lamborghini order request. Our
            team will contact you to confirm your configuration.
          </p>

          {/* Order Form */}
          <form className="bg-black/70 border border-yellow-600 shadow-lg rounded-2xl p-8 w-full max-w-md space-y-5 backdrop-blur-md">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-gray-500 p-3 rounded-md focus:border-yellow-500 outline-none placeholder-gray-400 text-white transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-500 p-3 rounded-md focus:border-yellow-500 outline-none placeholder-gray-400 text-white transition"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full bg-transparent border border-gray-500 p-3 rounded-md focus:border-yellow-500 outline-none placeholder-gray-400 text-white transition"
            />

            <select className="w-full bg-transparent border border-gray-500 p-3 rounded-md focus:border-yellow-500 outline-none text-gray-400 transition">
              <option value="">Select Model</option>
              <option value="Aventador">Aventador</option>
              <option value="Huracán">Huracán</option>
              <option value="Urus">Urus</option>
            </select>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-full transition-all duration-300"
            >
              Submit Order
            </button>
          </form>

          {/* Info */}
         
          
        </div>
      </div>
    </div>
  );
}
