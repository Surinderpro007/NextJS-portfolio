import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Surinder Singh",
  initials: "SS",
  url: "https://google.com",
  location: "#",
  locationLink: "#",
  description:
    "I am committed to staying ahead in the dynamic tech landscape, continuously refining my skills and contributing to innovative solutions.",
  summary:
    "A dedicated frontend developer with over a year of experience crafting intuitive, responsive web applications. My expertise spans HTML, CSS, JavaScript, and React.js, where I transform creative ideas into impactful user experiences. I thrive on turning challenges into opportunities, building seamless interfaces that connect design and functionality.[More](#)",
  avatarUrl: "/",
  skills: [
    "HTML",
    "Css",
    "JavaScript",
    "React JS",
    "Redux Toolkit",
    "JQuery",
    "Bootstrap",
    "Tailwind css",
    "Wordpress",
    "Git",
    "Github",
    "API Testing with (Postman)",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "#",
    tel: "0",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Surinderpro007",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "linkedin.com/in/surinder-singh-436898176",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Webchefz Infotech",
      href: "https://www.webchefz.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/webChefz.svg",
      start: "Dec 2023",
      end: "Present",
      description:
        "I have 1 year of experience as a frontend developer at WebChefz Info Tech, where I refined my skills in HTML, CSS, JavaScript, and frameworks like React.js. I contributed to creating user-friendly interfaces and turning designs into responsive web pages.",
    },
    {
      company: "Techohouze Web Solutions",
      badges: [],
      href: "https://in.linkedin.com/company/techohouze-web-solutions-8b",
      location: "Remote",
      title: "Frontend Developer ",
      logoUrl: "/techOhouse.svg",
      start: "Aug 2023",
      end: "Oct 2023",
      description:
        "Successfully completed a 3-month internship, where I gained practical experience in frontend development, focusing on HTML, CSS, and JavaScript",
    },
    {
      company: "Excellence Technology",
      href: "https://www.excellencetechnology.in/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/excellenceTech.svg",
      start: "Feb 2023",
      end: "July 2023",
      description:
        "I completed a 3-month training program at Excellence Technology, followed by an additional 2 months of intensive training, enhancing my skills and gaining hands-on experience in React JS.",
    },
  
    
  ],
  education: [
    {
      school: "Chandigarh University, Punjab",
      href: "https://www.cuchd.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/cu.svg",
      start: "",
      end: "Pursuing",
    },
    {
      school: "Govt. Sen. Sec. School Dholbaha",
      href: "#",
      degree: "Class 12th (Senior Secondary)",
      logoUrl: "/school.svg",
      start: "Completed",
      end: "2018",
    },
    {
      school: "Govt. High School Manhota ",
      href: "#",
      degree: "Class 10th (High School)",
      logoUrl: "/school.svg",
      start: "Completed",
      end: "2016",
    },
    
  ],
  projects: [
    {
      title: "Code Share App",
      href: "#",
      dates: "",
      active: true,
      description:
        "Code Share is an app for creating, editing, and sharing code snippets. It allows users to store and manage their code locally, with a simple interface and quick search functionality.",
      technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "cShare.mp4",
    },
    {
      title: "Tic Tac Toe Game",
      href: "#",
      dates: "",
      active: true,
      description:
        "A fun and interactive Tic Tac Toe game built with React. Challenge a friend or the computer in this classic, easy-to-play game with a simple and intuitive interface.",
      technologies: [
        "HTML",
        "Css",
        "JavaScript",
        
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "ticTac.mp4",
    },
    {
      title: "Todo App",
      href: "#",
      dates: "",
      active: true,
      description:
        "A feature-rich Todo application for managing daily tasks. Includes functionalities like task addition, status updates (pending, in-progress, completed), and local storage for persistence.",
      technologies: [
        "React.js",
        "JavaScript",
        "Bootstrap",

      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Google Data Analytics Professional Certificate",
      dates: "",
      location: "by Google",
      description:
        "Completed the Google Data Analytics Professional Certificate, gaining a solid understanding of data analysis and tools like Excel and SQL.",
      image:
        "/google.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      dates: "",
      location: "by Meta",
      description:
        "Earned the Meta Front-End Developer Professional Certificate, gaining expertise in HTML, CSS, JavaScript, and React.js, and completing real-world projects to build a strong foundation in front-end development.",
      image:
        "/meta.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "IBM Full Stack Software Developer Professional Certificate (Currently Pursuing)",
      dates: "",
      location: "by IBM",
      description:
        "Preparing for a career as a full-stack developer by building job-ready skills, including front-end and back-end development, and learning essential AI skills. Currently enrolled in this course to enhance full-stack development knowledge.",
      icon: "public",
      image:
        "/ibm.svg",
      links: [],
    },
   
      // {
      //   title: "HackDavis",
      //   dates: "January 20th - 21st, 2018",
      //   location: "Davis, California",
      //   description:
      //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      //   image:
      //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      //   win: "Best Data Hack",
      //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      //   links: [
      //     {
      //       title: "Devpost",
      //       icon: <Icons.globe className="h-4 w-4" />,
      //       href: "https://devpost.com/software/my6footprint",
      //     },
      //     {
      //       title: "ML",
      //       icon: <Icons.github className="h-4 w-4" />,
      //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
      //     },
      //     {
      //       title: "iOS",
      //       icon: <Icons.github className="h-4 w-4" />,
      //       href: "https://github.com/Wallet6/CarbonWallet",
      //     },
      //     {
      //       title: "Server",
      //       icon: <Icons.github className="h-4 w-4" />,
      //       href: "https://github.com/Wallet6/wallet6-server",
      //     },
      //   ],
      // },
 
   
    
    
   
   

  ],
} as const;
