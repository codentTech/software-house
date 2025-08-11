"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      </div>

      {/* Enhanced Floating Elements with Better Animations */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 animate-float-slow blur-sm"></div>
      <div
        className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 animate-float-fast blur-sm"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-25 animate-float-slow blur-sm"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Additional Floating Elements */}
      <div
        className="absolute top-1/4 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-float-fast"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-blue-300/20 rounded-full animate-float-slow"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Geometric Shapes */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-purple-400/20 rounded-full animate-rotate-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-400/20 rotate-45 animate-rotate-fast"></div>

      {/* Main Content with Enhanced Animations */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-bounce-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-purple-100 text-sm font-medium">
              AI-Powered Solutions
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Your Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-100 animate-glow">
              AI Development
            </span>{" "}
            Company
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We build meaningful{" "}
            <span className="text-white font-semibold">
              AI-powered software solutions
            </span>{" "}
            to shape the future of your business
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-modern bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-4 rounded-2xl font-semibold shadow-glow hover:shadow-glow-hover">
              <span>Get Started Today</span>
            </button>
            <button className="btn-modern bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg px-10 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
              <span>Learn More</span>
            </button>
          </div>

          {/* Enhanced Stats Preview */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-2xl font-bold text-purple-300 mb-1">10+</div>
              <div className="text-purple-200 text-sm">Years Experience</div>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-2xl font-bold text-purple-300 mb-1">
                200+
              </div>
              <div className="text-purple-200 text-sm">Happy Clients</div>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-2xl font-bold text-purple-300 mb-1">
                170+
              </div>
              <div className="text-purple-200 text-sm">Projects Done</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-purple-100"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-purple-200"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-purple-300"
          ></path>
        </svg>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
