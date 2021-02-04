import Zoom from "react-reveal/Zoom";

const Testimonial = ({ user }) => {
  return (
    <Zoom>
      <li key={user.id}>
        <img src={user.avatar} alt="Person" />
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit
          eligendi, consequuntur est omnis fugit magnam itaque atque ut impedit
          similique a! Similique rem quidem officiis itaque unde delectus
          adipisci?
        </blockquote>
        <cite>
          - {user.first_name} {user.last_name}
        </cite>
      </li>
    </Zoom>
  );
};

export default Testimonial;
