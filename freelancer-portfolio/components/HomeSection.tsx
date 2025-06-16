"use client";
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <section id='home'
      className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8 py-16"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-center gap-10 text-center max-w-4xl mx-auto">
        {/* Heading */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          <span className="text-white">Crafting Solutions with</span>{' '}
          <span className="text-amber-400">
            Design & Excellence
          </span>
        </h1>

        {/* Welcome Text */}
        <div className="text-lg sm:text-xl md:text-2xl text-gray-200">
          <TypeAnimation
            sequence={['Welcome to my Portfolio', 1000, '', 500]}
            wrapper="p"
            repeat={Infinity}
            cursor={true}
            speed={50}
          />
        </div>

        {/* Bio */}
        <div className="text-base sm:text-lg text-gray-300 max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg animate-fadeIn">
          <p>
            I’m a passionate graphic designer with a knack for transforming ideas into visually stunning realities. With
            over five years of experience, I specialize in creating captivating brand identities, logos, and digital
            designs that leave a lasting impression. My approach blends creativity with precision, ensuring every project
            aligns with the client’s vision while pushing the boundaries of innovation. I thrive on turning complex
            concepts into clean, impactful visuals that communicate effectively across platforms.
          </p>
          <p className="mt-4">
            Proficient in tools like Adobe Photoshop, Illustrator, and Figma, I craft designs that are both aesthetically
            pleasing and functionally sound. From vibrant social media graphics to sleek UI/UX designs, I focus on
            delivering high-quality work that resonates with audiences. My portfolio showcases a diverse range of projects,
            from startups to established brands, each reflecting my commitment to excellence and attention to detail.
            Collaboration is at the heart of my process—I work closely with clients to bring their stories to life. Let’s
            connect to craft something extraordinary together!
          </p>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#projects"
          className="group flex items-center gap-2 px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
          aria-label="View all projects"
        >
          View All Works
          <FaArrowRight
            size={20}
            color="#F5F5F5"
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;