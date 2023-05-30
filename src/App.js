import react from "react";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
