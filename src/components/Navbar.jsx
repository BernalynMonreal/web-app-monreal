import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">Car Company</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/listing">Cars</a></li>
        <li><a href="/order">Order</a></li>
      </ul>
    </nav>
  );
}
