import React from "react";
import { Route, Switch } from "react-router-dom";
// import SlideRoutes from "react-slide-routes";

import { Home } from "../pages/Home";
import { AboutUs } from "..//pages/AboutUs";
import { Contact } from "..//pages/Contact";
import { Researvation } from "../pages/Researvation";
import { MenuPrice } from "../pages/MenuPrice";
import { NotFound } from "../pages/NotFound";

export const Router = () => {
  // const location = useLocation();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/AboutUs">
        <AboutUs />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Researvation">
        <Researvation />
      </Route>
      <Route path="/MenuPrice">
        <MenuPrice />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
