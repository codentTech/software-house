"use client";

const ClientSolutions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-0.5 bg-primary-500"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Client-Centric AI Solutions
            </h2>
            <div className="w-8 h-0.5 bg-primary-500"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our tailored AI solutions are transforming businesses
            across industries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              AI-Powered Hospital Information Management System
            </h3>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Our comprehensive hospital information management system
                leverages cutting-edge AI technology to streamline healthcare
                operations, enhance patient care, and improve clinical outcomes.
                The system integrates seamlessly with existing hospital
                infrastructure while providing intelligent insights and
                automation.
              </p>
              <p>
                From patient registration to discharge planning, our AI solution
                handles every aspect of the patient journey with precision and
                efficiency. Advanced machine learning algorithms predict patient
                needs, optimize resource allocation, and identify potential
                health risks before they become critical.
              </p>
              <p>
                The system also includes intelligent scheduling, inventory
                management, and financial analytics, all powered by AI to ensure
                optimal hospital operations and cost-effectiveness.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Patient Care Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Predictive Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Resource Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Clinical Decision Support</span>
              </div>
            </div>

            <button className="btn-primary">Learn More</button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-900 to-secondary-800 rounded-2xl p-8 shadow-2xl">
              {/* Main Image Placeholder */}
              <div className="relative w-full h-80 bg-gradient-to-br from-primary-700 to-secondary-600 rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-6xl">🏥</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-20 h-2 bg-white bg-opacity-30 rounded mx-auto"></div>
                      <div className="w-24 h-2 bg-white bg-opacity-20 rounded mx-auto"></div>
                      <div className="w-16 h-2 bg-white bg-opacity-25 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-primary-300 rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-6 left-6 w-3 h-3 bg-secondary-300 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-4 w-2 h-2 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              {/* Dashboard Preview */}
              <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="text-white font-semibold mb-3 text-center">
                  System Dashboard
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-green-500 bg-opacity-20 rounded-lg p-3 text-center">
                    <div className="text-green-300 text-sm font-semibold">
                      Patients
                    </div>
                    <div className="text-white text-lg font-bold">1,247</div>
                  </div>
                  <div className="bg-blue-500 bg-opacity-20 rounded-lg p-3 text-center">
                    <div className="text-blue-300 text-sm font-semibold">
                      Staff
                    </div>
                    <div className="text-white text-lg font-bold">89</div>
                  </div>
                  <div className="bg-purple-500 bg-opacity-20 rounded-lg p-3 text-center">
                    <div className="text-purple-300 text-sm font-semibold">
                      Rooms
                    </div>
                    <div className="text-white text-lg font-bold">156</div>
                  </div>
                </div>
              </div>

              {/* Decorative Shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-400 rounded-lg transform rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-400 rounded-lg transform -rotate-12 opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSolutions;


