import PersonImg from "../assets/person.jpg";

const Testimonial = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <ul>
          <li>
            <img src={PersonImg} alt="Person" />
            <blockquote>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              maxime itaque eos error illum dicta, doloremque rem, repellendus
              delectus praesentium, incidunt ullam! Doloribus reiciendis sint
              autem eius quisquam possimus tenetur!
            </blockquote>
            <cite>- Jane Doe</cite>
          </li>
          <li>
            <img src={PersonImg} alt="Person" />
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              tempore sapiente dignissimos nemo doloremque ducimus quia dolorum
              error ea reiciendis, architecto ut, ullam saepe. Corporis omnis
              voluptatibus eveniet libero adipisci.
            </blockquote>
            <cite>- Jane Doe</cite>
          </li>
          <li>
            <img src={PersonImg} alt="Person" />
            <blockquote>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates dolores excepturi unde numquam, iusto animi dolor
              mollitia provident, nam inventore beatae hic odio? Quasi, earum
              magnam. Beatae maiores architecto culpa!
            </blockquote>
            <cite>- Jane Doe</cite>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
