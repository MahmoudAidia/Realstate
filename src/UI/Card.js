function Card({ num, text }) {
  return (
    <div className="card">
      <h3>{num}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
