import { experienceSection } from "../../lib/data";

const ExperienceTopRight = () => {
  return (
    <div className="xl:w-[70%] lg:w-[60%] border border-black p-4 rounded-xl">
      {experienceSection.topRight.paragraphs.map((paragraph, index) => {
        const paragraphClass =
          index === experienceSection.topRight.paragraphs.length - 1
            ? "text-sm text-center text-white"
            : "text-sm text-center text-white mb-4";

        return (
          <p key={index} className={paragraphClass}>
            {paragraph.parts.map((part, partIndex) =>
              part.highlight ? (
                <span key={partIndex} className="font-bold text-orange">
                  {part.text}
                </span>
              ) : (
                <span key={partIndex}>{part.text}</span>
              ),
            )}
          </p>
        );
      })}
    </div>
  );
};

export default ExperienceTopRight;
