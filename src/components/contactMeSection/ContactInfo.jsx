import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const iconMap = {
  Email: HiOutlineMail,
  Phone: FiPhone,
  Location: IoLocationOutline,
};

const ContactInfo = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const Icon = iconMap[item.label] || HiOutlineMail;
        return <SingleInfo key={item.label} text={item.value} Image={Icon} />;
      })}
    </div>
  );
};

export default ContactInfo;
