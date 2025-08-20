"use client";

import { useState } from "react";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Retail");

  const industries = [
    {
      name: "Health Tech",
      description:
        "Revolutionizing healthcare with AI-powered diagnostics, patient care, and medical research solutions.",
      image: "🏥",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Ed Tech",
      description:
        "Transforming education through personalized learning, intelligent tutoring, and adaptive curriculum systems.",
      image: "🎓",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Retail",
      description:
        "Enhancing customer experience with AI-driven recommendations, inventory management, and personalized shopping.",
      image: "🛒",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Logistics",
      description:
        "Optimizing supply chains with predictive analytics, route optimization, and intelligent warehouse management.",
      image: "🚚",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Green Tech",
      description:
        "Advancing sustainability through AI-powered energy optimization, waste reduction, and environmental monitoring.",
      image: "🌱",
      color: "from-green-600 to-teal-500",
    },
    {
      name: "IoT",
      description:
        "Connecting devices intelligently with edge computing, predictive maintenance, and smart automation.",
      image: "🔌",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Fintech",
      description:
        "Revolutionizing finance with AI-driven risk assessment, fraud detection, and personalized financial services.",
      image: "💳",
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "Manufacturing",
      description:
        "Optimizing production with predictive maintenance, quality control, and intelligent automation systems.",
      image: "🏭",
      color: "from-gray-600 to-slate-500",
    },
  ];

  const currentIndustry = industries.find(
    (ind) => ind.name === selectedIndustry
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-0.5 bg-primary-500"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Industries We Transformed with Innovative Software Solutions
            </h2>
            <div className="w-8 h-0.5 bg-primary-500"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI solutions are revolutionizing various industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industry Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Industries
              </h3>
              <div className="space-y-2">
                {industries.map((industry) => (
                  <button
                    key={industry.name}
                    onClick={() => setSelectedIndustry(industry.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedIndustry === industry.name
                        ? "bg-primary-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{industry.image}</span>
                      <span>{industry.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>

              {/* Industry Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl">{currentIndustry?.image}</span>
                  <h3 className="text-3xl font-bold">
                    {currentIndustry?.name}
                  </h3>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {currentIndustry?.description}
                </p>

                {/* Interactive Elements */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-3">
                      Key Solutions
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• AI-Powered Analytics</li>
                      <li>• Intelligent Automation</li>
                      <li>• Predictive Insights</li>
                      <li>• Custom Integration</li>
                    </ul>
                  </div>

                  <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Increased Efficiency</li>
                      <li>• Cost Reduction</li>
                      <li>• Better Decision Making</li>
                      <li>• Competitive Advantage</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="btn-primary">Explore More</button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute bottom-4 left-4 w-16 h-16 bg-secondary-400 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;






