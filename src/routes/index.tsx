import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Creators } from "@/components/Creators";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dart Marketing — Precision Influence for the Baltic Market" },
      {
        name: "description",
        content:
          "Dart Marketing Agency: data-driven influencer marketing, UGC production and performance scaling for the Lithuanian and Baltic market.",
      },
      { property: "og:title", content: "Dart Marketing — Precision Influence for the Baltic Market" },
      {
        property: "og:description",
        content:
          "Influencer marketing, UGC and performance scale. 300k+ monthly reach, 17+ vetted creators, 8.5% avg engagement.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <ProblemSolution />
      <Creators />
      <Services />
      <Process />
      <Booking />
      <Footer />
    </main>
  );
}
