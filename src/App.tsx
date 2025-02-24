import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Navigate to="moon" replace />} />
          <Route path="destination/:id" element={<Destinations />} />
          <Route path="crew" element={<Navigate to="commander" replace />} />
          <Route path="crew/:id" element={<Crew />} />
          <Route
            path="technology"
            element={<Navigate to="vehicle" replace />}
          />
          <Route path="technology/:id" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
