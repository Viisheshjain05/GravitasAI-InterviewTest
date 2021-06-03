//* Libraries
import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import classNames from "classnames";
// import PropTypes from "prop-types";

//* Component
import Navbar from "../navbar/navbarHead.jsx";

// import Sidebar from "../Modals/SidebarModal/Sidebar.jsx";
// import { SimpleWBButton } from "../UI/Button/Button.jsx";

//* Icons
// import Logo from "../../container/Home/Logo";
// import Ximage from "../../assets/img/cross.svg";
// import ImgO1 from "../../assets/img/1.png";
// import ImgO2 from "../../assets/img/2.png";

//* Styles
// import "./layout.css";
// import { METADATA } from "../../utils/ActionTypes/Action.js";

const Page = (props) => {
  const {
    //todo Myone
    // FullBackImgHandler = false,

    // Animate Page Props
    AnimatePage = true,
    // Heading,
    // wrp: lftWrp,

    // back,
    // rightHeading,
    // rightWrp,
    // pageBack,
    // subPageBack,
    // BtnTxt,
    children,
  } = props;

  return (
    <motion.div
      className="page"
      initial={AnimatePage && { opacity: 0.5, scale: 0.85 }}
      animate={AnimatePage && { opacity: 1, scale: 1 }}
      transition={AnimatePage && { duration: 0.7 }}
      style={
        AnimatePage && {
          transition: "all 0.5s cubic-bezier(0, 0, 0.13, 0.75) 0s",
        }
      }
    >
      <Navbar> </Navbar>
      {children}
    </motion.div>
  );
};

// const  = BtnTxt;
// Page.propTypes = {
// BtnTxt: PropTypes.shape({
//   type: PropTypes.string,
//   //? type: PropTypes.oneOf(["manual", "link"]),
//   link: PropTypes.string,
//   value: PropTypes.node,
// }),
// };

export default Page;

// useEffect(() => {
//   const ChangeScrollImages = (props) => {
//     if (ActiveScroll.ActiveScrollImage1) {
//       setActiveScroll({
//         ActiveScrollImage1: false,
//         ActiveScrollImage2: true,
//         ActiveScrollImage3: false,
//       });
//     }
//     if (ActiveScroll.ActiveScrollImage2) {
//       setActiveScroll({
//         ActiveScrollImage1: false,
//         ActiveScrollImage2: false,
//         ActiveScrollImage3: true,
//       });
//     }
//     if (ActiveScroll.ActiveScrollImage3) {
//       setActiveScroll({
//         ActiveScrollImage1: true,
//         ActiveScrollImage2: false,
//         ActiveScrollImage3: false,
//       });
//     }
//   };
//   const timer = setInterval(() => {
//     ChangeScrollImages();
//   }, 10000);
//   return () => {
//     clearInterval(timer);
//   };
// }, [ActiveScroll]);

// {subPageBack && (
//   <Link to={subPageBack} className="closeSubPage">
//     <img src={Ximage} alt="" />
//   </Link>
// )}

// <div className="page-left">
//   {FullBackImgHandler ? (
//     FullBackImgHandler
//   ) : (
//     <div className="leftback">
//       <img
//         className={classNames("left-img-scroller", {
//           "left-img-scroller__active": ActiveScroll.ActiveScrollImage1,
//         })}
//         src={back}
//         alt=""
//       />
//       <img
//         className={classNames("left-img-scroller", {
//           "left-img-scroller__active": ActiveScroll.ActiveScrollImage2,
//         })}
//         src={ImgO1}
//         alt=""
//       />
//       <img
//         className={classNames("left-img-scroller", {
//           "left-img-scroller__active": ActiveScroll.ActiveScrollImage3,
//         })}
//         src={ImgO2}
//         alt=""
//       />
//     </div>
//   )}
//   <Logo />
//   {pageBack && (
//     <>
//       <Link to={pageBack} className="closePage" id="mobileview--close">
//         Close <img src={Ximage} alt="" />
//       </Link>

//       <Link to={pageBack} className="closeSubPage" id="mobileview--open">
//         <img src={Ximage} alt="" />
//       </Link>
//     </>
//   )}

//   {/*  SIDEBAR Section Start */}

//   <Sidebar sidebarState={(ModalOpen) => setSidebarOpen(ModalOpen)} />

//   {/*  SIDEBAR Section End */}

//   <div
//     className={classNames(
//       sidebarOpen
//         ? "page-left-contents page-left--sidebar__open"
//         : "page-left-contents page-left--sidebar__close"
//     )}
//     style={{
//       left:
//         sidebarOpen && window.screen.width > 1200 //Heading?.length === 3
//           ? "30%"
//           : sidebarOpen &&
//             window.screen.width > 992 &&
//             window.screen.width < 1400
//           ? "25%"
//           : null,
//       fontSize:
//         sidebarOpen &&
//         window.screen.width > 992 &&
//         window.screen.width < 1400 &&
//         ".4em",
//     }}
//   >
//     <h1
//       style={{
//         fontSize: Heading?.length < 5 ? "8em" : "4em",
//         lineHeight: "normal",
//       }}
//     >
//       {Heading}
//     </h1>
//     <h5>{lftWrp}</h5>

//     {/*//? BtnTxt Section */}

//     {BtnTxt?.type === "manual" && <div>{BtnTxt?.value}</div>}

//     {BtnTxt?.type === "link" && (
//       <Link to={BtnTxt.link} className="theme-btn">
//         {BtnTxt.value ? (
//           BtnTxt.value
//         ) : (
//           <SimpleWBButton>Get In Touch</SimpleWBButton>
//         )}
//       </Link>
//     )}
//   </div>
//   {/* </di`v> */}
// </div>

// {/* //* Part 2 Right Page */}
// <div className="page-right">
//   <div className="wrp-inner">
//     {rightHeading && <h5>{rightHeading}</h5>}
//     {rightWrp && <p>{rightWrp}</p>}
//     {children}
//   </div>

//   <div className="page-bottom-menu">
//     ©&nbsp; Copyright 2021 by {METADATA.Heading}
//   </div>

//   {/* <div className="page-bottom-menu">
//     <Link to="/newslatter">Newsletter</Link>
//     <Link className="lastMenu" to="/contact">
//       Contact
//     </Link>
//   </div> */}
// </div>
