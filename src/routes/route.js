import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home";
import { PrivateRoute } from "../middleware/isLoggedinRoute";
import { LoggedInRoute } from "../middleware/is_already_logged_in";
import { LandingPrivateRoute } from "../middleware/landing_page_middleware";
import Login from "../views/auth/login";
import Settings from "../views/settings";
import Register from "../views/auth/register";
import LandingPage from "../views/landing";

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="layout-default">
        <Routes>
          <Route exact path="/" name="Home" element={
            <LandingPrivateRoute>
                <Home />
            </LandingPrivateRoute>
          } />
          <Route
            exact
            path="/settings"
            name="Settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route exact path="/login" name="Login" element={<LoggedInRoute><Login /></LoggedInRoute>} />
          <Route exact path="/register" name="Login" element={<LoggedInRoute><Register /></LoggedInRoute>} />
          <Route exact path="/landing" name="Login" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
