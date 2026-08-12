import EventsSection from "@/components/home/EventsSection";
import FAQsSection from "@/components/home/FAQsSection";
import HeroSection from "@/components/home/HeroSection";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import ShortlistedModal from "@/components/home/ShortlistedModal";
import StatisticsSection from "@/components/home/StatisticsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://imcghumak.edu.pk/",
  },
};

export default function Home() {
  return (
    <main>
      <ShortlistedModal />
      <HeroSection />
      <StatisticsSection />
      <PrincipalMessage />
      <EventsSection />
      <TestimonialsSection />
      <FAQsSection />
    </main>
  );
}
