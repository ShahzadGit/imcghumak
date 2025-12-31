"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Microscope,
  Calculator,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

const ProgramsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
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
              Academic Programs
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Explore our comprehensive range of HEC-approved programs designed
              to shape future leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Sections */}
      <BSUrduSection />
      <ADPSection />
      <HSSCSection />
    </div>
  );
};

// BS Urdu Program Section
const BSUrduSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: BookOpen, text: "4-Year Degree Program" },
    { icon: Award, text: "HEC Approved Curriculum" },
    { icon: Users, text: "QAU Affiliation" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-white"
    >
      {/* Vertical Stripe Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgb(var(--color-primary)) 2px, transparent 2px)`,
            backgroundSize: "60px 100%",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Decorative Element */}
      <div className="absolute top-10 right-10 opacity-5">
        <BookOpen className="w-32 h-32 text-primary" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Program Title */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              Bachelor of Science in Urdu
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl md:text-2xl font-bold text-gradient-brand">
                BS (Urdu)
              </span>
              <div className="w-24 h-1 bg-gradient-brand rounded-full" />
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
                className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Program Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Introduction */}
            <div className="lg:col-span-3 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Introduction
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                BS Urdu is a comprehensive four-year degree program launched by
                the Higher Education Commission (HEC) that replaces the
                traditional BA and MA Urdu degrees. Affiliated with Quaid-i-Azam
                University, this program provides students with sixteen years of
                education focusing on Urdu language, literature, grammar, and
                linguistic studies. The curriculum integrates theoretical
                knowledge with practical applications, preparing students for
                diverse career opportunities in education, media, translation,
                and public service sectors.
              </p>
            </div>

            {/* Scope */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-l-primary">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Scope & Career Opportunities
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                BS Urdu graduates have excellent career prospects in Pakistan
                and internationally. As Urdu is the national language of
                Pakistan, there is consistent demand for qualified professionals
                in various sectors.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Education Sector:</strong> Urdu Lecturer, Teacher,
                    Professor in colleges and universities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Media & Journalism:</strong> Content writer, news
                    reporter, columnist, editor
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Translation Services:</strong> Urdu-English
                    translator for government and private organizations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Research & Academia:</strong> Pursue MS, M.Phil, and
                    PhD in Urdu linguistics
                  </span>
                </li>
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Prerequisites
              </h3>
              <div className="space-y-3 text-sm md:text-base text-gray-700">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <strong className="text-primary">Eligibility:</strong>
                  <p className="text-gray-600 mt-1">
                    Intermediate (FA/FSc) with minimum 45% marks
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <strong className="text-primary">Duration:</strong>
                  <p className="text-gray-600 mt-1">4 Years (8 Semesters)</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <strong className="text-primary">Credit Hours:</strong>
                  <p className="text-gray-600 mt-1">130-136 Credit Hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ADP Section
const ADPSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: GraduationCap, text: "2-Year Program" },
    { icon: Award, text: "Replaces BA/BSc" },
    { icon: Users, text: "Skill-Oriented" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-gray-50"
    >
      {/* Honeycomb Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgb(var(--color-secondary)) 2px, transparent 2px),
              radial-gradient(circle at 75px 75px, rgb(var(--color-secondary)) 2px, transparent 2px)
            `,
            backgroundSize: "100px 100px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 left-10 opacity-5">
        <GraduationCap className="w-32 h-32 text-primary" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Program Title */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              Associate Degree Program
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl md:text-2xl font-bold text-gradient-brand">
                ADP (Urdu / Psychology)
              </span>
              <div className="w-24 h-1 bg-gradient-brand rounded-full" />
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
                className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Program Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Introduction */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Introduction
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The Associate Degree Program (ADP) is a revolutionary two-year
                undergraduate program introduced by the Higher Education
                Commission (HEC) to replace traditional BA/BSc degrees.
                Comprising four semesters, ADP focuses on skill-based education
                and practical knowledge, preparing students for immediate
                workforce entry or further studies in BS programs. At IMCG
                Humak, we offer ADP in Urdu and Psychology, both affiliated with
                Quaid-i-Azam University. This program emphasizes specialized
                skill development, enabling students to become industry-ready
                professionals in minimum time while maintaining international
                educational standards.
              </p>
            </div>

            {/* Scope */}
            <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-l-primary">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Scope & Career Pathways
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                ADP graduates enjoy dual advantages: immediate job market entry
                and the option to continue with BS programs. The degree is
                equivalent to 14 years of education and opens numerous career
                doors.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Urdu Specialization:</strong> Teaching assistant,
                    content writer, translator, junior editor
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Psychology Specialization:</strong> Counseling
                    assistant, HR coordinator, social work assistant
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Further Education:</strong> Direct entry into BS
                    programs (5th semester) at QAU and other HEC-recognized
                    universities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Government Jobs:</strong> Eligible for positions
                    requiring 14 years of education
                  </span>
                </li>
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="lg:col-span-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Prerequisites
              </h3>
              <div className="space-y-3 text-sm md:text-base text-gray-700">
                <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg border border-gray-200">
                  <strong className="text-primary">Eligibility:</strong>
                  <p className="text-gray-600 mt-1">
                    Intermediate with minimum 45% (2nd division)
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg border border-gray-200">
                  <strong className="text-primary">Duration:</strong>
                  <p className="text-gray-600 mt-1">2 Years (4 Semesters)</p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg border border-gray-200">
                  <strong className="text-primary">Credit Hours:</strong>
                  <p className="text-gray-600 mt-1">60-68 Credit Hours</p>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-white p-3 rounded-lg border border-gray-200">
                  <strong className="text-primary">CGPA Required:</strong>
                  <p className="text-gray-600 mt-1">Minimum 2.00 out of 4.00</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// HSSC Section
const HSSCSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Microscope, text: "FBISE Affiliated" },
    { icon: Calculator, text: "Multiple Streams" },
    { icon: Award, text: "Higher Secondary" },
  ];

  const streams = [
    {
      name: "Pre-Medical",
      subjects: ["Biology", "Chemistry", "Physics"],
      icon: Microscope,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Pre-Engineering",
      subjects: ["Mathematics", "Chemistry", "Physics"],
      icon: Calculator,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "General Science",
      subjects: ["Computer Science", "Mathematics", "Physics"],
      icon: BookOpen,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Humanities",
      subjects: ["Economics", "Civics", "Education / Psychology"],
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-white"
    >
      {/* Diagonal Wave Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgb(var(--color-primary)) 0px, rgb(var(--color-primary)) 1px, transparent 1px, transparent 50px),
              repeating-linear-gradient(-45deg, rgb(var(--color-primary)) 0px, rgb(var(--color-primary)) 1px, transparent 1px, transparent 50px)
            `,
          }}
          className="w-full h-full"
        />
      </div>

      {/* Decorative Gradient Circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-brand rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-brand rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Program Title */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              Higher Secondary School Certificate
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl md:text-2xl font-bold text-gradient-brand">
                HSSC (Intermediate)
              </span>
              <div className="w-24 h-1 bg-gradient-brand rounded-full" />
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
                className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Program Description */}
          <div className="space-y-6">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Introduction
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The Higher Secondary School Certificate (HSSC) program, commonly
                known as Intermediate or FSc, is a two-year academic program
                affiliated with the Federal Board of Intermediate and Secondary
                Education (FBISE). This crucial educational phase bridges
                secondary education and higher studies, offering students
                specialized streams aligned with their career aspirations. At
                IMCG Humak, we provide comprehensive HSSC education across four
                major streams: Pre-Medical, Pre-Engineering, General Science,
                and Humanities. Each stream features compulsory subjects
                (English, Urdu, Islamiyat, Pakistan Studies) alongside
                specialized elective subjects, preparing students for university
                admission and professional success.
              </p>
            </div>

            {/* Streams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {streams.map((stream, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stream.color} flex items-center justify-center mb-4`}
                  >
                    <stream.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-primary mb-3">
                    {stream.name}
                  </h4>
                  <div className="space-y-1.5">
                    {stream.subjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs md:text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />
                        {subject}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scope and Prerequisites Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Scope */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-l-primary">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Scope & Future Pathways
                </h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p className="leading-relaxed">
                    HSSC is the gateway to higher education in Pakistan, with
                    each stream opening specific career paths:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Pre-Medical:</strong> Admission to MBBS, BDS,
                        Pharmacy, Nursing, Allied Health Sciences
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Pre-Engineering:</strong> Entry into BS
                        Engineering programs (Civil, Electrical, Mechanical,
                        Software)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>General Science:</strong> BS Computer Science,
                        IT, Data Science, Applied Sciences programs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Humanities:</strong> BS in Social Sciences,
                        Psychology, Education, Mass Communication, Law
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Prerequisites */}
              <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-primary" />
                  Prerequisites
                </h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <strong className="text-primary">Eligibility:</strong>
                    <p className="text-gray-600 mt-1">
                      SSC/Matric with minimum 45% marks (Science group for
                      Pre-Medical/Engineering)
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <strong className="text-primary">Duration:</strong>
                    <p className="text-gray-600 mt-1">
                      2 Years (Part-I & Part-II)
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <strong className="text-primary">Total Marks:</strong>
                    <p className="text-gray-600 mt-1">1100 (550 per year)</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <strong className="text-primary">Board:</strong>
                    <p className="text-gray-600 mt-1">FBISE Islamabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsPage;
