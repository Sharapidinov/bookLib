import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "@/pages";

const router = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export const AppRouter = () => {
  return (
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
