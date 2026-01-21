import { contactSection } from "../../lib/data";

const ContactText = () => {
  return (
    <div>
      <h2 className="text-orange text-3xl mb-4">
        {contactSection.introHeading}
      </h2>
      <p>{contactSection.introText}</p>
    </div>
  );
};

export default ContactText;
