import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className=" home-section container-fluid">
          <div className="welcome-note container">
            <h1 className="con">Welcome</h1>
            <div className="welcome-content">
              <p>
                Imagine waking up to a job that lifts you up and transports you
                to a different world.
              </p>
              <p>
                A world populated with a billion heartfelt feelings and stories
                etched ceremoniously in magic, love and joie de vivre.
              </p>
              <p>
                Perfect with its Disney-like happy endings, sworn vows and the
                promises of forever. This is our world.
              </p>
              <p> The Wedding Story world!</p>
            </div>
          </div>
          <br></br>
        </div>
      </div>
      <div className="second-home-section container-fluid">
        <p>
          " Love stories, fleeting yet timeless, weave the fabric of our lives. 
        </p>
        <p>In their embrace, time pauses, offering a glimpse of eternity in moments that redefine our existence. "</p>
        <h6>- Nishchay Srivastava -</h6>
      </div>
      <div className="third-home-section container-fluid">
        <h5>What We Love ?</h5>
      </div>
      <div className="forth-home-section container-fluid">
        <p>
          We are die-hard, hopeless romantics at heart and, photographers by
          qualification.
        </p>
        <p>
          We love travelling all across the world to film the most important day
          of your life. Narrating your wedding{" "}
        </p>
        <p>story through our lenses is a passion we all share as a team.</p>
      </div>

      <div className="fifth-home-section container-fluid">
        <h5> Do You Believe ?</h5>
      </div>

      <div className="sixth-home-section container-fluid">
        <p>
          We believe that marriages are a promise of forever, synonymous to
          “…and they lived happily ever after.”
        </p>
        <p>
          We are here to encapsulate your "happily ever after" onto the screen
          just as magically as you had imagined.
        </p>
      </div>

      <div className="seventh-home-section container-fluid">
        <h5>What We Do ?</h5>
      </div>
      <div className="eight-home-section container-fluid">
        <p>
          We document handpicked elements and moments that are packed with love,
          to render your wedding film as{" "}
        </p>
        <p>illustrious as a contemporary cinematic record.</p>
        <p>
          The footage is edited meticulously to provide you with an everlasting
          treasured testament of your dream
        </p>
        <p>
          story. The ageless quality of our images complements the energy of our
          films.
        </p>

        <hr></hr>
        <br></br>
      </div>
      <Footer />
    </>
  );
};

export default Home;
