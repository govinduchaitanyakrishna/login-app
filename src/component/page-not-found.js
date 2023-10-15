import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>Page not Found</h1>
      <button
        onClick={() => {
          nav("/login");
        }}
      >
        Go to Login
      </button>
    </div>
  );
};
