import { projectsSection } from "../../lib/data";

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-25">
      <h2 className="text-6xl text-cyan mb-10 font-bold">
        {projectsSection.heading}
      </h2>
      <p className="text-lg text-center">
        {projectsSection.descriptionLines.map((line, index) => (
          <span key={line}>
            {line}
            {index < projectsSection.descriptionLines.length - 1 ? (
              <br />
            ) : null}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ProjectsText;
