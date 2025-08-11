"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight, Star } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 animate-slide-in ${
        isScrolled
          ? "glass-card shadow-strong border-b border-primary-100"
          : "bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-bounce-in">
            <h1
              className={`text-xl font-bold transition-all duration-500 hover-scale ${
                isScrolled ? "text-gradient-primary" : "text-white"
              }`}
            >
              SoftwareHouse
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link relative px-3 py-2 text-sm font-medium transition-all duration-500 group animate-fade-in ${
                  isScrolled
                    ? "text-text-secondary hover:text-primary-600"
                    : "text-white hover:text-primary-200"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full"></span>
                <span
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? "bg-primary-50 opacity-0 group-hover:opacity-100"
                      : "bg-white/10 opacity-0 group-hover:opacity-100"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div
            className="hidden md:block animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              className={`btn-modern px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-500 hover-lift shadow-glow-hover ${
                isScrolled
                  ? "btn-primary"
                  : "bg-white text-primary-700 hover:bg-primary-50 shadow-soft"
              }`}
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 hover-scale ${
                isScrolled
                  ? "text-text-secondary hover:bg-background-secondary"
                  : "text-white hover:bg-white/10"
              }`}
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
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-3 space-y-1 border-t border-white/20">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 animate-slide-up ${
                  isScrolled
                    ? "text-text-secondary hover:bg-background-secondary"
                    : "text-white hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-fast"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary-300/30 rotate-45 animate-rotate-fast"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-bounce-subtle"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary-400 rounded-full animate-float"></div>
        <div
          className="absolute top-40 left-32 w-3 h-3 bg-white/50 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 right-32 w-2 h-2 bg-primary-300 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center px-4 py-2 glass border border-white/20 rounded-full mb-6 animate-bounce-in shadow-glow">
          <span className="w-2 h-2 bg-primary-300 rounded-full mr-2 animate-pulse"></span>
          <span className="text-primary-100 text-sm font-medium">
            AI-Powered Solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-scale-in">
          Your Trusted{" "}
          <span className="text-gradient bg-gradient-to-r from-primary-300 to-white animate-shimmer bg-clip-text text-transparent">
            AI Development
          </span>{" "}
          Company
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in text-balance"
          style={{ animationDelay: "0.3s" }}
        >
          We build meaningful{" "}
          <span className="text-white font-semibold">
            AI-powered software solutions
          </span>{" "}
          to shape the future of your business
        </p>

        {/* Enhanced CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button className="btn-modern bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-xl font-semibold shadow-purple-glow hover-lift hover-glow">
            <span>Get Started Today</span>
          </button>
          <button className="btn-modern glass border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
            <span>Learn More</span>
          </button>
        </div>

        {/* Enhanced Stats */}
        <div
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="text-center group hover-scale">
            <div className="text-2xl font-bold text-primary-300 mb-1 animate-glow">
              10+
            </div>
            <div className="text-primary-200 text-xs">Years Experience</div>
          </div>
          <div className="text-center group hover-scale">
            <div
              className="text-2xl font-bold text-primary-300 mb-1 animate-glow"
              style={{ animationDelay: "0.5s" }}
            >
              200+
            </div>
            <div className="text-primary-200 text-xs">Happy Clients</div>
          </div>
          <div className="text-center group hover-scale">
            <div
              className="text-2xl font-bold text-primary-300 mb-1 animate-glow"
              style={{ animationDelay: "1s" }}
            >
              170+
            </div>
            <div className="text-primary-200 text-xs">Projects Done</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover-scale cursor-pointer">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100/50 rounded-full blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary-100/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full shadow-glow animate-bounce-in">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              <span className="text-white text-sm font-medium">About Us</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight animate-fade-in">
              Drive{" "}
              <span className="text-gradient-primary animate-shimmer">
                Unstoppable
              </span>{" "}
              Business Success
            </h2>

            <div
              className="space-y-4 text-text-secondary leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="hover:text-text-primary transition-colors duration-300">
                In today's rapidly evolving digital landscape,{" "}
                <span className="text-text-primary font-semibold">
                  artificial intelligence
                </span>{" "}
                has become the cornerstone of business innovation.
              </p>
              <p className="hover:text-text-primary transition-colors duration-300">
                We combine{" "}
                <span className="text-text-primary font-semibold">
                  cutting-edge AI technologies
                </span>{" "}
                with deep industry expertise to deliver solutions that
                anticipate future challenges.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <button className="btn-primary hover-lift shadow-glow-hover">
                Get Started
              </button>
              <button className="btn-secondary hover-lift">Learn More</button>
            </div>

            {/* Enhanced Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-6 animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-center group hover-scale transition-all duration-500">
                <div className="text-2xl font-bold text-gradient-primary mb-1 group-hover:animate-glow">
                  40%
                </div>
                <div className="text-xs text-text-tertiary font-medium group-hover:text-text-primary transition-colors duration-300">
                  Improved Efficiency
                </div>
              </div>
              <div className="text-center group hover-scale transition-all duration-500">
                <div className="text-2xl font-bold text-gradient-primary mb-1 group-hover:animate-glow">
                  60%
                </div>
                <div className="text-xs text-text-tertiary font-medium group-hover:text-text-primary transition-colors duration-300">
                  Revenue Growth
                </div>
              </div>
              <div className="text-center group hover-scale transition-all duration-500">
                <div className="text-2xl font-bold text-gradient-primary mb-1 group-hover:animate-glow">
                  10x
                </div>
                <div className="text-xs text-text-tertiary font-medium group-hover:text-text-primary transition-colors duration-300">
                  Faster Processing
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Content */}
          <div className="relative animate-slide-right">
            <div className="card-modern bg-white p-8 rounded-2xl shadow-strong border border-border-light relative overflow-hidden hover-lift group">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-primary-100/30 rounded-2xl group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary-600/10 to-primary-700/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10 text-center">
                {/* Enhanced AI Icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-purple-glow group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                    🤖
                  </span>
                </div>

                {/* Enhanced Data Visualization */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 group/item">
                    <div className="w-12 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full group-hover/item:scale-x-110 transition-transform duration-300 animate-shimmer"></div>
                    <span className="text-xs text-text-tertiary font-medium group-hover/item:text-text-primary transition-colors duration-300">
                      AI Processing
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group/item">
                    <div
                      className="w-16 h-1.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full group-hover/item:scale-x-110 transition-transform duration-300 animate-shimmer"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <span className="text-xs text-text-tertiary font-medium group-hover/item:text-text-primary transition-colors duration-300">
                      Machine Learning
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group/item">
                    <div
                      className="w-10 h-1.5 bg-gradient-to-r from-primary-700 to-primary-800 rounded-full group-hover/item:scale-x-110 transition-transform duration-300 animate-shimmer"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <span className="text-xs text-text-tertiary font-medium group-hover/item:text-text-primary transition-colors duration-300">
                      Data Analytics
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 group/item">
                    <div
                      className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full group-hover/item:scale-x-110 transition-transform duration-300 animate-shimmer"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                    <span className="text-xs text-text-tertiary font-medium group-hover/item:text-text-primary transition-colors duration-300">
                      Predictive Models
                    </span>
                  </div>
                </div>

                <p className="text-text-tertiary text-sm leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  Transform your business with intelligent AI solutions
                </p>
              </div>

              {/* Decorative Shapes */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-20 animate-bounce group-hover:opacity-40 transition-opacity duration-500"></div>
              <div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full opacity-20 animate-bounce group-hover:opacity-40 transition-opacity duration-500"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
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
    },
  };

  const currentService =
    serviceDetails[selectedService] || serviceDetails["AI Development"];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary-100/20 rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-primary-300/40 rounded-full animate-rotate-slow"></div>
        <div className="absolute top-40 left-32 w-12 h-12 border-2 border-primary-400/40 rotate-45 animate-rotate-fast"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full mb-6 shadow-glow animate-bounce-in">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 animate-scale-in">
            Services{" "}
            <span className="text-gradient-primary animate-shimmer">
              We Offer
            </span>
          </h2>

          <p
            className="text-text-secondary max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Enhanced Service Navigation */}
          <div className="lg:col-span-1 animate-slide-left">
            <div className="card-modern bg-white p-6 rounded-2xl shadow-strong border border-border-light sticky top-20 animate-float-slow">
              <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-3 animate-pulse"></span>
                Our Services
              </h3>

              <div className="space-y-2">
                {services.map((service, index) => (
                  <button
                    key={service.name}
                    onClick={() => setSelectedService(service.name)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-500 group animate-fade-in hover-lift ${
                      selectedService === service.name
                        ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-glow scale-105"
                        : "text-text-tertiary hover:bg-primary-50 hover:text-primary-700 hover-scale"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-base group-hover:scale-125 transition-transform duration-300">
                        {service.icon}
                      </span>
                      <span className="text-xs">{service.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Service Details */}
          <div className="lg:col-span-3 animate-slide-right">
            <div className="card-modern bg-white p-8 rounded-2xl shadow-strong border border-border-light hover-lift">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-6 animate-fade-in">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-2xl shadow-purple-glow hover-glow hover-scale transition-all duration-500 animate-float">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {selectedService}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full animate-shimmer"></div>
                  </div>
                </div>

                <p
                  className="text-text-secondary leading-relaxed animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {currentService.description}
                </p>
              </div>

              {/* Enhanced Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center animate-fade-in">
                  <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-3 animate-pulse"></span>
                  Key Benefits
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentService.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 rounded-xl bg-primary-50 border border-primary-100 hover:shadow-medium hover-lift transition-all duration-500 group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex justify-end animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <button className="btn-primary hover-lift shadow-glow-hover animate-bounce-in">
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

// Testimonials Section
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "HealthTech Solutions",
      content:
        "SoftwareHouse transformed our healthcare operations with their AI-powered system. The results exceeded our expectations.",
      rating: 5,
      image: "👩‍⚕️",
    },
    {
      name: "Michael Chen",
      title: "CEO",
      company: "InnovateCorp",
      content:
        "Working with SoftwareHouse was a game-changer for our business. Their AI solutions helped us automate complex processes.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Research Director",
      company: "BioTech Research",
      content:
        "The AI algorithms developed by SoftwareHouse have revolutionized our research capabilities and data processing speed.",
      rating: 5,
      image: "👩‍🔬",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-purple-100 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Testimonials Display */}
          <div className="flex justify-center">
            <div className="max-w-3xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    index === currentIndex ? "block" : "hidden"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-white text-lg leading-relaxed mb-6 text-center">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-lg">{testimonial.image}</span>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-purple-200 text-xs">
                          {testimonial.title} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-purple-400 w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Why Choose Us Section
const WhyChooseUs = () => {
  const metrics = [
    { number: "10+", label: "Years Experience", icon: "⏰" },
    { number: "170+", label: "Happy Clients", icon: "😊" },
    { number: "200+", label: "Projects Done", icon: "🚀" },
    { number: "04", label: "Global Offices", icon: "🌍" },
  ];

  const clientLogos = [
    { name: "Maersk", logo: "M" },
    { name: "Google", logo: "G" },
    { name: "KIA", logo: "KIA" },
    { name: "INNOVA", logo: "INNOVA" },
    { name: "Xfinity", logo: "X" },
    { name: "LIQUID", logo: "LIQUID" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-primary-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary-100/20 rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-primary-300/50 rounded-full animate-rotate-slow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-primary-400/50 rotate-45 animate-rotate-fast"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-primary-300/50 rounded-full animate-rotate-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full mb-6 shadow-glow animate-bounce-in">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-medium">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 animate-scale-in">
            Why Choose{" "}
            <span className="text-gradient-primary animate-shimmer">
              SoftwareHouse
            </span>
          </h2>

          <p
            className="text-text-secondary max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Your trusted partner for innovative software solutions
          </p>
        </div>

        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group hover-lift transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-purple-glow group-hover:shadow-glow group-hover:scale-110 transition-all duration-500 animate-float">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-500">
                    {metric.icon}
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-bounce">
                  {index + 1}
                </div>
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-1 group-hover:animate-glow">
                {metric.number}
              </div>
              <p className="text-text-secondary text-sm font-medium group-hover:text-primary-600 transition-colors duration-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Client Logos Section */}
        <div className="card-modern bg-white rounded-2xl p-8 shadow-strong border border-border-light relative overflow-hidden animate-slide-up">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-primary-100/30"></div>

          <div className="relative z-10 text-center mb-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Trusted by{" "}
              <span className="text-gradient-primary animate-shimmer">
                Industry Leaders
              </span>
            </h3>
            <p className="text-text-secondary text-sm">
              We've helped companies of all sizes achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 group cursor-pointer hover-lift transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-glow group-hover:rotate-12 transition-all duration-500 border-2 border-white/20 animate-float">
                    <span className="text-white font-bold text-sm group-hover:scale-125 transition-transform duration-300">
                      {client.logo}
                    </span>
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                </div>
                <span className="text-text-tertiary text-xs text-center font-medium group-hover:text-primary-600 transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Blog Section
const BlogSection = () => {
  const featuredPost = {
    title: "How to Develop an AI Voice - An Ultimate Guide",
    date: "Jan 1, 2023",
    summary:
      "Discover the comprehensive guide to developing AI voice systems, from natural language processing to voice synthesis.",
    image: "🧠",
    readTime: "8 min",
  };

  const recentPosts = [
    {
      title: "The Future of AI in Healthcare",
      date: "Dec 15, 2023",
      summary: "Explore emerging trends in AI healthcare applications.",
      image: "🏥",
      readTime: "6 min",
    },
    {
      title: "Machine Learning vs Deep Learning",
      date: "Dec 10, 2023",
      summary: "Understand the fundamental differences between ML and DL.",
      image: "🤖",
      readTime: "5 min",
    },
    {
      title: "Building Scalable AI Infrastructure",
      date: "Dec 5, 2023",
      summary: "Essential best practices for scalable AI infrastructure.",
      image: "⚡",
      readTime: "7 min",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-50 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100/50 rounded-full blur-3xl animate-float-fast"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full mb-6 shadow-glow animate-bounce-in">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <span className="text-white text-sm font-medium">Our Blog</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 animate-scale-in">
            Latest{" "}
            <span className="text-gradient-primary animate-shimmer">
              Insights
            </span>
          </h2>
          <p
            className="text-text-secondary max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Stay updated with the latest insights and trends in AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enhanced Featured Blog Post */}
          <div className="lg:col-span-2 animate-slide-left">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200 hover-lift transition-all duration-500 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {featuredPost.image}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2 animate-fade-in">
                    <span className="text-xs text-text-tertiary">
                      {featuredPost.date}
                    </span>
                    <span className="text-xs text-primary-600 font-medium badge-primary">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight group-hover:text-primary-700 transition-colors duration-300 animate-slide-up">
                    {featuredPost.title}
                  </h3>

                  <p
                    className="text-text-secondary text-sm leading-relaxed mb-4 group-hover:text-text-primary transition-colors duration-300 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {featuredPost.summary}
                  </p>

                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-all duration-300 hover:translate-x-1 transform inline-block animate-slide-right">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Recent Blog Posts */}
          <div className="space-y-4 animate-slide-right">
            <h3 className="text-lg font-semibold text-text-primary mb-4 animate-fade-in">
              Recent Posts
            </h3>

            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="card-modern bg-white rounded-xl p-4 shadow-medium border border-border-light hover-lift group transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-glow group-hover:scale-110 transition-all duration-300 animate-float">
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                        {post.image}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs text-text-tertiary">
                        {post.date}
                      </span>
                      <span className="text-xs text-primary-600 font-medium badge-primary">
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-text-primary mb-2 leading-tight group-hover:text-primary-700 transition-colors duration-300">
                      {post.title}
                    </h4>

                    <p className="text-text-tertiary text-xs leading-relaxed mb-2 group-hover:text-text-secondary transition-colors duration-300">
                      {post.summary}
                    </p>

                    <button className="text-primary-600 hover:text-primary-700 text-xs font-medium transition-all duration-300 hover:translate-x-1 transform inline-block">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Newsletter CTA */}
        <div className="text-center mt-12 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 max-w-3xl mx-auto border border-primary-200 hover-lift transition-all duration-500 group">
            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-700 transition-colors duration-300">
              Stay Informed with Our Latest Insights
            </h3>
            <p className="text-text-secondary text-sm mb-4 max-w-lg mx-auto group-hover:text-text-primary transition-colors duration-300">
              Subscribe to our newsletter and get the latest AI insights
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1 px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm hover-lift transition-all duration-300"
              />
              <button className="btn-primary px-6 py-2 rounded-lg font-semibold text-sm whitespace-nowrap hover-lift shadow-glow-hover">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "AI/ML Development",
      "Chatbot Integration",
      "Machine Learning",
      "Computer Vision",
      "Big Data",
      "UI/UX",
    ],
    company: [
      "About Us",
      "Contact Us",
      "Careers",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float-fast"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gradient bg-gradient-to-r from-white to-primary-200 bg-clip-text">
                SoftwareHouse
              </h3>
              <p className="text-primary-200 text-sm">
                Building the future with AI technology.
              </p>
            </div>

            {/* Enhanced Social Media Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover-scale animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Services Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-200 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Company Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-200 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Newsletter Signup */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-200 text-sm mb-4">
              Get the latest AI insights and trends.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 glass border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm backdrop-blur-sm hover-lift transition-all duration-300"
              />
              <button className="btn-modern w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-sm hover-lift shadow-glow-hover">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 animate-slide-up">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-primary-200 text-sm">
              © {currentYear} SoftwareHouse. All Rights Reserved.
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 transform inline-block"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 transform inline-block"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 transform inline-block"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white scrollbar-modern">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
