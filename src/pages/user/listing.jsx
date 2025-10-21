import React from "react";
import Navbar from "../../components/Navbar";
import aventadorImg from "../../assets/images (1).jpeg";
import urusImg from "../../assets/images (2).jpeg";
import huracanImg from "../../assets/2017_Lamborghini_Huracan_LP610.jpg";

export default function ListingPage() {
  const cars = [
    {
      name: "Lamborghini Aventador",
      type: "Supercar",
      image: aventadorImg,
      desc: "The pinnacle of performance — a V12 masterpiece with breathtaking design.",
    },
    {
      name: "Lamborghini Urus",
      type: "SUV",
      image: urusImg,
      desc: "The first Super SUV that blends luxury, power, and versatility.",
    },
    {
      name: "Lamborghini Huracán",
      type: "Sports Car",
      image: huracanImg,
      desc: "Combines technology and design to deliver an exhilarating driving experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-10 py-10">
        <h2 className="text-4xl font-bold mb-8 text-yellow-600 text-center">
          Lamborghini Models
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-1">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{car.type}</p>
                <p className="text-gray-600 text-sm mb-4">{car.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
