import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Instagram,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-secondary border-t border-border/50 relative z-[60]">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-space font-bold text-xl text-gradient mb-4">
              Portfolio
            </h3>
            <p className="text-text-secondary mb-4">
              Creating beautiful, functional web experiences that make a
              difference.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <a href="https://github.com/tanaythakur">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <a href="https://www.linkedin.com/in/tanay-singh-thakur-a12648219/">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <a href="mailto:tanaysingh3022@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <a href="https://www.instagram.com/tanay_singh_/">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Experience", path: "/experience" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Let's Connect</h4>
            <p className="text-text-secondary mb-4">
              Ready to start your next project? Let's create something amazing
              together.
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} Tanay Portfolio. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm flex items-center mt-2 sm:mt-0">
            Made with <Lightbulb className="h-4 w-4 mx-1 text-yellow-400" /> and
            lots of coffee!
          </p>
        </div>
      </div>
    </footer>
  );
}
