import FacultyPage from "@/components/pages/FacultyPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the qualified and experienced faculty members of Islamabad Model College for Girls, Humak.",
  keywords: [
    "IMCG Humak Faculty",
    "College Teachers Islamabad",
    "Girls College Faculty",
  ],
};

export default function Faculty() {
  return (
    <main>
      <FacultyPage />
    </main>
  );
}
