import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import Resarvations from "../pages/Resarvations";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/rooms" element={<Rooms />} />
          <Route path="/dashboard/resarvations" element={<Resarvations />} />
          {/* //* absolute path */}
          <Route path="/dashboard/about" element={<About />} />
          {/* //* relative path */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
