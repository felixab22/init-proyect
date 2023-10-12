

import { Outlet,Navigate } from "react-router-dom";
import { Navbar } from "./../../ui";
import {  InicioPage } from './../pages';


export const childHeroesRoutes = [
  {
    path: "/inicio",
    element: <InicioPage />,
  },

  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
]

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">

      <Outlet/>
      </div>
    </>
  );
};
