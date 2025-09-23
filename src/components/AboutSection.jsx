import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let me introduce myself
            </h3>

            <p className="text-muted-foreground">
              Hello everyone who comes to read. Let me introduce you first. My name is Chatchawan Ngernthaworn. My nickname is Dew. I am a programmer who works at the front of the house and back of the house. Now I'm interested in working as a frontend developer and doing work that gives me challenges. My hobby is Study and gain new knowledge, read books, play games, write programs, etc.
            </p>

            <p className="text-muted-foreground ">
             Currently studying at Bangkok University, 4nd year, Faculty of Information Technology and Innovation. Department of Computer Science Very glad to meet friends experienced I'm ready to embrace new things. and new connection
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
           

              <a
                href="/cv/Chatchawan_Ngernthaworn_CV_TH.pdf"
                download="Chatchawan_Ngernthaworn_CV_TH.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV (TH)
              </a>
              <a
                href="/cv/Chatchawan_Ngernthaworn_CV_ENG.pdf"
                download="Chatchawan_Ngernthaworn_CV_ENG.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV (ENG)
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend Developer</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Developer</h4>
                  <p className="text-muted-foreground">
                   I have basic skills in backend development, including server-side logic and databases.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    I have basic skills in software testing, including creating test cases and performing manual and automation testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
