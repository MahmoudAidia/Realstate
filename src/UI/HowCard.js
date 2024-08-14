import "../index.css";
function HowCard({ num, title, text, link, special }) {
  return (
    <div className={`how-card ${special}`}>
      <h2>{num}</h2>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" className={special}>
        {link}
      </a>
    </div>
  );
}

export default HowCard;
