import { ArrowDown } from "lucide-react";
import myselfImg from "/src/image/myself.png"

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mb-30 mt-10"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="image w-50 z-50 m-auto mb-15">
  <img src={myselfImg} alt="" className="rounded-full w-full h-full object-cover" />
</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Chatchawan
            </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Ngernthaworn
            </span>
          </h1>

          <p className="text-lg md:text-md text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
         I have a strong interest in web development, both frontend and backend. I want to gain skills in designing interactive user interfaces while also learning how to manage databases and build server-side logic, so that I can become a well-rounded full stack developer.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
