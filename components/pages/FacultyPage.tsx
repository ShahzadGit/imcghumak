"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Award, Building } from "lucide-react";

interface FacultyMember {
  name: string;
  degree: string;
  university: string;
  isVisiting?: boolean;
}

interface Department {
  id: string;
  name: string;
  faculty: FacultyMember[];
}

// Reusable Faculty Card Component
const FacultyCard: React.FC<{
  member: FacultyMember;
  index: number;
  isInView: boolean;
}> = ({ member, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
    >
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />

      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <Image
          src="/noAvatar.png"
          alt={member.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Name */}
        <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2 min-h-[3.5rem]">
          {member.name}
        </h4>

        {/* Degree */}
        <div className="flex items-start gap-2 mb-2">
          <Award className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-700 font-medium line-clamp-2">
            {member.degree}
          </p>
        </div>

        {/* University */}
        <div className="flex items-start gap-2">
          <Building className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
          <p className="text-xs text-gray-600 line-clamp-2">
            {member.university}
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const FacultyPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Complete Faculty Data
  const facultyData: Department[] = [
    {
      id: "principal",
      name: "Principal",
      faculty: [
        {
          name: "Dr. Humaira Jabeen",
          degree: "M. SC, M. Phil Chemistry QAU",
          university:
            "Ph. D Chemistry Pohang University of Science and Technology (POSTECH) South Korea",
        },
      ],
    },
    {
      id: "biology",
      name: "Dept. of Biology",
      faculty: [
        {
          name: "Ms. Faiza Siddiqui (Asst. Prof)",
          degree: "M. Sc Biology (Zoology)",
          university: "Karachi University",
        },
      ],
    },
    {
      id: "chemistry",
      name: "Dept. of Chemistry",
      faculty: [
        {
          name: "1. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "computer-science",
      name: "Dept. Of Computer Science",
      faculty: [
        {
          name: "1. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
        {
          name: "2. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "economics",
      name: "Dept. of Economics",
      faculty: [
        {
          name: "Ms. Qudsia Bano (Assistant Professor)",
          degree: "MSc Economics (IIU)",
          university: "International Islamic University",
        },
      ],
    },
    {
      id: "english",
      name: "Dept. of English",
      faculty: [
        {
          name: "Ms. Fouzia Jamal (Assistant Professor)",
          degree: "M.A English (Peshawar University)",
          university: "University of Peshawar",
        },
        {
          name: "Ms. Nabila Iftikhar (Lecturer)",
          degree: "M.A English",
          university: "FJWU",
        },
        {
          name: "3. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
        {
          name: "4. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "health-physical-education",
      name: "Dept. of Health & Physical Education",
      faculty: [
        {
          name: "1. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "history",
      name: "Dept. of History",
      faculty: [
        {
          name: "1. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "education",
      name: "Dept. of Education",
      faculty: [
        {
          name: "1. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "home-economics",
      name: "Dept. of Home Economics",
      faculty: [
        {
          name: "Ms. Sarah Adeel (Lecturer)",
          degree: "M.Sc (Clothing & Textiles) (PU)",
          university: "Punjab University",
        },
        {
          name: "Ms. Sadaf Chahal (Lecturer)",
          degree: "M.Sc (Textile & Clothing)",
          university: "College of Home Economics Lahore",
        },
      ],
    },
    {
      id: "islamic-studies",
      name: "Dept. of Islamic Studies",
      faculty: [
        {
          name: "1. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
        {
          name: "2. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "mathematics",
      name: "Dept. of Mathematics",
      faculty: [
        {
          name: "Ms. Maria Saeed (Lecturer)",
          degree: "M.Sc Mathematics (IIU)",
          university: "International Islamic University",
        },
        {
          name: "2. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "physics",
      name: "Dept. of Physics",
      faculty: [
        {
          name: "Ms. Saima Andleeb (Assistant Professor)",
          degree: "M.Sc Physics (QAU)",
          university: "Quaid-i-Azam University",
        },
      ],
    },
    {
      id: "pak-studies",
      name: "Dept. of Pak Studies",
      faculty: [
        {
          name: "Ms. Shumaila Riaz (Lecturer)",
          degree: "M. Phil Pak Studies (QAU)",
          university: "Quaid-i-Azam University",
        },
      ],
    },
    {
      id: "statistics",
      name: "Dept. of Statistics",
      faculty: [
        {
          name: "Ms. Farah Ihtisham (Lecturer)",
          degree: "M.Sc statistics",
          university: "Arid Agricultural University",
        },
      ],
    },
    {
      id: "psychology",
      name: "Dept. of Psychology",
      faculty: [
        {
          name: "Ms. Abbasa Manzoor (Assistant Professor)",
          degree: "M. Sc Applied Psychology (PU)",
          university: "Punjab University",
        },
        {
          name: "2. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
    },
    {
      id: "urdu",
      name: "Dept. of Urdu",
      faculty: [
        {
          name: "Ms. Shabana Hassan (Assistant Professor)",
          degree: "M. Phil (Iqbaliyat)",
          university: "Punjab University",
        },

        {
          name: "2. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
        {
          name: "3. (Visiting Faculty)",
          degree: "",
          university: "",
          isVisiting: true,
        },
      ],
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
              Our Faculty
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Meet our dedicated team of educators committed to excellence in
              teaching and mentorship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Accordion Section */}
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
              Academic Excellence
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Departments & Faculty Members
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our distinguished faculty brings expertise, passion, and
              dedication to every classroom
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="principal"
              className="space-y-4"
            >
              {facultyData.map((department) => (
                <AccordionItem
                  key={department.id}
                  value={department.id}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-none overflow-hidden"
                >
                  {/* Left Gradient Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand" />

                  {/* Department Header */}
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group/trigger">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 group-hover/trigger:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg md:text-xl font-bold text-primary group-hover/trigger:text-pink-600 transition-colors duration-200">
                        {department.name}
                      </span>
                    </div>
                  </AccordionTrigger>

                  {/* Faculty Members Content */}
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="flex flex-wrap justify-center gap-6">
                      {department.faculty
                        .filter((member) => !member.isVisiting)
                        .map((member, index) => (
                          <div
                            key={index}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
                          >
                            <FacultyCard
                              member={member}
                              index={index}
                              isInView={isInView}
                            />
                          </div>
                        ))}
                    </div>

                    {/* Empty State for Visiting Faculty Only */}
                    {department.faculty.every((m) => m.isVisiting) && (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
                          <GraduationCap className="w-5 h-5 text-gray-400" />
                          <p className="text-gray-500 text-sm md:text-base">
                            Currently staffed with visiting faculty
                          </p>
                        </div>
                      </div>
                    )}
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

// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { GraduationCap, Award, Building } from "lucide-react";

// interface FacultyMember {
//   name: string;
//   degree: string;
//   university: string;
//   isVisiting?: boolean;
// }

// interface Department {
//   id: string;
//   name: string;
//   faculty: FacultyMember[];
// }

// // Reusable Faculty Card Component
// const FacultyCard: React.FC<{
//   member: FacultyMember;
//   index: number;
//   isInView: boolean;
// }> = ({ member, index, isInView }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.4, delay: index * 0.05 }}
//       className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
//     >
//       {/* Gradient Accent */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand" />

//       {/* Image Section */}
//       <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
//         <Image
//           src="/noAvatar.png"
//           alt={member.name}
//           width={400}
//           height={400}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         {/* Overlay on hover */}
//         <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
//       </div>

//       {/* Content Section */}
//       <div className="p-5">
//         {/* Name */}
//         <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2 min-h-[3.5rem]">
//           {member.name}
//         </h4>

//         {/* Degree */}
//         <div className="flex items-start gap-2 mb-2">
//           <Award className="w-4 h-4 text-pink-600 mt-1 flex-shrink-0" />
//           <p className="text-sm text-gray-700 font-medium line-clamp-2">
//             {member.degree}
//           </p>
//         </div>

//         {/* University */}
//         <div className="flex items-start gap-2">
//           <Building className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
//           <p className="text-xs text-gray-600 line-clamp-2">
//             {member.university}
//           </p>
//         </div>
//       </div>

//       {/* Bottom Accent */}
//       <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//     </motion.div>
//   );
// };

// const FacultyPage: React.FC = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   // Complete Faculty Data
//   const facultyData: Department[] = [
//     {
//       id: "principal",
//       name: "Principal",
//       faculty: [
//         {
//           name: "Dr. Humaira Jabeen",
//           degree: "M. SC, M. Phil Chemistry QAU",
//           university:
//             "Ph. D Chemistry Pohang University of Science and Technology (POSTECH) South Korea",
//         },
//       ],
//     },
//     {
//       id: "biology",
//       name: "Dept. of Biology",
//       faculty: [
//         {
//           name: "Ms. Faiza Siddiqui (Asst. Prof)",
//           degree: "M. Sc Biology (Zoology)",
//           university: "Karachi University",
//         },
//       ],
//     },
//     {
//       id: "chemistry",
//       name: "Dept. of Chemistry",
//       faculty: [
//         {
//           name: "1. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "computer-science",
//       name: "Dept. Of Computer Science",
//       faculty: [
//         {
//           name: "1. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//         {
//           name: "2. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "economics",
//       name: "Dept. of Economics",
//       faculty: [
//         {
//           name: "Ms. Qudsia Bano (Assistant Professor)",
//           degree: "MSc Economics (IIU)",
//           university: "International Islamic University",
//         },
//       ],
//     },
//     {
//       id: "english",
//       name: "Dept. of English",
//       faculty: [
//         {
//           name: "Ms. Fouzia Jamal (Assistant Professor)",
//           degree: "M.A English (Peshawar University)",
//           university: "University of Peshawar",
//         },
//         {
//           name: "Ms. Nabila Iftikhar (Lecturer)",
//           degree: "M.A English",
//           university: "FJWU",
//         },
//         {
//           name: "3. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//         {
//           name: "4. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "health-physical-education",
//       name: "Dept. of Health & Physical Education",
//       faculty: [
//         {
//           name: "1. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "history",
//       name: "Dept. of History",
//       faculty: [
//         {
//           name: "1. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "education",
//       name: "Dept. of Education",
//       faculty: [
//         {
//           name: "1. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "home-economics",
//       name: "Dept. of Home Economics",
//       faculty: [
//         {
//           name: "Ms. Sarah Adeel (Lecturer)",
//           degree: "M.Sc (Clothing & Textiles) (PU)",
//           university: "Punjab University",
//         },
//         {
//           name: "Ms. Sadaf Chahal (Lecturer)",
//           degree: "M.Sc (Textile & Clothing)",
//           university: "College of Home Economics Lahore",
//         },
//       ],
//     },
//     {
//       id: "islamic-studies",
//       name: "Dept. of Islamic Studies",
//       faculty: [
//         {
//           name: "1. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//         {
//           name: "2. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "mathematics",
//       name: "Dept. of Mathematics",
//       faculty: [
//         {
//           name: "Ms. Maria Saeed (Lecturer)",
//           degree: "M.Sc Mathematics (IIU)",
//           university: "International Islamic University",
//         },
//         {
//           name: "2. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "physics",
//       name: "Dept. of Physics",
//       faculty: [
//         {
//           name: "Ms. Saima Andleeb (Assistant Professor)",
//           degree: "M.Sc Physics (QAU)",
//           university: "Quaid-i-Azam University",
//         },
//       ],
//     },
//     {
//       id: "pak-studies",
//       name: "Dept. of Pak Studies",
//       faculty: [
//         {
//           name: "Ms. Shumaila Riaz (Lecturer)",
//           degree: "M. Phil Pak Studies (QAU)",
//           university: "Quaid-i-Azam University",
//         },
//       ],
//     },
//     {
//       id: "statistics",
//       name: "Dept. of Statistics",
//       faculty: [
//         {
//           name: "Ms. Farah Ihtisham (Lecturer)",
//           degree: "M.Sc statistics",
//           university: "Arid Agricultural University",
//         },
//       ],
//     },
//     {
//       id: "psychology",
//       name: "Dept. of Psychology",
//       faculty: [
//         {
//           name: "Ms. Abbasa Manzoor (Assistant Professor)",
//           degree: "M. Sc Applied Psychology (PU)",
//           university: "Punjab University",
//         },
//         {
//           name: "2. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//     {
//       id: "urdu",
//       name: "Dept. of Urdu",
//       faculty: [
//         {
//           name: "Ms. Shabana Hassan (Assistant Professor)",
//           degree: "M. Phil (Iqbaliyat)",
//           university: "Punjab University",
//         },

//         {
//           name: "2. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//         {
//           name: "3. (Visiting Faculty)",
//           degree: "",
//           university: "",
//           isVisiting: true,
//         },
//       ],
//     },
//   ];

//   return (
//     <main className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-brand">
//         <div className="absolute inset-0 opacity-[0.05]">
//           <div
//             style={{
//               backgroundImage: `
//                 linear-gradient(to right, white 2px, transparent 2px),
//                 linear-gradient(to bottom, white 2px, transparent 2px)
//               `,
//               backgroundSize: "60px 60px",
//             }}
//             className="w-full h-full"
//           />
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
//               Our Faculty
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
//               Meet our dedicated team of educators committed to excellence in
//               teaching and mentorship
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Faculty Accordion Section */}
//       <section
//         ref={sectionRef}
//         className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
//       >
//         {/* Subtle Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div
//             style={{
//               backgroundImage: `
//                 linear-gradient(to right, rgb(var(--color-primary)) 1px, transparent 1px),
//                 linear-gradient(to bottom, rgb(var(--color-primary)) 1px, transparent 1px)
//               `,
//               backgroundSize: "40px 40px",
//             }}
//             className="w-full h-full"
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
//               <span className="w-2 h-2 rounded-full bg-gradient-brand" />
//               Academic Excellence
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
//               Departments & Faculty Members
//             </h2>
//             <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
//               Our distinguished faculty brings expertise, passion, and
//               dedication to every classroom
//             </p>
//           </motion.div>

//           {/* Accordion */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Accordion
//               type="single"
//               collapsible
//               defaultValue="principal"
//               className="space-y-4"
//             >
//               {facultyData.map((department) => (
//                 <AccordionItem
//                   key={department.id}
//                   value={department.id}
//                   className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-none overflow-hidden"
//                 >
//                   {/* Left Gradient Border */}
//                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand" />

//                   {/* Department Header */}
//                   <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group/trigger">
//                     <div className="flex items-center gap-4 w-full">
//                       <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 group-hover/trigger:scale-110 transition-transform duration-300">
//                         <GraduationCap className="w-6 h-6 text-white" />
//                       </div>
//                       <span className="text-lg md:text-xl font-bold text-primary group-hover/trigger:text-pink-600 transition-colors duration-200">
//                         {department.name}
//                       </span>
//                     </div>
//                   </AccordionTrigger>

//                   {/* Faculty Members Content */}
//                   <AccordionContent className="px-6 pb-6 pt-2">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:justify-items-center lg:justify-items-center">
//                       {department.faculty
//                         .filter((member) => !member.isVisiting)
//                         .map((member, index) => (
//                           <FacultyCard
//                             key={index}
//                             member={member}
//                             index={index}
//                             isInView={isInView}
//                           />
//                         ))}
//                     </div>

//                     {/* Empty State for Visiting Faculty Only */}
//                     {department.faculty.every((m) => m.isVisiting) && (
//                       <div className="text-center py-8">
//                         <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
//                           <GraduationCap className="w-5 h-5 text-gray-400" />
//                           <p className="text-gray-500 text-sm md:text-base">
//                             Currently staffed with visiting faculty
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default FacultyPage;
