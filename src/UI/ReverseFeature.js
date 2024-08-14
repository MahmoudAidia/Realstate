import React from "react";
import Address from "./Address";
function ReverseFeature({ image, title, text, reverse, showMore }) {
  return (
    <div className="reverse-grid">
      {reverse ? (
        <React.Fragment>
          <div className="reverse-img-container">
            <img src={image} alt="Reverse" />
            <Address address="Australlia" />
          </div>

          <div className="reverse-text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="reverse-text">
            <h2>{title}</h2>
            <p>{text}</p>
            {showMore && <button className="show-more">Show Me More</button>}
          </div>
          <div className="reverse-img-container">
            <img src={image} alt="Reverse" />
            <Address address="Germany" />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ReverseFeature;
