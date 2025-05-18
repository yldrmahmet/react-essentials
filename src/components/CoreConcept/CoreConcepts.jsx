import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            title={conceptItem.title}
            description={conceptItem.description}
            image={conceptItem.image}
            key={conceptItem.title} // must be unique
          />
        ))}
        {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> 
        */}
      </ul>
    </Section>
  );
}
