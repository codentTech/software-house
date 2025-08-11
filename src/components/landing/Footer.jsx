"use client";

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
    "get in touch": [
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
    <footer className="bg-gradient-to-r from-secondary-900 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">xeven</h3>
              <p className="text-primary-200 text-sm">
                Study technology for the future.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              {footerLinks["get in touch"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Join Our Newsletter</h4>
            <p className="text-primary-200 text-sm mb-4">
              Stay updated with the latest AI insights and industry trends.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
              />
              <button className="w-full btn-primary">Subscribe Now</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-200 text-sm">
              © {currentYear} Xeven. All Rights Reserved.
            </div>

            {/* Bottom Links and Icons */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy
              </a>

              {/* Language Selector */}
              <div className="flex items-center space-x-2 text-primary-200">
                <span className="text-sm">EN</span>
                <span className="text-xs">▼</span>
              </div>

              {/* Support Icon */}
              <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                <span className="text-sm">💬</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



