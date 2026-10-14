import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Visit Grounds & Sales Enquiries",
  description:
    "Schedule your guided site tour to Podunapur, Moulvibazar Sadar or visit our corporate head office in Bashundhara, Dhaka. Phone hotlines and FAQs.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <ContactSection />
    </div>
  );
}
