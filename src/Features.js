import FeatureCard from "./UI/FeatureCard";
import H2 from "./UI/H2";
import featureImg1 from "./Image/features-card--1.jpg";
import featureImg2 from "./Image/features-card--2.jpg";
import featureImg3 from "./Image/features-card--3.jpg";
import featureImg4 from "./Image/features-card--4.jpg";
import featureImg5 from "./Image/features-card--5.jpg";
import featureImg6 from "./Image/features-card--6.jpg";
import Search from "./UI/Search";

function Features() {
  return (
    <section className="features-section" id="feature">
      <div className="container">
        <div className="features">
          <H2 className="features-heading">
            More Then 500+
            <br /> Appartments For Rent
          </H2>

          <div className="features-cards__container">
            <FeatureCard
              cardImg={featureImg1}
              cardHeader="Random Street, Apt B453, New York"
              cardMoney="$3500"
            />

            <FeatureCard
              cardImg={featureImg2}
              cardHeader="Random Street, Apt B453, New York"
              cardMoney="$3500"
            />

            <FeatureCard
              cardImg={featureImg3}
              cardHeader="Random Street, Apt B453, New York"
              cardMoney="$3500"
            />

            <FeatureCard
              cardImg={featureImg4}
              cardHeader="Random Street, Apt B453, New York"
              cardMoney="$3500"
            />

            <FeatureCard
              cardImg={featureImg5}
              cardHeader="Random Street, Apt B453, New York"
              cardMoney="$3500"
            />

            <FeatureCard
              cardImg={featureImg6}
              cardHeader="Random Street, Apt B453, New York"
              cardMoney="$3500"
            />
          </div>

          <div className="features-end">
            <Search />
            <button className="btn">View All Appartments</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
