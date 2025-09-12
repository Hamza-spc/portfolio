export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  pdfPath: string;
  badgeColor: string;
}

export const certifications: Certification[] = [
  {
    id: 'software-design-pm',
    title: 'Software Design and Project Management',
    issuer: 'Coursera',
    date: '2024',
    description: 'Comprehensive course covering software design principles, project management methodologies, and best practices for software development lifecycle.',
    skills: ['Software Design', 'Project Management', 'Agile', 'SDLC', 'Requirements Analysis'],
    pdfPath: '/src/assets/certifications/Coursera hamza simou - software design and project management.pdf',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    issuer: 'Coursera',
    date: '2024',
    description: 'Advanced Python programming course covering data structures, algorithms, and modern Python development practices.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'OOP', 'Debugging'],
    pdfPath: '/src/assets/certifications/Coursera hamza python.pdf',
    badgeColor: 'bg-yellow-500'
  },
  {
    id: 'arduino-c-programming',
    title: 'Arduino C Programming',
    issuer: 'Coursera',
    date: '2024',
    description: 'Embedded systems programming using Arduino platform and C programming for IoT and hardware projects.',
    skills: ['C Programming', 'Arduino', 'Embedded Systems', 'IoT', 'Hardware Programming'],
    pdfPath: '/src/assets/certifications/Coursera.arduino:c_programming.pdf',
    badgeColor: 'bg-green-500'
  },
  {
    id: 'networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: '2024',
    description: 'Fundamental networking concepts, protocols, and Cisco networking technologies for enterprise environments.',
    skills: ['Networking', 'Cisco', 'TCP/IP', 'Routing', 'Switching'],
    pdfPath: '/src/assets/certifications/Networking_Basics_Badge_hamza_simou.pdf',
    badgeColor: 'bg-red-500'
  },
  {
    id: 'cisco-networking',
    title: 'Cisco Networking',
    issuer: 'Cisco',
    date: '2024',
    description: 'Advanced Cisco networking technologies, configuration, and troubleshooting for enterprise networks.',
    skills: ['Cisco', 'Network Configuration', 'Troubleshooting', 'Enterprise Networks', 'Security'],
    pdfPath: '/src/assets/certifications/cisco networking.pdf',
    badgeColor: 'bg-red-600'
  },
  {
    id: 'web-development',
    title: 'HTML, CSS & JavaScript',
    issuer: 'Coursera',
    date: '2024',
    description: 'Complete web development course covering frontend technologies, responsive design, and interactive web applications.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Development'],
    pdfPath: '/src/assets/certifications/Coursera.html:css:js.pdf',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 'c-plus-plus',
    title: 'C++ Programming',
    issuer: 'Coursera',
    date: '2024',
    description: 'Advanced C++ programming course covering object-oriented programming, memory management, and modern C++ features.',
    skills: ['C++', 'OOP', 'Memory Management', 'STL', 'Advanced C++'],
    pdfPath: '/src/assets/certifications/cpp-Hamza Simou.pdf',
    badgeColor: 'bg-purple-500'
  },
  {
    id: 'coursera-specialization-1',
    title: 'Advanced Programming Specialization',
    issuer: 'Coursera',
    date: '2024',
    description: 'Comprehensive programming specialization covering multiple languages and advanced development concepts.',
    skills: ['Programming', 'Software Engineering', 'Problem Solving', 'Code Optimization', 'Best Practices'],
    pdfPath: '/src/assets/certifications/Coursera JBA2YT07X0TA.pdf',
    badgeColor: 'bg-indigo-500'
  },
  {
    id: 'coursera-specialization-2',
    title: 'Technology Fundamentals',
    issuer: 'Coursera',
    date: '2024',
    description: 'Fundamental technology concepts and practical applications in modern software development.',
    skills: ['Technology Fundamentals', 'Software Development', 'System Design', 'Technical Writing', 'Documentation'],
    pdfPath: '/src/assets/certifications/Coursera WWEDNPAEQ25J.pdf',
    badgeColor: 'bg-teal-500'
  }
];