import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  console.log("app rendered");

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
