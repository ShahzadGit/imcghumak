import AdmissionsPage from "@/components/pages/AdmissionsPage";
import Sample from "@/components/pages/Sample";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions at Islamabad Model College for Girls, Humak. Learn about eligibility criteria, admission process, and important dates.",
  keywords: [
    "IMCG Humak Admissions",
    "Girls College Admissions Islamabad",
    "IMCG Admission Process",
  ],
};

export default function Admissions() {
  return (
    <main>
      <AdmissionsPage />
    </main>
  );
}
