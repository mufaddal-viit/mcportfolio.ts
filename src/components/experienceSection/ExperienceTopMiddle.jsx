import { experienceSection } from "../../lib/data";

const ExperienceTopMiddle = () => {
  return (
    <div className="lg:w-[23%] md:w-[40%] sm:w-[40%] p-1 animate-pulse">
      <img
        src={experienceSection.topMiddle.imageSrc}
        alt={experienceSection.topMiddle.imageAlt}
      />
    </div>
  );
};

export default ExperienceTopMiddle;
