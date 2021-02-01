import HoldingPhoneImg from "../assets/holding-phone.jpg";
import Zoom from "react-reveal/Zoom";

const Features = () => {
  return (
    <section id="to-features" className="features-section">
      <div className="container">
        <ul className="features-list">
          <Zoom Cascade>
            <li>Unlimited Tasks</li>
            <li>SMS Task Reminders</li>
            <li>Confetti Explosions upon Task Completions</li>
            <li>Social Media Announcements</li>
            <li>Real Time Collaboration</li>
            <li>Other awesome features</li>
          </Zoom>
        </ul>

        <img src={HoldingPhoneImg} alt="Man Holding phone" />
      </div>
    </section>
  );
};

export default Features;
