import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import PostCard from "../components/PostCard";

const HomePage = () => {
  const signupRef = useRef(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getallposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const scrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 text-black py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
            Welcome to Memoria
          </h1>
          <p className="text-lg mb-6">Your Personal Memory Lane</p>

          <button
            onClick={scrollToSignup}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Memoria?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg shadow-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Capture Your Moments
                </h3>
                <p>
                  Easily upload and organize your photos and memories in one
                  place.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg shadow-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Express Yourself</h3>
                <p>
                  Write and share blog posts about your experiences and stories.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg shadow-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Explore and Connect
                </h3>
                <p>
                  Discover other users, engage with their content, and get
                  inspired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16" ref={signupRef}>
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="mb-6">
            Ready to start capturing your memories? Sign up today and join a
            community of creators and storytellers.
          </p>
          <Link to="/sign-up">
            <button className="bg-purple-500 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-4 py-4">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center">Recent Posts</h1>
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
