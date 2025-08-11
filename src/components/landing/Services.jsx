"use client";

import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState("AI Development");

  const services = [
    {
      name: "AI Development",
      icon: "🤖",
      category: "AI & ML",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "AI/ML Development",
      icon: "🧠",
      category: "AI & ML",
      color: "from-purple-500 to-blue-600",
    },
    {
      name: "Chatbot Integration",
      icon: "💬",
      category: "AI & ML",
      color: "from-blue-600 to-purple-700",
    },
    {
      name: "Machine & Deep Learning",
      icon: "🔬",
      category: "AI & ML",
      color: "from-purple-600 to-blue-700",
    },
    {
      name: "Computer Vision",
      icon: "👁️",
      category: "AI & ML",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Big Data & Analytics",
      icon: "📊",
      category: "Data",
      color: "from-purple-500 to-blue-600",
    },
    {
      name: "Predictive Modeling",
      icon: "🔮",
      category: "AI & ML",
      color: "from-blue-600 to-purple-700",
    },
    {
      name: "Custom Software Development",
      icon: "💻",
      category: "Development",
      color: "from-purple-600 to-blue-700",
    },
    {
      name: "Digital Marketing",
      icon: "📱",
      category: "Marketing",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Natural Language Processing",
      icon: "🗣️",
      category: "AI & ML",
      color: "from-purple-500 to-blue-600",
    },
    {
      name: "DevOps",
      icon: "⚙️",
      category: "Development",
      color: "from-blue-600 to-purple-700",
    },
    {
      name: "UI/UX",
      icon: "🎨",
      category: "Design",
      color: "from-purple-600 to-blue-700",
    },
  ];

  const serviceDetails = {
    "AI Development": {
      description:
        "Comprehensive AI development services that transform your business operations through intelligent automation and data-driven insights.",
      benefits: [
        "Intelligent Automation",
        "Data-Driven Insights",
        "Enhanced Customer Experience",
        "Personalized Digital Services",
        "Scalable AI Infrastructure",
        "Real-time Decision Making",
      ],
      icon: "🤖",
      color: "from-blue-500 to-purple-600",
      features: [
        "Custom AI Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
      ],
    },
    "AI/ML Development": {
      description:
        "Advanced machine learning solutions that learn from your data to provide predictive insights and automated decision-making capabilities.",
      benefits: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Learning",
        "Continuous Improvement",
        "Custom ML Models",
        "Performance Optimization",
      ],
      icon: "🧠",
      color: "from-purple-500 to-blue-600",
      features: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Model Training",
      ],
    },
    "Chatbot Integration": {
      description:
        "Intelligent chatbot solutions that enhance customer engagement and provide 24/7 support through natural language processing.",
      benefits: [
        "24/7 Customer Support",
        "Natural Language Understanding",
        "Multi-platform Integration",
        "Customizable Responses",
        "Analytics & Insights",
        "Seamless User Experience",
      ],
      icon: "💬",
      color: "from-blue-600 to-purple-700",
      features: [
        "NLP",
        "Conversation Flow",
        "Multi-language",
        "Integration APIs",
      ],
    },
  };

  const currentService =
    serviceDetails[selectedService] || serviceDetails["AI Development"];

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-floatFast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-2xl animate-pulse"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-300/40 rounded-full animate-rotateSlow"></div>
        <div className="absolute top-40 left-32 w-12 h-12 border-2 border-purple-300/40 rotate-45 animate-rotateFast"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 border-2 border-blue-300/40 rounded-full animate-rotateSlow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 animate-bounce shadow-lg">
            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
            <span className="text-white text-base font-medium">
              Our Services
            </span>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full animate-slideRight"></div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                We Offer
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full animate-slideLeft"></div>
          </div>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          {/* Enhanced Left Sidebar - Service Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 sticky top-24 relative overflow-hidden animate-floatSlow">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4 animate-pulse"></span>
                  Our Services
                </h3>

                {/* Enhanced Category Tabs */}
                <div className="space-y-6">
                  {Object.entries(servicesByCategory).map(
                    ([category, categoryServices]) => (
                      <div key={category} className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          {category}
                        </h4>
                        <nav className="space-y-2">
                          {categoryServices.map((service, index) => (
                            <button
                              key={service.name}
                              onClick={() => setSelectedService(service.name)}
                              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-700 group relative overflow-hidden ${
                                selectedService === service.name
                                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl scale-105 transform"
                                  : "text-gray-600 hover:bg-white/80 hover:text-gray-900 hover:scale-105 hover:shadow-lg"
                              }`}
                              style={{ animationDelay: `${index * 0.05}s` }}
                            >
                              {/* Background Glow for Selected */}
                              {selectedService === service.name && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl"></div>
                              )}

                              <div className="flex items-center space-x-3 relative z-10">
                                <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                                  {service.icon}
                                </span>
                                <span className="truncate font-medium">
                                  {service.name}
                                </span>
                              </div>
                            </button>
                          ))}
                        </nav>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content Area - Service Details */}
          <div className="lg:col-span-3">
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden animate-fadeIn">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl"></div>

              <div className="relative z-10">
                {/* Enhanced Service Header */}
                <div className="mb-10">
                  <div className="flex items-center space-x-6 mb-8">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${currentService.color} rounded-3xl flex items-center justify-center text-4xl shadow-2xl group-hover:shadow-glow transition-all duration-700 hover:scale-110 hover:rotate-6 animate-floatSlow`}
                    >
                      {currentService.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-3">
                        {selectedService}
                      </h3>
                      <div
                        className={`w-24 h-1 bg-gradient-to-r ${currentService.color} rounded-full`}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xl leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Enhanced Features Grid */}
                <div className="mb-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 animate-pulse"></span>
                    Key Features
                  </h4>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-700 group animate-fadeIn hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${currentService.color} rounded-full group-hover:scale-150 transition-transform duration-300`}
                        ></div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Benefits Section */}
                <div className="mb-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 animate-pulse"></span>
                    Key Benefits of {selectedService}
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentService.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-700 group animate-fadeIn hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`flex-shrink-0 w-3 h-3 bg-gradient-to-r ${currentService.color} rounded-full mt-2 group-hover:scale-125 transition-transform duration-300`}
                        ></div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced CTA */}
                <div className="flex justify-end">
                  <button
                    className={`bg-gradient-to-r ${currentService.color} text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 animate-bounce`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
