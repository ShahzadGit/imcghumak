"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Pen, Brush, Computer } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Hero section"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-brand">
        {/* Optional: Add overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <BookOpen className="w-16 h-16 text-white" aria-hidden="true" />
      </div>
      <div className="absolute top-20 right-10 opacity-10">
        <Pen className="w-16 h-16 text-white" aria-hidden="true" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-10">
        <Brush className="w-20 h-20 text-white" aria-hidden="true" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-10">
        <Computer className="w-20 h-20 text-white" aria-hidden="true" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subheading - "Welcome to" */}
          <div
            className="mb-4 md:mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-base md:text-lg font-medium italic border border-white/20">
              Welcome to
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight"
          >
            Islamabad Model College
            <br className="hidden sm:block" />
            <span className="block mt-2">for Girls, Humak</span>
          </motion.h1>

          {/* Supporting Subheading */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed font-light animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Where intellect meets innovation and minds are ignited to build a
            brighter tomorrow
          </p>

          {/* CTA Buttons Container */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            {/* Primary CTA Button */}
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary 
                font-semibold rounded-full hover:bg-white/90 hover:shadow-2xl
                transition-all duration-300 transform hover:scale-105 focus-ring-accent
                text-base md:text-lg shadow-xl"
              aria-label="Explore our academic programs"
            >
              Explore Programs
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
