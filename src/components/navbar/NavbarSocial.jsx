import { Github, Linkedin } from "lucide-react";
import { navbarSection } from "../../lib/data";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
};

export default function NavbarSocial({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`.trim()}>
      {navbarSection.socials.map((item) => {
        const Icon = iconMap[item.label];
        if (!Icon) {
          return null;
        }
        return (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="text-white/70 hover:text-cyan transition-colors duration-300"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
