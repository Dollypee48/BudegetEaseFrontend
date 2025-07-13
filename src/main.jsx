
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BudgetProvider } from "./context/BudgetContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BudgetProvider>
          <App />
        </BudgetProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
