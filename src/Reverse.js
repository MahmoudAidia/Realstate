import ReverseFeature from "./UI/ReverseFeature";
import reverseImage1 from "./Image/reverse--1.jpg";
import reverseImage2 from "./Image/reverse--2.jpg";
import reverseImage3 from "./Image/reverse--3.jpg";
import { faL } from "@fortawesome/free-solid-svg-icons";
function Reverse() {
  const text =
    "In this space market-facing, yet UI work flows , or bake it in. Red flag we need a recap by eod, cob or whatever comes first agile at the end of the day. Not enough bandwidth closing these latest prospects is like putting socks on an octopus, yet due diligence";
  return (
    <section className="reverse-section">
      <div className="container">
        <div className="reverse">
          <ReverseFeature
            title="Super Awesome Add"
            text={text}
            image={reverseImage1}
            reverse={false}
          />

          <ReverseFeature
            title="Super Awesome Add"
            text={text}
            image={reverseImage2}
            reverse={true}
          />

          <ReverseFeature
            title="Super Awesome Add"
            text={text}
            image={reverseImage3}
            reverse={false}
            showMore={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Reverse;
