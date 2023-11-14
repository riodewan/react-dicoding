import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesApp />
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      newestOnTop
      closeOnClick
      draggable={false}
      pauseOnHover
      icon={false}
      theme="colored"
    />
  </React.StrictMode>
);
