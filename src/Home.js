import Contact from "./UI/Contact";
import Search from "./UI/Search";
function Home() {
  return (
    <section>
      <div className="container">
        <div className="home">
          <div className="white-space"></div>
          <div className="home-img">
            <h1>
              Find Your New <br /> Modern Appartment
            </h1>
            <Search className="home" />
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
