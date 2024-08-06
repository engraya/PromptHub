import { siteConfig } from "@/config/site";
import TemplateCollection from "./_components/collection";
import Hero from "@/components/Hero/Hero";
import Faq from "@/components/FAQ/Faq";
import ButtomBanner from "@/components/ButtomBanner/ButtomBanner";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Reviews/Reviews";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <Features/>
      <Reviews/>
      <HowItWorks/>
      <Faq/>
      <ButtomBanner/>
    </main>
  );
}
