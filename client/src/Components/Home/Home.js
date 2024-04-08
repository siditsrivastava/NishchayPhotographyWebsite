import gsap from 'gsap';
import { default as React, useEffect, useRef } from "react";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import Marquee from "../Marquee/Marquee";
import Photo from "../Photos/Photo";
// import Stories from '../Stories/Stories';
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {

  
  const LanRef = useRef([]);
    

  useEffect(() => {
  const tl = gsap.timeline({delay:1});
  LanRef.current.forEach((el, index) => {
      tl.fromTo(el, { opacity: 0, x: "-100" }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, index * 0.5);
  });
}, []);
  return (
    <>
      <Header />
      <div>
        <div className=" home-section container-fluid">
          <div className="welcome-note container">
            <h1 className="con text-[5rem]">Welcome</h1>
            <div className="welcome-content text-[2rem]">
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
          <div className="  Line border-t-2 border-white-490 mt-[10rem] flex justify-between p-4 lg:text-xl sm: text-[.7rem] ">
          <h2  ref={(el) => (LanRef.current[0] = el)}  className='markus  xl:3xl text-white'> Every click, a love story; every frame, a treasure. 💖📸</h2>
            <button className="text-white">scroll</button>
          </div>
          <br></br>
        </div>
      </div>
      <div className="second-home-section container-fluid">
        <p>हर तस्वीर एक कहानी का हिस्सा है, जो शब्दों के बिना सुनाई जाती है।</p>
        <p>Every photo is a part of story which heard without words.</p>
        <h6>- Nishchay Srivastava -</h6>
      </div>
      <div className="third-home-section container-fluid">
        <h5>What We Love ?</h5>
      </div>

      <Marquee />

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
        <br />
        <br />
        <br />
        <hr></hr>
        <br></br>
      </div>
      <Photo />
      <hr></hr>
      {/* <Stories/> */}
      <hr></hr>
      <h1 className="testimonial text-[3rem] mt-[3rem]">TESTIMONIAL</h1>
      <Testimonial />
      <Footer />
      
    </>
  );
};

export default Home;
