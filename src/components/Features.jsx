import React from "react";

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Performance",
      desc: "Experience lightning-fast load times and optimized components that deliver seamless user experiences.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Your website looks stunning on all devices, from mobile to desktop, with adaptive layouts.",
    },
    {
      icon: "🎨",
      title: "Easy Customization",
      desc: "Tailwind's utility-first classes make styling fast, flexible, and maintainable at scale.",
    },
  ];

  return (
    <section id="features" className="text-center py-32 bg-gray-50 mt-20">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-5">Why Choose Us</h2>
      <p className="text-gray-600 mb-14 text-lg">
        Powerful features designed to accelerate your development process
      </p>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto px-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="bg-white p-10 rounded-3xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="text-6xl mb-6">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

