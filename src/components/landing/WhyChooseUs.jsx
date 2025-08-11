"use client";

const WhyChooseUs = () => {
  const metrics = [
    {
      number: "10+",
      label: "Years of Experience",
      icon: "⏰",
      color: "from-blue-500 to-purple-600",
    },
    {
      number: "170+",
      label: "Happy Clients",
      icon: "😊",
      color: "from-purple-500 to-blue-600",
    },
    {
      number: "200+",
      label: "Projects Done",
      icon: "🚀",
      color: "from-blue-600 to-purple-700",
    },
    {
      number: "04",
      label: "Global Offices",
      icon: "🌍",
      color: "from-purple-600 to-blue-700",
    },
  ];

  const clientLogos = [
    { name: "Maersk", logo: "M", color: "from-blue-500 to-blue-600" },
    { name: "Google", logo: "G", color: "from-purple-500 to-purple-600" },
    { name: "KIA", logo: "KIA", color: "from-blue-600 to-purple-600" },
    { name: "INNOVA", logo: "INNOVA", color: "from-purple-600 to-blue-600" },
    { name: "Xfinity", logo: "X", color: "from-blue-500 to-purple-500" },
    { name: "LIQUID", logo: "LIQUID", color: "from-purple-500 to-blue-500" },
    { name: "Yodl", logo: "YODL", color: "from-blue-600 to-purple-700" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-3xl animate-floatFast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-2xl animate-pulse"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-300/50 rounded-full animate-rotateSlow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-purple-300/50 rotate-45 animate-rotateFast"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-blue-300/50 rounded-full animate-rotateSlow"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-purple-300/50 animate-rotateFast"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 animate-bounce shadow-lg">
            <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
            <span className="text-white text-base font-medium">
              Why Choose Us
            </span>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full animate-slideRight"></div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                SoftwareHouse
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full animate-slideLeft"></div>
          </div>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            Your trusted partner for innovative software solutions and digital
            transformation
          </p>
        </div>

        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group animate-fadeIn hover:scale-110 transition-all duration-700"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div
                  className={`w-24 h-24 mx-auto bg-gradient-to-br ${metric.color} rounded-3xl flex items-center justify-center border-2 border-white/20 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl group-hover:shadow-glow animate-floatSlow`}
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-500">
                    {metric.icon}
                  </span>
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce">
                  {index + 1}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-700">
                  {metric.number}
                </span>
              </div>

              <p className="text-gray-700 text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Client Logos Section */}
        <div className="bg-white rounded-3xl p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>

          <div className="relative z-10 text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Industry Leaders
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              We've helped companies of all sizes achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 group cursor-pointer animate-fadeIn hover:scale-125 transition-all duration-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:rotate-12 transition-all duration-700 border-2 border-white/20 animate-floatSlow`}
                  >
                    <span className="text-white font-bold text-lg group-hover:scale-125 transition-transform duration-300">
                      {client.logo}
                    </span>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-sm"></div>
                </div>
                <span className="text-gray-600 text-sm text-center font-medium group-hover:text-blue-600 transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 animate-bounce">
              View All Clients
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
