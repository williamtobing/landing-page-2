import WatchImg from "../assets/watch.svg";
import IllustrationImg from "../assets/illustration.svg";
import Zoom from "react-reveal/Zoom";

const Hero = () => {
  return (
    <section id="to-home" className="hero">
      <div className="container">
        <Zoom>
          <div className="hero-content">
            <div className="left-col">
              <p className="subhead">It's too late to remember</p>
              <h1>A Task App That Never Remember</h1>

              <div className="hero-cta">
                <a href="/" className="primary-cta">
                  Try &amp; Pay
                </a>
                <a href="/" className="watch-video-cta">
                  <img src={WatchImg} alt="Watch a video" />
                  Watch a video
                </a>
              </div>
            </div>

            <img
              className="hero-img"
              src={IllustrationImg}
              alt="Illustration"
            />
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Hero;
