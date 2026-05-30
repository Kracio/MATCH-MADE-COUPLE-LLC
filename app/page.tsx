import { Footer } from "@/components/Footer";
import { HomeContact } from "@/components/HomeContact";
import { HomeIntro } from "@/components/HomeIntro";
import { HomeReviews } from "@/components/HomeReviews";
import { IslandGuide } from "@/components/IslandGuide";
import { MotionScope } from "@/components/MotionScope";
import { Resources } from "@/components/Resources";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkWithUsPreview } from "@/components/WorkWithUsPreview";
import { siteContent } from "@/content/site-content";

export default function Home() {
  return (
    <MotionScope>
      <SiteHeader content={siteContent.header} />
      <main id="main-content" className="bg-shell text-lava" aria-label="Match Made Couple LLC homepage">
        <HomeIntro content={siteContent.intro} />
        <IslandGuide content={siteContent.islands} />
        <Resources content={siteContent.resources} />
        <WorkWithUsPreview content={siteContent.workWithUs} />
        <HomeReviews content={siteContent.reviews} />
        <HomeContact content={siteContent.contact} />
      </main>
      <Footer content={siteContent.footer} />
    </MotionScope>
  );
}
