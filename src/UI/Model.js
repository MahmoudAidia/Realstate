function Model({ setDisplayModal }) {
  return (
    <div
      className="overlay"
      onClick={() => {
        setDisplayModal(false);
      }}
    >
      <div className="modal">
        <button
          onClick={() => {
            setDisplayModal(false);
          }}
        >
          X
        </button>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#feature">Apartments</a>
          </li>
          <li>
            <a href="#how">How It Work</a>
          </li>
          <li>
            <a href="#agents">Agents</a>
          </li>
          <li>
            <a href="#about">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Model;
