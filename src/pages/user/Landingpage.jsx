import React from "react";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";
import aventadorImg from "../../assets/images (1).jpeg";
import urusImg from "../../assets/images (2).jpeg";
import huracanImg from "../../assets/2017_Lamborghini_Huracan_LP610.jpg";

export default function LandingPage() {
  const navigate = useNavigate();
  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/order");

  const carModels = [
    {
      image: aventadorImg,
      title: "Aventador",
      desc: "Unmatched power. Pure performance. The king of the road.",
    
    },
    {
      image: urusImg,
      title: "Urus",
      desc: "Luxury meets practicality. The ultimate Super SUV.",
     
    },
    {
      image: huracanImg,
      title: "Huracán",
      desc: "Precision engineering with striking design and speed.",
    
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${aventadorImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-4 animate-pulse">
            Lamborghini Motors
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">
            Experience the thrill of innovation, elegance, and speed.
          </p>
          <div className="flex justify-center gap-4">
            <PrimaryButton label="Explore Models" onClick={handleExplore} />
            <PrimaryButton
              label="Order Now"
              type="outline"
              onClick={handleOrder}
            />
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-12">
          Our Iconic Models
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {carModels.map((car, i) => (
            <div
              key={i}
              className="relative group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-600/40 transition duration-300"
            >
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              <div className="absolute bottom-6 left-6">
                <div className="text-4xl mb-2">{car.icon}</div>
                <h3 className="text-2xl font-semibold text-yellow-500">
                  {car.title}
                </h3>
                <p className="text-gray-300 text-sm max-w-[250px] mt-2">
                  {car.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">
            Choose your dream Lamborghini today.
          </h3>
          <PrimaryButton label="Start Your Journey" onClick={handleOrder} />
        </div>
      </section>
    </div>
  );
}
