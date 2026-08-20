"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  GraduationCap,
  Award,
  Building,
  BadgeCheck,
  Clock3,
} from "lucide-react";

interface FacultyMember {
  name: string;
  degree: string;
  university: string;
  isTemporary?: boolean;
  parentInstitution?: string;
  image?: string;
}

interface Department {
  id: string;
  name: string;
  faculty: FacultyMember[];
}

/* =========================================================
   REUSABLE FACULTY CARD
========================================================= */

const FacultyCard: React.FC<{
  member: FacultyMember;
  index: number;
  isInView: boolean;
}> = ({ member, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
    >
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />

      {/* Image Section */}
      <div className="relative h-40 sm:h-44 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src={member.image || "/noAvatar.png"}
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Name */}
        <h4 className="text-base md:text-lg font-bold text-primary mb-2 line-clamp-2 min-h-[3rem]">
          {member.name}
        </h4>

        {/* Posting Type */}
        <div className="mb-3">
          {member.isTemporary ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
              <Clock3 className="w-3.5 h-3.5" />
              <span className="text-[11px] sm:text-xs font-semibold">
                Temporary Duty
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span className="text-[11px] sm:text-xs font-semibold">
                Permanent Faculty
              </span>
            </div>
          )}
        </div>

        {/* Degree / Qualifications */}
        {member.degree && (
          <div className="flex items-start gap-2 mb-2">
            <Award className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0" />

            <p className="text-sm text-gray-700 font-medium whitespace-pre-line leading-5">
              {member.degree}
            </p>
          </div>
        )}

        {/* University */}
        {member.university && (
          <div className="flex items-start gap-2">
            <Building className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />

            <p className="text-xs text-gray-600 whitespace-pre-line leading-5">
              {member.university}
            </p>
          </div>
        )}

        {/* Parent Institution - Temporary Faculty Only */}
        {member.isTemporary && member.parentInstitution && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Parent Institution
            </p>

            <p className="text-xs sm:text-sm text-gray-700 font-medium">
              {member.parentInstitution}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

/* =========================================================
   FACULTY PAGE
========================================================= */

const FacultyPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const accordionItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [openAccordion, setOpenAccordion] = useState<string | undefined>(
    "principal",
  );

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  /* =========================================================
     ACCORDION AUTO-SCROLL
  ========================================================= */

  useEffect(() => {
    if (!openAccordion) return;

    const element = accordionItemRefs.current[openAccordion];

    if (!element) return;

    const timer = window.setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 180);

    return () => window.clearTimeout(timer);
  }, [openAccordion]);

  /* =========================================================
     COMPLETE FACULTY DATA
     Permanent + Temporary Duty
  ========================================================= */

  const facultyData: Department[] = [
    /* =====================================================
       1. PRINCIPAL
    ===================================================== */

    {
      id: "principal",
      name: "Principal",
      faculty: [
        {
          name: "Dr. Humera Jabeen",
          degree: "M. SC., Phil Chemistry (QAU)\nPh.D Chemistry",
          university:
            "Pohang University of Science and Technology (POSTECH)\nSouth Korea",
          image: "/principal-01.png",
        },
      ],
    },

    /* =====================================================
       2. VICE PRINCIPAL
    ===================================================== */

    {
      id: "vice-principal",
      name: "Vice Principal (Acting)",
      faculty: [
        {
          name: "Ms. Shabana Hassan",
          degree:
            "M. Phil (Iqbaliyat)\nM.A. Urdu (Punjab University)\nB.Ed. (Punjab University)",
          university: "Punjab University",
        },
      ],
    },

    /* =====================================================
       3. CHEMISTRY
    ===================================================== */

    {
      id: "chemistry",
      name: "Dept. of Chemistry",
      faculty: [
        {
          name: "Ms. Naila Tahir (Lecturer)",
          degree:
            "M.Phil Chemistry (Punjab University)\nM.Sc Chemistry (Punjab University)\nB.Ed (Punjab University)",
          university: "Punjab University",
        },
      ],
    },

    /* =====================================================
       4. COMPUTER SCIENCE
    ===================================================== */

    {
      id: "computer-science",
      name: "Dept. Of Computer Science",
      faculty: [
        {
          name: "Ms. Maliha Afzal (Lecturer)",
          degree: "BS Computer Science",
          university: "SBK Women University, Quetta",
        },
      ],
    },

    /* =====================================================
       5. ENGLISH
    ===================================================== */

    {
      id: "english",
      name: "Dept. of English",
      faculty: [
        {
          name: "Ms. Fouzia Jamal (Assistant Professor)",
          degree: "M.A English",
          university: "University of Peshawar\nOn Ex-Pakistan Leave",
        },
        {
          name: "Ms. Naila Irfan (Assistant Professor)",
          degree: "M.A English (Gold Medalist)",
          university: "Fatima Jinnah Women University",
        },
        {
          name: "Ms. Nabila Iftikhar (Lecturer)",
          degree: "M.A English",
          university: "Fatima Jinnah Women University",
        },

        /* Temporary Duty */
        {
          name: "Ms. Maria Haider Masood — Assistant Professor",
          degree: "M.A English",
          university: "University of Karachi",
          isTemporary: true,
          parentInstitution: "IMCG I-14/3",
        },
        {
          name: "Ms. Sadia Saleem — Lecturer",
          degree:
            "M.A English Language and Literature (FJWU)\nDiploma in TEFL (AIOU)\nB.Ed (Sargodha University)",
          university:
            "Fatima Jinnah Women University\nAllama Iqbal Open University",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },

    /* =====================================================
       6. HEALTH & PHYSICAL EDUCATION
    ===================================================== */

    {
      id: "health-physical-education",
      name: "Dept. of Health & Physical Education",
      faculty: [
        {
          name: "Ms. Shamsa (Lecturer)",
          degree: "M.A Health and Physical Education",
          university: "Punjab University",
        },
      ],
    },

    /* =====================================================
       7. HOME ECONOMICS
    ===================================================== */

    {
      id: "home-economics",
      name: "Dept. of Home Economics",
      faculty: [
        {
          name: "Ms. Sarah Adeel (Assistant Professor)",
          degree: "M.Sc (Clothing & Textiles)",
          university: "Punjab University",
        },

        /* Temporary Duty */
        {
          name: "Ms. Sadaf Chahal — Lecturer",
          degree: "M.Sc Home Economics, Textiles & Clothing",
          university: "College of Home Economics, Lahore",
          isTemporary: true,
          parentInstitution: "IMCG F-11/3",
        },
      ],
    },

    /* =====================================================
       8. MATHEMATICS
    ===================================================== */

    {
      id: "mathematics",
      name: "Dept. of Mathematics",
      faculty: [
        {
          name: "Ms. Maria Saeed (Lecturer)",
          degree: "M.Phil (CUST)\nM.Sc Mathematics (IIUI)\nM.Ed, B.Ed (AIOU)",
          university:
            "Capital University of Science & Technology\nInternational Islamic University\nAllama Iqbal Open University",
        },

        /* Temporary Duty */
        {
          name: "Ms. Iram Zar — Lecturer",
          degree: "MSc Mathematics (Punjab University)\nB.Ed (AIOU)",
          university: "Punjab University\nAllama Iqbal Open University",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },

    /* =====================================================
       9. PHYSICS
    ===================================================== */

    {
      id: "physics",
      name: "Dept. of Physics",
      faculty: [
        {
          name: "Ms. Saira Farhat (Assistant Professor)",
          degree: "M.Sc.\nE.P.M\nB.Ed",
          university: "University of Peshawar\nAIOU\nAIOU",
        },
      ],
    },

    /* =====================================================
       10. POLITICAL SCIENCE
    ===================================================== */

    {
      id: "political-science",
      name: "Dept. of Political Science",
      faculty: [
        {
          name: "Ms. Ayesha Umar (Lecturer)",
          degree: "M.A Political Science",
          university: "University of Peshawar\nOn deputation",
        },
      ],
    },

    /* =====================================================
       11. URDU
    ===================================================== */

    {
      id: "urdu",
      name: "Dept. of Urdu",
      faculty: [
        {
          name: "Ms. Shabana Hassan (Associate Professor)",
          degree: "M.Phil (Iqbaliyat)\nM.A Urdu\nB.Ed.",
          university: "Punjab University",
        },

        /* Temporary Duty */
        {
          name: "Ms. Naseem Akhtar — Associate Professor",
          degree: "M.Phil (AIOU)\nM.A & B.Ed",
          university: "University of Peshawar",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) G-10/4",
        },
        {
          name: "Ms. Kousar Sarwar Khan — Assistant Professor",
          degree: "M.A Urdu\nB.Ed",
          university: "Punjab University\nAl Khair University AJ&K",
          isTemporary: true,
          parentInstitution: "IMCG Bhara Kahu",
        },
        {
          name: "Ms. Nosheen Kayani — Lecturer",
          degree: "M.A Urdu\nB.Ed",
          university: "NUML\nAIOU",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },

    /* =====================================================
       12. ZOOLOGY / BIOLOGY
    ===================================================== */

    {
      id: "zoology-biology",
      name: "Dept. of Zoology / Biology",
      faculty: [
        {
          name: "Ms. Faiza Siddique — Associate Professor",
          degree: "M.Sc Zoology\nM.Ed",
          university: "G.C. University\nAIOU",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/4",
        },

        {
          name: "Dr. Irum Gul — Associate Professor",
          degree: "Ph.D Zoology\nM.Phil Biotechnology\nM.Sc Zoology\nB.Ed",
          university:
            "Kohat University of Science and Technology\nIBGE\nUniversity of Peshawar",
          isTemporary: true,
          parentInstitution: "IMCG Bhara Kahu",
        },

        {
          name: "Dr. Fasihya Fayyaz Khan — Assistant Headmistress",
          degree:
            "PhD Food Technology\nMS Genetics\nMSc Hon Food Tech\nM.Ed, B.Ed",
          university:
            "PMAS-Arid University\nVirtual University\nPMAS-Arid University\nAIOU",
          isTemporary: true,
          parentInstitution: "IMCG F 6/2",
        },
      ],
    },

    /* =====================================================
       13. PSYCHOLOGY
    ===================================================== */

    {
      id: "psychology",
      name: "Dept. of Psychology",
      faculty: [
        {
          name: "Ms. Abbasa Manzoor — Associate Professor",
          degree: "M.Sc Applied Psychology",
          university: "Punjab University",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) G-10/4",
        },

        {
          name: "Ms. Nazia Ashraf — Lecturer",
          degree: "MSc Applied Psychology\nM.Ed, B.Ed",
          university: "Punjab University\nAIOU",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },

    /* =====================================================
       14. STATISTICS
    ===================================================== */

    {
      id: "statistics",
      name: "Dept. of Statistics",
      faculty: [
        {
          name: "Ms. Shamim Akhtar — Assistant Professor",
          degree: "M.Sc\nB.Ed",
          university: "University of Punjab\nUniversity of Punjab",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },

    /* =====================================================
       15. EDUCATION
    ===================================================== */

    {
      id: "education",
      name: "Dept. of Education",
      faculty: [
        {
          name: "Ms. Anila Tahir — Lecturer",
          degree: "M.A Education\nB.Ed",
          university: "University of Punjab\nAIOU",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },

    /* =====================================================
       16. ECONOMICS / HISTORY
    ===================================================== */

    {
      id: "economics-history",
      name: "Dept. of Economics / History",
      faculty: [
        {
          name: "Ms. Nighat Noureen — Lecturer",
          degree: "M.A Economics\nM.A History\nB.Ed",
          university: "Punjab University\nPunjab University\nAIOU",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },

    /* =====================================================
       17. ISLAMIAT
    ===================================================== */

    {
      id: "islamiat",
      name: "Dept. of Islamiat",
      faculty: [
        {
          name: "Ms. Sidra Aziz — Lecturer",
          degree: "M.A Islamiat\nB.Ed",
          university: "Punjab University\nAIOU",
          isTemporary: true,
          parentInstitution: "IMCG (P/G) F-7/2",
        },
      ],
    },
  ];

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="min-h-screen">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative pt-28 pb-8 md:pt-32 md:pb-10 overflow-hidden bg-gradient-brand">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
              Our Faculty
            </h1>

            <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto">
              Meet our dedicated team of educators committed to excellence in
              teaching and mentorship
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FACULTY ACCORDION SECTION
      ===================================================== */}

      <section
        ref={sectionRef}
        className="relative py-8 md:py-10 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
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
            className="text-center mb-8 md:mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-brand" />
              Academic Excellence
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
              Departments & Faculty Members
            </h2>

            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our distinguished faculty brings expertise, passion, and
              dedication to every classroom
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <Accordion
              type="single"
              collapsible
              value={openAccordion}
              onValueChange={setOpenAccordion}
              className="space-y-3"
            >
              {facultyData.map((department) => (
                <AccordionItem
                  key={department.id}
                  value={department.id}
                  ref={(node) => {
                    accordionItemRefs.current[department.id] = node;
                  }}
                  className="scroll-mt-24 relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-none overflow-hidden"
                >
                  {/* Left Gradient Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand" />

                  {/* Department Header */}
                  <AccordionTrigger className="px-5 py-4 text-left hover:no-underline group/trigger">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 group-hover/trigger:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>

                      <span className="text-base md:text-xl font-bold text-primary group-hover/trigger:text-pink-600 transition-colors duration-200 leading-snug">
                        {department.name}
                      </span>
                    </div>
                  </AccordionTrigger>

                  {/* Faculty Members Content */}
                  <AccordionContent className="px-5 pb-5 pt-1">
                    <div className="flex flex-wrap justify-center gap-4">
                      {department.faculty.map((member, index) => (
                        <div
                          key={`${department.id}-${member.name}-${index}`}
                          className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]"
                        >
                          <FacultyCard
                            member={member}
                            index={index}
                            isInView={isInView}
                          />
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FacultyPage;
