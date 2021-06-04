/** //? Naming Convention
 * 1) [ > #] - Sub URL Directory Parts
 * 2)
 * 3)
 */

//* Libraries
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

//* Container - Home
import Home from "../container/home/home.jsx";
import Graphpage from "../container/graphPage/graphpage.jsx";
import Modal from "../component/FormModal/FormModal.jsx";

const InitialRoutes = () => {
  return (
    <>
      <Modal />
      <AnimatePresence>
        <BrowserRouter>
          {/* <TitleName /> */}

          <Switch>
            {/* The Main pages */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />

            <Route exact path="/graph-page" component={Graphpage} />

            {/* 404 Reroute Not Found Page */}
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

export default InitialRoutes;
