import logo from "./Image/logo.png";
function Header({ setDisplayModal }) {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img className="logo" src={logo} alt="..." />

          <div className="links">
            <a href="#about">About</a>
            <a href="#feature">Apartments</a>
            <a href="#how">How It Work</a>
            <a href="#agents">Agents</a>
            <a href="#about">Contact Us</a>
          </div>

          <div className="join">
            <a href="#">Join Us</a>
            <a href="#">Getting Started</a>
          </div>

          <button
            onClick={() => {
              setDisplayModal(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="list"
            >
              <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
