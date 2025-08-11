"use client";

const BlogSection = () => {
  const featuredPost = {
    title: "How to Develop an AI Voice - An Ultimate Guide",
    date: "January 1, 2023",
    summary:
      "Discover the comprehensive guide to developing AI voice systems, from natural language processing to voice synthesis and integration. Learn the latest techniques and best practices in AI voice development.",
    image: "🧠",
    readTime: "8 min read",
  };

  const recentPosts = [
    {
      title: "The Future of AI in Healthcare: Trends to Watch",
      date: "December 15, 2023",
      summary:
        "Explore the emerging trends in AI healthcare applications and how they're revolutionizing patient care and medical research.",
      image: "🏥",
      readTime: "6 min read",
    },
    {
      title: "Machine Learning vs Deep Learning: Key Differences",
      date: "December 10, 2023",
      summary:
        "Understand the fundamental differences between machine learning and deep learning, and when to use each approach.",
      image: "🤖",
      readTime: "5 min read",
    },
    {
      title: "Building Scalable AI Infrastructure: Best Practices",
      date: "December 5, 2023",
      summary:
        "Learn the essential best practices for building scalable AI infrastructure that can grow with your business needs.",
      image: "⚡",
      readTime: "7 min read",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-0.5 bg-primary-500"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Blogs & Articles
            </h2>
            <div className="w-8 h-0.5 bg-primary-500"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and developments in
            AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-6">
                {/* Featured Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">{featuredPost.image}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-sm text-gray-500">
                      {featuredPost.date}
                    </span>
                    <span className="text-sm text-primary-600 font-medium">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {featuredPost.summary}
                  </p>

                  <button className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Blog Posts */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recent Posts
            </h3>

            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Post Image */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{post.image}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-xs text-primary-600 font-medium">
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                      {post.summary}
                    </p>

                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Informed with Our Latest Insights
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest AI insights,
              industry trends, and expert analysis delivered directly to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;


