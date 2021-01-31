import HoldingPhoneImg from "../assets/holding-phone.jpg";

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <ul>
          <li>Unlimited Tasks</li>
          <li>SMS Task Reminders</li>
          <li>Confetti Explosions upon Task Completions</li>
          <li>Social Media Announcements</li>
          <li>Real Time Collaboration</li>
          <li>Other awesome features</li>
        </ul>

        <img src={HoldingPhoneImg} alt="Man Holding phone" />
      </div>
    </section>
  );
};

export default Features;
