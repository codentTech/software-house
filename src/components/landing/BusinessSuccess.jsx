"use client";

const BusinessSuccess = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-floatFast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-2xl animate-pulse"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-300/40 rounded-full animate-rotateSlow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-purple-300/40 rotate-45 animate-rotateFast"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-blue-300/40 rounded-full animate-rotateSlow"></div>

        {/* Floating Particles */}
        <div
          className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-40 left-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 right-32 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Left Column - Text Content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 animate-bounce shadow-lg">
              <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
              <span className="text-white text-base font-medium">
                AI-Powered Solutions
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Drive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                  Unstoppable
                </span>{" "}
                Business Success Through AI
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className="animate-fadeIn hover:text-gray-900 transition-colors duration-300">
                In today's rapidly evolving digital landscape,{" "}
                <span className="text-gray-900 font-semibold">
                  artificial intelligence
                </span>{" "}
                has become the cornerstone of business innovation and
                competitive advantage. Our AI solutions are designed to
                transform your business operations, enhance customer
                experiences, and drive unprecedented growth.
              </p>

              <p
                className="animate-fadeIn hover:text-gray-900 transition-colors duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                We combine{" "}
                <span className="text-gray-900 font-semibold">
                  cutting-edge AI technologies
                </span>{" "}
                with deep industry expertise to deliver solutions that not only
                meet your current needs but also anticipate future challenges.
                Our approach focuses on creating intelligent systems that learn,
                adapt, and evolve with your business.
              </p>

              <p
                className="animate-fadeIn hover:text-gray-900 transition-colors duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                From{" "}
                <span className="text-gray-900 font-semibold">
                  predictive analytics
                </span>{" "}
                to intelligent automation, our AI solutions empower your team to
                make data-driven decisions, optimize processes, and unlock new
                opportunities for revenue generation and cost optimization.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 pt-6 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 animate-bounce">
                Get Started
              </button>

              <button className="bg-white border-2 border-blue-200 text-blue-700 px-10 py-4 rounded-2xl font-bold text-lg hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-500 transform hover:-translate-y-1 shadow-xl">
                Learn More
              </button>
            </div>

            {/* Enhanced Stats Preview */}
            <div
              className="grid grid-cols-3 gap-8 pt-8 animate-fadeIn"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-center group hover:scale-110 transition-transform duration-500">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-700">
                  40%
                </div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  Improved Efficiency
                </div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-500">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-2 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-700">
                  60%
                </div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  Revenue Growth
                </div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-500">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-2 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-700">
                  10x
                </div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  Faster Data Processing
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Column - Image/Visual */}
          <div
            className="relative animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Enhanced Card Container */}
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden group hover:shadow-glow transition-all duration-700 animate-floatSlow">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl"></div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10 text-center">
                {/* Enhanced AI Icon */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-300">
                    🤖
                  </span>
                </div>

                {/* Enhanced Data Visualization */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4 group/item">
                    <div className="w-16 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover/item:scale-x-110 transition-transform duration-300"></div>
                    <span className="text-sm text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      AI Processing
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 group/item">
                    <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full group-hover/item:scale-x-110 transition-transform duration-300"></div>
                    <span className="text-sm text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      Machine Learning
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 group/item">
                    <div className="w-14 h-2 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full group-hover/item:scale-x-110 transition-transform duration-300"></div>
                    <span className="text-sm text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      Data Analytics
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 group/item">
                    <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-blue-700 rounded-full group-hover/item:scale-x-110 transition-transform duration-300"></div>
                    <span className="text-sm text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                      Predictive Models
                    </span>
                  </div>
                </div>

                {/* Enhanced Description */}
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  Transform your business with intelligent AI solutions that
                  drive growth and innovation
                </p>
              </div>
            </div>

            {/* Enhanced Decorative Shapes */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce group-hover:opacity-40 transition-opacity duration-500"></div>
            <div
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 animate-bounce group-hover:opacity-40 transition-opacity duration-500"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSuccess;
