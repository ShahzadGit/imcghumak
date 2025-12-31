import FacilitiesPage from "@/components/pages/FacilitiesPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Facilities",
  description:
    "IMCG Humak offers modern facilities including science labs, library, sports grounds, and IT resources.",
  keywords: [
    "IMCG Humak Facilities",
    "College Library Islamabad",
    "Girls College Labs",
  ],
};

export default function Facilities() {
  return (
    <>
      <FacilitiesPage />
    </>
  );
}
