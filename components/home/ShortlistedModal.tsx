"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  X,
  FileText,
  FlaskConical,
  Cpu,
  Cog,
  HeartPulse,
  BookOpen,
  ScrollText,
  Info,
  GraduationCap,
  ExternalLink,
  LucideIcon,
} from "lucide-react";

interface Group {
  name: string;
  href: string;
  icon: LucideIcon;
}

const BS_GROUPS: Group[] = [
  {
    name: "BS (Urdu)",
    href: "/shortlists/bs-urdu.pdf",
    icon: GraduationCap,
  },
];

const BS_DETAILS_URL = "https://eadmissions.fde.gov.pk/bs/admission";

const HSSC_GROUPS: Group[] = [
  {
    name: "General Science",
    href: "/shortlists/general-science.pdf",
    icon: FlaskConical,
  },
  { name: "ICS", href: "/shortlists/ics.pdf", icon: Cpu },
  {
    name: "Pre-Engineering",
    href: "/shortlists/pre-engineering.pdf",
    icon: Cog,
  },
  {
    name: "Pre-Medical",
    href: "/shortlists/pre-medical.pdf",
    icon: HeartPulse,
  },
  {
    name: "Humanities (1,2,3)",
    href: "/shortlists/humanities-01.pdf",
    icon: BookOpen,
  },
  {
    name: "Humanities (4,5,6,7,8)",
    href: "/shortlists/humanities-02.pdf",
    icon: ScrollText,
  },
];

// Shared card renderer for both sections — keeps styling in sync.
const GroupCard: React.FC<{ group: Group }> = ({ group }) => {
  const Icon = group.icon;
  return (
    <a
      href={group.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 px-2 py-2 sm:px-3 sm:py-2.5 rounded-lg sm:rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden text-center sm:text-left"
    >
      <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <span className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-brand group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
      </span>

      <span className="relative z-10 flex-1 text-[11px] sm:text-sm font-semibold text-primary group-hover:text-white transition-colors duration-300 leading-tight">
        {group.name}
      </span>

      <FileText className="relative z-10 hidden sm:block w-4 h-4 text-gray-400 group-hover:text-white/90 transition-colors duration-300 flex-shrink-0" />
    </a>
  );
};

const ShortlistedModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-5"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[94vw] sm:max-w-xl md:max-w-2xl max-h-[95vh] rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close shortlisted candidates modal"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-colors duration-200"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Scrollable content wrapper for both sections */}
            <div className="flex-1 overflow-y-auto">
              {/* ===== Section 1: BS Admissions ===== */}
              <div className="flex-shrink-0 bg-gradient-brand px-4 py-2 sm:px-6 sm:py-3 pr-12 sm:pr-14">
                <h2 className="text-sm sm:text-lg md:text-xl font-bold text-white leading-snug">
                  List of Shortlisted Candidates for BS Admissions
                </h2>
              </div>

              <div className="px-3 py-2 sm:px-6 sm:py-3">
                {/* Centered single BS item */}
                <div className="flex justify-center">
                  {BS_GROUPS.map((group) => (
                    <div key={group.href} className="w-1/2 sm:w-2/5">
                      <GroupCard group={group} />
                    </div>
                  ))}
                </div>

                {/* View Details external link button — outlined, no fill */}
                <a
                  href={BS_DETAILS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-3 flex items-center justify-center gap-2 w-full px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-primary text-primary text-xs sm:text-sm font-semibold hover:bg-primary/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  For more information please click &quot;View Details&quot;
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                </a>
              </div>

              {/* Divider between sections */}
              <div className="mx-4 sm:mx-6 border-t border-gray-200" />

              {/* ===== Section 2: HSSC Admissions ===== */}
              <div className="flex-shrink-0 bg-gradient-brand px-4 py-2 sm:px-6 sm:py-3">
                <h2 className="text-sm sm:text-lg md:text-xl font-bold text-white leading-snug">
                  Lists of Shortlisted Candidates for HSSC-1 Admissions
                </h2>
              </div>

              <div className="px-3 py-2 sm:px-6 sm:py-3">
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {HSSC_GROUPS.map((group) => (
                    <GroupCard key={group.href} group={group} />
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mx-3 mb-2 sm:mx-6 sm:mb-3 flex gap-2 sm:gap-2.5 rounded-xl bg-pink-50 border border-pink-200 px-3 py-2 sm:px-4 sm:py-2.5">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-pink-700">
                    &quot;Shortlisted&quot;
                  </span>{" "}
                  students are advised to visit college between{" "}
                  <span className="font-semibold">13th Aug till 19th Aug</span>{" "}
                  (working days/hours) with original documents. After 19th Aug
                  the waiting candidates will be called!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShortlistedModal;

// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import {
//   X,
//   FileText,
//   FlaskConical,
//   Cpu,
//   Cog,
//   HeartPulse,
//   BookOpen,
//   ScrollText,
//   Info,
//   GraduationCap,
//   ExternalLink,
//   LucideIcon,
// } from "lucide-react";

// interface Group {
//   name: string;
//   href: string;
//   icon: LucideIcon;
// }

// const BS_GROUPS: Group[] = [
//   {
//     name: "BS (Urdu)",
//     href: "/shortlists/bs-urdu.pdf",
//     icon: GraduationCap,
//   },
// ];

// const BS_DETAILS_URL = "https://eadmissions.fde.gov.pk/bs/admission";

// const HSSC_GROUPS: Group[] = [
//   {
//     name: "General Science",
//     href: "/shortlists/general-science.pdf",
//     icon: FlaskConical,
//   },
//   { name: "ICS", href: "/shortlists/ics.pdf", icon: Cpu },
//   {
//     name: "Pre-Engineering",
//     href: "/shortlists/pre-engineering.pdf",
//     icon: Cog,
//   },
//   {
//     name: "Pre-Medical",
//     href: "/shortlists/pre-medical.pdf",
//     icon: HeartPulse,
//   },
//   {
//     name: "Humanities (1,2,3)",
//     href: "/shortlists/humanities-01.pdf",
//     icon: BookOpen,
//   },
//   {
//     name: "Humanities (4,5,6,7,8)",
//     href: "/shortlists/humanities-02.pdf",
//     icon: ScrollText,
//   },
// ];

// // Shared card renderer for both sections — keeps styling in sync
// // and fixes the invalid `sm:w-4.5 / sm:h-4.5` Tailwind classes
// // (Tailwind's default scale has no 4.5 step; using 4 instead).
// const GroupCard: React.FC<{ group: Group }> = ({ group }) => {
//   const Icon = group.icon;
//   return (
//     <a
//       href={group.href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 px-2 py-2.5 sm:px-3 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden text-center sm:text-left"
//     >
//       <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//       <span className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-brand group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
//         <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
//       </span>

//       <span className="relative z-10 flex-1 text-[11px] sm:text-sm font-semibold text-primary group-hover:text-white transition-colors duration-300 leading-tight">
//         {group.name}
//       </span>

//       <FileText className="relative z-10 hidden sm:block w-4 h-4 text-gray-400 group-hover:text-white/90 transition-colors duration-300 flex-shrink-0" />
//     </a>
//   );
// };

// const ShortlistedModal: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const showTimer = setTimeout(() => setIsOpen(true), 500);
//     return () => clearTimeout(showTimer);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-6"
//           onClick={() => setIsOpen(false)}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="relative w-full max-w-[94vw] sm:max-w-xl md:max-w-2xl max-h-[95vh] rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               aria-label="Close shortlisted candidates modal"
//               className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-colors duration-200"
//             >
//               <X className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>

//             {/* Scrollable content wrapper for both sections */}
//             <div className="flex-1 overflow-y-auto">
//               {/* ===== Section 1: BS Admissions ===== */}
//               <div className="flex-shrink-0 bg-gradient-brand px-4 py-3 sm:px-6 sm:py-4 pr-12 sm:pr-14">
//                 <h2 className="text-sm sm:text-lg md:text-xl font-bold text-white leading-snug">
//                   List of Shortlisted Candidates for BS Admissions
//                 </h2>
//               </div>

//               <div className="px-3 py-3 sm:px-6 sm:py-4">
//                 <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                   {BS_GROUPS.map((group) => (
//                     <GroupCard key={group.href} group={group} />
//                   ))}
//                 </div>

//                 {/* View Details external link button */}
//                 <a
//                   href={BS_DETAILS_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-3 sm:mt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-brand text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                   For more information please click &quot;View Details&quot;
//                   <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
//                 </a>
//               </div>

//               {/* Divider between sections */}
//               <div className="mx-4 sm:mx-6 border-t border-gray-200" />

//               {/* ===== Section 2: HSSC Admissions ===== */}
//               <div className="flex-shrink-0 bg-gradient-brand px-4 py-3 sm:px-6 sm:py-4">
//                 <h2 className="text-sm sm:text-lg md:text-xl font-bold text-white leading-snug">
//                   Lists of Shortlisted Candidates for HSSC-1 Admissions
//                 </h2>
//               </div>

//               <div className="px-3 py-3 sm:px-6 sm:py-4">
//                 <div className="grid grid-cols-2 gap-2 sm:gap-3">
//                   {HSSC_GROUPS.map((group) => (
//                     <GroupCard key={group.href} group={group} />
//                   ))}
//                 </div>
//               </div>

//               {/* Note */}
//               <div className="mx-3 mb-3 sm:mx-6 sm:mb-5 flex gap-2 sm:gap-2.5 rounded-xl bg-pink-50 border border-pink-200 px-3 py-2.5 sm:px-4 sm:py-3.5">
//                 <Info className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 flex-shrink-0 mt-0.5" />
//                 <p className="text-[10px] sm:text-sm text-gray-700 leading-relaxed">
//                   <span className="font-semibold text-pink-700">
//                     &quot;Shortlisted&quot;
//                   </span>{" "}
//                   students are advised to visit college between{" "}
//                   <span className="font-semibold">13th Aug till 19th Aug</span>{" "}
//                   (working days/hours) with original documents. After 19th Aug
//                   the waiting candidates will be called!
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ShortlistedModal;
