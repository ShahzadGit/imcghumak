"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Eye,
  Target,
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Page Title */}
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-brand">
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `
                linear-gradient(to right, white 2px, transparent 2px),
                linear-gradient(to bottom, white 2px, transparent 2px)
              `,
              backgroundSize: "60px 60px",
            }}
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              About IMCG, Humak
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Empowering young women through quality education and academic
              excellence since 2006
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Our Vision */}
      <VisionSection />

      {/* Section 2: Mission Statement */}
      <MissionSection />

      {/* Section 3: College Introduction */}
      <IntroductionSection />
    </main>
  );
};

// Vision Section Component
const VisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-white"
    >
      {/* Diagonal Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgb(var(--color-primary)) 1px, transparent 1px),
              linear-gradient(-45deg, rgb(var(--color-primary)) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Decorative Icon */}
      <div className="absolute top-10 right-10 opacity-5">
        <Eye className="w-40 h-40 text-primary" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with Half Underline */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 inline-block">
              OUR VISION
            </h2>
            <div className="w-32 h-1.5 bg-gradient-brand rounded-full" />
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                To help young generation gain quality education that helps
                achieve academic excellence and cultivate sense of inquiry,
                critical analysis and prepare them for the challenges in life
                ahead with confidence and dignity of a responsible citizen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Mission Section Component
const MissionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-gray-50"
    >
      {/* Horizontal Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(var(--color-secondary)) 2px, transparent 2px)
            `,
            backgroundSize: "80px 80px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Decorative Icon */}
      <div className="absolute bottom-10 left-10 opacity-5">
        <Target className="w-40 h-40 text-primary" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with Half Underline */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 inline-block">
              MISSION STATEMENT
            </h2>
            <div className="w-32 h-1.5 bg-gradient-brand rounded-full" />
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="hidden md:block flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The focus of our educational endeavor is to stimulate the mental
                faculty of the students and to help them explore their hidden,
                extraordinary potential and to transform them into independent
                self-reliant learners. Our single-minded focus is to provide
                intellectually challenging and empowering environment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// College Introduction Section Component
const IntroductionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: GraduationCap, label: "Established 2006", value: "19+ Years" },
    { icon: Users, label: "Campus Area", value: "3.5 Acres" },
    { icon: BookOpen, label: "Programs", value: "4 Streams" },
    { icon: Award, label: "Affiliations", value: "FBISE & QAU" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-white"
    >
      {/* Circular Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          style={{
            backgroundImage: `radial-gradient(circle, rgb(var(--color-primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-brand rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-brand rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with Half Underline */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 inline-block">
              COLLEGE INTRODUCTION
            </h2>
            <div className="w-32 h-1.5 bg-gradient-brand rounded-full" />
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg md:text-xl font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
              Islamabad Model College for Girls, Humak was established in the
              year 2006 and it enjoys the singular distinction to be the only
              Federal female Degree College in the area till date. It is ideally
              located at the centre, where it is easily accessible to the nearby
              societies such as DHA phase II, BAHRIA Town phase IV and the
              surrounding rural areas as well. The college spreads out on an
              area of 3.5 acres. The building has been planned and designed in
              line with the latest trends and requirements of an ideal
              educational institution for women.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The college is affiliated with the Federal Board of Intermediate
              and Secondary Education, Islamabad at the Higher Secondary School
              level and with Quaid-i-Azam University, Islamabad at the degree
              level. Presently various programmes offered include Pre-medical,
              Pre-Engineering, Humanities and General Science at the
              Intermediate level and Associate Degree programme at the degree
              level.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Catering to the educational needs of the area, the number of
              students seeking admission in IMCG Humak is ever on the rise.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The academic session for HSSC classes is determined by the Federal
              Board of Intermediate and Secondary Education Islamabad and for
              the Degree classes by the Quaid-i-Azam University. Medium of
              instruction in this college is both English and Urdu for
              Humanities. Medium of instruction for the faculty of Science is
              English only.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              The faculty of the College aims at fostering academic excellence
              through collaborative teaching, participative learning,
              pedagogical innovation, ethics and values to provide opportunities
              for practical application.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
