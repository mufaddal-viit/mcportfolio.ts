import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const iconMap = {
  LinkedIn: FaLinkedinIn,
  GitHub: FiGithub,
  Instagram: FaInstagram,
};

const ContactSocial = ({ items }) => {
  return (
    <div className="flex gap-10">
      {items.map((item) => {
        const Icon = iconMap[item.label];
        if (!Icon) {
          return null;
        }
        return (
          <SingleContactSocial
            key={item.label}
            link={item.url}
            Icon={Icon}
          />
        );
      })}
    </div>
  );
};

export default ContactSocial;
