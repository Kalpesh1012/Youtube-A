/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Signup";
import Password from "./Password";
import MainVideo from "./MainVideo";

const Body = () => {
  const approute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signin",
      element: <Signup />,
    },
    {
      path: "/signup/:email",
      element: <Password />,
    },
    {
      path: "/browse/:id",
      element: <MainVideo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approute} />
    </div>
  );
};

export default Body;
