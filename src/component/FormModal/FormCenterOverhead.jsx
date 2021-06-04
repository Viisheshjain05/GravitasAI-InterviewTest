import { Link } from "react-router-dom";
import "./FormCenterOverhead.css";
// import Ximage from "../../../assets/img/x.png";

// import PrivacyIcon from "./privacy-icon.svg";

export const centerModalManualFooter = () => {
  return (
    <>
      <Link to="/Newslatter" style={{ fontSize: "22px" }}>
        Newslatter
      </Link>
      <div>|</div>
      <Link to="/Contact" style={{ fontSize: "22px" }}>
        Contact
      </Link>{" "}
    </>
  );
};

export const centerModalManualHeader = (props) => {
  // Todo Return Name On Based Of User Auth True Or not

  return (
    <>
      
        <div
          className="form-modal-overhead--header"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "var(--headingColor)",
            fontWeight: "700",
          }}
        >
          {" "}
          {/* <Link */}
            {/* // to={`get-in-touch/${FormName === "Exp" ? "Experiences" : FormName}`} */}
          {/* > */}
          
          Gravitas Ai 2nd round Interview
          {/* </Link> */}
        </div>

      {/* <img
        className="modal-overhead--header__coverimg"
        src={PrivacyIcon}
        alt="icon"
      /> */}
    </>
  );
};
