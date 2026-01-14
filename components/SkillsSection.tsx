const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Python", level: 80 },
            { name: "Java", level: 65 },
            { name: "C/C++", level: 60 },
        ],
        color: "primary",
    },
    {
        title: "Frameworks",
        skills: [
            { name: "React.js", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "Node.js", level: 88 },
            { name: "NestJS", level: 85 },
            { name: "Express.js", level: 85 },
        ],
        color: "secondary",
    },
    {
        title: "Tools & Cloud",
        skills: [
            { name: "Git", level: 92 },
            { name: "Docker", level: 80 },
            { name: "AWS", level: 75 },
            { name: "Kubernetes", level: 70 },
            { name: "CI/CD", level: 85 },
        ],
        color: "accent",
    },
];

const techLogos = [
    "MongoDB", "PostgreSQL", "Redis", "Firebase",
    "Linux", "DigitalOcean", "Kafka", "Sqlite"
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 md:py-32 bg-muted/30 relative">
            {/* Decorative Elements */}
            <div className="absolute left-0 top-0 w-full h-1 gradient-bg" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                            My Skills
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Technical <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            A comprehensive skill set built through years of hands-on experience
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {skillCategories.map((category, catIndex) => (
                            <div
                                key={catIndex}
                                className="p-6 rounded-2xl bg-card border border-border card-hover"
                            >
                                <h3
                                    className={`font-display font-semibold text-xl mb-6 ${category.color === "primary"
                                            ? "text-primary"
                                            : category.color === "secondary"
                                                ? "text-secondary"
                                                : "text-accent"
                                        }`}
                                >
                                    {category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${category.color === "primary"
                                                            ? "bg-primary"
                                                            : category.color === "secondary"
                                                                ? "bg-secondary"
                                                                : "bg-accent"
                                                        }`}
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Technologies */}
                    <div className="text-center">
                        <h4 className="font-display font-semibold text-lg mb-6 text-muted-foreground">
                            Also experienced with
                        </h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techLogos.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
