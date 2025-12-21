"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  id: string;
  question: string;
  answer: string;
  link?: string;
}

interface FAQsSectionProps {
  className?: string;
}

const FAQsSection: React.FC<FAQsSectionProps> = ({ className = "" }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // FUTURE: Replace with dynamic data from database/API
  const faqs: FAQProps[] = [
    {
      id: "faq-1",
      question: "What is the admission process for IMCG Humak?",
      answer:
        "The admission process begins with submitting an online application form along with required documents including previous academic records, CNIC/B-Form, and passport-size photographs. After document verification, students appear for an entrance test followed by a merit-based selection.",
      link: "/admissions",
    },
    {
      id: "faq-2",
      question: "What programs and subjects are offered at IMCG Humak?",
      answer:
        "IMCG Humak offers comprehensive programs in Pre-Medical, Pre-Engineering, Computer Science, and Humanities groups. We provide quality education in subjects including Biology, Chemistry, Physics, Mathematics, Computer Science, and various elective subjects.",
      link: "/programs",
    },
    {
      id: "faq-3",
      question: "What facilities are available for students?",
      answer:
        "Our institution is equipped with modern facilities including well-furnished classrooms, advanced science and computer laboratories, a comprehensive library with digital resources, sports facilities, and a dedicated auditorium for events.",
      link: "/facilities",
    },
    {
      id: "faq-4",
      question: "Are there any scholarship or financial aid opportunities?",
      answer:
        "Yes, IMCG Humak offers merit-based scholarships for outstanding students who demonstrate exceptional academic performance. Additionally, we provide need-based financial assistance to deserving students from economically disadvantaged backgrounds.",
    },
    {
      id: "faq-5",
      question: "What extracurricular activities are available?",
      answer:
        "We believe in holistic education and offer a wide range of extracurricular activities including sports competitions, debates and public speaking clubs, science exhibitions, cultural events, literary societies, and community service programs.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-10 md:py-12 overflow-hidden ${className}`}
      aria-label="Frequently Asked Questions"
    >
      {/* Background with Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(var(--color-primary)) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(var(--color-primary)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          {/* Small Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-brand" />
            FAQs
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Top Answered Questions
          </h2>
        </motion.div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-none overflow-hidden"
              >
                {/* Left Gradient Border (Always Visible) */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand" />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Question/Trigger */}
                  <AccordionTrigger className="px-5 py-4 text-left hover:no-underline group/trigger">
                    <span className="text-sm md:text-base font-semibold text-gray-900 pr-4 group-hover/trigger:text-primary transition-colors duration-200">
                      {faq.question}
                    </span>
                  </AccordionTrigger>

                  {/* Answer/Content */}
                  <AccordionContent className="px-5 pb-4 pt-1">
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3">
                      {faq.answer}
                    </p>
                    {faq.link && (
                      <a
                        href={faq.link}
                        className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:text-pink-600 font-medium transition-colors duration-200"
                      >
                        Read more
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    )}
                  </AccordionContent>
                </motion.div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Optional: Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-full hover:bg-gradient-brand-hover transition-all duration-300 transform hover:scale-105 focus-ring-accent shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsSection;
