import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sample = () => {
  return (
    <div>
      This is a sample component/route. It has an icon which it imports from a
      third party module. So it only downloads the vendor for icon and the code
      for the component itself only when this component is rendered for the
      first time (then it caches them).
      <br />
      <FaAngleUp size={90} />
      <br />
      <Link to="/">Go Back?</Link>
    </div>
  );
};

export default Sample;
