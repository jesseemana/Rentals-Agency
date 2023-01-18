import "./index.css";
import { Hero } from "./components/Hero";
import { Desc } from "./components/Desc";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { Houses } from "./components/Houses";
import { Flexibility } from "./components/Flexibility";

function App() {
  return (
    <div className="">
      <Hero />
      <Desc />
      <Houses />
      <Flexibility />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
