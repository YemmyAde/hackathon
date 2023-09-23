import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../app/pages";
import Contact from "../app/pages/contact";
import Register from "../app/pages/register";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
