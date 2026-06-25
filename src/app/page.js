import Banner from "@/components/Banner";
import CustomerReviews from "@/components/CustomerReviews";
import FeaturedPromptsSection from "@/components/FeaturedPromptsSection";
import HowItWorks from "@/components/HowItWorks";
import PlatformHighlights from "@/components/PlatformHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";

import { getReviewsForReviewSection } from "@/lib/api/reviews";
// import Image from "next/image";

export default async function Home() {
  const reviews = await getReviewsForReviewSection();
  return (
    <>
      <Banner></Banner>
      <FeaturedPromptsSection></FeaturedPromptsSection>
      <CustomerReviews reviews={reviews} />
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
      <PlatformHighlights></PlatformHighlights>
    </>
  );
}
