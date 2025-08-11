"use client";

const OurApproach = () => {
  const approachSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We begin by understanding your business goals, challenges, and requirements through comprehensive analysis and stakeholder interviews.",
      icon: "🔍",
      color: "from-blue-500 to-purple-600",
      features: [
        "Business Analysis",
        "Stakeholder Interviews",
        "Requirements Gathering",
      ],
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Our team develops a tailored strategy that aligns with your business objectives and creates a roadmap for successful implementation.",
      icon: "📋",
      color: "from-purple-500 to-blue-600",
      features: [
        "Strategic Planning",
        "Roadmap Creation",
        "Resource Allocation",
      ],
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using cutting-edge technologies, following agile methodologies and rigorous testing protocols.",
      icon: "⚙️",
      color: "from-blue-600 to-purple-700",
      features: [
        "Agile Development",
        "Quality Testing",
        "Continuous Integration",
      ],
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We ensure smooth deployment and provide ongoing support, maintenance, and optimization to maximize your ROI.",
      icon: "🚀",
      color: "from-purple-600 to-blue-700",
      features: [
        "Smooth Deployment",
        "24/7 Support",
        "Performance Optimization",
      ],
    },
  ];

  const corePrinciples = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.",
      icon: "💡",
      color: "from-blue-500 to-purple-600",
      highlight: "Cutting-edge",
    },
    {
      title: "Quality Assured",
      description:
        "Every project undergoes rigorous testing and quality assurance to ensure flawless performance and reliability.",
      icon: "✅",
      color: "from-purple-500 to-blue-600",
      highlight: "Rigorous",
    },
    {
      title: "Client-Centric",
      description:
        "Your success is our priority. We maintain transparent communication and adapt our approach to meet your evolving needs.",
      icon: "🤝",
      color: "from-blue-600 to-purple-700",
      highlight: "Transparent",
    },
    {
      title: "Agile Delivery",
      description:
        "We use agile methodologies to ensure rapid delivery, flexibility, and continuous improvement throughout the project lifecycle.",
      icon: "🔄",
      color: "from-purple-600 to-blue-700",
      highlight: "Rapid",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-floatFast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-2xl animate-pulse"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-300/40 rounded-full animate-rotateSlow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-purple-300/40 rotate-45 animate-rotateFast"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-blue-300/40 rounded-full animate-rotateSlow"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-purple-300/40 animate-rotateFast"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 animate-bounce shadow-lg">
            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
            <span className="text-white text-base font-medium">
              Our Methodology
            </span>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full animate-slideRight"></div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                Proven Approach
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full animate-slideLeft"></div>
          </div>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            A systematic process for successful project delivery and client
            satisfaction
          </p>
        </div>

        {/* Enhanced Process Steps */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-20 animate-fadeIn">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              4-Step Process
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="group animate-fadeIn hover:scale-105 transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  {/* Enhanced Step Number Badge */}
                  <div className="absolute -top-6 -right-6 z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-2xl animate-bounce">
                      {step.step}
                    </div>
                  </div>

                  {/* Enhanced Main Card */}
                  <div className="bg-white p-8 h-full rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-700 group-hover:border-blue-200 relative overflow-hidden animate-floatSlow">
                    {/* Background Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}
                    ></div>

                    <div className="relative z-10">
                      {/* Enhanced Icon */}
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center text-3xl shadow-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}
                      >
                        {step.icon}
                      </div>

                      {/* Enhanced Content */}
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-700">
                        {step.title}
                      </h4>

                      <p className="text-gray-600 leading-relaxed mb-6 text-base">
                        {step.description}
                      </p>

                      {/* Enhanced Features List */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                          Key Features
                        </h5>
                        {step.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 group/feature"
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full group-hover/feature:scale-150 transition-transform duration-300`}
                            ></div>
                            <span className="text-sm text-gray-600 font-medium group-hover/feature:text-gray-900 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Core Principles */}
        <div className="bg-white rounded-3xl p-20 shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>

          <div className="relative z-10 text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Principles
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              The foundation of our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {corePrinciples.map((principle, index) => (
              <div
                key={index}
                className="text-center group animate-fadeIn hover:scale-110 transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Icon Container */}
                <div className="mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${principle.color} rounded-3xl flex items-center justify-center text-3xl text-white mx-auto shadow-2xl group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 animate-floatSlow`}
                  >
                    {principle.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-700">
                  {principle.title}
                </h4>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {principle.description}
                </p>

                {/* Enhanced Highlight Badge */}
                <div
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${principle.color} bg-opacity-10 border border-current border-opacity-20 rounded-full`}
                >
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {principle.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed animate-fadeIn">
              Ready to start your project?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 animate-bounce">
                Get a Free Quote
              </button>

              <button className="bg-white border-2 border-blue-200 text-blue-700 px-12 py-5 rounded-2xl font-bold text-lg hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 shadow-xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
