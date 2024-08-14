function Footer() {
  return (
    <footer id="about">
      <div className="container">
        <div className="footer">
          <div className="subscribe-box">
            <h2>
              Luxestate
              <br />
              Explore Real Estate
            </h2>

            <button>
              <span>Subscribe To Our Newsletter</span>
              <span>&rarr;</span>
            </button>
          </div>
          <div className="footer-grid">
            <div className="special-col">
              <h2>Luxestate</h2>
              <p>
                &copy; 2023 - Luxestate <br />
                All Rights Reserveds
              </p>
            </div>

            <div>
              <h2>Luxestate</h2>
              <button>Agents</button>
              <button>Hunters</button>
            </div>

            <div>
              <h2>Company</h2>
              <button>About</button>
              <button>FAQ</button>
              <button>Contact</button>
              <button>Social</button>
            </div>

            <div>
              <h2>Product</h2>
              <button>Appartments</button>
              <button>How It Works</button>
            </div>

            <div>
              <h2>Services</h2>
              <button>Renting</button>
              <button>Selling</button>
              <button>Building</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
