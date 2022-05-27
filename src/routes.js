import React from "react";
const Home = React.lazy(() => import("./pages/home/index"));
const Profile = React.lazy(() => import("./pages/profile/index"));
const routes = [
  {
    path: "/",
    key: "HOME",
    component: <Home />,
  },
  {
    path: "profile",
    key: "PROFILE",
    component: <Profile />,
  },
];
export default routes;
