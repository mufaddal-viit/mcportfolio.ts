import NavbarSocial from "./NavbarSocial";
import { navbarSection } from "../../lib/data";

const NavbarLogo = ({ onHomeSelect }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onHomeSelect) onHomeSelect();
  };

  return (
    <div className="flex flex-col">
      {/* Name / Logo */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group text-left leading-tight"
      >
        {/* Full Name */}
        <span className="hidden md:block text-white text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-cyan">
          {navbarSection.brandName}
        </span>

        {/* Mobile Logo */}
        <span className="block md:hidden text-white font-special font-extrabold text-3xl transition-colors duration-300 group-hover:text-cyan">
          {navbarSection.brandInitials}
        </span>
      </button>

      <NavbarSocial className="hidden lg:flex pt-2 ml-4" />
    </div>
  );
};

export default NavbarLogo;
