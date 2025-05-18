import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

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

  const buttons = (
    <>
      <TabButton
        isSelected={tabContent === "components"}
        onClick={() => {
          handleSelect("components");
        }}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={tabContent === "jsx"}
        onClick={() => {
          handleSelect("jsx");
        }}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={tabContent === "props"}
        onClick={() => {
          handleSelect("props");
        }}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={tabContent === "state"}
        onClick={() => {
          handleSelect("state");
        }}
      >
        State
      </TabButton>
    </>
  );

  return (
    <Section id="examples">
       <Tabs /* buttonContainer="menu" */ buttons={buttons}> 
        {selectedTopic}
      </Tabs>
    </Section>
  );
}
