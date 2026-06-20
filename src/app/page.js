import Banner from "@/components/Banner";
import FeaturedPromptsSection from "@/components/FeaturedPromptsSection";
import HowItWorks from "@/components/HowItWorks";
import PlatformHighlights from "@/components/PlatformHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedPromptsSection></FeaturedPromptsSection>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
      <PlatformHighlights></PlatformHighlights>
    </>
  );
}
