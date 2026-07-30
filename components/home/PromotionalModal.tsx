"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";

const AUTO_CLOSE_DURATION = 30000; // 30 seconds

const BANNERS = [
  {
    href: "https://eadmissions.fde.gov.pk/bs/admission",
    src: "/promo-admissions-bs.png",
    alt: "Admissions Open - BS (Urdu) - Islamabad Model College for Girls, Humak",
  },
  {
    href: "https://eadmissions.fde.gov.pk/hssc/admission",
    src: "/promo-admissions-hssc.png",
    alt: "Admissions Open - HSSC - Islamabad Model College for Girls, Humak",
  },
];

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[92vw] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close promotional modal"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-colors duration-200"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Banners */}
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
              {BANNERS.map((banner) => (
                <Link
                  key={banner.href}
                  href={banner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  // className="group relative block flex-1 basis-0 min-w-0 rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-md hover:shadow-2xl hover:ring-primary/40 transition-all duration-300 hover:-translate-y-1"
                  className="group relative block w-full md:flex-1 md:basis-0 min-w-0 rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-md hover:shadow-2xl hover:ring-primary/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[1535/1054]">
                    <Image
                      src={banner.src}
                      alt={banner.alt}
                      fill
                      sizes="(max-width: 768px) 88vw, (max-width: 1024px) 44vw, 40vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      priority
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-primary text-sm sm:text-base font-semibold shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromotionalModal;
// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { X } from "lucide-react";

// const AUTO_CLOSE_DURATION = 30000; // 30 seconds
// const ADMISSIONS_URL = "https://eadmissions.fde.gov.pk/bs/admission";

// const PromotionalModal: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const showTimer = setTimeout(() => setIsOpen(true), 500);
//     return () => clearTimeout(showTimer);
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const closeTimer = setTimeout(() => setIsOpen(false), AUTO_CLOSE_DURATION);
//     return () => clearTimeout(closeTimer);
//   }, [isOpen]);

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
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
//           onClick={() => setIsOpen(false)}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//             className="relative w-full max-w-[92vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-white"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               aria-label="Close promotional modal"
//               className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-colors duration-200"
//             >
//               <X className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>

//             {/* Clickable Promotional Image */}
//             <Link
//               href={ADMISSIONS_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setIsOpen(false)}
//               className="block relative w-full aspect-[1535/1054]"
//             >
//               <Image
//                 src="/promo-admissions.png"
//                 alt="Admissions Open - BS (Urdu) - Islamabad Model College for Girls, Humak"
//                 fill
//                 sizes="(max-width: 640px) 92vw, (max-width: 768px) 576px, (max-width: 1024px) 672px, 768px"
//                 className="object-contain"
//                 priority
//               />
//             </Link>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default PromotionalModal;
