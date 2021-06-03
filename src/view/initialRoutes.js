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

const InitialRoutes = () => {
  return (
    <AnimatePresence>
    <BrowserRouter>
      {/* <TitleName /> */}

      <Switch>
        {/* The Main pages */}
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />

        {/* 404 Reroute Not Found Page */}
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
      </AnimatePresence>
  );
};

export default InitialRoutes;
