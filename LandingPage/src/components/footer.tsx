import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex justify-center gap-6 w-screen bg-slate-100 px-8 md:px-16 lg:px-32 py-16 md:py-24">
      <div className="flex  flex-col md:flex-row justify-between gap-4 md:gap-24 w-full max-w-screen-lg">
        <div>
          <div className="flex items-center gap-4">
            <img src={logo} alt="" />
            <p className="font-semibold text-2xl text-slate-800">
              Flex Car Renting Serice
            </p>
          </div>
          <p className="mt-6 max-w-96">
            FLEX revolutionizes car rentals in Ghana with easy booking,
            transparent pricing, and reliable vehicles. It enhances customer
            satisfaction and streamlines business operations.
          </p>
        </div>

        <div className="mt-6 flex flex-col">
          <p className="font-semibold text-lg text-primary">Contact Us</p>
          <Link className="mt-2" to="/about-us">
            About Us
          </Link>
          <Link className="mt-2" to="/services">
            Services
          </Link>
          <Link className="mt-2" to="/faqs">
            FAQs
          </Link>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-lg text-primary">Contact Us</p>
          <p className="mt-2">+233 123 456 789</p>
          <p className="mt-2">amomanterichard@gmail.com</p>
          <p className="mt-2">+233 123 456 789</p>
          <p className="mt-2">amomanterichard@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
