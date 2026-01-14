import { Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border bg-card/50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo & Copyright */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>© {currentYear}</span>
                        <span className="font-display font-bold gradient-text">Vikash Kumar</span>
                        <span>• All rights reserved</span>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
                        <span>using React & Tailwind</span>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#home"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#projects"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
