import H2 from "./UI/H2";
import servicesImg from "./Image/services.jpg";
import Service from "./UI/Service";

function Services() {
  const service1Title = "Renting";
  const service1Text =
    "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence.";

  const service2Title = "Building";
  const service2Text =
    "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence.";

  const service3Title = "Selling";
  const service3Text =
    "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence.";

  return (
    <section className="services-section">
      <div className="container">
        <div className="services">
          <H2>Services</H2>
          <p>
            In this space market-facing, yet UI work flows ,<br /> or bake it
            in. Red flag we need a first agile at the end of the day.{" "}
          </p>

          <div className="services-grid">
            <img src={servicesImg} alt="services" />

            <div className="text">
              <Service title={service1Title} text={service1Text} />
              <Service title={service2Title} text={service2Text} />
              <Service title={service3Title} text={service3Text} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
