import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML",image:"./image/logo/html-5.png", level:"", category: "frontend" },
  { name: "CSS",image:"/image/logo/css-3.png", level:"", category: "frontend" },
  { name: "JavaScript",image:"/image/logo/js.png", level:"", category: "frontend" },
  { name: "React",image:"/image/logo/science.png", level:"", category: "frontend" },
  { name: "TypeScript",image:"/image/logo/typescript.png", level:"", category: "frontend" },
  { name: "Tailwind CSS",image:"/image/logo/tailwind.png", level:"", category: "frontend" },

  // Backend
  { name: "Node.js",image:"/image/logo/node-js.png", level:"", category: "backend" },
  { name: "MySQL",image:"/image/logo/mysql.png", level:"", category: "backend" },
  { name: "MongoDB",image:"/image/logo/icons8-mongodb-48.png", level:"", category: "backend" },

  // Tools
  { name: "Git/GitHub",image:"/image/logo/git.png", level:"", category: "tools" },
  { name: "Figma",image:"/image/logo/figma.png", level:"", category: "tools" },
  { name: "VS Code",image:"/image/logo/logo.png", level:"", category: "tools" },

  // Tester
  { name: "Robot Framework",image:"/image/logo/robotFramework.png", level:"", category: "tester" },
];

const categories = ["all", "frontend", "backend", "tools" , "tester"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className=" mb-4 text-center">
                <div className="image flex justify-center mb-5"><img src={skill.image} alt="" className="w-full h-full object-cover max-w-20"/></div>
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
