import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
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

  return (
    <>
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
    </>
  );
}
