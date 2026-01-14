"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    video?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    features: string[];
    color: "primary" | "secondary" | "accent";
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Media Section */}
                <div className="relative aspect-video w-full overflow-hidden">
                    {project.video ? (
                        <video
                            src={project.video}
                            controls
                            className="w-full h-full object-cover"
                            poster={project.image}
                        />
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                    <DialogHeader className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <span
                                className={`w-3 h-3 rounded-full ${project.color === "primary"
                                        ? "bg-primary"
                                        : project.color === "secondary"
                                            ? "bg-secondary"
                                            : "bg-accent"
                                    }`}
                            />
                            <span className="text-sm text-muted-foreground">Featured Project</span>
                        </div>
                        <DialogTitle className="font-display text-2xl md:text-3xl font-bold">
                            {project.title}
                        </DialogTitle>
                    </DialogHeader>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                        <h4 className="font-display font-semibold mb-3">Key Features</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${project.color === "primary"
                                                ? "bg-primary"
                                                : project.color === "secondary"
                                                    ? "bg-secondary"
                                                    : "bg-accent"
                                            }`}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                        <h4 className="font-display font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${project.color === "primary"
                                            ? "bg-primary/10 text-primary"
                                            : project.color === "secondary"
                                                ? "bg-secondary/10 text-secondary"
                                                : "bg-accent/10 text-accent"
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${project.color === "primary"
                                        ? "bg-primary text-primary-foreground"
                                        : project.color === "secondary"
                                            ? "bg-secondary text-secondary-foreground"
                                            : "bg-accent text-accent-foreground"
                                    }`}
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border-2 border-border font-semibold hover:border-foreground transition-all duration-300 hover:scale-105"
                            >
                                <Github className="w-4 h-4" />
                                View Source
                            </a>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectModal;
