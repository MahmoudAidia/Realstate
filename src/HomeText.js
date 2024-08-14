import Card from "./UI/Card";
import H2 from "./UI/H2";

function HomeText() {
  return (
    <div className="container">
      <div className="home-text__container">
        <div className="text">
          <H2>
            Our’s Company
            <br /> Statistics
          </H2>
          <p>
            In this space market-facing, yet UI work flows , or bake it in. Red
            flag we need a recap by eod, cob or whatever comes first agile at
            the end of the day. Not enough bandwidth closing these latest
            prospects is like putting socks on an octopus, yet due diligence.
          </p>
          <p>
            We need to get all stakeholders up to speed and in the right place
            hard stop, or technologically savvy or pre launch. Pro-sumer
            software commitment to the cause offline this discussion and wiggle
            room blue sky. Beef up teams were able to drive adoption and
            awareness. Screw the pooch killing it.
          </p>
        </div>

        <div className="cards-container">
          <Card num="784" text="Appartments" />
          <Card num="3854" text="Clients" />
          <Card num="24" text="Employee" />
          <Card num="14" text="Awards" />
        </div>
      </div>
    </div>
  );
}

export default HomeText;
