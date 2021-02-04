import Testimonial from "./Testimonial";

const Testimonials = ({ users }) => {
  return (
    <section id="to-testimonial" className="testimonials-section">
      <div className="container">
        <ul>
          {users.map((user) => (
            <Testimonial user={user} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
