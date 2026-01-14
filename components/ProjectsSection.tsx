"use client";
import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import dynamic from "next/dynamic";

const ProjectModal = dynamic(() => import("./ProjectModal"), {
    ssr: false,
});
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "3D Drone Reconstruction Platform",
        shortDescription: "AI-powered desktop application for 3D reconstruction from 2D aerial imagery",
        fullDescription:
            "A cutting-edge desktop application that leverages artificial intelligence to reconstruct detailed 3D models from 2D aerial imagery captured by drones. The platform includes comprehensive visualization tools and a management interface for organizing and analyzing reconstructed models. Built with a focus on performance and scalability to handle large datasets.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
        technologies: ["Python", "ElectronJS", "NestJS", "Next.js", "PostgreSQL", "Kafka"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Real-time 3D model generation",
            "Drone imagery processing pipeline",
            "Interactive 3D visualization",
            "Model export in multiple formats",
            "Batch processing support",
            "Cloud sync capabilities",
        ],
        color: "primary" as const,
    },
    {
        id: 2,
        title: "AI FOD Detection System",
        shortDescription: "Mobile-based Foreign Object Debris detection with distributed collectors",
        fullDescription:
            "An intelligent Foreign Object Debris (FOD) detection system designed for airport runways and industrial environments. The mobile application uses advanced AI algorithms to identify and classify potential hazards in real-time. Includes a distributed collector network for comprehensive coverage and immediate alert notifications.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
        technologies: ["Python", "React Native", "NestJS", "TensorFlow", "SQLite", "Linux"],
        liveUrl: "#",
        features: [
            "Real-time object detection",
            "Multi-camera support",
            "Instant alert notifications",
            "Historical data analysis",
            "Weather condition adaptation",
            "Integration with airport systems",
        ],
        color: "secondary" as const,
    },
    {
        id: 3,
        title: "Stockdaddy EdTech Platform",
        shortDescription: "Comprehensive financial education platform with live classes and trading tools",
        fullDescription:
            "A full-featured educational technology platform focused on stock market and financial literacy. Features include live interactive classes, quizzes, podcasts, one-on-one mentoring sessions, and integrated payment systems. The platform saw a 10-15% increase in organic traffic through strategic SEO improvements and achieved an 85% Lighthouse score.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
        technologies: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Stripe", "WebRTC"],
        liveUrl: "#",
        githubUrl: "#",
        features: [
            "Live interactive video classes",
            "Quiz and assessment system",
            "Podcast streaming",
            "One-on-one mentoring",
            "Secure payment gateway",
            "SEO optimized content",
        ],
        color: "accent" as const,
    },
    {
        id: 4,
        title: "Auth Service",
        shortDescription: "Secure session-based authentication service with JWT and Redis",
        fullDescription:
            "A robust authentication and authorization service built with security best practices. Implements session-based authentication using JWT tokens, Redis for session management, and bcrypt for secure password hashing. Designed to be easily integrated into any Node.js application with comprehensive documentation and examples.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
        technologies: ["TypeScript", "NestJS", "MongoDB", "Redis", "JWT", "bcrypt"],
        githubUrl: "https://github.com/chouhanviky9",
        features: [
            "Session-based authentication",
            "JWT token management",
            "Redis session storage",
            "Password encryption",
            "Role-based access control",
            "API documentation",
        ],
        color: "primary" as const,
    },
    {
        id: 5,
        title: "Clothing E-commerce Platform",
        shortDescription: "Virtual try-on experience with 3D mannequin and AI styling",
        fullDescription:
            "An innovative e-commerce platform revolutionizing online clothing shopping. Users can create 3D body-like mannequins to virtually try on clothes with realistic texture rendering. Features include an AI-powered stylist for personalized recommendations, seller admin panel, and a comprehensive mobile app experience.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        technologies: ["Java", "Python", "TypeScript", "Three.js", "React Native", "TensorFlow"],
        liveUrl: "#",
        features: [
            "3D body mannequin creation",
            "Virtual clothes try-on",
            "AI style recommendations",
            "Seller dashboard",
            "Mobile app experience",
            "Realistic texture rendering",
        ],
        color: "secondary" as const,
    },
    {
        id: 6,
        title: "Gaming Reward System",
        shortDescription: "Engaging reward system to enhance user gaming experience",
        fullDescription:
            "A comprehensive gaming reward and loyalty system designed to enhance user engagement and retention. Features include achievement tracking, point accumulation, leaderboards, and redeemable rewards. The system integrates seamlessly with existing gaming platforms through a flexible API.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
        technologies: ["React.js", "Express.js", "MongoDB", "MySQL", "Bootstrap", "Socket.io"],
        githubUrl: "#",
        features: [
            "Achievement system",
            "Point accumulation",
            "Real-time leaderboards",
            "Redeemable rewards",
            "User progression tracking",
            "Social sharing features",
        ],
        color: "accent" as const,
    },
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 md:py-32 bg-muted/30 relative">
            {/* Decorative Top Border */}
            <div className="absolute left-0 top-0 w-full h-1 gradient-bg" />

            {/* Background Decoration */}
            <div className="absolute right-0 bottom-1/4 w-1/3 h-96 bg-gradient-to-l from-accent/5 to-transparent rounded-l-full" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            My Work
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            A showcase of my recent work and personal projects
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            aria-label={`View ${project.title}`}
                                            className={`p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${project.color === "primary"
                                                ? "bg-primary/90 text-primary-foreground"
                                                : project.color === "secondary"
                                                    ? "bg-secondary/90 text-secondary-foreground"
                                                    : "bg-accent/90 text-accent-foreground"
                                                }`}
                                        >
                                            <Eye className="w-5 h-5" />
                                        </button>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-4 rounded-full bg-card/90 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label={`View Live Demo for ${project.title}`}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Color Badge */}
                                    <div
                                        className={`absolute top-4 left-4 w-3 h-3 rounded-full ${project.color === "primary"
                                            ? "bg-primary"
                                            : project.color === "secondary"
                                                ? "bg-secondary"
                                                : "bg-accent"
                                            }`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {project.shortDescription}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default ProjectsSection;
