import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
                AI/ML frameworks and
                languages to powerful cloud platforms, my toolkit ensures high-quality and efficient development. 🚀 🌟`
  items: Array<any> = [
    // Programming Languages
    {
      name: "Java",
      description: 'Java is a versatile, object-oriented programming language widely used for enterprise applications, Android development, and backend systems.',
      link: 'https://www.java.com/',
      image: 'assets/img/java.svg'
    },
    {
      name: "Python",
      description: 'Python is a powerful programming language used for AI/ML, data science, web development, and automation.',
      link: 'https://python.org/',
      image: 'assets/img/python.svg'
    },
    {
      name: "JavaScript",
      description: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image: 'assets/img/js.svg'
    },
    {
      name: "TypeScript",
      description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.',
      link: 'https://www.typescriptlang.org/',
      image: 'assets/img/typescript.svg'
    },
    {
      name: "C++",
      description: 'C++ is a powerful general-purpose programming language used for system/application software, game development, and performance-critical applications.',
      link: 'https://isocpp.org/',
      image: 'assets/img/cpp.svg'
    },
    {
      name: "C",
      description: 'C is a general-purpose programming language that is extremely popular for system programming and embedded systems.',
      link: 'https://en.cppreference.com/w/c',
      image: 'assets/img/c.svg'
    },
    // Front-End Development
    {
      name: "React",
      description: 'React is a JavaScript library for building user interfaces, particularly single-page applications with a component-based architecture.',
      link: 'https://react.dev/',
      image: 'assets/img/react.svg'
    },
    {
      name: "Tailwind CSS",
      description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.',
      link: 'https://tailwindcss.com/',
      image: 'assets/img/tailwindcss.svg'
    },
    {
      name: "HTML5",
      description: 'HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: 'assets/img/html5.svg'
    },
    {
      name: "CSS3",
      description: 'CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      image: 'assets/img/css3.svg'
    },
    // Back-End Development
    {
      name: "Spring Boot",
      description: 'Spring Boot is a Java-based framework used to create stand-alone, production-grade Spring applications with minimal configuration.',
      link: 'https://spring.io/projects/spring-boot',
      image: 'assets/img/springboot.svg'
    },
    {
      name: "Node.js",
      description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
      link: 'https://nodejs.org/',
      image: 'assets/img/nodejs.svg'
    },
    {
      name: "Hibernate",
      description: 'Hibernate is an object-relational mapping tool for Java, providing a framework for mapping Java classes to database tables.',
      link: 'https://hibernate.org/',
      image: 'assets/img/hibernate.svg'
    },
    // Databases & Storage
    {
      name: "PostgreSQL",
      description: 'PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability and performance.',
      link: 'https://www.postgresql.org/',
      image: 'assets/img/postgresql.svg'
    },
    {
      name: "MySQL",
      description: 'MySQL is an open-source relational database management system based on SQL (Structured Query Language).',
      link: 'https://www.mysql.com/',
      image: 'assets/img/mysql.svg'
    },
    {
      name: "Firebase",
      description: 'Firebase is a platform developed by Google for creating mobile and web applications with real-time database and authentication.',
      link: 'https://firebase.google.com/',
      image: 'assets/img/firebase.svg'
    },
    // AI/ML & Integration
    {
      name: "OpenAI",
      description: 'OpenAI provides powerful AI models and APIs for building intelligent applications with natural language processing capabilities.',
      link: 'https://openai.com/',
      image: 'assets/img/openai.svg'
    },
    {
      name: "LangChain",
      description: 'LangChain is a framework for developing applications powered by language models, enabling complex reasoning and data retrieval.',
      link: 'https://langchain.com/',
      image: 'assets/img/langchain.svg'
    },
    {
      name: "LangGraph",
      description: 'LangGraph is a library for building stateful, multi-agent applications with LLMs, enabling complex agent orchestration workflows.',
      link: 'https://langchain-ai.github.io/langgraph/',
      image: 'assets/img/langgraph.svg'
    },
    {
      name: "Gemini API",
      description: 'Google Gemini API provides access to Google\'s most capable AI models for building intelligent applications.',
      link: 'https://ai.google.dev/',
      image: 'assets/img/gemini.svg'
    },
    {
      name: "TensorFlow",
      description: 'TensorFlow is an open-source machine learning framework developed by Google for building and training neural networks.',
      link: 'https://tensorflow.org/',
      image: 'assets/img/tensorflow.svg'
    },
    {
      name: "MCP",
      description: 'Model Context Protocol (MCP) is a framework for integrating external tools with AI agents, enabling seamless data exchange.',
      link: 'https://modelcontextprotocol.io/',
      image: 'assets/img/mcp.svg'
    },
    // DevOps & Cloud
    {
      name: "Docker",
      description: 'Docker is a software platform that facilitates building, testing, and deploying applications efficiently by packaging them into standardized units called containers.',
      link: 'https://www.docker.com',
      image: 'assets/img/docker.svg'
    },
    {
      name: "Azure",
      description: 'Microsoft Azure is a cloud computing platform offering a wide range of services for building, deploying, and managing applications.',
      link: 'https://azure.microsoft.com/',
      image: 'assets/img/azure.svg'
    },
    {
      name: "AWS",
      description: 'Amazon Web Services (AWS) offers a comprehensive suite of cloud services for computing, storage, and networking.',
      link: 'https://aws.amazon.com/',
      image: 'assets/img/aws.svg'
    },
    {
      name: "Google Cloud",
      description: 'Google Cloud Platform provides cloud computing services for building and scaling applications.',
      link: 'https://cloud.google.com/',
      image: 'assets/img/gcp.svg'
    },
    {
      name: "Git",
      description: 'Git is a distributed version control system for tracking changes in source code during software development.',
      link: 'https://git-scm.com/',
      image: 'assets/img/git.svg'
    },
    {
      name: "Linux",
      description: 'Linux is a free and open-source operating system kernel used in many distributions for servers, desktops, and embedded systems.',
      link: 'https://ubuntu.com/',
      image: 'assets/img/linux.svg'
    },
    {
      name: "Render",
      description: 'Render is a unified cloud to build and run all your apps and websites with free SSL, a global CDN, and auto deploys from Git.',
      link: 'https://render.com/',
      image: 'assets/img/render.svg'
    },
    {
      name: "Vercel",
      description: 'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web',
      link: 'https://vercel.com',
      image: 'assets/img/vercel-icon-dark.svg'
    },
    {
      name: "Railway",
      description: 'Railway is a deployment platform that makes it easy to provision infrastructure, develop with that infrastructure locally, and deploy to the cloud.',
      link: 'https://railway.app/',
      image: 'assets/img/railway.svg'
    },
    // APIs & Tools
    {
      name: "OAuth",
      description: 'OAuth is an open standard for access delegation, commonly used for token-based authentication and authorization.',
      link: 'https://oauth.net/',
      image: 'assets/img/oauth.svg'
    },
    {
      name: "Google API",
      description: 'Google APIs provide access to Google services like Gmail, Drive, Calendar, and more for building integrated applications.',
      link: 'https://developers.google.com/',
      image: 'assets/img/google.svg'
    },
    {
      name: "Postman",
      description: 'Postman is a powerful tool for API development, testing, and monitoring, used by developers to streamline their workflow.',
      link: 'https://www.postman.com/',
      image: 'assets/img/postman.svg'
    },
    {
      name: "Visual Studio Code",
      description: 'Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control.',
      link: 'https://code.visualstudio.com/',
      image: 'assets/img/vscode.svg'
    },
    {
      name: "Figma",
      description: 'Figma is a powerful, collaborative design tool for teams. Explore ideas and gather feedback, build realistic prototypes.',
      link: 'https://www.figma.com',
      image: 'assets/img/figma.svg'
    },
    {
      name: "GitHub",
      description: 'GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously.',
      link: 'https://github.com/',
      image: 'assets/img/github.svg'
    },
  ];
}
