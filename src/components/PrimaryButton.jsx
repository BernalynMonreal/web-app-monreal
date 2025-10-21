import React from "react";

const buttonStyles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
};

export default function PrimaryButton({ label, onClick, type = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${buttonStyles[type]}`}
    >
      {label}
    </button>
  );
}
