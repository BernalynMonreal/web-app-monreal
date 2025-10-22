import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";
import Card from "../../components/card";

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 
        bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/97a6c3a5-70de-44cc-a09a-12d9ac7c72a8/bvlatuR/std/2880x1800/_25-Hero-D')]
        bg-cover bg-center text-white"
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Experience the Future of Driving
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Electric. Efficient. Extraordinary.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          <PrimaryButton
            label="Explore Models"
            onClick={() => navigate("/listing")}
          />
          <PrimaryButton
            label="Order Now"
            type="outline"
            onClick={() => navigate("/order")}
          />
        </motion.div>
      </motion.header>

      {/* Feature Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10"
      >
        <Card
          icon="⚡"
          title="Performance"
          description="Instant torque and all-electric power."
          onClick={() => navigate("/listing")}
        />
        <Card
          icon="🔋"
          title="Long Range"
          description="Go further on a single charge."
          onClick={() => navigate("/listing")}
        />
        <Card
          icon="🧠"
          title="Autopilot"
          description="Advanced driver assistance features."
          onClick={() => navigate("/order")}
        />
      </motion.section>
    </div>
  );
};

export default Landingpage;
