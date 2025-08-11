"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "HealthTech Solutions",
      content:
        "SoftwareHouse transformed our healthcare operations with their AI-powered system. The results exceeded our expectations, improving patient care and operational efficiency by 40%.",
      rating: 5,
      image: "👩‍⚕️",
    },
    {
      name: "Michael Chen",
      title: "CEO",
      company: "InnovateCorp",
      content:
        "Working with SoftwareHouse was a game-changer for our business. Their AI solutions helped us automate complex processes and gain valuable insights that drove 60% revenue growth.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Research Director",
      company: "BioTech Research",
      content:
        "The AI algorithms developed by SoftwareHouse have revolutionized our research capabilities. We can now process data 10x faster and discover patterns we never could before.",
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
    <section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-0.5 bg-primary-400"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Don't just take our words for it – Take theirs!
            </h2>
            <div className="w-8 h-0.5 bg-primary-400"></div>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with
            SoftwareHouse
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials Display */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    index === currentIndex
                      ? "scale-100 opacity-100"
                      : index === (currentIndex + 1) % testimonials.length ||
                          index ===
                            (currentIndex - 1 + testimonials.length) %
                              testimonials.length
                        ? "scale-95 opacity-70"
                        : "scale-90 opacity-40"
                  }`}
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                    {/* Rating */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-white text-lg leading-relaxed mb-6 text-center italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                        <span className="text-xl">{testimonial.image}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-primary-200 text-sm">
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
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary-400 w-8"
                    : "bg-white bg-opacity-30 hover:bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business and
              help you achieve remarkable results like our other clients.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
