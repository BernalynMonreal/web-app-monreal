import React from "react";

export default function Card({ icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer transform transition hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
