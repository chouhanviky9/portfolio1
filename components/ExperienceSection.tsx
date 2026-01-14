import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        company: "Zoid Technologies Pvt. Ltd.",
        role: "Full Stack Developer",
        period: "April 2024 – Present",
        location: "Noida, UP",
        description: [
            "Architected and deployed an AI-based Desktop application for 3D reconstruction from 2D aerial imagery captured by drones",
            "Designed and developed an AI-Based Mobile FOD Detection system and Distributed Collector Applications",
        ],
        technologies: ["Python", "NestJS", "Next.js", "ElectronJS", "Sqlite", "Postgres", "Kafka"],
        color: "primary",
    },
    {
        company: "Stockdaddy Pvt. Ltd.",
        role: "Full Stack Developer",
        period: "Dec 2021 – March 2024",
        location: "Gurgaon, Haryana",
        description: [
            "Developed the organization's inaugural website using Gatsby.js and StrapiJS for an edtech platform",
            "Led the revamp of website and backend services, increasing natural traffic by 10-15% through SEO",
            "Improved lighthouse score from 30 to 85% for desktop users",
            "Implemented Live classes, Quizzes, Podcasts, and online payment support",
        ],
        technologies: ["Next.js", "NestJS", "PostgreSQL", "DigitalOcean", "AWS"],
        color: "secondary",
    },
    {
        company: "Ghack Technology Pvt. Ltd.",
        role: "Software Developer Intern",
        period: "July 2021 – Nov 2021",
        location: "Bangalore, Karnataka",
        description: [
            "Collaborated with sales and marketing team to implement features improving UX",
            "Implemented role-based authorization service for admin panel",
            "Developed an engaging reward system for enhancing the gaming experience",
        ],
        technologies: ["ExpressJS", "ReactJS", "MySQL", "MongoDB", "Bootstrap"],
        color: "accent",
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 md:py-32 relative">
            {/* Background Decoration */}
            <div className="absolute left-0 top-1/3 w-1/4 h-96 bg-gradient-to-r from-secondary/5 to-transparent rounded-r-full" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Work Experience
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            My <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Building impactful solutions across different industries
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-1/2"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 ${exp.color === "primary"
                                            ? "bg-primary"
                                            : exp.color === "secondary"
                                                ? "bg-secondary"
                                                : "bg-accent"
                                        }`}
                                />

                                {/* Content Card */}
                                <div
                                    className={`ml-8 md:ml-0 p-6 rounded-2xl bg-card border border-border card-hover ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                                        }`}
                                >
                                    {/* Header */}
                                    <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <h3 className="font-display font-bold text-xl mb-1">{exp.role}</h3>
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Building2 className="w-4 h-4" />
                                                <span className={exp.color === "primary" ? "text-primary" : exp.color === "secondary" ? "text-secondary" : "text-accent"}>
                                                    {exp.company}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                                                <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${exp.color === "primary"
                                                        ? "bg-primary"
                                                        : exp.color === "secondary"
                                                            ? "bg-secondary"
                                                            : "bg-accent"
                                                    }`} />
                                                <span className={index % 2 === 0 ? "md:order-first" : ""}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${exp.color === "primary"
                                                        ? "bg-primary/10 text-primary"
                                                        : exp.color === "secondary"
                                                            ? "bg-secondary/10 text-secondary"
                                                            : "bg-accent/10 text-accent"
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
