import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <ul className="w-full flex justify-center gap-10 text-2xl list-none p-3">
        <Link
          to="/"
          className={`hover:bg-slate-500 hover:rounded-2xl p-2 ${
            activeLink === "/" ? "bg-slate-500 rounded-2xl" : ""
          }`}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/task-manager"
          className={`hover:bg-slate-500 hover:rounded-2xl p-2 ${
            activeLink === "/task-manager" ? "bg-slate-500 rounded-2xl" : ""
          }`}
        >
          <li>Task Manager</li>
        </Link>
        <Link
          to="/form"
          className={`hover:bg-slate-500 hover:rounded-2xl p-2 ${
            activeLink === "/form" ? "bg-slate-500 rounded-2xl" : ""
          }`}
        >
          <li>Form</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
