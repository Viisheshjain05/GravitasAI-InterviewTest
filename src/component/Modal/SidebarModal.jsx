/** //Todo Now Features
 * 1) Manage Styles
 * 2) Links Management [react-router-dom]
 * 3) [Sepreate - Header | Content | Footer - management]
 * 4) BreadCrumbs Optional Get It From Sidebar File Into Seprate feature in it
 * 5) Create Manual header option With Premade Styles and Designs [styles, Designs, content]
 * 
*/

//* Libraries 
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

//* Utils
import Portal from "../Portal/Portal.jsx";

//* Styles
import "./Styles/SidebarModal.css";

const SidebarModal = (props) => {
  const {
    //Todo1 Minor Update Change [Save, Cancel] To Click
    //* Full Util Handler
    ManualHeader = false,
    // ManualContent = false,
    ManualFooter = false,

    //* Feature Modal Options Selector
    BtnSubmitHead,

    //* Naming Modal Values
    BtnSave = "",
    BtnCancel = "",
    HeaderTitle,
    HeaderButton,
    children,

    //* Returning Modal Values
    OnBtnSave = false,
    OnBtnCancel = false,
  } = props;

  const [ModalDisplay, setModalDisplay] = useState(
    BtnSubmitHead ? false : true
  );

  const handleSubmit = (BtnStatus) => {
    // Close Modle
    ModalDisplay && setModalDisplay(false);

    if (BtnStatus === "Cancel") {
      // Return In Case Of Option asked
      OnBtnCancel && OnBtnCancel();
    } else if (BtnStatus === "Save") {
      // Return In Case Of Option asked
      OnBtnSave && OnBtnSave();
    } else if (BtnStatus === "ModalBackdropClose") {
      ModalDisplay ? setModalDisplay(false) : setModalDisplay(true);
      OnBtnCancel && OnBtnCancel();
    }
  };

  return (
    <>
      {BtnSubmitHead && (
        //? Add your button function and connect it with BtnSubmitHead in component to connect with it
        <div
          onClick={() =>
            ModalDisplay ? setModalDisplay(false) : setModalDisplay(true)
          }
        >
          {/* //? Button or content Manage Modal Open And close */}
          {BtnSubmitHead}{" "}
        </div>
      )}

      <Portal>
        <div
          onClick={() => ModalDisplay && handleSubmit("ModalBackdropClose")}
          className={ModalDisplay ? "SM-modal-backdrop SM-in" : ""}
        ></div>

        <motion.div
          className={ModalDisplay ? "SM-modal" : "SM-modal--close"}
          animate={
            ModalDisplay
              ? { x: 0, y: 0, opacity: .96 }
              : { x: 100, y: 0, opacity: 0 }
          }
          transition={{
            delay: 0,
            default: { duration: .5 },
          }}
        >
          <div className="SM-modal--content">
            {!ManualHeader ? (
              <div className="SM-modal--header">
                <h5 className="SM-modal--header__title">
                  {/* //Todo Create Premade Styles For Manual Header  - ManualHeader?.styles  */}
                  {HeaderTitle}
                </h5>
                {/* // Todo Create Space Option For Btns And Other UTils in header */}
                <div
                  className="SM-modal--header__utilbtn"
                  onClick={() =>
                    ModalDisplay && handleSubmit("ModalBackdropClose")
                  }
                >
                  {/* //Todo Manage buttons Over Here */}
                  {HeaderButton}
                </div>
              </div>
            ) : (
              <div id="ManualHeader">{ManualHeader}</div>
            )}

            <div className="SM-modal--body">{children}</div>
            {!ManualFooter ? (
              <div className="SM-modal--footer">
                <button
                  // Todo
                  className="btn btn--green fs-4 p-1 mr-3"
                  onClick={(e) => handleSubmit(e.target.value)}
                  value="Cancel"
                >
                  {BtnCancel ? BtnCancel : "Cancel"}
                </button>

                {/*Point When Data to be Saved */}
                <button
                  // Todo
                  className="btn btn--green fs-4 p-1 "
                  onClick={(e) => handleSubmit(e.target.value)}
                  value="Save"
                >
                  {BtnSave ? BtnSave : "Save"}
                  {/* Go Forward */}
                </button>
              </div>
            ) : (
              <>
                <div className="SM-modal--footer">{ManualFooter}</div>
              </>
            )}
          </div>
        </motion.div>
      </Portal>
    </>
  );
};

SidebarModal.propTypes = {
  //* Option Btns
  BtnSubmitHead: PropTypes.object,

  //*  Custom Headers Utils
  HeaderTitle: PropTypes.object,

  //*  Custom Content Utils
  children: PropTypes.node,

  //*  Custom Footer Utils
  OnBtnSave: PropTypes.func,
  OnBtnCancel: PropTypes.func,

  //* Full Manual Util Handlers
  ManualHeader: PropTypes.exact({
    content: PropTypes.node,
    design: PropTypes.oneOf(["Auto", "Primary", "Secondary"]),
    styles: PropTypes.object,
  }),

  ManualContent: PropTypes.exact({
    content: PropTypes.node,
    design: PropTypes.node,
    styles: PropTypes.object,
  }),

  ManualFooter: PropTypes.object,
};

export default SidebarModal;
