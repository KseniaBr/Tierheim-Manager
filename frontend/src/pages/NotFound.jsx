import React from "react";
import BackButton from "../components/buttons/BackButton";
import Section from "../components/ui/Section";

const NotFound = () => {
  return (
    <Section>
      <div>
        <p>Diese Seite konnte nicht gefunden werden.</p>
      </div>
      <BackButton />
    </Section>
  );
};

export default NotFound;
