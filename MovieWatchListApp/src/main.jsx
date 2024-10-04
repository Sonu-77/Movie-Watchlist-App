import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { BookmarkProvider } from "./context/BookmarkContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BookmarkProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookmarkProvider>
    </UserProvider>
  </StrictMode>
);
