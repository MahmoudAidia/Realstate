import H2 from "./UI/H2";
import Agent from "./UI/Agent";
import agent1 from "./Image/agent--1.jpg";
import agent2 from "./Image/agent--2.jpg";
import agent3 from "./Image/agent--3.jpg";
function Agents() {
  return (
    <section className="agents-section" id="agents">
      <div className="container">
        <div className="agents">
          <H2>Meet Our Agents</H2>
          <p>
            In this space market-facing, yet UI work flows , or bake it in. Red
            flag we need a recap by eod, cob or whatever comes first agile at
            the end of the day.{" "}
          </p>

          <div className="agents-grid">
            <Agent name="Mr. Luke Skywalker" image={agent1} />
            <Agent name="Mr. Luke Skywalker" image={agent2} />
            <Agent name="Mr. Luke Skywalker" image={agent3} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agents;
