import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes, childHeroesRoutes } from "../pages/routers";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/",
    element: <HeroesRoutes/>,
    children:childHeroesRoutes
  }
]);
export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
