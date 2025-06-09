
import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description: "React, TypeScript, Node.js, and modern web technologies"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design",
      description: "UI/UX design, prototyping, and brand identity"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimized, fast-loading applications with great UX"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Working with teams to deliver exceptional results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer with over 5 years of experience creating 
              digital solutions that combine beautiful design with robust functionality. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-primary flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-semibold">Senior Frontend Developer</h4>
                <p className="text-muted-foreground">2022 - Present • Tech Company</p>
                <p className="mt-2">Leading frontend development for enterprise applications, mentoring junior developers.</p>
              </div>
              <div className="border-l-4 border-primary/60 pl-6">
                <h4 className="text-lg font-semibold">Full Stack Developer</h4>
                <p className="text-muted-foreground">2020 - 2022 • Startup Inc</p>
                <p className="mt-2">Built scalable web applications from concept to deployment.</p>
              </div>
              <div className="border-l-4 border-primary/40 pl-6">
                <h4 className="text-lg font-semibold">Junior Developer</h4>
                <p className="text-muted-foreground">2019 - 2020 • Digital Agency</p>
                <p className="mt-2">Developed responsive websites and learned modern development practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
