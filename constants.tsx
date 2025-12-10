import { Experience, Project, Education, SocialLink, SkillCategory, Certification, Achievement } from './types';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ayushsshinde/Ayushsshinde',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayushshinde-/',
    icon: Linkedin,
  },
  {
    name: 'Gmail',
    url: 'mailto:ayushshinde81@gmail.com',
    icon: Mail,
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    start: 'Oct 2024',
    end: 'Mar 2025',
    role: 'Trainee - Full Stack Python Developer',
    company: 'The Kiran Academy',
    location: 'Pune, Maharashtra',
    description: [
      'Trained as a Full Stack Python Developer, mastering the complete web development lifecycle.',
      'Utilized Python, Django, HTML, CSS, JavaScript, Angular, and MySQL to build robust web applications.'
    ],
    skills: ['Python', 'Django', 'Angular', 'MySQL', 'HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'exp-new',
    start: 'Aug 2025',
    end: 'Nov 2025',
    role: 'IT Teacher',
    company: 'Anjuman-I-Islam Public School',
    location: 'Panchgani',
    description: [
      'Worked as an IT Teacher for 11th and 12th grade students.',
      'Delivered comprehensive lectures on Information Technology concepts and programming basics.',
      'Managed practical lab sessions and guided students in their projects.'
    ],
    skills: ['Teaching', 'IT', 'Communication']
  },
  {
    id: 'exp-2',
    start: 'Aug 2023',
    end: 'Jan 2024',
    role: 'Web Developer Intern',
    company: 'JA Solutions',
    location: 'Satara, Maharashtra',
    description: [
      'Worked as a Web Developer implementing responsive user interfaces.',
      'Leveraged HTML, CSS, JavaScript, and Bootstrap to deliver high-quality frontend solutions.'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Smart Attendance & Subject Monitoring System',
    year: '2025',
    description: [
      'Designed a comprehensive system to streamline attendance tracking and subject monitoring.',
      'Implemented the frontend using HTML, CSS, JavaScript, and Bootstrap for a responsive UI.',
      'Developed a robust backend powered by Django and MySQL.',
      'Features include role-based access control for students and teachers, leave request functionality, and automated attendance tracking.'
    ],
    techStack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    link: '#', 
    github: '#'
  },
  {
    id: 'proj-2',
    title: 'Criminal Detection Through Facial Recognition',
    year: '2023',
    description: [
      'Developed a public safety application focused on accurate facial recognition and identification.',
      'Utilized TensorFlow Lite and OpenCV for image processing and recognition tasks.',
      'Integrated Firebase for real-time data storage and retrieval of criminal records.',
      'Built the mobile application interface using Java and Android Studio.'
    ],
    techStack: ['Java', 'TensorFlow Lite', 'Firebase', 'OpenCV', 'Android Studio'],
    link: '#',
    github: '#'
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu-1',
    school: 'Dr. Babasaheb Ambedkar Technical University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2019 — 2023',
    location: 'Satara, Maharashtra',
    details: [
      'CGPA: 7.60',
      'Relevant Coursework: Data Structures, Computer Networks, Core Java, Database Management, AI, IoT, Operating Systems.'
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Django", "React.js", "Angular", "Node.js", "NumPy", "Pandas", "Scikit-Learn", "Bootstrap", "Tailwind CSS", "TensorFlow Lite", "OpenCV"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "MySQL", "MongoDB", "Firebase"]
  },
  {
    category: "AI Tools",
    items: ["ChatGPT", "Google Gemini", "Claude AI", "Perplexity AI", "Google AI Studio"]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Oct 2025'
  },
  {
    id: 'cert-1',
    title: 'Python Full Stack Development Certification',
    issuer: 'The Kiran Academy',
    date: 'Oct 2024 — Mar 2025'
  },
  {
    id: 'cert-2',
    title: 'Java Development Certification',
    issuer: 'Fuel Institute',
    date: 'Feb 2023'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Student President (2022)',
    description: 'Served as the Student President for the Computer Science Department, leading initiatives and organizing technical events.'
  },
  {
    id: 'ach-2',
    title: 'Volunteer',
    description: 'Active volunteer for the Art of Living foundation, contributing to community service and wellness programs.'
  }
];

export const ABOUT_TEXT = `
I am a dedicated Full Stack Developer with a strong foundation in Computer Science and a passion for building software that solves real-world problems. My journey started with a B.Tech in CSE, where I explored the depths of algorithms, data structures, and AI.

Currently, I specialize in the Python ecosystem, leveraging Django for backend development and React/Angular for creating intuitive user interfaces. I have hands-on experience building full-scale applications, from attendance monitoring systems to complex facial recognition tools using TensorFlow.

When I'm not coding, I thrive in collaborative environments and am always eager to learn new technologies to improve my craft.
`;