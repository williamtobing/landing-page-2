import WatchImg from "../assets/watch.svg";
import IllustrationImg from "../assets/illustration.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="left-col">
          <p className="subhead">It's Nitty &amp; Gritty</p>
          <h1>A Task App That Doesn't Stink</h1>

          <div className="hero-cta">
            <a href="/" className="primary-cta">
              Try for free
            </a>
            <a href="/" className="watch-video-cta">
              <img src={WatchImg} alt="Watch a video" />
              Watch a video
            </a>
          </div>
        </div>

        <img className="hero-img" src={IllustrationImg} alt="Illustration" />
      </div>
    </section>
  );
};

export default Hero;
