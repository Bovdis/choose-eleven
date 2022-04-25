import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import { Routes } from "../models";
import Players from "../pages/Players";
import Player from "../pages/Player";
import ChooseUser from "../pages/ChooseUser";

export const routes: Routes = [
  { path: "/", name: "Change user", component: ChooseUser },
  { path: "/players", name: "Players", component: Players },
  { path: "/player/:id/:name", name: "Player", component: Player },
];

const Layout = () => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route) => {
          let Page = route.component;

          return (
            <Route exact path={route.path} key={route.name}>
              <Page />
            </Route>
          );
        })}
      </Switch>
    </>
  );
};

export default Layout;
