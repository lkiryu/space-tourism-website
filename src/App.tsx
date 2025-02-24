import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="destination"
            element={<Navigate to="/destination/Moon" replace />}
          />
          <Route path="destination/:id" element={<Destinations />} />
          <Route path="crew" element={<Navigate to="Commander" replace />} />
          <Route path="crew/:id" element={<Crew />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
