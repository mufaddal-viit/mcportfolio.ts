import { Link } from "react-scroll";
import { aboutMeSection } from "../../lib/data";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 font-bold">
        {aboutMeSection.heading}
      </h2>
      <p>
        {aboutMeSection.paragraphs.map((paragraph, index) => (
          <span key={index}>
            {paragraph}
            {index < aboutMeSection.paragraphs.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to={aboutMeSection.cta.target}
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          {aboutMeSection.cta.label}
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
