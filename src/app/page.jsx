import FQ from "@/components/FQ";
import Hero from "@/components/Hero";
import Lets from "@/components/Lets";
import Partenariat from "@/components/Partenariat";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Slogon from "@/components/Slogon";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[20vh]">
      <Hero />
      <Slogon/>
      <Services/>
      <Partenariat/>
      <Projects/>
      <Lets/>
      <FQ />
    </main>
  );
}
