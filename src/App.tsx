import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
