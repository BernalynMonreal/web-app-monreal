import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center px-8 py-5 bg-black/90 backdrop-blur-md sticky top-0 z-50 border-b border-yellow-500/20"
      >
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent tracking-wider">
          LAMBORGHINI
        </h1>
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <button onClick={() => scrollToSection("features")} className="hover:text-yellow-400 transition">
            Models
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-yellow-400 transition">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-400 transition">
            Contact
          </button>
        </div>
        <button
          onClick={() => alert("Explore the Lamborghini Collection")}
          className="bg-gradient-to-r from-yellow-500 to-amber-600 px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
        >
          Get Started
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617814075130-f0d4c5200c33?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-extrabold mb-4 text-yellow-400">Feel the Power</h2>
          <p className="text-lg text-gray-200 mb-8">
            The Lamborghini experience redefined. Precision, passion, and performance — engineered to perfection.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("features")}
            className="bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Discover More
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-10 bg-gradient-to-b from-black to-gray-900 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-yellow-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Signature Models
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              name: "Aventador",
              desc: "The ultimate supercar. A roaring V12 engine that combines speed, control, and raw performance.",
              img: "aventador.jpg",
            },
            {
              name: "Huracán",
              desc: "Lightweight, agile, and futuristic — built to conquer both city streets and race tracks.",
              img: "huracan.jpg",
            },
            {
              name: "Urus",
              desc: "The world’s first super SUV — where luxurious comfort meets Lamborghini’s unmatched performance.",
              img: "urus.jpg", // ← your uploaded Urus photo here
            },
          ].map((car, index) => (
            <motion.div
              key={car.name}
              className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-8 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] transition"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={car.img} alt={car.name} className="rounded-xl mb-5 w-full h-64 object-cover" />
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">{car.name}</h3>
              <p className="text-gray-300">{car.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 text-center bg-black"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">About Lamborghini</h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Since 1963, Lamborghini has been a symbol of Italian excellence and innovation in the automotive world.
          Every design, every engine, every detail is born from a legacy of speed and craftsmanship that defines luxury
          performance.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gradient-to-t from-gray-900 to-black text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-8">
          Ready to ignite your passion for driving? Contact us and schedule your exclusive Lamborghini test drive.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => alert("Opening Lamborghini contact form...")}
          className="bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </motion.button>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-6 text-center text-gray-500 border-t border-yellow-500/10 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Lamborghini Automobili S.p.A. All rights reserved.
      </motion.footer>
    </div>
  );
}
