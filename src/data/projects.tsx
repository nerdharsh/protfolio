import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  php: {
    title: "php",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/php2.svg" alt="Php"/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  
  // +
  // { // 01. AI Docker file optimizer project
  //   id: "aidockerfileoptimizer",
  //   category: "AI and DevOps",
  //   title: "AI Dockerfile Optimizer",
  //   src: "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
  //   screenshots: ["1.png", "2.png", "3.png"],
  //   live: "https://ai-docker-file-optimizer.netlify.app/",
  //   github:"https://github.com/Abhiz2411/AI-Docker-file-optimizer",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
  //     backend: [PROJECT_SKILLS.openai,PROJECT_SKILLS.netlify],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           AI-Docker-file-optimizer helps optimize Dockerfiles for smaller, more efficient images. 
  //           Simply paste your Dockerfile, and the app analyzes it for best practices and size 
  //           optimization tips. It then provides a refactored, optimized version of the Dockerfile. 
  //           Deployed on Vercel, it ensures fast and easy access to Dockerfile optimization.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/aidockerfileoptimizer/1.png`,
  //             `${BASE_PATH}/aidockerfileoptimizer/2.png`,
  //             `${BASE_PATH}/aidockerfileoptimizer/3.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  { // 02. FinanceMe project
    id: "financeme",
    category: "Tech Website",
    title: "Tech lab community website",
    src: "/assets/projects-screenshots/financeme/12.png",
    screenshots: ["/assets/projects-screenshots/financeme/12.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.php,
      ],
    },
    live: "https://www.techlabcommunity.com/",
    github: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
    get content() {
      return (
        <div>
          {/* <TypographyP className="font-mono text-2xl text-center">
            Tech lab community website
          </TypographyP> */}
          <TypographyP className="font-mono ">
          TechLab, where your passion for technology comes to life! At TechLab, we are committed to delivering the most up-to-date tech news and expert insights to keep you informed and at the forefront of the industry. Whether you are a student eager to learn, a professional looking to enhance your skills, or simply a tech enthusiast, our platform offers a wealth of valuable resources tailored just for you. Dive into a vibrant community where you can explore the latest trends, groundbreaking innovations, and cutting-edge developments in the tech world. Join us at TechLab and embark on your journey to stay ahead of the curve in technology!
          </TypographyP>
          <ProjectsLinks live={this.live}  />
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/1.png`,
              `${BASE_PATH}/financeme/2.png`,
              `${BASE_PATH}/financeme/3.png`,
            ]}
          />

        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://www.abhijitzende.com/",
    github:"https://github.com/Abhiz2411/3D-interactive-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/myportfolio/skills.png`,
            ]}
          />

        </div>
      );
    },
  },
  
  { // 04. Smart parking assitant
    id: "smartparkingassitant",
    category: "Machine Learning",
    title: "Bitcoin Price Prediction",
    src: "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
    screenshots: ["01.jpeg", "02.jpeg","03.jpeg"],
    live: "https://github.com/Abhiz2411/smart-parking-assistant",
    github:"https://github.com/Abhiz2411/smart-parking-assistant",
    skills: {
      frontend: [      
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.python,PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            {/* Transform parking with the Smart Parking Assistant, an IoT marvel powered by Arduino 
            and IR sensors to detect and recommend the best spots in real-time. Enjoy a sleek GUI 
            that visualizes availability and an intelligent system for quick, optimal decisions. 
            Built to adapt with customizable hardware and Python-powered software for seamless 
            integration. Say goodbye to parking woes and hello to smarter space utilization! */}

          Bitcoin Price Prediction Project

          The 'Bitcoin Price Prediction Project' focuses on analyzing historical cryptocurrency data to forecast future Bitcoin prices using machine learning and statistical techniques. By leveraging time series analysis, regression models, and advanced algorithms like LSTM (Long Short-Term Memory networks), the project aims to identify patterns and trends that influence Bitcoin's value. The goal is to build a predictive model that can assist investors and analysts in making informed decisions based on data-driven insights.

          </TypographyP>
          {/* <ProjectsLinks live={this.live} repo={this.github} /> */}

          <br />

          <SlideShow
            images={[
              `${BASE_PATH}/smartparkingassitant/01.jpeg`,
              `${BASE_PATH}/smartparkingassitant/02.jpeg`,
              `${BASE_PATH}/smartparkingassitant/03.jpeg`,
          
            ]}
          />
        </div>
      );
    },
  },
  { // 05. Smart Job Tracker project
    id: "smartjobtracker",
    category: "Full stack",
    title: "Finance Management System",
    src: "/assets/projects-screenshots/smartjobtracker/02.png",
    screenshots: ["01.png", "02.png", "03.png","04.png","05.png","06.png","07.png"],
    live: "https://job-tracker-application-eight.vercel.app/",
    github:"https://github.com/Abhiz2411/Job-tracker-application",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            {/* Track your job applications effortlessly with a sleek, dark-themed app that lets you 
            manage, filter, and visualize your job search. Organize your applications with a 
            Kanban board, monitor progress through status updates, and store everything securely. 
            Enjoy seamless access across devices with a responsive design and email reminders for 
            interviews. A smarter, more intuitive way to stay on top of your job hunt! */}

          Finance Management System is a software application designed to help individuals or organizations manage their financial activities efficiently. The system tracks income, expenses, savings, investments, and budgets, providing detailed reports and analytics to support informed decision-making. It often includes features like transaction management, financial forecasting, expense categorization, and user-friendly dashboards. This project aims to enhance financial planning, reduce errors, and ensure transparency and accountability in financial operations.

          </TypographyP>
          {/* <ProjectsLinks live={this.live} repo={this.github} /> */}

          <br />

          <SlideShow
            images={[
              `${BASE_PATH}/smartjobtracker/01.png`,
              `${BASE_PATH}/smartjobtracker/02.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06. Savinder Puri portfolio project
    id: "savinderpurisportfolio",
    category: "Web Development",
    title: "Spirited Artworks",
    src: "/assets/projects-screenshots/savinderpuriportfolio/1.png",
    screenshots: ["01.png", "02.png", "03.png","04.png","05.png"],
    live: "https://spiritedartworks.netlify.app/index.html",
    github:"",
    skills: {
      frontend: [
      PROJECT_SKILLS.html,
      PROJECT_SKILLS.css,
      PROJECT_SKILLS.js,
      PROJECT_SKILLS.bootstrap,],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Looking for a classy home decor item - choose from our amazing collection of traditional Madhubani paintings. Here you will experience the rich cultural heritage of Mithila art forms in various styles and subjects.

          Madhubani or Mithila Art , which belongs to the Mithila region of Bihar, has fascinated people from all over the world. Madhubani paintings predominantly feature mythological and animal motifs. It is considered a vivid and vibrant art form which has garnered popularity in both commercial and non-commercial art categories due to its distinct flavour.

          Browse through the Spirited Artworks gallery to select the items that you would like to include in your home interiors 
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow
            images={[
              `${BASE_PATH}/savinderpuriportfolio/1.png`,
              `${BASE_PATH}/savinderpuriportfolio/2.png`,
              `${BASE_PATH}/savinderpuriportfolio/3.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
