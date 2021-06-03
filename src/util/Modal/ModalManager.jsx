//! Remove Exerything And Connect Varients

/** //Todo Now Features
 * 1) Varients
 * 2) Connect All Files With Center Modal
 * 3) Create Github Account Or manage component Feature to manage its updates
 * 4) Manage Styles
 * 5) Find out Way to create designs using Modal and add them inside component for future use
 *
 *
 */

/** //Todo Objective
 * 1) Create a Main modal manager Component to manage all component related within
 * ex - one of - ["CenterModal", "SimpleModal", "SidebarModal", "BlogModal"]
 */

import React, { useState } from "react";
import Proptypes from "prop-types";

import Portal from "../Portal/Portal.jsx";

const Modal = (props) => {
  const {
    //Todo1 Minor Update Change [Save, Cancel] To Click
    //* Feature Modal Selector
    // Todo varient = "CenterModal",

    //* Naming Modal Values
    BtnSubmitHead,
    BtnSave = "",
    BtnCancel = "",
    ModalTitle,
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
      console.log("handleSubmit ~ Cancel");
      // Return In Case Of Option asked
      OnBtnCancel && OnBtnCancel();
    } else if (BtnStatus === "Save") {
      console.log("handleSubmit ~ Save");
      // Return In Case Of Option asked
      OnBtnSave && OnBtnSave();
    } else if (BtnStatus === "ModalBackdropClose") {
      console.log("handleSubmit ~ ModalBackdropClose");

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
        <div style={{ position: "relative" }}>
          <div
            onClick={() => ModalDisplay && handleSubmit("ModalBackdropClose")}
            className={ModalDisplay ? "Ex-modal-backdrop Ex-in" : ""}
          ></div>

          <div
            className={
              ModalDisplay ? "Ex-modal Ex-fade " : " Ex-modal-close Ex-fade"
            }
          >
            <div className="Ex-modal-content">
              <div className="Ex-modal-header">
                <h5 className="Ex-modal-title">{ModalTitle}</h5>
                <button
                  // Todo
                  className="Ex-close bx bx-window-close"
                  onClick={() =>
                    ModalDisplay && handleSubmit("ModalBackdropClose")
                  }
                ></button>
              </div>

              <div className="Ex-modal-body">{children}</div>

              <div className="Ex-modal-footer">
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
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};

Modal.propTypes = {
  // varient: Proptypes.oneOf(["CenterModal", "SimpleModal", "SidebarModal"]),
  BtnSubmitHead: Proptypes.object,
  ModalTitle: Proptypes.string,
  OnBtnSave: Proptypes.func,
  OnBtnCancel: Proptypes.func,
  children: Proptypes.node,
};

export default Modal;
