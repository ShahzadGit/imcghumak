"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const AUTO_CLOSE_DURATION = 30000; // 30 seconds
const ADMISSIONS_URL = "https://eadmissions.fde.gov.pk/bs/admission";

const PromotionalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeTimer = setTimeout(() => setIsOpen(false), AUTO_CLOSE_DURATION);
    return () => clearTimeout(closeTimer);
  }, [isOpen]);

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[92vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close promotional modal"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-colors duration-200"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Clickable Promotional Image */}
            <Link
              href={ADMISSIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block relative w-full aspect-[1535/1054]"
            >
              <Image
                src="/promo-admissions.png"
                alt="Admissions Open - BS (Urdu) - Islamabad Model College for Girls, Humak"
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 768px) 576px, (max-width: 1024px) 672px, 768px"
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromotionalModal;
