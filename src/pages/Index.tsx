
import { useState, useEffect } from "react";
import CanvasAnimation from "@/components/CanvasAnimation";
import SkillBar from "@/components/SkillBar";
import ProjectCard from "@/components/ProjectCard";
import AnimatedText from "@/components/AnimatedText";
import { projects } from "@/data/projects";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="bg-navy text-textPrimary min-h-screen">
      <CanvasAnimation />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-navy/80 backdrop-blur-sm border-b border-textSecondary/10">
        <a href="#" className="text-teal font-bold text-xl">
          GK<span className="text-textPrimary">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm font-medium uppercase tracking-wider ${
                activeSection === item ? "text-teal" : "text-textSecondary hover:text-textPrimary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        <a href="#contact" className="hidden md:block px-4 py-2 rounded border border-teal text-teal hover:bg-teal/10 transition-colors duration-300">
          Get In Touch
        </a>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex flex-col justify-center px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <div className={`opacity-0 ${isLoaded ? 'animate-fadeIn' : ''}`}>
            <span className="text-teal">👋 Hi, I'm</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mt-4 opacity-0 ${isLoaded ? 'animate-fadeIn animation-delay-200' : ''}`}>
            Gitesh Kukreja
          </h1>
          
          <h2 className={`text-3xl md:text-5xl text-textSecondary font-bold mt-2 opacity-0 ${isLoaded ? 'animate-fadeIn animation-delay-400' : ''}`}>
            I bring code to life with animations.
          </h2>
          
          <p className={`text-textSecondary max-w-xl mt-8 opacity-0 ${isLoaded ? 'animate-fadeIn animation-delay-600' : ''}`}>
            I'm a 19-year-old Computer Science student passionate about building immersive, 
            animated experiences using the power of code. My work lives at the intersection 
            of logic and aesthetics.
          </p>
          
          <div className={`mt-10 flex space-x-4 opacity-0 ${isLoaded ? 'animate-fadeIn animation-delay-600' : ''}`}>
            <a href="#projects" className="px-6 py-3 bg-teal text-navy font-medium rounded hover:bg-teal/90 transition-colors duration-300">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-teal text-teal font-medium rounded hover:bg-teal/10 transition-colors duration-300">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button 
            onClick={() => scrollToSection("about")} 
            className="animate-bounce text-teal"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-6 md:px-16 lg:px-32 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
          <AnimatedText text="About Me" className="text-3xl md:text-4xl font-bold mb-8 inline-block border-b-2 border-teal pb-2" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <AnimatedText 
                text="I'm Gitesh Kukreja, a Computer Science student passionate about building immersive, animated experiences using the power of code."
                className="text-xl font-medium mb-6"
                delay="animation-delay-200"
              />
              
              <AnimatedText 
                text="My work lives at the intersection of logic and aesthetics — whether it's crafting smooth UI animations, developing interactive visualizations, or coding complex simulations that move with purpose."
                className="text-textSecondary mb-6"
                delay="animation-delay-400"
              />
              
              <AnimatedText 
                text="When I'm not coding, you can find me exploring the latest design trends, experimenting with new animation techniques, or contributing to open-source projects."
                className="text-textSecondary"
                delay="animation-delay-600"
              />
            </div>
            
            <div className="relative">
              <div className="relative border-2 border-teal p-4 rounded-md opacity-0 animate-fadeIn animation-delay-400">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Gitesh Kukreja" 
                  className="rounded-md w-full h-auto"
                />
                <div className="absolute inset-0 border-2 border-teal rounded-md transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6 md:px-16 lg:px-32 flex flex-col justify-center bg-navy/80">
        <div className="max-w-5xl mx-auto">
          <AnimatedText text="My Skills" className="text-3xl md:text-4xl font-bold mb-12 inline-block border-b-2 border-teal pb-2" />
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6 opacity-0 animate-fadeIn">Frontend Development</h3>
              <SkillBar name="JavaScript" level={5} delay="animation-delay-200" />
              <SkillBar name="HTML/CSS" level={5} delay="animation-delay-400" />
              <SkillBar name="React.js" level={4} delay="animation-delay-600" />
              <SkillBar name="Three.js" level={4} delay="animation-delay-600" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 opacity-0 animate-fadeIn">Other Skills</h3>
              <SkillBar name="Python" level={4} delay="animation-delay-200" />
              <SkillBar name="Node.js" level={3} delay="animation-delay-400" />
              <SkillBar name="Git & GitHub" level={5} delay="animation-delay-600" />
              <SkillBar name="Adobe After Effects" level={4} delay="animation-delay-600" />
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 opacity-0 animate-fadeIn">What I Do</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Development",
                  description: "HTML, CSS, JavaScript, React",
                  icon: "💻"
                },
                {
                  title: "Creative Animation",
                  description: "GSAP, Three.js, Lottie, WebGL",
                  icon: "🎞️"
                },
                {
                  title: "Problem Solving",
                  description: "Algorithms, Data Structures, Leetcode",
                  icon: "🧠"
                },
                {
                  title: "Backend & APIs",
                  description: "Node.js, Express, Firebase",
                  icon: "🔧"
                },
                {
                  title: "Design Thinking",
                  description: "Figma, UI/UX concepts, prototyping",
                  icon: "🎨"
                },
                {
                  title: "Experiments",
                  description: "Codepen playgrounds, visual experiments, generative art",
                  icon: "👾"
                }
              ].map((skill, index) => (
                <div 
                  key={skill.title}
                  className={`p-6 rounded-lg bg-navy border border-teal/20 hover:border-teal transition-all duration-300 opacity-0 animate-fadeIn`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h4 className="text-teal font-bold mb-2">{skill.title}</h4>
                  <p className="text-textSecondary text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <AnimatedText text="My Projects" className="text-3xl md:text-4xl font-bold mb-12 inline-block border-b-2 border-teal pb-2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                delay={`animation-delay-${index * 200}`}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-teal text-teal font-medium rounded hover:bg-teal/10 transition-colors duration-300"
            >
              See More on GitHub
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 md:px-16 lg:px-32 bg-navy/80 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedText text="Let's Collaborate!" className="text-3xl md:text-4xl font-bold mb-4 inline-block border-b-2 border-teal pb-2" />
          
          <p className="text-textSecondary mb-12 opacity-0 animate-fadeIn animation-delay-200">
            Got an idea that needs a bit of motion magic or clean, creative code? 
            I'm always open to exciting collaborations, freelance projects, or just geeking out about tech.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fadeIn animation-delay-400">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-textPrimary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-navy/60 border border-textSecondary/30 rounded-md focus:outline-none focus:border-teal text-textPrimary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-textPrimary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-navy/60 border border-textSecondary/30 rounded-md focus:outline-none focus:border-teal text-textPrimary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-textPrimary mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-navy/60 border border-textSecondary/30 rounded-md focus:outline-none focus:border-teal text-textPrimary"
                    placeholder="What would you like to talk about?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal text-navy font-medium rounded hover:bg-teal/90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="opacity-0 animate-fadeIn animation-delay-600">
              <h3 className="text-teal font-bold text-xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-textPrimary font-medium">Email</h4>
                  <a href="mailto:gitesh.kukreja@example.com" className="text-textSecondary hover:text-teal">
                    gitesh.kukreja@example.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-textPrimary font-medium">Location</h4>
                  <p className="text-textSecondary">San Francisco, CA</p>
                </div>
                
                <div>
                  <h4 className="text-textPrimary font-medium">Social Links</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-textSecondary hover:text-teal">
                      LinkedIn
                    </a>
                    <a href="#" className="text-textSecondary hover:text-teal">
                      GitHub
                    </a>
                    <a href="#" className="text-textSecondary hover:text-teal">
                      Twitter
                    </a>
                    <a href="#" className="text-textSecondary hover:text-teal">
                      CodePen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-textSecondary/20 text-center text-textSecondary text-sm">
        <p>© {new Date().getFullYear()} Gitesh Kukreja. All Rights Reserved.</p>
        <p className="mt-1">
          Designed & Built with <span className="text-teal">❤</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
