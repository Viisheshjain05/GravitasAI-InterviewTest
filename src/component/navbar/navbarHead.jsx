//* Libraries
import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

//* Components
// import { useAuth } from "../../_firebase/Authentication/AuthContext";
// import { SimpleBWButton } from "../../component/UI/Button/Button.jsx";
// import { NewsletterModal } from "../../component/Modals/NewsletterModal/NewsletterModal.jsx";
// import FormModal from "../../component/Modals/FormModal/FormModal.jsx";

import "./styles/navbar.scss";
import "./styles/HomeBtn.css";

const Home = () => {
  const MobileHamburgerToggle = () => {
    const menuIcon = document.querySelector(".menuIcon");
    const menu = document.querySelector(".menu");

    menuIcon.classList.toggle("humbargerAni");
    menu.classList.toggle("menuShow");
  };

  return (
    <>
      <button
        type="button"
        className="menuIcon"
        onClick={() => MobileHamburgerToggle()}
      >
        <span style={{ fontSize: "2em" }}> X</span>
      </button>

      <div className="menu" id="Mobile-only-navbar">
        <ul>
          <li>
            <Link to="/">
              <div>Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Conversational</div>
            </Link> 
          </li>
          <li>
            <Link to="/">
              <div>User</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Engagement</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Integration</div>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="navbar-head" id="Desktop-only-navbar">
          <div className="navbar-logo">botanalytics</div>
          <div className="navbar-list">
            <div className="navbar-list--item">
              <img src="" alt="I" />
              Dashboard
            </div>
            <div className="navbar-list--item">
              <img src="" alt="I" />
              Conversational
            </div>
            <div className="navbar-list--item">
              <img src="" alt="I" />
              User
            </div>  
            <div className="navbar-list--item">
              <img src="" alt="I" />
              Engagement
            </div>
            <div className="navbar-list--item">
              <img src="" alt="I" />
              Integration
            </div>
          </div>
          <div className="navbar-connect">
            <div className="navbar-connect--logo">
              <img src="" alt="twitter" />
            </div>
            <div className="navbar-connect--name">Twitter</div>
          </div>
        </div>
        hii
      </div>
    </>
  );
};

export default Home;

// const MobileHamburgerToggle = () => {
//   const menuIcon = document.querySelector(".menuIcon");
//   const menu = document.querySelector(".menu");

//   menuIcon.classList.toggle("humbargerAni");
//   menu.classList.toggle("menuShow");
// };

// <motion.div
//       className="home"
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {window.screen.width < window.screen.height ? (
//         <motion.video
//           transition={{ type: "tween", duration: 2 }}
//           className="home-video-main"
//           autoPlay
//           muted
//           loop
//         >
//           <source src={TSVideoPotrait} type="video/mp4" />
//           Your browser does not support HTML5 video.
//         </motion.video>
//       ) : window.screen.width > 700 ? (
//         <motion.video
//           transition={{ type: "tween", duration: 2 }}
//           className="home-video-main"
//           autoPlay
//           muted
//           loop
//         >
//           <source src={TSVideo} type="video/mp4" />
//           Your browser does not support HTML5 video.
//         </motion.video>
//       ) : (
//         <motion.img
//           src={TSVideoGIF}
//           alt="Home Screen Video "
//           style={{ height: "100%", transform: "translateY(-1.5em)" }}
//           transition={{ type: "tween", duration: 2 }}
//           className="home-video-main"
//         ></motion.img>
//       )}

//       <button
//         type="button"
//         className="menuIcon"
//         onClick={() => MobileHamburgerToggle()}
//       >
//         <span></span>
//       </button>
//       <Logo />
//       <div className="home-wrp">
//         <h1>{METADATA.Heading}</h1>
//         <h5>{METADATA.SubHeading}</h5>
//       </div>

//       <div className="menu">
//         <ul>
//           <li>
//             <Link to="/first-class">
//               <SimpleBWButton>First Class</SimpleBWButton>
//             </Link>
//           </li>
//           <li>
//             <Link to="/business-class">
//               <SimpleBWButton>Business Class</SimpleBWButton>
//             </Link>
//           </li>
//           <li>
//             <Link to="/premium-class">
//               <SimpleBWButton>Premium Economy</SimpleBWButton>
//             </Link>
//           </li>
//           <li>
//             <Link to="/destinations">
//               <SimpleBWButton>Destinations</SimpleBWButton>
//             </Link>
//           </li>

//           <li>
//             <FormModal
//               OpenModalButton={
//                 // <Link to="/get-in-touch">
//                 <SimpleBWButton>Get In Touch</SimpleBWButton>
//                 // </Link>
//               }
//             />
//           </li>
//           <li>
//             <a href={`tel:${METADATA.PhoneNo}`}>
//               <SimpleBWButton>{METADATA.PhoneNo}</SimpleBWButton>
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/*  */}

//       <nav className="home-Screen--bottom-nav__link">
//         <Link to="/Privacy">Privacy</Link>

//         <Link to="/cookie">Cookie</Link>
//         <Link to="/about">About</Link>
//         <NewsletterModal OpenModalButton={<Link to="/">Newsletter</Link>} />

//         {auth?.currentUser ? (
//           <>
//             Welcome {auth.currentUser.displayName}
//             <button
//               onClick={() => auth.logout()}
//               className="navlink-button--style"
//             >
//               Log Out
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/signUp">Sign up</Link>
//           </>
//         )}
//         <Link to="/contact">Contact</Link>
//       </nav>
//     </motion.div>
