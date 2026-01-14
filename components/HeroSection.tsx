import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 blob floating" />
                <div className="absolute top-1/2 -left-20 w-64 h-64 bg-secondary/20 blob floating delay-200" />
                <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-accent/20 blob floating delay-400" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            👋 Hello, I'm
                        </span>
                    </div>

                    {/* Name */}
                    <h1
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0"
                        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
                    >
                        <span className="gradient-text text-shadow-glow">Vikash Kumar</span>
                    </h1>

                    {/* Title */}
                    <p
                        className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in-up opacity-0"
                        style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
                    >
                        Full-Stack Developer
                    </p>

                    {/* Description */}
                    <p
                        className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 leading-relaxed"
                        style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
                    >
                        Crafting robust and scalable web applications with 4+ years of experience
                        in the MERN stack, TypeScript, and Python. Passionate about turning ideas
                        into digital reality.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0"
                        style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full gradient-bg text-primary-foreground font-semibold shadow-lg glow-primary hover:scale-105 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-card border-2 border-border text-foreground font-semibold hover:border-primary hover:scale-105 transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Social Links */}
                    <div
                        className="flex items-center justify-center gap-6 animate-fade-in-up opacity-0"
                        style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
                    >
                        <a
                            href="https://github.com/chouhanviky9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/chouhanviky9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-card border border-border hover:border-secondary hover:text-secondary hover:scale-110 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:chouhanviky9@gmail.com"
                            className="p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent hover:scale-110 transition-all duration-300"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" className="p-2 rounded-full border border-border hover:border-primary transition-colors">
                    <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
