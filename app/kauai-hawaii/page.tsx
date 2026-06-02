import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { MotionScope } from "@/components/MotionScope";
import { siteContent } from "@/content/site-content";

import { KauaiHero } from "@/components/kauai/KauaiHero";
import { KauaiIntro } from "@/components/kauai/KauaiIntro";
import { KauaiBucketList } from "@/components/kauai/KauaiBucketList";
import { KauaiStayGuide } from "@/components/kauai/KauaiStayGuide";
import { KauaiRegions } from "@/components/kauai/KauaiRegions";
import { KauaiForests } from "@/components/kauai/KauaiForests";

export const metadata = {
  title: "Kaua'i — The Garden Isle | Match Made Couple",
  description: "Five million years in the making. Discover bucket-list experiences, best hikes, and local spots in Kaua'i.",
};

export default function KauaiPage() {
  return (
    <MotionScope>
      <SiteHeader content={siteContent.header} forceSolid={true} />
      <main className="bg-shell text-lava overflow-x-hidden">
        <KauaiHero />
        <KauaiIntro />
        <KauaiBucketList />
        <KauaiStayGuide />
        <KauaiRegions />
        <KauaiForests />
      </main>
      <Footer content={siteContent.footer} />
    </MotionScope>
  );
}
