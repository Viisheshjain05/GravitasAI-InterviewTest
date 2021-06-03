import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/logo2_blue_background.png";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={LogoImg} alt="" />
    </Link>
  );
};
export default Logo;
