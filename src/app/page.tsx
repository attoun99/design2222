import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Catalogue } from "@/components/Catalogue";
import { Why } from "@/components/Why";
import { Factory } from "@/components/Factory";
import { Founders } from "@/components/Founders";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Marquee />
      <Services />
      <Catalogue />
      <Why />
      <Factory />
      <Founders />
      <ContactCTA />
    </>
  );
}
