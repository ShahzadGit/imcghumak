"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  CheckCircle,
  GraduationCap,
  BookOpen,
  AlertCircle,
} from "lucide-react";

const AdmissionsPage: React.FC = () => {
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
              Admissions
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Begin your academic journey at IMCG Humak - Where excellence meets
              opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <AdmissionPolicySection />
      <BasicEligibilitySection />
      <HSSCProgramSection />
      <ADPProgramSection />
    </main>
  );
};

// Section 1: Admission Policy
const AdmissionPolicySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const eligibleCategories = [
    "Federal Government employees residing in Islamabad/Rawalpindi",
    "Residents of Islamabad Capital Territory",
    "Diplomats stationed in Islamabad",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-white"
    >
      {/* Circular Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          style={{
            backgroundImage: `radial-gradient(circle, rgb(var(--color-primary)) 1.5px, transparent 1.5px)`,
            backgroundSize: "30px 30px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                ADMISSION POLICY
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-brand rounded-full" />
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-l-primary">
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Daughters of the following categories will be eligible for
              admission against all seats except for the seats reserved for
              FATA/FANA (Domicile):
            </p>

            {/* Eligible Categories */}
            <div className="space-y-3 mb-6">
              {eligibleCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    ({index + 1}) {category}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Important Note */}
            <div className="bg-blue-50 border-l-4 border-l-blue-500 p-4 rounded-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-700">
                  <strong>Important:</strong> A candidate who has passed her
                  last examination from an institution not located in Islamabad
                  and Federal Area shall produce residence certificate from
                  Estate Office/CDA or any other valid legal documents in
                  support of her claim.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 2: Basic Eligibility
const BasicEligibilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const disciplines = [
    {
      name: "PRE-MEDICAL",
      marks: "65%",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "PRE-ENGINEERING",
      marks: "65%",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "GENERAL SCIENCE",
      marks: "60%",
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "HUMANITIES",
      marks: "45%",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-gray-50"
    >
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgb(var(--color-secondary)) 0px, rgb(var(--color-secondary)) 2px, transparent 2px, transparent 60px)`,
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                BASIC ELIGIBILITY
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-brand rounded-full" />
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Admission to Intermediate and Degree classes shall be determined
              as per Admission Policy notified by the Federal Directorate of
              Education.
            </p>
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4">
              Minimum marks for applying in each discipline for class XI:
            </h3>

            {/* Disciplines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {disciplines.map((discipline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${discipline.gradient} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity`}
                  />
                  <div className="relative bg-white rounded-xl p-5 shadow-md border-2 border-gray-100 group-hover:border-transparent group-hover:shadow-xl transition-all">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${discipline.gradient} flex items-center justify-center mb-3`}
                    >
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-primary mb-2">
                      {discipline.name}
                    </h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gray-900">
                        {discipline.marks}
                      </span>
                      <span className="text-sm text-gray-500">minimum</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Important Notes */}
            <div className="space-y-3">
              <div className="bg-amber-50 border-l-4 border-l-amber-500 p-4 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    This bottom line of marks may be reviewed if sufficient
                    applications have not been received in a particular group,
                    subject to prior approval of the Director General, Federal
                    Directorate of Education.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-l-green-500 p-4 rounded-lg">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Admission will be finalized after interview/verification of
                    the original documents, dates for which will be announced by
                    the institution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 3: HSSC Program
const HSSCProgramSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scienceCombinations = [
    { code: "S-1", subjects: "Physics, Chemistry, Biology (Pre-Medical)" },
    {
      code: "S-2",
      subjects: "Physics, Chemistry, Mathematics (Pre-Engineering)",
    },
    {
      code: "S-3",
      subjects: "Physics, Mathematics, Computer Science (G. Science)",
    },
    {
      code: "S-4",
      subjects: "Mathematics, Statistics, Economics (G. Science)",
    },
    { code: "S-5", subjects: "Physics, Mathematics, Statistics (G. Science)" },
    {
      code: "S-6",
      subjects: "Economics, Mathematics, Computer Science (G. Science)",
    },
    {
      code: "S-7",
      subjects: "Mathematics, Economics, Computer Science (G. Science)",
    },
  ];

  const humanitiesCombinations = [
    { code: "H-1", subjects: "Urdu Literature, Islamic Studies, Education" },
    { code: "H-2", subjects: "Civics, Health & Physical Education, Education" },
    { code: "H-3", subjects: "Islamic Studies, Sociology, Islamic History" },
    {
      code: "H-4",
      subjects: "Geography, Outline of Home Economics, English Literature",
    },
    {
      code: "H-5",
      subjects: "Psychology, Outline of Home Economics, Computer Science",
    },
    { code: "H-6", subjects: "Civics, Islamic History, English Literature" },
    { code: "H-7", subjects: "Psychology, Statistics, Economics" },
    {
      code: "H-8",
      subjects: "Sociology, Health & Physical Education, Geography",
    },
  ];

  const importantNotes = [
    "English Literature is offered to those students only, who pass the aptitude test held for this subject. The test will be held only once on date announced by respective department.",
    "If the number of students opting for a certain subject/combination is more than available seats, they will be asked to adjust their option according to availability of seats.",
    "As there is limited number of seats in Computer Science, the subject will be allowed to those who have secured 60% marks in SSC examination.",
    "Students taking 60% marks in SSC can apply for Psychology.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-white"
    >
      {/* Wave Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgb(var(--color-primary)) 0px, rgb(var(--color-primary)) 1px, transparent 1px, transparent 40px)`,
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                HSSC (02 YEAR PROGRAMME)
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-brand rounded-full" />
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-l-primary">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              1st year students are required to select one of the following
              combinations of elective subjects. The selection should be made
              very carefully, no change will be allowed after admission as there
              are limited seats in each subject. Candidates are required to
              apply separately for each combination in HSSC-I.
            </p>
          </div>

          {/* Science Combinations */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
              1. ELECTIVE COMBINATIONS (SCIENCE HSSC-I)
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                      <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">
                        CODE
                      </th>
                      <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">
                        COMBINATION NAME
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scienceCombinations.map((combo, index) => (
                      <motion.tr
                        key={combo.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + index * 0.05,
                        }}
                        className="border-b border-gray-100 hover:bg-blue-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-sm">
                            {combo.code}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm md:text-base text-gray-700">
                          {combo.subjects}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Humanities Combinations */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
              2. ELECTIVE COMBINATIONS (HUMANITIES HSSC-I)
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">
                        CODE
                      </th>
                      <th className="px-6 py-4 text-left text-sm md:text-base font-semibold">
                        COMBINATION NAME
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {humanitiesCombinations.map((combo, index) => (
                      <motion.tr
                        key={combo.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + index * 0.05,
                        }}
                        className="border-b border-gray-100 hover:bg-orange-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-sm">
                            {combo.code}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm md:text-base text-gray-700">
                          {combo.subjects}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border-2 border-amber-200">
            <h4 className="text-lg md:text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Important Notes
            </h4>
            <div className="space-y-3">
              {importantNotes.map((note, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm md:text-base text-gray-700 flex-1">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 4: ADP Program
const ADPProgramSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const creditStructure = [
    {
      category: "Compulsory Subjects",
      hours: "18",
      details: "6 core subjects (ENG, ISL, PS, EC)",
    },
    {
      category: "Major Subjects",
      hours: "36",
      details: "3 majors (12 credit hours each)",
    },
    {
      category: "Elective Subjects",
      hours: "12",
      details: "4 electives (3 credit hours each)",
    },
  ];

  const programHighlights = [
    "The ADP Programme shall be of two years duration, equally divided into four regular semesters",
    "Each regular semester shall be spread over eighteen weeks, sixteen weeks for teaching and two weeks for preparation and conduct of exams",
    "After successful completion of all the academic requirements of the Programme, the University shall award 2 years Associate Degree to students",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-14 overflow-hidden bg-gray-50"
    >
      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage: `
              radial-gradient(circle at 30px 30px, rgb(var(--color-primary)) 2px, transparent 2px),
              radial-gradient(circle at 90px 90px, rgb(var(--color-primary)) 2px, transparent 2px)
            `,
            backgroundSize: "120px 120px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                ASSOCIATE DEGREE PROGRAMME
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-brand rounded-full" />
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-l-primary">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              The Associate Degree Programme is going to offer variety of
              subjects and will span over two years comprising of four
              semesters.
            </p>
            <p className="text-base md:text-lg font-semibold text-primary">
              The Associate Degree Program shall comprise of 66 credit hours
              with following split up of subjects:
            </p>
          </div>

          {/* Credit Structure Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {creditStructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-brand rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity" />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all transform group-hover:-translate-y-1">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-brand text-white text-2xl font-bold mb-3">
                      {item.hours}
                    </div>
                    <h4 className="text-lg font-bold text-primary">
                      {item.category}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    {item.details}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="h-1 bg-gradient-brand rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Credit Hours */}
          <div className="bg-gradient-brand rounded-2xl p-6 md:p-8 mb-8 text-center shadow-xl">
            <p className="text-white/90 text-base md:text-lg mb-2">
              Total Programme Credit Hours
            </p>
            <p className="text-5xl md:text-6xl font-bold text-white">66</p>
            <p className="text-white/80 text-sm md:text-base mt-2">
              Credit Hours
            </p>
          </div>

          {/* Program Highlights */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
              Programme Structure
            </h3>
            <div className="space-y-4">
              {programHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-l-primary"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-brand text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-sm md:text-base text-gray-700 flex-1">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsPage;
