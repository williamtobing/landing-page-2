import Iframe from "react-iframe";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  return (
    <section id="to-contact" className="contact-section">
      <div className="container">
        <Zoom>
          <div className="contact-left">
            <h2>Contact</h2>

            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" cols="30" rows="10" />
              <input
                className="send-message-cta"
                type="submit"
                value="Send message"
              />
            </form>
          </div>

          <div className="contact-right">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510380.95038195467!2d98.78925614548261!3d2.015026824243331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e6afe1293bcf5%3A0x3039d80b220d160!2sNorth%20Tapanuli%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1612067144219!5m2!1sen!2sid"
              className="map-iframe"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Contact;
