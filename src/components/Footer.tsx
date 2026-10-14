// import { Github, Linkedin } from "lucide-react";
import { CurrentYear } from "@/components/CurrentYear";
import { profile } from "@/lib/data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © <CurrentYear /> {profile.name}. Built with ❤️
        </p>

        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
