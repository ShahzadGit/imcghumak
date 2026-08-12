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
} from "lucide-react";

const GROUPS = [
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
    name: "Humanities (4,5,6,7)",
    href: "/shortlists/humanities-02.pdf",
    icon: ScrollText,
  },
];

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 py-3 sm:px-4 sm:py-6"
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

            {/* Header */}
            <div className="flex-shrink-0 bg-gradient-brand px-4 py-3 sm:px-6 sm:py-4 pr-12 sm:pr-14">
              <h2 className="text-sm sm:text-lg md:text-xl font-bold text-white leading-snug">
                Lists of Shortlisted Candidates for HSSC-1 Admissions
              </h2>
            </div>

            {/* Groups Grid — 2 columns from smallest screens up */}
            <div className="flex-1 overflow-y-auto px-3 py-3 sm:px-6 sm:py-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {GROUPS.map((group) => {
                  const Icon = group.icon;
                  return (
                    <a
                      key={group.name}
                      href={group.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 px-2 py-2.5 sm:px-3 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden text-center sm:text-left"
                    >
                      <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <span className="relative z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-brand group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                        <Icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-white" />
                      </span>

                      <span className="relative z-10 flex-1 text-[11px] sm:text-sm font-semibold text-primary group-hover:text-white transition-colors duration-300 leading-tight">
                        {group.name}
                      </span>

                      <FileText className="relative z-10 hidden sm:block w-4 h-4 text-gray-400 group-hover:text-white/90 transition-colors duration-300 flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Note */}
            <div className="flex-shrink-0 mx-3 mb-3 sm:mx-6 sm:mb-5 flex gap-2 sm:gap-2.5 rounded-xl bg-pink-50 border border-pink-200 px-3 py-2.5 sm:px-4 sm:py-3.5">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-pink-700">
                  &quot;Shortlisted&quot;
                </span>{" "}
                students are advised to visit college between{" "}
                <span className="font-semibold">13th Aug till 19th Aug</span>{" "}
                (working days/hours) with original documents. After 19th Aug the
                waiting candidates will be called!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShortlistedModal;
