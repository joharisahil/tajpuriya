import { AllFaqs } from "@/components/sections/all-faqs";
import { FaqsJsonLd } from "@/components/seo/faqs-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Tajpuriya Agritech",
  description:
    "Frequently asked questions about Rice Liquid Glucose, Rice Protein, Maltose Dextrin Powder, Sorbitol and industrial ingredient manufacturing."
};

export default function FaqPage() {
  return (
    <>
      <FaqsJsonLd />

      <main>
        <AllFaqs />
      </main>
    </>
  );
}