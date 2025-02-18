import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex w-full max-w-[1440px] items-center justify-between px-20 py-10">
      <Link to="/">
        <img src="/assets/images/logo.svg" alt="logo" />
      </Link>
      <nav className="flex items-center gap-12 bg-white/5 px-16 py-8 text-white backdrop-blur-2xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative tracking-widest after:absolute after:-bottom-[32px] after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "after:w-full after:bg-white" : "after:bg-light-gray after:w-0"}`
          }
        >
          <span className="mr-3 font-bold">00</span>HOME
        </NavLink>
        <NavLink
          to="destination"
          className={({ isActive }) =>
            `relative tracking-widest after:absolute after:-bottom-[32px] after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "after:w-full after:bg-white" : "after:bg-light-gray after:w-0"}`
          }
        >
          <span className="mr-3 font-bold">01</span>DESTINATION
        </NavLink>
        <NavLink
          to="crew"
          className={({ isActive }) =>
            `relative tracking-widest after:absolute after:-bottom-[32px] after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "after:w-full after:bg-white" : "after:bg-light-gray after:w-0"}`
          }
        >
          <span className="mr-3 font-bold">02</span>CREW
        </NavLink>
        <NavLink
          to="technology"
          className={({ isActive }) =>
            `relative tracking-widest after:absolute after:-bottom-[32px] after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "after:w-full after:bg-white" : "after:bg-light-gray after:w-0"}`
          }
        >
          <span className="mr-3 font-bold">03</span>TECHNOLOGY
        </NavLink>
      </nav>
    </header>
  );
}
