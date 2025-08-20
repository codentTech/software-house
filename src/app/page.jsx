"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  Award,
  Zap,
} from "lucide-react";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-purple-700">SoftwareHouse</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-3 space-y-1 border-t border-gray-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div
          className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-300 rounded-full animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-2.5 h-2.5 bg-purple-200 rounded-full animate-pulse"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        ></div>

        {/* Floating Geometric Shapes */}
        <div
          className="absolute top-1/4 left-1/3 w-4 h-4 border border-purple-300 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-6 h-6 border border-purple-200 rotate-45 animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        ></div>

        {/* Gradient Orbs */}
        <div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
              <span className="text-purple-700 text-sm font-medium">
                AI-Powered Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
              Your Trusted{" "}
              <span className="text-purple-600 animate-pulse">
                AI Development
              </span>{" "}
              Company
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              We build meaningful{" "}
              <span className="text-gray-900 font-semibold">
                AI-powered software solutions
              </span>{" "}
              to shape the future of your business
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center hover:-translate-y-1">
                <Play className="mr-2 w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 pt-8 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-purple-600 mb-2 animate-pulse">
                  10+
                </div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-200">
                <div
                  className="text-3xl font-bold text-purple-600 mb-2 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  200+
                </div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-200">
                <div
                  className="text-3xl font-bold text-purple-600 mb-2 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  170+
                </div>
                <div className="text-gray-600 text-sm">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative z-10">
              <img
                src="/assets/images/hero-main.png"
                alt="AI Development"
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI-Powered</div>
                  <div className="text-sm text-gray-600">Smart Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "15s", animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDuration: "18s", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative animate-fade-in">
            <img
              src="/assets/images/hero-img.png"
              alt="About Us"
              className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
            {/* Stats Card */}
            <div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1 animate-pulse">
                  99%
                </div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full">
              <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
              <span className="text-purple-700 text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Drive <span className="text-purple-600">Unstoppable</span>{" "}
              Business Success
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                In today's rapidly evolving digital landscape,{" "}
                <span className="text-gray-900 font-semibold">
                  artificial intelligence
                </span>{" "}
                has become the cornerstone of business innovation.
              </p>
              <p>
                We combine{" "}
                <span className="text-gray-900 font-semibold">
                  cutting-edge AI technologies
                </span>{" "}
                with deep industry expertise to deliver solutions that drive
                real business value.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "Advanced Machine Learning Solutions",
                "Custom AI Development",
                "24/7 Technical Support",
                "Scalable Architecture Design",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-1">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const [selectedService, setSelectedService] = useState("AI Development");

  const services = [
    { name: "AI Development", icon: "🤖", category: "AI & ML" },
    { name: "AI/ML Development", icon: "🧠", category: "AI & ML" },
    { name: "Chatbot Integration", icon: "💬", category: "AI & ML" },
    { name: "Machine Learning", icon: "🔬", category: "AI & ML" },
    { name: "Computer Vision", icon: "👁️", category: "AI & ML" },
    { name: "Big Data Analytics", icon: "📊", category: "Data" },
    { name: "Custom Software", icon: "💻", category: "Development" },
    { name: "UI/UX Design", icon: "🎨", category: "Design" },
  ];

  const serviceDetails = {
    "AI Development": {
      description:
        "Comprehensive AI development services that transform your business operations through intelligent automation and data-driven insights.",
      benefits: [
        "Intelligent Automation",
        "Data-Driven Insights",
        "Enhanced Customer Experience",
        "Personalized Services",
        "Scalable Infrastructure",
        "Real-time Decisions",
      ],
      icon: "🤖",
      features: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots",
      ],
    },
    "AI/ML Development": {
      description:
        "Advanced machine learning solutions that learn from your data to provide predictive insights and automated decision-making capabilities.",
      benefits: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Learning",
        "Scalable Models",
        "Real-time Processing",
        "Continuous Improvement",
      ],
      icon: "🧠",
      features: [
        "Neural Networks",
        "Deep Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Model Optimization",
      ],
    },
    "Chatbot Integration": {
      description:
        "Intelligent chatbot solutions that provide 24/7 customer support and enhance user engagement through natural language processing.",
      benefits: [
        "24/7 Availability",
        "Instant Responses",
        "Multi-language Support",
        "Seamless Integration",
        "Analytics & Insights",
        "Cost Reduction",
      ],
      icon: "💬",
      features: [
        "NLP Processing",
        "Intent Recognition",
        "Multi-platform Support",
        "Custom Responses",
        "Analytics Dashboard",
        "API Integration",
      ],
    },
    "Machine Learning": {
      description:
        "Custom machine learning models that analyze complex data patterns to deliver actionable business intelligence and automation.",
      benefits: [
        "Data Pattern Recognition",
        "Automated Decision Making",
        "Predictive Modeling",
        "Process Optimization",
        "Risk Assessment",
        "Performance Monitoring",
      ],
      icon: "🔬",
      features: [
        "Classification Models",
        "Regression Analysis",
        "Clustering Algorithms",
        "Feature Engineering",
        "Model Training",
        "Performance Metrics",
      ],
    },
    "Computer Vision": {
      description:
        "Advanced computer vision solutions that enable machines to interpret and understand visual information for automation and analysis.",
      benefits: [
        "Image Recognition",
        "Object Detection",
        "Quality Control",
        "Security Monitoring",
        "Process Automation",
        "Visual Analytics",
      ],
      icon: "👁️",
      features: [
        "Image Processing",
        "Object Detection",
        "Facial Recognition",
        "Video Analysis",
        "OCR Technology",
        "3D Vision",
      ],
    },
    "Big Data Analytics": {
      description:
        "Comprehensive big data solutions that process and analyze large datasets to uncover valuable business insights and trends.",
      benefits: [
        "Data Processing",
        "Real-time Analytics",
        "Business Intelligence",
        "Trend Analysis",
        "Performance Metrics",
        "Strategic Insights",
      ],
      icon: "📊",
      features: [
        "Data Processing",
        "Real-time Analytics",
        "Business Intelligence",
        "Trend Analysis",
        "Performance Metrics",
        "Strategic Insights",
      ],
    },
    "Custom Software": {
      description:
        "Tailored software solutions designed specifically for your business needs, ensuring optimal performance and user experience.",
      benefits: [
        "Custom Functionality",
        "Scalable Architecture",
        "User Experience",
        "Integration Capabilities",
        "Maintenance Support",
        "Future-Proof Design",
      ],
      icon: "💻",
      features: [
        "Web Applications",
        "Desktop Software",
        "API Development",
        "Database Design",
        "Cloud Solutions",
        "Mobile Apps",
      ],
    },
    "UI/UX Design": {
      description:
        "User-centered design solutions that create intuitive, engaging, and accessible user experiences across all platforms.",
      benefits: [
        "User Experience",
        "Accessibility",
        "Brand Consistency",
        "User Engagement",
        "Conversion Optimization",
        "Cross-platform Design",
      ],
      icon: "🎨",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
      ],
    },
  };

  const currentService =
    serviceDetails[selectedService] || serviceDetails["AI Development"];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "25s", animationDelay: "5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDuration: "18s", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-6 shadow-glow animate-bounce-in">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-scale-in">
            Services{" "}
            <span className="text-gradient-primary animate-shimmer">
              We Offer
            </span>
          </h2>

          <p
            className="text-gray-600 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 items-center">
          {/* Enhanced Service Navigation */}
          <div className="lg:col-span-1 animate-slide-left">
            <div className="bg-white p-4 rounded-xl shadow-strong border border-gray-100 sticky top-20 animate-fade-in">
              <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-2 animate-pulse"></span>
                Our Services
              </h3>

              <div className="space-y-1">
                {services.map((service, index) => (
                  <button
                    key={service.name}
                    onClick={() => setSelectedService(service.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-500 group animate-fade-in hover-lift ${
                      selectedService === service.name
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-glow scale-105"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-700 hover-scale"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Service Details */}
          <div className="lg:col-span-3 animate-slide-right">
            <div className="bg-white p-6 rounded-xl shadow-strong border border-gray-100 hover-lift">
              <div className="mb-6">
                <div className="mb-4 animate-fade-in">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {selectedService}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full animate-shimmer"></div>
                </div>

                <p
                  className="text-gray-600 leading-relaxed animate-slide-up text-sm"
                  style={{ animationDelay: "0.2s" }}
                >
                  {currentService.description}
                </p>
              </div>

              {/* Enhanced Benefits */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center animate-fade-in">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-2 animate-pulse"></span>
                  Key Benefits
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentService.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-purple-50 border border-purple-100 hover:shadow-medium hover-lift transition-all duration-500 group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-xs font-medium group-hover:text-purple-700 transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center animate-fade-in">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-2 animate-pulse"></span>
                  Core Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-medium hover-lift transition-all duration-500 group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-3 h-3 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 text-xs font-medium group-hover:text-purple-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex justify-end animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 shadow-glow hover:shadow-purple-glow hover-lift text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      category: "AI Development",
      image: "/assets/images/post1.png",
      description:
        "Advanced analytics platform with machine learning capabilities",
    },
    {
      title: "E-commerce Mobile App",
      category: "Mobile Development",
      image: "/assets/images/postsecond.png",
      description: "Cross-platform mobile application for online retail",
    },
    {
      title: "Cloud Management Dashboard",
      category: "Web Development",
      image: "/assets/images/repo-preview.png",
      description: "Comprehensive cloud infrastructure management solution",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDuration: "22s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-20 w-72 h-72 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "28s", animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-purple-700 text-sm font-medium">
              Our Work
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform through innovative
            technology solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center space-x-2 transition-colors duration-200 hover:translate-x-1">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content:
        "SoftwareHouse delivered an exceptional AI solution that transformed our business operations. Their expertise and professionalism exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content:
        "The team at SoftwareHouse is incredibly skilled and responsive. They built a robust platform that scales perfectly with our growing needs.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, DataFlow",
      content:
        "Working with SoftwareHouse was a game-changer for our company. Their AI solutions gave us a competitive edge in the market.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "35s", animationDelay: "7s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-purple-700 text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-purple-600">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-200"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section
const BlogSection = () => {
  const blogPosts = [
    {
      title: "How to Develop an AI Voice - An Ultimate Guide",
      date: "Jan 1, 2024",
      summary:
        "Discover the comprehensive guide to developing AI voice systems, from natural language processing to voice synthesis.",
      image: "🧠",
      readTime: "8 min",
      category: "AI Development",
    },
    {
      title: "The Future of AI in Healthcare",
      date: "Dec 15, 2023",
      summary:
        "Explore emerging trends in AI healthcare applications and how they're transforming patient care.",
      image: "🏥",
      readTime: "6 min",
      category: "Healthcare AI",
    },
    {
      title: "Machine Learning vs Deep Learning",
      date: "Dec 10, 2023",
      summary:
        "Understand the fundamental differences between machine learning and deep learning approaches.",
      image: "🤖",
      readTime: "5 min",
      category: "Machine Learning",
    },
    {
      title: "Building Scalable AI Infrastructure",
      date: "Dec 5, 2023",
      summary:
        "Essential best practices for building scalable and robust AI infrastructure for enterprise applications.",
      image: "⚡",
      readTime: "7 min",
      category: "AI Infrastructure",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDuration: "22s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-20 w-72 h-72 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "28s", animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-purple-700 text-sm font-medium">
              Our Blog
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-purple-600">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in AI technology
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-medium border border-gray-100 overflow-hidden hover-lift group transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs text-gray-600">{post.date}</span>
                    <span className="text-xs text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-700 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {post.summary}
                </p>

                <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-all duration-300 hover:translate-x-1 transform inline-block">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-8 animate-fade-in">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What AI technologies do you specialize in?",
      answer:
        "We specialize in machine learning, deep learning, natural language processing, computer vision, and predictive analytics. Our team has extensive experience with TensorFlow, PyTorch, and custom AI solutions.",
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer:
        "Development time varies based on complexity. Simple AI integrations take 2-4 weeks, while complex custom solutions can take 3-6 months. We provide detailed timelines during project planning.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and technical support. We ensure your AI solutions remain cutting-edge and efficient.",
    },
    {
      question: "Can you integrate AI with existing systems?",
      answer:
        "Absolutely! We specialize in seamless AI integration with existing infrastructure. We use APIs, microservices, and modern integration patterns to ensure compatibility and minimal disruption.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve healthcare, finance, retail, manufacturing, logistics, and many other industries. Our AI solutions are tailored to specific industry requirements and compliance standards.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We implement enterprise-grade security measures including encryption, secure APIs, compliance with GDPR/CCPA, and regular security audits. Your data security is our top priority.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-15 animate-pulse"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDuration: "35s", animationDelay: "7s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-purple-700 text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our AI development services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-medium border border-gray-100 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${
                    openFAQ === index ? "rotate-45" : ""
                  }`}
                >
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openFAQ === index
                    ? "max-h-96 opacity-100 pb-4"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-gray-800 to-purple-900 text-white py-10 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full animate-pulse"
          style={{ animationDuration: "40s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full animate-pulse"
          style={{ animationDuration: "50s", animationDelay: "10s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600/5 rounded-full animate-pulse"
          style={{ animationDuration: "60s", animationDelay: "5s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold text-white mb-3">SoftwareHouse</h3>
            <p className="text-gray-300 mb-4 max-w-md text-sm">
              Your trusted partner in AI development and digital transformation.
              We build solutions that drive real business value.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center hover:from-purple-500 hover:to-purple-600 transition-all duration-200 cursor-pointer hover:scale-110">
                <span className="text-white font-semibold text-sm">L</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center hover:from-purple-500 hover:to-purple-600 transition-all duration-200 cursor-pointer hover:scale-110">
                <span className="text-white font-semibold text-sm">T</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center hover:from-purple-500 hover:to-purple-600 transition-all duration-200 cursor-pointer hover:scale-110">
                <span className="text-white font-semibold text-sm">F</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {["About", "Services", "Portfolio", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">
              Services
            </h4>
            <ul className="space-y-1">
              {[
                "AI Development",
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3">
              Newsletter
            </h4>
            <p className="text-gray-300 text-xs mb-3">
              Stay updated with our latest insights and AI trends
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-200 text-sm hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SoftwareHouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <BlogSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
