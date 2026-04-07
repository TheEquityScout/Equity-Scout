/**
 * Equity Scout - Blog Component
 * Display blog posts about Georgia home value trends
 */

import React, { useState } from 'react';
import { getAllBlogPosts, getBlogPostsByCategory } from '../data/blogPosts';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const allPosts = getAllBlogPosts();
  const displayPosts = selectedCategory
    ? getBlogPostsByCategory(selectedCategory)
    : allPosts;

  const categories = Array.from(new Set(allPosts.map((post) => post.category)));

  const currentPost = selectedPost
    ? allPosts.find((post) => post.id === selectedPost)
    : null;

  if (currentPost) {
    return (
      <section id="blog" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-2"
          >
            ← Back to Blog
          </button>

          <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {currentPost.category}
              </span>
              <h1 className="text-4xl font-bold text-slate-900 mb-3">
                {currentPost.title}
              </h1>
              <div className="flex items-center gap-4 text-slate-600 text-sm">
                <span>By {currentPost.author}</span>
                <span>•</span>
                <span>{new Date(currentPost.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{currentPost.readTime} min read</span>
              </div>
            </div>

            <div className="border-t border-b border-slate-200 py-6 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                {currentPost.excerpt}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              {currentPost.content.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-700 leading-relaxed mb-6 text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Ready to Maximize Your Home's Equity?
                </h3>
                <p className="text-slate-700 mb-4">
                  Use our calculator to explore the ROI potential of your next home improvement project.
                </p>
                <a
                  href="#calculator"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Go to Calculator
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Equity Scout Blog
            </h2>
            <p className="text-xl text-slate-600">
              Insights on Georgia home values, market trends, and smart home improvement investments.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === null
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-emerald-600'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.readTime} min</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="text-emerald-600 font-semibold hover:text-emerald-700">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {displayPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
