import EventsSection from "@/components/home/EventsSection";
import FAQsSection from "@/components/home/FAQsSection";
import HeroSection from "@/components/home/HeroSection";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import StatisticsSection from "@/components/home/StatisticsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatisticsSection />
      <PrincipalMessage />
      <EventsSection />
      <TestimonialsSection />
      <FAQsSection />
    </main>
  );
}
