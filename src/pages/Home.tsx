import { usePageMeta } from "../hooks/usePageMeta";
import { Hero } from "../components/sections/Hero";
import { ServiceCards } from "../components/sections/ServiceCards";
import { CompanyIntro } from "../components/sections/CompanyIntro";
import { IndustriesGrid } from "../components/sections/IndustriesGrid";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { CTABanner } from "../components/sections/CTABanner";
import { ContactPreview } from "../components/sections/ContactPreview";
import { ScrollPage } from "../components/ui/ScrollPage";

export function Home() {
  usePageMeta({
    title: "Cleanroom Solutions",
    description:
      "KEMMAX delivers end-to-end cleanroom solutions for industries where precision and purity are non-negotiable. Design, supply, installation & validation.",
  });

  return (
    <>
      <Hero />
      <ServiceCards />
      
      <ScrollPage>
        <CompanyIntro />
      </ScrollPage>
      
      <ScrollPage>
        <IndustriesGrid />
      </ScrollPage>
      
      <ScrollPage>
        <FeaturedProducts />
      </ScrollPage>
      
      <ScrollPage>
        <WhyChooseUs />
      </ScrollPage>
      
      <ScrollPage>
        <CTABanner />
      </ScrollPage>
      
      <ScrollPage>
        <ContactPreview />
      </ScrollPage>
    </>
  );
}
