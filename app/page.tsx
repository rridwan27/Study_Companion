import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="my-3">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />

        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Language"
          subject="English Literature"
          duration={45}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section mt-10">
        <CompanionList
          title="Recently Completed Lessons"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </div>
  );
};

export default Page;
