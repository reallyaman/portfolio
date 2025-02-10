import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `Passionate and dedicated Computer Science student with a strong foundation in software development and a keen
enthusiasm for emerging technologies. Proficient in React.js, Tailwind CSS, C++, Java, and Python, with a focus on building
efficient, scalable, and user-friendly applications. Adept at problem-solving and continuously enhancing technical skills to
deliver innovative solutions. Committed to writing clean, maintainable code and contributing to collaborative projects that
drive impactful results.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "NoobFlix",
    image: project1,
    description:
      "A fully functional movie recomendation web app with details like rating, year of release etc and top 10 current movies.",
    technologies: ["HTML", "Tailwind CSS", "React"],
    code:"https://github.com/reallyaman/NoobFlix",
    url:"https://noobflix69.vercel.app/"
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    code:"",
    url:""
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React"],
    code:"https://github.com/reallyaman/portfolio",
    url:"https://amanpandey.vercel.app/"
  },

];

export const CONTACT = {
  address: "",
  phoneNo: "+91 9897 9956 87",
  email: "amanpandey143182002@gmail.com",
};
