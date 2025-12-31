import ContactPage from "@/components/pages/ContactPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Islamabad Model College for Girls, Humak for admissions, academics, and general inquiries.",
  keywords: [
    "Contact IMCG Humak",
    "Girls College Contact Islamabad",
    "IMCG Phone Address",
  ],
};

export default function Contact() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
