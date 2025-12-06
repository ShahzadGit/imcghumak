"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Calendar, Clock } from "lucide-react";

interface EventProps {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
}

interface EventsSectionProps {
  className?: string;
}

const EventsSection: React.FC<EventsSectionProps> = ({ className = "" }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Auto-play plugin configuration with fade effect
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  // FUTURE: Replace with dynamic data from database/API
  const events: EventProps[] = [
    {
      id: 1,
      title: "Congratulations to Our Champions!",
      description:
        "We are proud to announce that Hafsa, Khadija, Kashmala, and Maryam have secured first position in the STEM Activities Competition held at ICB G-6.",
      date: "Nov 15, 2025",
      time: "10:00 AM - 4:00 PM",
      image: "/scienceExi.jpeg", // Replace with actual event images
    },
    {
      id: 2,
      title:
        "Essay Writing Competition at IMCG Humak--In Connection with Iqbal Day",
      description:
        "In commemoration of Iqbal Day, an Essay Writing Competition was held at IMCG, Humak on the thought-provoking topic---The Rule of Machines is Death to the Heart---",
      date: "Nov 15, 2025",
      time: "10:00 AM - 4:00 PM",
      image: "/essayWriting.jpeg", // Replace with actual event images
    },
    {
      id: 3,
      title: "Tree Plantation",
      description:
        "By increasing green spaces, tree plantation also helps combat climate change and makes our surroundings more beautiful.",
      date: "April 5, 2025",
      time: "9:00 AM - 5:00 PM",
      image: "/treeplantation1.jpeg", // Replace with actual event images
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-10 md:py-12 overflow-hidden ${className}`}
      aria-label="Events and latest news"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Small Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-brand" />
            Stay Updated
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Events & Latest in IMCG, Humak
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
              {events.map((event, index) => (
                <CarouselItem key={event.id} className="pl-4">
                  {/* Event Slide Container with Fade Animation - Fixed Height */}
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-opacity duration-700 ease-in-out h-[500px] lg:h-[450px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                      {/* Left Column - Event Details with Gradient Background */}
                      <div className="bg-gradient-brand p-6 md:p-8 lg:p-10 flex flex-col justify-center h-full">
                        {/* Event Meta Information */}
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>

                        {/* Event Title */}
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                          {event.title}
                        </h3>

                        {/* Decorative Line */}
                        <div className="w-20 h-1 bg-white/40 rounded-full mb-4" />

                        {/* Event Description */}
                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                          {event.description}
                        </p>

                        {/* Call-to-Action Button */}
                        <div>
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-lg">
                            Learn More
                            <svg
                              className="w-5 h-5"
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
                          </button>
                        </div>

                        {/* Event Number Indicator */}
                        <div className="mt-4 text-white/40 text-sm font-medium">
                          Event {index + 1} of {events.length}
                        </div>
                      </div>

                      {/* Right Column - Event Image */}
                      <div className="relative h-full min-h-[250px] lg:min-h-0">
                        {/* Placeholder gradient for when no image is available */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />

                        {/* FUTURE: Replace placeholder with actual event images */}
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          quality={90}
                        />

                        {/* Gradient Overlay for Visual Interest */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="left-4 bg-white hover:bg-black hover:text-white transition-all duration-300 shadow-lg opacity-40" />
            <CarouselNext className="right-4 bg-white hover:hover:bg-black hover:text-white transition-all duration-300 shadow-lg opacity-40" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
