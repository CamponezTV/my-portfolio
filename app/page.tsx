"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa"
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { useLanguage } from "./language-provider";
import { translations } from "@/locales/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { name: t.nav.about, link: "#about" },
    { name: t.nav.projects, link: "#projects" },
    { name: t.nav.testimonials, link: "#testimonials" },
    { name: t.nav.contact, link: "#contact" },
  ];

  return (
    <main className="overflow-clip relative bg-white dark:bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
