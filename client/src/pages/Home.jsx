import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const HomePage = () => {


  const signupRef = useRef(null); 
  const scrollToSignup = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 text-black py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Memoria</h1>
          <p className="text-lg mb-6">Your Personal Memory Lane</p>
          
            <button onClick={scrollToSignup} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
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
                <h3 className="text-xl font-semibold mb-2">Capture Your Moments</h3>
                <p>Easily upload and organize your photos and memories in one place.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg shadow-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Express Yourself</h3>
                <p>Write and share blog posts about your experiences and stories.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg shadow-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Explore and Connect</h3>
                <p>Discover and follow other users, engage with their content, and get inspired.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16" ref={signupRef}>
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          <p className="mb-6">Ready to start capturing your memories? Sign up today and join a community of creators and storytellers.</p>
          <Link to="/sign-up">
            <button className="bg-purple-500 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
