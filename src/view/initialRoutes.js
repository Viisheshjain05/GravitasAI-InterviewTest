/** //? Naming Convention
 * 1) [ > #] - Sub URL Directory Parts
 * 2)
 * 3)
 */

//* Libraries
import React from "react";
// import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { TitleName } from "./TitleName";

//* Container - Home
import Home from "../container/Home/Home.jsx";

const InitialRoutes = () => {
  return (
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
  );
};

export default InitialRoutes;
