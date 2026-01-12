import AboutPage from "@/components/pages/AboutPage";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the history, mission, and vision of Islamabad Model College for Girls, Humak.",
  keywords: ["About IMCG Humak", "Girls College Islamabad", "IMCG History"],
  // alternates: {
  //   canonical: "https://imcghumak.edu.pk/about",
  // },
};

export default function About() {
  return (
    <main>
      <AboutPage />
    </main>
  );
}
