import { useState } from "react";

import "./index.css";
import Header from "./Header";
import Home from "./Home";
import HomeText from "./HomeText";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Agents from "./Agents";
import Reverse from "./Reverse";
import Footer from "./Footer";
import Model from "./UI/Model";
function App() {
  const [displayModel, setDisplayModal] = useState(false);

  return (
    <div>
      <Header setDisplayModal={setDisplayModal} />
      <Home />
      <HomeText />
      <Features />
      <HowItWorks />
      <Services />
      <Agents />
      <Reverse />
      <Footer />
      {displayModel && <Model setDisplayModal={setDisplayModal} />}
    </div>
  );
}

export default App;
