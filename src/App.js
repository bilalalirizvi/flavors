import "./App.css";
import Radium, { StyleRoot } from "radium";
import { Navbar, Footer } from "./components";
import { Home, About, Menu, Contact, Services, Address } from "./screens";

function App() {
  return (
    <StyleRoot>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Contact />
      <Services />
      <Address />
      <Footer />
    </StyleRoot>
  );
}

export default Radium(App);
