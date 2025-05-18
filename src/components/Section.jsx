import CoreConcepts from "./CoreConcept/CoreConcepts";
import Examples from "./Examples";

export default function Section({ title, id }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {id === "core-concepts" && <CoreConcepts />}
      {id === "examples" && <Examples />}
    </section>
  );
}
