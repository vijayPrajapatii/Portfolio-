import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { WorkInfoComponent } from '../work-info/work-info.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  openPopup(company: any): void {
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';

    this.dialog.open(WorkInfoComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: company,
    });
  }

  // Array of data
  aboutme: string = `AI/ML engineer specializing in agentic AI systems and ML workflows. Built production AI agents with LangGraph and MCP integrations at Hyperbots, conducted deep learning research at <strong>Samsung</strong>, and now applying ML-hardware expertise at <strong>Qualcomm</strong> to bridge intelligent software with cutting-edge silicon.`;

  work: Array<any> = [
    {
      id: 1,
      company: 'Hyperbots Inc.',
      position: 'Applied ML Intern (Full-Time, On-Site)',
      time_period: 'Current',
      place: 'Bangalore, Karnataka, India',
      overview:
        'Hyperbots is a company focused on AI and ML-driven solutions for enterprise applications.',
      my_role:
        'Developed and deployed AI agents using MCP (Model Context Protocol) architecture. Focused on creating intelligent, autonomous systems that interact effectively with users and other AI systems.',
      impact:
        'Gained hands-on experience with LangGraph, MCP, Docker, and Azure cloud deployments. Demonstrated ability to build scalable AI agent workflows and containerized solutions.',
      projects: [],
      tech: [
        {
          name: 'AI Agents',
          link: 'https://python.org/',
          image: 'assets/img/python.svg',
        },
        {
          name: 'MCP Development',
          link: 'https://langchain.com/',
          image: 'assets/img/langchain.svg',
        },
        {
          name: 'Applied ML',
          link: 'https://docker.com/',
          image: 'assets/img/docker.svg',
        },
      ],
    },
    {
      id: 2,
      company: 'Alignerr',
      position: 'LLM Trainer and Data annotation',
      time_period: '2025',
      place: 'Remote',
      overview:
        'Alignerr focuses on AI data annotation and quality assurance for machine learning models.',
      my_role: `Worked on different projects of Data Annotation and LLM response evaluation.`,
      impact:
        'Contributed to improving AI model quality through rigorous data annotation and evaluation processes.',
      projects: [],
      tech: [
        {
          name: 'ML Data',
          link: 'https://python.org/',
          image: 'assets/img/python.svg',
        },
        {
          name: 'Data Annotation',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'Data Validation',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
      ],
    },
    {
      id: 3,
      company: 'Outlier',
      position: 'LLM Model Trainer',
      time_period: '2024',
      place: 'Remote',
      overview:
        'Outlier focuses on AI model training and evaluation for enterprise applications.',
      my_role:
        'Worked on different projects of LLM model response resoning and LLM response evaluation.',
      impact:
        'Contributed to improving LLM model quality through rigorous training and evaluation processes.',
      projects: [],
      tech: [
        {
          name: 'LLM',
          link: 'https://python.org/',
          image: 'assets/img/python.svg',
        },
        {
          name: 'Model Training',
          link: 'https://tensorflow.org/',
          image: 'assets/img/tensorflow.svg',
        },
      ],
    },
    {
      id: 4,
      company: 'Samsung Research',
      position: 'Research Intern',
      time_period: 'Jul 2024 - Feb 2025',
      place: 'Bangalore, Karnataka',
      overview:
        'Samsung Research focuses on cutting-edge deep learning and AI research for consumer products.',
      my_role:
        'Designed a conditional GAN model that achieved 90% accuracy in detecting realistic noisy images. Reduced video processing latency by 15% through optimized YUV encoding/decoding techniques. Increased data throughput by streaming dataset preparation processes, handling 50GB dataset efficiently.',
      impact:
        'Research work has potential to impact millions of Samsung users through improved image processing capabilities.',
      projects: [],
      tech: [
        {
          name: 'GAN Models',
          link: 'https://python.org/',
          image: 'assets/img/python.svg',
        },
        {
          name: 'Video Processing',
          link: 'https://tensorflow.org/',
          image: 'assets/img/tensorflow.svg',
        },
        {
          name: 'Data Optimization',
          link: 'https://tensorflow.org/',
          image: 'assets/img/tensorflow.svg',
        },
      ],
    },
    {
      id: 5,
      company: 'MIFOS Initiative',
      position: 'Open Source Contributor',
      time_period: '2025',
      place: 'Remote',
      overview:
        'MIFOS is an open-source platform for financial inclusion and digital payments.',
      my_role:
        'Contributed to an open-source reference implementation for digital wallet and payment capabilities built using the Mifos platform. Written unit tests for the features.',
      impact:
        'Helped improve open-source financial technology infrastructure for digital payments.',
      projects: [],
      tech: [
        {
          name: 'Open Source',
          link: 'https://github.com/',
          image: 'assets/img/github.svg',
        },
        {
          name: 'Fintech',
          link: 'https://python.org/',
          image: 'assets/img/python.svg',
        },
        {
          name: 'Digital Payments',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
      ],
    },
    {
      id: 6,
      company: 'Freelance Developer',
      position: 'Full Stack Developer',
      time_period: '2022 - 2025',
      place: 'Remote',
      overview:
        'Independent freelance work for various clients across different industries.',
      my_role:
        'Developed and deployed various web and mobile applications for clients across different industries. Specialized in creating responsive, user-centric interfaces with robust backend systems. Managed entire project lifecycles from requirement gathering to deployment and maintenance.',
      impact:
        'Successfully delivered multiple projects for clients, improving their digital presence and business operations.',
      projects: [],
      tech: [
        {
          name: 'Web Development',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'Mobile Apps',
          link: 'https://reactnative.dev/',
          image: 'assets/img/react.svg',
        },
        {
          name: 'UI/UX Design',
          link: 'https://www.figma.com/',
          image: 'assets/img/figma.svg',
        },
      ],
    },
  ];

  publications: Array<any> = [
    {
      title: 'Scaling Multi-MCP AI Agents Beyond Context Limits',
      authors: 'Kiran V, Vijay Kumar Prajapati',
      publisher: 'IEEE',
      year: '2025',
      venue: '2025 9th International Conference on Computational System and Information Technology for Sustainable Solutions (CSITSS)',
      abstract: 'Transformer models cannot reason over unbounded interactions; every request must fit within a finite context window. As AI agents evolve into tool-augmented systems exposing dozens of Model Context Protocol (MCP) servers-Google Workspace, Notion, Git, Slack and bespoke micro-services-the cumulative token footprint routinely exceeds the 128 K-200 K boundaries of state-of-the-art LLMs. This paper delivers the first large-scale mixed-methods study of strategies that reconcile multi-MCP autonomy with context limits. We benchmark six optimisation families (baseline, RAG-MCP, contextual compression, hierarchical MCP routing, adaptive chunking and multi-agent coordination) across quantitative metrics and eight qualitative case studies. Experiments on TaskBench, MCP-Radar, MCPEval and BFCL show mean token reduction of 37%, mean accuracy gain 23 pp. We synthesize a decision matrix, propose a governance framework for enterprise deployments. Results position contextual-compression plus RAG-MCP as the current Pareto frontier for developers.',
      link: 'https://ieeexplore.ieee.org/document/11294866',
    },
  ];

  education: Array<any> = [
    {
      studied_at: 'R. V. College of Engineering',
      qualified: 'B.E. in Electronics and Communication Engineering',
      time_period: '2022 - 2026',
      place: 'Bangalore, Karnataka',
    },
  ];
}
