import Header from "./components/Header/Header";
import Section from "./components/Section";

function App() {
  console.log("app rendered");

  return (
    <>
      <Header />
      <main>
        <Section title="Time to get started!" id="core-concepts" />
        <Section title="Examples" id="examples" />
      </main>
    </>
  );
}

export default App;
