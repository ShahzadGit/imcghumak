"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface PrincipalMessageProps {
  className?: string;
}

const PrincipalMessage: React.FC<PrincipalMessageProps> = ({
  className = "",
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Principal's message"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src="/building.png"
          alt="College Building"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/60 via-[rgb(var(--color-primary))]/50 to-[rgb(var(--color-primary))]/60" />
        {/* Reduced blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Elements - Gradient Quotes */}
      <div className="absolute top-0 left-0">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="quoteGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgb(30, 58, 138)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(219, 39, 119)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
            fill="url(#quoteGradient1)"
            stroke="rgb(163, 180, 226)"
            strokeWidth="1"
          />
          <path
            d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
            fill="url(#quoteGradient1)"
            stroke="rgb(163, 180, 226)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <defs>
            <linearGradient
              id="quoteGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgb(30, 58, 138)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(219, 39, 119)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
            fill="url(#quoteGradient2)"
            stroke="rgb(163, 180, 226)"
            strokeWidth="1"
          />
          <path
            d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
            fill="url(#quoteGradient2)"
            stroke="rgb(163, 180, 226)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left Column - Message Text (67% width on desktop) */}
            <div className="lg:col-span-2 p-8">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                {/* Main Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3">
                  Message by Principal
                </h2>

                {/* Decorative Line */}
                <div className="w-20 h-1 bg-gradient-brand rounded-full" />
              </motion.div>

              {/* Message Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed"
              >
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                  Dear Students, it is my unwavering belief that sound education
                  lies at the heart of nurturing a dynamic and responsible
                  personality. Moreover, education for women, who make about
                  more than half of the total population of Pakistan, is of
                  ultimate significance. We at this institution strive hard to
                  create a conducive environment wherein to equip our students
                  with the necessary academic and personal skills to achieve
                  their academic goals in life.
                </p>

                <p>
                  It is beyond an iota of doubt that in the multifarious
                  challenges that life makes us confront, a robust and refined
                  personality groomed through quality education alone, could
                  counter the challenges with utmost courage and resilience.
                </p>

                <p>
                  I take pride in the fact that through the collaborative
                  efforts of the faculty and staff, we have been able to achieve
                  much success in the past and would certainly go on to do so in
                  the years ahead. I sincerely wish that studying at this
                  institution will be an academically enriching experience for
                  all.
                </p>

                <p className="font-medium">I welcome you all.</p>

                {/* Principal's Name - Stylish Gradient Background */}
                <div className="mt-6 bg-gradient-brand text-center rounded-xl p-4">
                  <p className="text-xl md:text-2xl font-serif font-bold text-white">
                    Dr. Humaira Jabeen
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Principal's Image (33% width on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1 relative min-h-[400px] lg:min-h-full"
            >
              {/* Gradient Overlay on Image for Visual Interest */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 z-10" />

              {/* Principal's Portrait */}
              <div className="relative w-full h-full">
                <Image
                  src="/Principal.png"
                  alt="Dr. Humaira Jabeen, Principal of IMCG Humak"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={90}
                />
              </div>

              {/* Decorative Accent Corner */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-20 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-brand opacity-20 blur-3xl"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
