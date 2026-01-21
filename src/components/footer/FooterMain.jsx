import { Link } from "react-scroll";
import { footerSection } from "../../lib/data";

const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-px bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-300 mx-auto sm:hidden">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to={footerSection.brandSection}
        >
          <p className="text-3xl text-white mt-4 hover:text-orange transition-all duration-500 cursor-pointer  ">
            {footerSection.brandName}
          </p>
        </Link>
        <ul className="flex gap-4 text-white text-xl mt-4">
          {footerSection.links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-orange transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <p className=" text-center  mx-auto mt-20 mb-12 text-sm text-white">
        {footerSection.copyright}
      </p>
    </div>
  );
};

export default FooterMain;
