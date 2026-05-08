import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "AI Powered Grocery App",
      description: "An AI-powered grocery shopping application with intelligent recommendations and seamless user experience.",
      image: "assets/img/projects/grocery-app.webp",
      github: "https://github.com/vijayPrajapatii/vijaydevReactVite",
      view: "https://www.fresh-cart.live/",
      date: "2024",
      tech: [
        {
          name: "React",
          image: "assets/img/react.svg",
        },
        {
          name: "AI/ML",
          image: "assets/img/tensorflow.svg",
        },
        {
          name: "MySQL",
          image: "assets/img/mysql.svg",
        },
      ]
    },
    {
      name: "Sonic Wave",
      description: "A modern audio streaming platform with a sleek user interface and responsive design.",
      image: "assets/img/projects/sonic-wave.webp",
      github: false,
      view: "https://sonic-waaaavee.vercel.app/",
      date: "2024",
      tech: [
        {
          name: "React",
          image: "assets/img/react.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
      ]
    },
    {
      name: "Silicon Synapse",
      description: "An AI-powered platform leveraging Langgraph for advanced AI agent workflows and intelligent system integration.",
      image: "assets/img/projects/silicon-synapse.webp",
      github: false,
      view: "https://silicon-synapse.vercel.app/",
      date: "2025",
      tech: [
        {
          name: "React",
          image: "assets/img/react.svg",
        },
        {
          name: "AI/ML",
          image: "assets/img/tensorflow.svg",
        },
        {
          name: "Langgraph",
          image: "assets/img/langchain.svg",
        },
      ]
    },
    {
      name: "Mobile Wallet",
      description: "A digital wallet application built with Kotlin Multiplatform featuring secure payment processing and REST API integration.",
      image: "assets/img/projects/mobile-wallet.webp",
      github: "https://github.com/vijayPrajapatii/mobile-wallet",
      view: false,
      date: "2024",
      tech: [
        {
          name: "Java",
          image: "assets/img/java.svg",
        },
        {
          name: "Spring Boot",
          image: "assets/img/springboot.svg",
        },
        {
          name: "MySQL",
          image: "assets/img/mysql.svg",
        },
      ]
    },
    {
      name: "Wedding Card Shops",
      description: "An e-commerce platform for wedding cards and invitations with modern design and smooth user experience.",
      image: "assets/img/projects/wedding-cards.webp",
      github: false,
      view: "https://veercards-belagavi.vercel.app/",
      date: "2024",
      tech: [
        {
          name: "React",
          image: "assets/img/react.svg",
        },
        {
          name: "NextJS",
          image: "assets/img/nextjs2.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
      ]
    },
    {
      name: "Currency Converter",
      description: "A real-time currency converter application with live exchange rates and intuitive user interface.",
      image: "assets/img/projects/currency-converter.webp",
      github: "https://github.com/vijayPrajapatii/CurrencyConverter",
      view: "https://currencii.netlify.app/",
      date: "2024",
      tech: [
        {
          name: "HTML5",
          image: "assets/img/html5.svg",
        },
        {
          name: "JavaScript",
          image: "assets/img/js.svg",
        },
        {
          name: "CSS3",
          image: "assets/img/css3.svg",
        },
      ]
    },
    {
      name: "Todo App",
      description: "A feature-rich todo application built with React featuring user authentication and task management.",
      image: "assets/img/projects/todo-app.webp",
      github: "https://github.com/vijayPrajapatii/todo_app_react",
      view: "https://todo-app-react-one-rosy.vercel.app/login",
      date: "2024",
      tech: [
        {
          name: "React",
          image: "assets/img/react.svg",
        },
        {
          name: "JavaScript",
          image: "assets/img/js.svg",
        },
      ]
    },
  ];

}
