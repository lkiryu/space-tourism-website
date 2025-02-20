import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";

const backgrounds: Record<string, string> = {
  "/destination":
    "bg-[url('/assets/images/background-destination-desktop.jpg')] max-lg:bg-[url('/assets/images/background-destination-tablet.jpg')] max-sm:bg-[url('/assets/images/background-destination-mobile.jpg')]",
  "/technology":
    "bg-[url('/assets/images/background-technology-desktop.jpg')] max-lg:bg-[url('/assets/images/background-technology-tablet.jpg')] max-sm:bg-[url('/assets/images/background-technology-mobile.jpg')]",
  "/crew":
    "bg-[url('/assets/images/background-crew-desktop.jpg')] max-lg:bg-[url('/assets/images/background-crew-tablet.jpg')] max-sm:bg-[url('/assets/images/background-crew-mobile.jpg')]",
  "/": "bg-[url('/assets/images/background-home-desktop.jpg')] max-lg:bg-[url('/assets/images/background-home-tablet.jpg')] max-sm:bg-[url('/assets/images/background-home-mobile.jpg')]",
};

export default function Layout() {
  const location = useLocation();

  const bgImage = Object.keys(backgrounds).find((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <div
      className={`font-Barlow-Condensed flex min-h-screen flex-col items-center bg-cover bg-no-repeat ${bgImage ? backgrounds[bgImage] : null}`}
    >
      <Header />
      <Outlet />
    </div>
  );
}
