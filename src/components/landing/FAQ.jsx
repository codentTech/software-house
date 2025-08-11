"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What type of business uses AI solutions?",
      answer:
        "AI solutions are beneficial for businesses across all industries, including healthcare, finance, retail, manufacturing, logistics, and more. Any business looking to automate processes, gain insights from data, improve customer experience, or optimize operations can benefit from AI implementation.",
    },
    {
      question: "Do I have to be tech-savvy to use your product?",
      answer:
        "Not at all! Our AI solutions are designed with user-friendly interfaces and intuitive dashboards. We provide comprehensive training and support to ensure your team can effectively use our products regardless of their technical background.",
    },
    {
      question: "Can AI technology help in decision-making?",
      answer:
        "Absolutely! AI technology excels at processing large amounts of data to identify patterns, trends, and insights that humans might miss. This enables data-driven decision-making, predictive analytics, and strategic planning based on comprehensive analysis.",
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer:
        "Implementation time varies depending on the complexity of the solution and your specific requirements. Simple AI integrations can take 2-4 weeks, while comprehensive enterprise solutions may take 3-6 months. We work closely with you to ensure timely delivery.",
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer:
        "We provide comprehensive post-implementation support including 24/7 technical support, regular maintenance updates, performance monitoring, and ongoing optimization. Our team is always available to help you maximize the value of your AI investment.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, secure data transmission, regular security audits, and compliance with industry standards like GDPR, HIPAA, and SOC 2. Your data security is our top priority.",
    },
    {
      question: "Can AI solutions integrate with existing systems?",
      answer:
        "Yes! Our AI solutions are designed with flexible APIs and integration capabilities. We can seamlessly integrate with your existing ERP, CRM, databases, and other business systems to ensure smooth operation and data flow.",
    },
    {
      question: "What is the return on investment for AI implementation?",
      answer:
        "AI solutions typically deliver ROI within 6-18 months through increased efficiency, cost reduction, improved decision-making, and enhanced customer experience. Most of our clients see 3-5x return on their AI investment within the first two years.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-0.5 bg-primary-500"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="w-8 h-0.5 bg-primary-500"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 animate-slide-in">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to
              help. Contact us for personalized assistance and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Contact Support</button>
              <button className="btn-secondary">Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;



