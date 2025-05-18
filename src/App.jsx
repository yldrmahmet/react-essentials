import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    // selectedButton -> "components", "jsx", "props", "state"
    setTabContent(selectedButton);
  }

  // sayfa ilk yüklendiğinde, tabContent undefined
  // when page is first loaded, tabContent is undefined
  let selectedTopic = <p>Please Select a topic to start learning React</p>;

  if (tabContent) {
    selectedTopic = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  console.log("app rendered");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, key) => (
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
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
