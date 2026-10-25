"use client";

import { useState } from "react";
import { Phone, Mail, Flag, Building2 } from "lucide-react";

const faqItems = [
  {
    question: "What do I own when I buy a share?",
    answer:
      "You own real, deeded freehold land inside the 100+ acre estate. Each share equals 1 shotok (decimal) of registered land, executed with 100% Sub-Kabula registration in your name. You receive the official sub-kabula registered deed and an official Certificate of Share.",
  },
  {
    question: "How much does a share cost?",
    answer:
      "Share ownership starts from ৳2.50 lakh for 1 shotok (decimal) of deeded land. Flexible milestone payment plans and installment schedules are available. Contact our sales desk for current unit allocations and special promotional terms.",
  },
  {
    question: "Who manages and runs the resort operations?",
    answer:
      "Operations, facility upkeep, hotel room bookings, golf tournaments, and agricultural harvests are handled 100% hands-off for owners by Sampan Developments Ltd and Sampan Group. Owners receive passive profit distributions without management burden.",
  },
  {
    question: "Can I schedule a site visit before deciding?",
    answer:
      "Absolutely. We actively encourage prospective owners and club members to visit our 100+ acre grounds in Podunapur, Moulvibazar Sadar. We can arrange guided site tours and transport coordination from Dhaka or Sylhet.",
  },
  {
    question: "Are there prayer facilities and family-safe amenities?",
    answer:
      "Yes. The estate includes dedicated, serene, separate air-conditioned prayer rooms for men and women, kids' club play areas, 24/7 security, an on-site clinic and pharmacy, and halal farm-to-table dining.",
  },
];

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "1 Share (1 Shotok Land)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:contact@sampangolfresort.com?subject=Enquiry from ${encodeURIComponent(
      formData.name
    )}&body=Phone: ${encodeURIComponent(formData.phone)}%0AInterest: ${encodeURIComponent(
      formData.interest
    )}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = mailto;
    }, 400);
  };

  return (
    <section id="contact" className="pt-10 sm:pt-14 pb-20 sm:pb-24 bg-[#EEF1DE] text-[#134630]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="hero-reveal max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#134630] bg-[#FBFAF6] border border-[#708564]/30 px-3.5 py-1 rounded-full">
            Connect &bull; Visit &bull; Invest
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#134630] mt-3">
            Visit or enquire
          </h2>
          <p className="text-[#134630]/80 text-base sm:text-lg mt-3 leading-relaxed">
            Our advisory team is ready to welcome you at our Bashundhara corporate head office in Dhaka, or coordinate your private guided tour to Podunapur, Moulvibazar.
          </p>
        </div>

        {/* 4 Contact Channels Cards */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl border border-[#708564]/20 bg-[#FBFAF6] p-6 shadow-sm">
            <div className="size-10 rounded-xl bg-[#EEF1DE] text-[#42732E] flex items-center justify-center mb-3">
              <Phone className="size-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-[#134630] mb-2">Direct Hotline</h4>
            <div className="space-y-1 text-sm font-medium text-[#134630]/85">
              <p><a href="tel:+8801906896327" className="hover:text-[#42732E] transition-colors">+88 01906-896327</a></p>
              <p><a href="tel:+8801329669701" className="hover:text-[#42732E] transition-colors">+88 013 2966 9701</a></p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#708564]/20 bg-[#FBFAF6] p-6 shadow-sm">
            <div className="size-10 rounded-xl bg-[#EEF1DE] text-[#708564] flex items-center justify-center mb-3">
              <Mail className="size-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-[#134630] mb-2">Email &amp; Web</h4>
            <div className="space-y-1 text-sm font-medium text-[#134630]/85">
              <p><a href="mailto:contact@sampangolfresort.com" className="hover:text-[#42732E] transition-colors">contact@sampangolfresort.com</a></p>
              <p className="text-[#134630]/60 text-xs">www.sampangolfresort.com</p>
              <p className="text-[#134630]/60 text-xs">facebook.com/sampangolfresort</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#708564]/20 bg-[#FBFAF6] p-6 shadow-sm">
            <div className="size-10 rounded-xl bg-[#EEF1DE] text-[#42732E] flex items-center justify-center mb-3">
              <Flag className="size-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-[#134630] mb-2">Resort Site</h4>
            <p className="text-[#134630]/80 text-sm leading-relaxed">
              Dhaka-Sylhet Highway, Sylhet Division, Bangladesh.
            </p>
          </div>

          <div className="rounded-2xl border border-[#708564]/20 bg-[#FBFAF6] p-6 shadow-sm">
            <div className="size-10 rounded-xl bg-[#EEF1DE] text-[#134630] flex items-center justify-center mb-3">
              <Building2 className="size-5" />
            </div>
            <h4 className="font-heading text-lg font-bold text-[#134630] mb-2">Head Office</h4>
            <p className="text-[#134630]/80 text-sm leading-relaxed">
              Sampan 21st Century, House-284, Block-B, Road-1/A, Bashundhara R/A, Dhaka.
            </p>
          </div>
        </div>

        {/* Main Grid: Enquiry Form & Interactive FAQ Accordion */}
        <div className="reveal-slow grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Interactive Form */}
          <div className="lg:col-span-6 rounded-3xl border border-[#708564]/20 bg-[#FBFAF6] p-8 sm:p-10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#42732E] bg-[#EEF1DE] px-3 py-1 rounded-full font-semibold">
              Fast Response
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#134630] mt-2 mb-2">
              Send an enquiry
            </h3>
            <p className="text-[#134630]/80 text-sm mb-6">
              Fill in your details below to request the share prospectus, price breakdown, or book a guided resort visit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#134630]/80 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. Tanvir Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-[#708564]/30 bg-white px-4 py-3 text-sm text-[#134630] shadow-sm focus:border-[#42732E] focus:ring-1 focus:ring-[#42732E] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#134630]/80 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1700-000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-[#708564]/30 bg-white px-4 py-3 text-sm text-[#134630] shadow-sm focus:border-[#42732E] focus:ring-1 focus:ring-[#42732E] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#134630]/80 mb-1.5">
                  I Am Interested In
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full rounded-xl border border-[#708564]/30 bg-white px-4 py-3 text-sm text-[#134630] shadow-sm focus:border-[#42732E] focus:ring-1 focus:ring-[#42732E] transition-colors"
                >
                  <option value="1 Share (1 Shotok Land) - ৳2.50L">1 Share (1 Shotok Land) — ৳2.50 Lakh</option>
                  <option value="Multiple Shares (2-10 Shotoks)">Multiple Land Shares (2 to 10 Shotoks)</option>
                  <option value="Full Cottage / Villa Ownership">Full Luxury Cottage or Villa Ownership</option>
                  <option value="Golf & Wellness Club Membership">Golf &amp; Wellness Club Membership</option>
                  <option value="Schedule a Guided Site Visit">Schedule a Guided Site Visit to Moulvibazar</option>
                  <option value="Corporate Retreat or Tournament">Corporate Retreat or Sports Tournament</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#134630]/80 mb-1.5">
                  Your Message or Special Request
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us when you plan to visit, or questions about deed registration..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-[#708564]/30 bg-white px-4 py-3 text-sm text-[#134630] shadow-sm focus:border-[#42732E] focus:ring-1 focus:ring-[#42732E] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#42732E] py-3.5 text-xs uppercase tracking-wider font-bold text-white shadow-md hover:bg-[#134630] transition-all hover:scale-[1.01] active:scale-98"
              >
                <span>Submit Enquiry via Email</span>
                <span>→</span>
              </button>

              {submitted && (
                <div className="rounded-xl bg-[#EEF1DE] border border-[#42732E]/40 p-3 text-xs text-[#134630] font-medium text-center">
                  Thank you! Opening your email client to dispatch the enquiry directly to our management desk.
                </div>
              )}
            </form>
          </div>

          {/* Interactive FAQs Accordion */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#42732E] bg-[#EEF1DE] px-3 py-1 rounded-full font-semibold">
              Quick Answers
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#134630] mt-2 mb-2">
              Frequently asked questions
            </h3>
            <p className="text-[#134630]/80 text-sm mb-6">
              Straightforward details regarding land ownership, legal titles, pricing, and operating rules.
            </p>

            <div className="space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#708564]/20 bg-[#FBFAF6] overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-heading text-base font-bold text-[#134630] hover:bg-[#EEF1DE]/40 transition-colors"
                    >
                      <span>{item.question}</span>
                      <span className="ml-4 text-xs font-mono font-bold text-[#42732E]">
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#134630]/80 leading-relaxed border-t border-[#708564]/15">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
