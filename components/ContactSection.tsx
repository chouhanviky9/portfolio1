"use client";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 md:py-32 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 blob" />
                <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-secondary/10 blob" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                            Get In Touch
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Have a project in mind or just want to chat? I'd love to hear from you!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Feel free to reach out through any of the channels below. I typically respond within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a
                                    href="mailto:chouhanviky9@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 group"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Email</div>
                                        <div className="font-medium">chouhanviky9@gmail.com</div>
                                    </div>
                                </a>

                                <a
                                    href="tel:+918003215622"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 group"
                                >
                                    <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Phone</div>
                                        <div className="font-medium">+91 8003215622</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">Location</div>
                                        <div className="font-medium">Kotkasim, Alwar, Rajasthan</div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-display font-semibold mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/chouhanviky9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-xl bg-card border border-border hover:border-foreground hover:scale-110 transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/chouhanviky9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-xl bg-card border border-border hover:border-secondary hover:text-secondary hover:scale-110 transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="p-8 rounded-2xl bg-card border border-border">
                                <h3 className="font-display text-xl font-bold mb-6">Send a Message</h3>

                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300 glow-primary"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
