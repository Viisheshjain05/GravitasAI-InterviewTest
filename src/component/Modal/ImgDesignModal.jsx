/** //Todo Now Features
 * 1) Connect All Files With Center Modal
 * 2) Manage Styles
 * 3)
 * 4)
 */

//* Libraries
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

//* Utils
import Portal from "../Portal/Portal.jsx";

//* Styles
import "./Styles/ImgDesignModal.css";
import classNames from "classnames";

const ImgDesignModal = (props) => {
  const {
    //Todo1 Minor Update Change [Save, Cancel] To Click
    //* Full Util Handler
    ManualHeader = false,
    // ManualContent = false,
    ManualFooter = false,

    //* Feature Modal Options Selector
    BtnSubmitHead,

    // Modal Open will Delay With this sec
    OpenModalDelay = 0,

    //* Return Modal State
    GetModalState = "",

    //* Naming Modal Values
    BtnSave = "",
    BtnCancel = "",
    HeaderTitle = "",
    HeaderButton,
    children,

    //* Returning Modal Values
    OnBtnSave = false,
    OnBtnCancel = false,
  } = props;

  const [ModalDisplay, setModalDisplay] = useState(
    BtnSubmitHead ? false : true
  );

  useEffect(() => {
    //* Sending State Back To page
    GetModalState && GetModalState(ModalDisplay);
  }, [ModalDisplay, GetModalState]);

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
            ModalDisplay
              ? setModalDisplay(false)
              : setTimeout(() => {
                  setModalDisplay(true);
                }, OpenModalDelay)
          }
        >
          {/* //? Button or content Manage Modal Open And close */}
          {BtnSubmitHead}{" "}
        </div>
      )}

      <Portal>
        <motion.div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            zIndex: "1045",
            height: "100%",
            width: "100%",
          }}
          className={!ModalDisplay ? "DM-modal--close" : ""}
          animate={
            ModalDisplay ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }
          }
          transition={{
            delay: 0,
            default: { duration: 0.5 },
          }}
        >
          <div
            onClick={() => ModalDisplay && handleSubmit("ModalBackdropClose")}
            className={ModalDisplay ? "DM-modal-backdrop" : ""}
          ></div>

          <div
            className={classNames(
              ModalDisplay && "DM-modal",
              !ModalDisplay && "DM-modal--close"
            )}
          >
            <div className="DM-modal--content">
              {!ManualHeader ? (
                <div className="DM-modal--header">
                  <h5 className="DM-modal--header__title">
                    {/* //Todo Create Premade Styles For Manual Header  - ManualHeader?.styles  */}
                    {HeaderTitle}
                  </h5>
                  {/* // Todo Create Space Option For Btns And Other UTils in header */}
                  <div
                    className="DM-modal--header__utilbtn"
                    onClick={() =>
                      ModalDisplay && handleSubmit("ModalBackdropClose")
                    }
                  >
                    {/* //Todo Manage buttons Over Here */}
                    {HeaderButton}
                  </div>
                </div>
              ) : (
                <div id="center-modal--manual__header">
                  <div className="DM-modal-mobile-close" style={{}}>
                    <div className="DM-modal-desktop-open">{ManualHeader}</div>
                    <div
                      className="DM-modal-mobile-close form-close-btn"
                      onClick={() =>
                        ModalDisplay && handleSubmit("ModalBackdropClose")
                      }
                    >
                      {" "}
                    </div>
                  </div>{" "}
                </div>
              )}

              <div className="DM-modal--body">{children}</div>
              {!ManualFooter ? (
                <div className="DM-modal--footer">
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
                  <div id="center-modal--manual__footer">{ManualFooter}</div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </Portal>
    </>
  );
};

ImgDesignModal.propTypes = {
  //* Option Btns
  BtnSubmitHead: PropTypes.node,

  //*  Custom Headers Utils
  HeaderTitle: PropTypes.string,
  HeaderButton: PropTypes.string,

  //* Return Modal State
  GetModalState: PropTypes.func,

  //* It Will Delay modal Open For Before animation
  OpenModalDelay: PropTypes.number,

  //*  Custom Content Utils
  children: PropTypes.node,

  //*  Custom Footer Utils
  OnBtnSave: PropTypes.func,
  OnBtnCancel: PropTypes.func,

  //* Full Manual Util Handlers
  ManualHeader: PropTypes.object,
  ManualContent: PropTypes.object,

  ManualFooter: PropTypes.object,
};

export default ImgDesignModal;
