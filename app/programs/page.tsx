import ProgramsPage from "@/components/pages/ProgramsPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore academic programs offered at IMCG Humak including intermediate and degree-level education for girls.",
  keywords: [
    "IMCG Humak Programs",
    "Intermediate Programs Islamabad",
    "hssc",
    "adp",
    "bs(urdu)",
    "Girls College Academics",
  ],
};

export default function Home() {
  return (
    <main>
      <ProgramsPage />
    </main>
  );
}
