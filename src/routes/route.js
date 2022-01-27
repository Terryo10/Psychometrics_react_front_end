import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="layout-default">
        <Routes>
          <Route exact path="/" name="Home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
