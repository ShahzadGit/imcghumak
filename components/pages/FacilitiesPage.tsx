"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  FlaskConical,
  Users,
  Monitor,
  Home,
  Coffee,
  Bus,
  Theater,
  Droplet,
  Shield,
  Newspaper,
  Church,
  Heart,
  Trophy,
} from "lucide-react";

interface FacilityProps {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const FacilitiesPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Facilities data with icons and gradients
  const facilities: FacilityProps[] = [
    {
      id: 1,
      title: "Library",
      description:
        "Apart from the textbooks, the students also need reference books to further broaden their vision and develop clarity on concepts. The college has a library that is airy, well lighted and provides ideal conditions for study. It has around 3500 books. The library subscribes to a good number of periodicals and journals, which have educational value for the students.",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Science Labs",
      description:
        "To equip the students with science education, the state of the art Physics, Chemistry and Biology, Psychology and Statistics laboratories are available.",
      icon: FlaskConical,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Conference Room",
      description:
        "A Conference Room with the facility of multimedia is a latest provision.",
      icon: Users,
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "Computer Lab",
      description:
        "Today&apos;s era is an era of Information Technology. Our most modern Computer Lab provides students ample opportunity to learn I.T.",
      icon: Monitor,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Home Economics Lab",
      description:
        "A well equipped Home Economics lab has been setup to meet the requirements of Home Economics students.",
      icon: Home,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Refreshment Corner",
      description:
        "A refreshment corner has been established where quality eatables are provided to the faculty and students at reasonable price. This facility is available on all working days.",
      icon: Coffee,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 7,
      title: "Transportation",
      description:
        "The college provides pick and drop service to facilitate the employees and students of the college. The college has four buses and one mini bus for the convenience of the students.",
      icon: Bus,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 8,
      title: "Auditorium",
      description: "There is a spacious auditorium in the college.",
      icon: Theater,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 9,
      title: "Drinking Water",
      description: "Clean drinking water is available in college.",
      icon: Droplet,
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      id: 10,
      title: "Security Measures",
      description:
        "The security of the student is ensured by the presence of security guards, security cameras and barbed wires.",
      icon: Shield,
      gradient: "from-slate-600 to-gray-700",
    },
    {
      id: 11,
      title: "College Newsletter",
      description:
        "College has an annual newsletter which covers various academic and co-curricular activities of the year.",
      icon: Newspaper,
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      id: 12,
      title: "Prayer Room",
      description: "A Prayer room is allocated for offering prayer.",
      icon: Church,
      gradient: "from-emerald-500 to-green-500",
    },
    {
      id: 13,
      title: "Day Care Centre",
      description:
        "A day care centre for teacher&apos;s children is a recent addition to facilitate all staff.",
      icon: Heart,
      gradient: "from-rose-500 to-pink-500",
    },
    {
      id: 14,
      title: "First Aid",
      description: "A sick room well equipped with First Aid is available.",
      icon: Heart,
      gradient: "from-red-500 to-rose-500",
    },
    {
      id: 15,
      title: "Sports",
      description:
        "The college has made a name in the field of sports. Our student players have always done exceptionally well at the board and university level in various sporting events.",
      icon: Trophy,
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-brand">
        <div className="absolute inset-0 opacity-[0.05]">
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
              Our Facilities
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to enhance learning and
              ensure student well-being
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section
        ref={sectionRef}
        className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(var(--color-primary)) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(var(--color-primary)) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-gradient-brand" />
              World-Class Infrastructure
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Campus Facilities
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our extensive range of facilities designed to provide the
              best educational experience
            </p>
          </motion.div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image Container with Gradient */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}
                  />

                  {/* Icon as Visual Element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <facility.icon className="w-20 h-20 text-white/40 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 transition-all duration-300 rounded-2xl" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${facility.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <facility.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary">
                      {facility.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-700">
                    {facility.description}
                  </p>

                  {/* Decorative Bottom Border */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div
                      className={`h-1 bg-gradient-to-r ${facility.gradient} rounded-full w-0 group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border-l-4 border-l-primary">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Committed to Excellence
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                IMCG Humak continuously invests in infrastructure development to
                ensure our students have access to the best facilities. From
                modern laboratories to comfortable study spaces, every facility
                is designed with student success and well-being in mind. We
                believe that a conducive learning environment is essential for
                academic excellence and personal growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FacilitiesPage;
