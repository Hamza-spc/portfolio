import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiAngular, 
  SiNodedotjs, 
  SiExpress, 
  SiDjango, 
  SiFlask, 
  SiSpring, 
  SiLaravel, 
  SiDotnet,
  SiPython,
  SiOpenjdk,
  SiPhp,
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiNetlify,
  SiJest,
  SiTestinglibrary
} from 'react-icons/si';
import { FaCode, FaCoffee, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { CSharpIcon } from '../components/CSharpIcon';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
  gradient: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    emoji: "💻",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "Angular", icon: SiAngular, color: "text-red-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-500" },
      { name: "Django", icon: SiDjango, color: "text-green-600" },
      { name: "Flask", icon: SiFlask, color: "text-red-400" },
      { name: "Spring Boot", icon: SiSpring, color: "text-green-500" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: ".NET", icon: SiDotnet, color: "text-purple-500" }
    ]
  },
  {
    title: "Programming Languages",
    emoji: "🖥️",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
      { name: "Java", icon: DiJava, color: "text-orange-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
      { name: "C", icon: SiC, color: "text-blue-600" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
      { name: "C#", icon: CSharpIcon, color: "text-purple-500" }
    ]
  },
  {
    title: "Databases",
    emoji: "🗄️",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "SQL", icon: FaDatabase, color: "text-blue-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
    ]
  },
  {
    title: "Version Control",
    emoji: "🔧",
    gradient: "from-gray-500 to-gray-700",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-800" }
    ]
  },
  {
    title: "Cloud & DevOps",
    emoji: "☁️",
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "CI/CD", icon: FaTools, color: "text-green-500" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
      { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500" },
      { name: "Netlify", icon: SiNetlify, color: "text-cyan-500" }
    ]
  },
  {
    title: "Other Tools & Practices",
    emoji: "🛠️",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Testing & Debugging", icon: SiJest, color: "text-green-500" },
      { name: "Networking Basics", icon: SiTestinglibrary, color: "text-blue-500" }
    ]
  }
];
