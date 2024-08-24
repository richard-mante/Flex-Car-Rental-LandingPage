import { Link, useLocation } from "react-router-dom";
import { Button } from "./widgets/Button";
import logo from "../assets/logo.png";
import { useState } from "react";

export const TopNav = () => {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState(location.pathname);

  const navItems = {
    home: "/",
    aboutUs: "/about-us",
    services: "/services",
    faq: "/faqs",
  };

  const isOnCurrentPath = (path: string) => {
    if (path === currentPath) {
      return "text-primary font-bold";
    }
    return false;
  };

  console.log("currentPath", currentPath);

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 p-6 w-full">
      <Link to="/">
        <img src={logo} alt="app logo" />
      </Link>
      <div className="hidden md:flex md:h-auto md:opacity-100">
        <Link to="/" className={`${isOnCurrentPath(navItems.home)} px-8`}>
          Home{" "}
        </Link>
        <Link
          to="/about-us"
          className={`${isOnCurrentPath(navItems.aboutUs)} px-8`}
        >
          About Us
        </Link>
        <Link
          to="/services"
          className={`${isOnCurrentPath(navItems.services)} px-8`}
        >
          Services
        </Link>
        <Link to="/faqs" className={`${isOnCurrentPath(navItems.faq)} px-8`}>
          FaQs
        </Link>
      </div>
      <div className="flex gap-4">
        <a href="https://flex-car-rental-production.up.railway.app/login">
          <Button type="outline">Log In</Button>
        </a>
        <a href="https://flex-car-rental-production.up.railway.app/signup">
          <Button type="fill">Sign Up</Button>
        </a>
      </div>
    </nav>
  );
};
