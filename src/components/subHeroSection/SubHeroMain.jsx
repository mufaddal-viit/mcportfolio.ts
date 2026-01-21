import { subHeroSection } from "../../lib/data";

const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      {subHeroSection.highlights.map((highlight, index) => {
        const hiddenClass = index < 2 ? "md:block sm:hidden" : "";
        return (
          <p key={highlight} className={hiddenClass}>
            {highlight}
          </p>
        );
      })}
    </div>
  );
};

export default SubHeroMain;
