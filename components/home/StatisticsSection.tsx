"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BookOpen, FlaskConical, GraduationCap } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

interface StatisticsSectionProps {
  className?: string;
}

// Custom hook for counting animation
const useCountUp = (
  end: number,
  duration: number = 2000,
  isInView: boolean
): number => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTimeRef.current) / duration,
        1
      );
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      // reset start time so re-entering view will re-run animation
      startTimeRef.current = null;
    };
  }, [end, duration, isInView]);

  return count;
};

// Individual Stat Card Component
const StatCard: React.FC<StatItemProps> = ({
  icon,
  value,
  suffix = "",
  label,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 
        shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
        border border-gray-100"
    >
      {/* Icon */}
      <div className="relative z-10 mb-4">
        <div
          className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center 
          shadow-lg group-hover:scale-110 transition-transform duration-300"
        >
          {React.isValidElement(icon) &&
            React.cloneElement(
              icon as React.ReactElement<{ className?: string }>,
              {
                className: "w-7 h-7 text-white",
                // "aria-hidden": true,
              }
            )}
        </div>
      </div>

      {/* Number with Count-Up Animation */}
      <div className="relative z-10 mb-2">
        <span className="text-3xl md:text-4xl font-bold text-gradient-brand block">
          {count}
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-gray-600 text-base md:text-lg font-medium relative z-10">
        {label}
      </p>

      {/* Hover Accent Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-brand rounded-b-2xl 
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      />
    </motion.div>
  );
};

// Main Statistics Section Component
const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  className = "",
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Statistics data - easily customizable
  const statistics = [
    {
      icon: <Users />,
      value: 1500,
      suffix: "+",
      label: "Active Students",
      delay: 0.1,
    },
    {
      icon: <BookOpen />,
      value: 7,
      suffix: "+",
      label: "Active Programs",
      delay: 0.2,
    },
    {
      icon: <FlaskConical />,
      value: 10,
      suffix: "+",
      label: "Diversified Labs",
      delay: 0.3,
    },
    {
      icon: <GraduationCap />,
      value: 30,
      suffix: "+",
      label: "Expert Instructors",
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-12 md:py-16 overflow-hidden ${className}`}
      aria-label="College statistics and achievements"
    >
      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(var(--color-primary)) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(var(--color-primary)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient Accent Circles */}
        <div
          className="absolute top-20 -left-20 w-64 h-64 bg-gradient-brand rounded-full 
          blur-3xl opacity-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-brand rounded-full 
          blur-3xl opacity-10"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Optional: Small Accent Text */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-brand/10 
            rounded-full text-primary text-sm font-medium mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-brand" />
            Our Achievements
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Excellence in Numbers
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Building tomorrow&apos;s leaders through quality education and
            comprehensive development
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statistics.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Optional: Additional Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg mb-6">
            Join our community of learners and achievers
          </p>
          <a
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-brand 
              text-white font-semibold rounded-full hover:bg-gradient-brand-hover 
              transition-all duration-300 transform hover:scale-105 focus-ring-accent shadow-lg"
            aria-label="Apply for admission"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
