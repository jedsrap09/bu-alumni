import { Routes, Route, Navigate } from "react-router-dom";
import { theme } from "@react-spectrum/theme-light";
import { Provider } from "@react-spectrum/provider";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Activity from "./pages/Activity";
import DetailActivity from "./pages/DetailActivity";
import PersonalActivity from "./pages/PersonalActivity";
import News from "./pages/News";
import Profile from "./pages/Profile";
import { logout } from "./services/authService";
import { useEffect } from "react";

function App() {
  const accessToken = localStorage.getItem("access_token");

  const isLoggedIn = !!accessToken;

  useEffect(() => {
    if (window.location.pathname === "/logout") {
      logout();
    }
  }, [window.location]);

  return (
    <>
        <Provider theme={theme} colorScheme={"light"}>
          {!isLoggedIn ? (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/activity/:page" element={<Activity />} />
              <Route path="/my-activity" element={<PersonalActivity />} />
              <Route path="/news" element={<News />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/detail-activity" element={<DetailActivity />} />
            </Routes>
          )}
        </Provider>
    </>
  );
}

export default App;
