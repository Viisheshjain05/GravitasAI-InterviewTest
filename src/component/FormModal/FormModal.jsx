/** //Todo New Features
 * Centered Privacy Modal
 * Animation And Designs
 *
 */

//*  Libraries
import React from "react";
import PropTypes from "prop-types";

//* Utils
import { centerModalManualHeader } from "./FormCenterOverhead.jsx";
import CenterModal from "../../util/Modal/CenterModal.jsx";

//* Styles
import "./FormModal.css";

const FormModal = (props) => {
  // const { OpenModalButton } = props;

  // useEffect(() => {
  //   document.documentElement.style.setProperty(
  //     "--formTextColor",
  //     "var(--tersiaryColor)"
  //   );

  //   return () => {
  //     document.documentElement.style.setProperty(
  //       "--formTextColor",
  //       "var(--secondaryColor)"
  //     );
  //   };
  // }, []);

  return (
    <>
      <CenterModal
        ManualHeader={centerModalManualHeader()}
        ManualFooter={<div style={{ color: "transparent" }}>-</div>}
        BtnSubmitHead={true}
      >
        <div
          style={{
            padding: "0em 1em 1em 1em",
            backgroundColor: "var(--BackColor)",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <p>Thank You For This Opportunity</p>
        </div>
      </CenterModal>
    </>
  );
};

FormModal.propTypes = {
  OpenModalButton: PropTypes.node,
  type: PropTypes.oneOf(["Fly", "Stay", "Exp"]),
};

export default FormModal;
