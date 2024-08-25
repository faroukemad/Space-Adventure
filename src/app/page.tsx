
import Hero from "@/app/components/main/Hero";
import Skills from "./components/main/Space";
import Encryption from "./components/main/Documentary";
import Projects from "./components/main/Missions";

export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <Skills/>
        <Encryption/>
        <Projects/>
      </div>
    </main>
  );
}
