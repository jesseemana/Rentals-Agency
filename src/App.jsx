import "./index.css";
import { Hero } from "./components/Hero";
import { Desc } from "./components/Desc";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { Houses } from "./components/Houses";
import { Flexibility } from "./components/Flexibility";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="">
      <Hero />
      <Desc />
      <Houses />
      <Flexibility />
      <Form />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
