import H2 from "./UI/H2";
import HowCard from "./UI/HowCard";
function HowItWorks() {
  const card1Title = "01 Find Your Location";
  const card1Text =
    "In this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day. ";
  const card1Link = "Find Location";

  const card2Title = "01 Find Appartment";
  const card2Text =
    "n this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.";
  const card2Link = "Find Location";

  const card3Title = "03 Make Contact";
  const card3Text =
    "n this space market-facing, yet UI work flows , or bake it in. Red flag we neef the day.";
  const card3Link = "Make Contact";

  return (
    <section className="howItWorks-section" id="how">
      <div className="container">
        <div className="howItWorks">
          <H2>How It Works?</H2>
          <p>
            In this space market-facing, yet UI work flows , or bake it in. Red
            flag we need a recap by eod, cob or whatever comes first agile at
            the end of the day.
          </p>

          <div className="howItWorks-card__container">
            <HowCard
              num="01"
              title={card1Title}
              text={card1Text}
              link={card1Link}
              special="special"
            />
            <HowCard
              num="02"
              title={card2Title}
              text={card2Text}
              link={card2Link}
            />
            <HowCard
              num="03"
              title={card3Title}
              text={card3Text}
              link={card3Link}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
