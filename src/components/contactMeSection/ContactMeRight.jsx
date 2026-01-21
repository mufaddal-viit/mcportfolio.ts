import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { contactSection } from "../../lib/data";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src={contactSection.imageSrc}
        alt={contactSection.imageAlt}
        className="max-w-[300px]"
      />
      <ContactInfo items={contactSection.info} />
      <ContactSocial items={contactSection.socials} />
    </div>
  );
};

export default ContactMeRight;
