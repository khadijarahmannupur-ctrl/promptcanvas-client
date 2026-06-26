import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import FeaturedPromptsSection from "@/components/FeaturedPromptsSection";
import HowItWorks from "@/components/HowItWorks";
import PlatformHighlights from "@/components/PlatformHighlights";
import TopCreators from "@/components/TopCreators";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getTopCreators } from "@/lib/api/prompts";

import { getReviewsForReviewSection } from "@/lib/api/reviews";
// import Image from "next/image";

export default async function Home() {
  const reviews = await getReviewsForReviewSection() || [];
  const creators = await getTopCreators() || [];
  return (
    <>
      <Banner></Banner>
      <FeaturedPromptsSection></FeaturedPromptsSection>
      <CustomerReviews reviews={reviews} />
      <WhyChooseUs></WhyChooseUs>
      <TopCreators creators={creators} />
      <HowItWorks></HowItWorks>
      <PlatformHighlights></PlatformHighlights>
    </>
  );
}
