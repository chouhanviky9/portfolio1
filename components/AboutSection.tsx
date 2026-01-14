import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code",
        color: "primary",
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing for speed and seamless user experiences",
        color: "secondary",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working effectively with cross-functional teams",
        color: "accent",
    },
    {
        icon: Zap,
        title: "Innovation",
        description: "Embracing new technologies and methodologies",
        color: "primary",
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            {/* Background Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-l-full" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                            About Me
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Passionate <span className="gradient-text">Developer</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            I transform complex problems into elegant digital solutions
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Full-Stack Developer with <span className="text-primary font-semibold">4+ years of experience</span>,
                                specializing in MERN stack (MongoDB, Express.js, React, Node.js), TypeScript, and Python.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I've worked with startups and established companies, delivering everything from
                                <span className="text-secondary font-semibold"> AI-powered desktop applications</span> to
                                <span className="text-accent font-semibold"> enterprise-grade web platforms</span>.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Based in Rajasthan, India, I'm currently building innovative solutions at Zoid Technologies,
                                working on cutting-edge AI and 3D visualization projects.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                <div className="text-center p-4 rounded-2xl bg-card border border-border">
                                    <div className="font-display text-3xl md:text-4xl font-bold gradient-text">4+</div>
                                    <div className="text-sm text-muted-foreground mt-1">Years Exp</div>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-card border border-border">
                                    <div className="font-display text-3xl md:text-4xl font-bold gradient-text">20+</div>
                                    <div className="text-sm text-muted-foreground mt-1">Projects</div>
                                </div>
                                <div className="text-center p-4 rounded-2xl bg-card border border-border">
                                    <div className="font-display text-3xl md:text-4xl font-bold gradient-text">10+</div>
                                    <div className="text-sm text-muted-foreground mt-1">Technologies</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Highlight Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`p-6 rounded-2xl bg-card border border-border card-hover group ${index % 2 === 1 ? "mt-8" : ""
                                            }`}
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color === "primary"
                                                    ? "bg-primary/10 text-primary"
                                                    : item.color === "secondary"
                                                        ? "bg-secondary/10 text-secondary"
                                                        : "bg-accent/10 text-accent"
                                                } group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
