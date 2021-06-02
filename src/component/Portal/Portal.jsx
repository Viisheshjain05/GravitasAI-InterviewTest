//? Use to render component outside root element in html or outside react app
//? Healpfull for css based components as modals

/** //! HOW TO USE IT
 * 1) Add Portal file
 * 2) Add element #protal to index.html file ex - `<div id="portal"></div>`
 * 3) now your portal is connected to the dom element
 * 4) All the elements added inside portal will be added to to #portal document
 */


import React from "react";
import ReactDom from "react-dom";

const Portal = (props) => {
  const { children } = props;

  return ReactDom.createPortal(
    <>{children}</>,
    document.getElementById("portal")
  );
};

export default Portal;
