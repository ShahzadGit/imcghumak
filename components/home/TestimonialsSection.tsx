"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  title: string;
  designation: string;
  quote: string;
  image: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className = "",
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Auto-play plugin configuration
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  // FUTURE: Replace with dynamic data from database/API
  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Fatima Zahra",
      title: "Graduate Student",
      designation: "Computer Science Major",
      quote:
        "The mentorship and rigorous academic environment at IMCG Humak strengthened my foundation, enabling me to excel in higher education and prepare for exciting professional challenges in the tech industry.",
      image: "/placeholder-student-1.jpg", // Replace with actual images
    },
    {
      id: 2,
      name: "Ayesha Khan",
      title: "Pre-Medical Student",
      designation: "Biology & Chemistry Specialist",
      quote:
        "IMCG Humak&apos; dedicated faculty and well-equipped laboratories provided me with hands-on learning experiences. The practical knowledge prepared me to tackle challenges and pursue my dream of becoming a doctor.",
      image: "/placeholder-student-2.jpg", // Replace with actual images
    },
    {
      id: 3,
      name: "Zainab Ahmed",
      title: "Graduate Student",
      designation: "Mathematics & Physics",
      quote:
        "The flexible learning environment and advanced curriculum at IMCG Humak enhanced my analytical skills and research capabilities, preparing me to excel in both academic and technical fields.",
      image: "/placeholder-student-3.jpg", // Replace with actual images
    },
    {
      id: 4,
      name: "Maryam Hassan",
      title: "Engineering Student",
      designation: "Applied Sciences",
      quote:
        "IMCG Humak instilled in me the confidence and skills needed to pursue engineering. The quality education and supportive environment helped me achieve my academic goals and professional aspirations.",
      image: "/placeholder-student-4.jpg", // Replace with actual images
    },
    {
      id: 5,
      name: "Sana Malik",
      title: "Graduate Student",
      designation: "Arts & Humanities",
      quote:
        "The holistic education approach at IMCG Humak nurtured my creativity and critical thinking. The experienced faculty guided me to explore my passions while maintaining academic excellence.",
      image: "/placeholder-student-5.jpg", // Replace with actual images
    },
    {
      id: 6,
      name: "Hira Imran",
      title: "Graduate Student",
      designation: "Social Sciences",
      quote:
        "IMCG Humak provided me with a solid foundation in social sciences and research methodologies. The supportive community and quality education prepared me for higher studies and meaningful contributions to society.",
      image: "/placeholder-student-6.jpg", // Replace with actual images
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-10 md:py-12 overflow-hidden bg-gray-50 ${className}`}
      aria-label="Student testimonials"
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Small Accent Text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-brand" />
            Testimonials
          </div>

          {/* Main Heading with Gradient Underline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories From Our Alumni
          </h2>
        </motion.div>

        {/* Carousel Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  {/* Testimonial Card with Gradient Border */}
                  <div className="relative h-full">
                    {/* Gradient Border Effect - Top, Left and Bottom (always visible) */}
                    <div className="absolute inset-0 bg-gradient-brand rounded-2xl" />
                    <div className="absolute top-[3px] right-0 bottom-[3px] left-[3px] bg-white rounded-2xl" />

                    {/* Card Content */}
                    <div className="relative bg-white rounded-2xl p-6 md:p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote
                          className="w-8 h-8 text-gray-300"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                        {testimonial.quote}
                      </p>

                      {/* Student Profile Section */}
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        {/* Profile Image */}
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                          {/* Placeholder gradient for when no image */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />

                          {/* FUTURE: Replace with actual student images */}
                          {/* <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          /> */}

                          {/* Placeholder Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-10 h-10 text-white opacity-60"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Student Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base md:text-lg font-bold text-gray-900 truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 truncate">
                            {testimonial.title}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                            {testimonial.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="left-4 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg opacity-40" />
            <CarouselNext className="right-4 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg opacity-40" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
