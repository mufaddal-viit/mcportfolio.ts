import ExperienceInfo from "./ExperienceInfo";
import { experienceSection } from "../../lib/data";

const ExperienceTopLeft = () => {
  const { sinceLabel, infoItems, description } = experienceSection.topLeft;

  return (
    <div className="flex flex-col gap-9 w-75">
      <p className="text-lightCyan font-bold uppercase text-2xl font-special text-center">
        {sinceLabel}
      </p>
      <div className="flex justify-center items-center gap-4">
        {infoItems.map((item) => (
          <ExperienceInfo
            key={`${item.number}-${item.text}`}
            number={item.number}
            text={item.text}
          />
        ))}
      </div>
      <p className="text-center ">{description}</p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
