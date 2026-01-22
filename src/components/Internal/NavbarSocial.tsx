import { Github, Linkedin, type LucideIcon } from "lucide-react";
import { navbarSection } from "../../lib/data";

type NavbarSocialProps = {
  className?: string;
  iconSize?: number;
};

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
} satisfies Record<string, LucideIcon>;

type IconLabel = keyof typeof iconMap;

const isIconLabel = (label: string): label is IconLabel =>
  Object.prototype.hasOwnProperty.call(iconMap, label);

export default function NavbarSocial({
  className = "",
  iconSize = 20,
}: NavbarSocialProps) {
  return (
    <div className={["flex items-center gap-4", className].join(" ").trim()}>
      {navbarSection.socials.map((item) => {
        if (!isIconLabel(item.label)) {
          return null;
        }
        const Icon = iconMap[item.label];
        return (
          <a
            key={`${item.label}-${item.url}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className="text-white/70 transition-colors duration-300 hover:text-cyan"
          >
            <Icon size={iconSize} />
          </a>
        );
      }
      )}
    </div>
  );
}
