import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {LampContainer} from "@/components/ui/lamp";
import Image from "next/image";
import { motion } from "framer-motion";
const techStack = [
  { name: "Java", icon: "/javalogo.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "JavaScript", icon: "/js.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "SpringBoot", icon: "/springboot.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Nextjs", icon: "/nextjs.svg" },
  { name: "Nodejs", icon: "/nodejs.svg" },
  { name: "Express.js", icon: "/expressjs.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "TailwindCSS", icon: "/tailwindcss.svg" },
 
  { name: "PostgresSQL", icon: "/postgressql.svg" },
  { name: "MySQL", icon: "/mysql.svg" },
  { name: "Prisma", icon: "/prisma.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Docker", icon: "/docker.svg" },
];

const Grid = () => {
  return (
    <section id="about" className=" py-20">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 pr-4">
          <div className="text-lg leading-relaxed text-white-800">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              Hello! I&apos;m Divyansh Saxena, from Kanpur, once referred as the Manchester of the East.
            </p>
            <p className="mb-4">
              I am a creative, punctual, dedicated, and goal-oriented individual with decent moral values and ethics, along with a high energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.
            </p>
            <p className="mb-4">
              I am pursuing my Bachelors from Dr. B. R. Ambedkar National Institute of Technology,Jalandhar in Information Technology (2022-2026).
            </p>
            <p className="mb-4">
              Here are a few of the other activities that I love to do!
            </p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Coding</li>
              <li>Problem Solving</li>
              <li>Playing Guitar</li>
              <li>Mentoring</li>
              <li>Reading</li>
              <li>Singing</li>
              <li>Team Management</li>
            </ul>
            <br />
            
          </div>
        </div>
        <div className="w-full md:w-1/3 pl-4">
          <Image
            src="/divyansh_image.jpg"
            alt="Divyansh Saxena"
            className="rounded-3xl block w-full h-full object-fit object-cover shadow-md hover:shadow-lg hover:grayscale hover:contrast-125 transition duration-300 ease-in-out"
          /><br />
        </div>
      </div>

      <LampContainer >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
        >
          TECH STACK 
        </motion.h1>
     
        <div className="container mx-auto p-4 flex flex-wrap justify-center items-center mt-50">
          {techStack.map((tech, i) => (
            <div key={i} className="m-4 text-center inline-block">
              <div className="relative group">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-2 transition duration-300 transform group-hover:scale-110"
                />
                <span className="absolute bottom-0 left-0 right-0 text-xs font-bold text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </LampContainer>

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
