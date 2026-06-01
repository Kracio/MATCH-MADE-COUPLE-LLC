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
        <div className="relative bg-[#FDFCF8]">
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] [background-image:linear-gradient(90deg,rgb(79_124_120)_1px,transparent_1px),linear-gradient(0deg,rgb(47_79_62)_1px,transparent_1px)] [background-size:46px_46px]"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <WorkWithUsPreview content={siteContent.workWithUs} />
            <HomeReviews content={siteContent.reviews} />
          </div>
        </div>
        <HomeContact content={siteContent.contact} />
      </main>
      <Footer content={siteContent.footer} />
    </MotionScope>
  );
}
