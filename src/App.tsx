import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Github,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Server,
  Cloud,
  Layers,
  Terminal,
  ArrowRight,
  MapPin,
  Clock,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Shield,
  Zap,
  MessageSquare,
  CheckCircle2,
  Send,
  Loader2,
  Cpu,
  Container,
  Gauge,
  Braces,
  Network,
  Bot,
  LineChart,
} from 'lucide-react';

// ============ SUPABASE CLIENT ============
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const hasSupabaseConfig = Boolean(supabaseUrl && supabaseKey);
const supabase = hasSupabaseConfig ? createClient(supabaseUrl, supabaseKey) : null;
const defaultContactEmail = 'esneidermotta.work@hotmail.com';
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || defaultContactEmail;

// ============ TYPES ============
interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'devops' | 'database';
  years?: number;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  highlights: string[];
  insights: string[];
}

interface Testimonial {
  quote: string;
  client: string;
  role: string;
  rating: number;
  highlights: string[];
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  insights: string[];
  url: string;
  icon: JSX.Element;
  category: 'backend' | 'devops' | 'ai' | 'fullstack';
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

// ============ DATA ============
const skills: Skill[] = [
  // Core Backend - Java
  { name: 'Java', level: 95, category: 'backend', years: 11 },
  { name: 'Spring Boot', level: 95, category: 'backend', years: 10 },
  { name: 'Spring Framework', level: 90, category: 'backend', years: 10 },
  // Core Backend - .NET
  { name: 'C#', level: 90, category: 'backend', years: 6 },
  { name: '.NET Core / ASP.NET', level: 88, category: 'backend', years: 6 },
  { name: 'Entity Framework', level: 85, category: 'backend', years: 6 },
  // Core Backend - Python
  { name: 'Python', level: 92, category: 'backend', years: 8 },
  { name: 'FastAPI', level: 88, category: 'backend', years: 5 },
  { name: 'Django', level: 85, category: 'backend', years: 6 },
  { name: 'AsyncIO', level: 85, category: 'backend', years: 4 },
  // Frontend
  { name: 'Angular', level: 90, category: 'frontend', years: 8 },
  { name: 'React', level: 85, category: 'frontend', years: 5 },
  { name: 'TypeScript', level: 88, category: 'frontend', years: 7 },
  { name: 'JavaScript', level: 90, category: 'frontend', years: 12 },
  { name: 'Node.js', level: 82, category: 'backend', years: 4 },
  // Architecture
  { name: 'REST API Design', level: 95, category: 'backend', years: 11 },
  { name: 'Microservices', level: 90, category: 'backend', years: 7 },
  // Database
  { name: 'PostgreSQL', level: 92, category: 'database', years: 10 },
  { name: 'MySQL', level: 88, category: 'database', years: 10 },
  { name: 'SQL Server', level: 85, category: 'database', years: 6 },
  { name: 'Redis', level: 80, category: 'database', years: 4 },
  // DevOps
  { name: 'Docker', level: 88, category: 'devops', years: 6 },
  { name: 'Kubernetes', level: 78, category: 'devops', years: 4 },
  { name: 'Apache Kafka', level: 82, category: 'devops', years: 5 },
  { name: 'CI/CD (GitHub Actions)', level: 85, category: 'devops', years: 5 },
  { name: 'AWS', level: 75, category: 'devops', years: 4 },
];

const experiences: Experience[] = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'Globant',
    period: 'October 2019 - December 2025',
    description:
      'Led backend architecture and development across multiple platforms using Java Spring Boot, C# ASP.NET Core, and Python. Built microservices handling millions of transactions while mentoring teams on clean architecture patterns.',
    skills: ['Java', 'Spring Boot', 'C#', 'ASP.NET Core', 'Python', 'FastAPI', 'Angular', 'React', 'Docker', 'Kubernetes', 'Kafka', 'AWS'],
    highlights: [
      'Architected multi-language microservices platform: Java for core services, Python for ML pipelines, C# for Microsoft integrations',
      'Built high-volume telemetry ingestion service in Python handling 100K+ events/second with AsyncIO',
      'Led Docker/Kubernetes deployment strategy reducing deployment time by 80%',
      'Implemented event-driven architecture with Kafka handling 1M+ events/day across Java and Python services',
      'Mentored 12+ developers across Java, C#, and Python stacks',
    ],
    insights: [
      'Using multiple languages taught me that architecture principles transcend syntax. A well-designed service in Python looks remarkably similar to one in Java or C#. The patterns are universal.',
      'Python\'s AsyncIO changed how I think about concurrency. The event loop model for high-throughput I/O is fundamentally different from thread pools, and choosing the right model for the workload matters more than the language itself.',
      'Kubernetes showed me that infrastructure is code. Once you treat YAML with the same respect as Java, the entire deployment pipeline becomes testable, versionable, and reproducible.',
      'Cross-stack development revealed that the hardest bugs aren\'t language-specific. They\'re integration bugs where systems meet. API contracts, serialization, and error handling transcend any single technology.',
    ],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'Endava',
    period: 'March 2016 - August 2019',
    description:
      'Developed enterprise platforms using Java Spring Boot and C# ASP.NET Core. Built microservices, data pipelines, and authentication systems serving enterprise-scale workloads.',
    skills: ['Java', 'Spring Boot', 'C#', '.NET Core', 'Python', 'Angular', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      'Developed hybrid backend using Java Spring Boot for core services and C# for Microsoft ecosystem integrations',
      'Built Python data pipeline processing 500K records hourly for analytics platform',
      'Designed authentication system serving 100K+ concurrent users across Java and .NET services',
      'Created service templates in both Java and C# reducing bootstrap time by 40%',
    ],
    insights: [
      'Working in both Java and C# taught me that Microsoft and Oracle ecosystems solve the same problems differently. Understanding both gives you leverage in any architecture discussion.',
      'Python became my go-to for data pipelines because developer velocity matters more than raw performance. The code that\'s easiest to write and understand often wins in production.',
      'Authentication across multiple stacks requires careful token handling. Understanding JWT, OAuth2, and session management as concepts, not just implementation details, made cross-platform auth possible.',
      'Service templates weren\'t just code. They embedded architectural decisions so teams could move fast without重新learning the same lessons.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'PSL Corp',
    period: 'January 2015 - April 2016',
    description:
      'Built complete web platforms combining Java backend services with Angular interfaces. Delivered financial reporting systems and enterprise dashboards.',
    skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Angular', 'TypeScript', 'MySQL', 'Docker'],
    highlights: [
      'Delivered enterprise financial dashboard used by 200+ daily users',
      'Built REST API with 50+ endpoints in Java Spring Boot with Angular frontend',
      'Implemented Python Django admin panel for content management',
      'Established Docker-based development environment standardizing team workflow',
    ],
    insights: [
      'First time I saw code I wrote running in production for real users. That moment, when someone\'s workday depends on what you built, redefined what "done" means.',
      'Full-stack taught me that the API contract is where backend and frontend meet or fight. Good contracts prevent problems. Bad contracts create tickets forever.',
      'Python Django showed me that batteries-included frameworks accelerate development, but you pay the price in flexibility. Choosing between convenience and control is a recurring architectural decision.',
      'Docker changed my development workflow entirely. "It works on my machine" finally had a solution: ship the machine.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Perficient Latin America',
    period: 'November 2012 - December 2014',
    description:
      'Started the journey into enterprise software building HR management systems, e-commerce platforms, and internal tools using Java and Python.',
    skills: ['Java', 'Spring', 'Python', 'Django', 'AngularJS', 'MySQL', 'JavaScript'],
    highlights: [
      'Contributed to HR management system for 5K+ employees using Java and Python',
      'Built Python automation scripts reducing manual data entry by 60%',
      'Learned fundamentals of clean code, testing, and version control',
      'Delivered first production APIs in both Java and Python that ran for years',
    ],
    insights: [
      'My first production code in both Java and Python ran for years. That taught me something I still believe: the code you write today will outlive your memory of writing it. Make it readable.',
      'Clean code isn\'t about aesthetics. It\'s about the next developer, not you six months later, but a stranger who needs to understand it in an hour.',
      'Python\'s readability made it perfect for automation scripts that business users could actually understand and modify. The best code is code that empowers non-developers.',
      'Enterprise software taught me that "it works on my machine" never ships. The production environment is where code becomes product.',
    ],
  },
];

const projects: Project[] = [
  {
    name: 'Device Telemetry Ingestion Service',
    description:
      'High-volume Python backend service for ingesting telemetry from industrial hardware devices. Handles async request paths, bounded queues, and backpressure with full Prometheus observability.',
    tech: ['Python', 'AsyncIO', 'Pydantic', 'Docker', 'Prometheus'],
    insights: [
      'The production issue wasn\'t CPU or memory. It was p95/p99 latency during bursts because async handlers were doing too much work in the request path.',
      'Bounded queues with controlled 429 responses prevent cascade failures. Unbounded queues hide overload until memory or latency collapses.',
      'Queue depth, event-loop lag, and rejection counts are the metrics that actually diagnose production problems.',
    ],
    url: 'https://github.com/esneidermotta/device_telemetry_ingestion_service',
    icon: <Gauge className="w-6 h-6" />,
    category: 'backend',
  },
  {
    name: 'Java VRP/LNS Optimization Engine',
    description:
      'Vehicle routing optimization engine implementing Large Neighborhood Search (LNS) with adaptive operator selection. Based on last-mile delivery planning work.',
    tech: ['Java', 'JSprit', 'Maven', 'Algorithms', 'Optimization'],
    insights: [
      'In routing systems, the first valid solution is easy. The hard part is controlling second-order effects without creating unintended consequences.',
      'Destroy/repair operators and adaptive weighting let the system find better solutions over time. But each change must be benchmarked against baseline.',
      'Constraint handling is where routing gets real. Time windows, capacity, driver skills. Each constraint multiplies the solution space.',
    ],
    url: 'https://github.com/esneidermotta/java-vrp-lns-optimization-engine2',
    icon: <Network className="w-6 h-6" />,
    category: 'backend',
  },
  {
    name: 'Kubernetes for Java Developers',
    description:
      'Comprehensive guide to deploying, testing, debugging, and monitoring Java applications in Kubernetes. Covers Helm, Istio service mesh, canary deployments, and CI/CD pipelines.',
    tech: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'AWS EKS', 'Skaffold'],
    insights: [
      'Debugging Kubernetes pods locally changes everything. You can actually see what\'s happening instead of guessing from logs.',
      'Service mesh (Istio/App Mesh) moves traffic management and observability outside the application. The sidecar handles circuit breaking, retries, and tracing.',
      'Canary deployments with traffic shifting let you validate changes with real traffic before full rollout.',
    ],
    url: 'https://github.com/esneidermotta/kubernetes-java',
    icon: <Container className="w-6 h-6" />,
    category: 'devops',
  },
  {
    name: 'LangChain RAG Conversational AI',
    description:
      'Conversational AI bot using Retrieval-Augmented Generation with Pinecone vector database and LLaMA 2. Demonstrates full RAG pipeline from ingestion to inference.',
    tech: ['Python', 'LangChain', 'Pinecone', 'LLaMA 2', 'RAG', 'FastAPI'],
    insights: [
      'RAG combines retrieval with generation. You don\'t train the model on your data, you give it context at inference time.',
      'Vector databases like Pinecone enable semantic search. Finding relevant documents by meaning, not just keywords.',
      'The quality of retrieved context determines the quality of the answer. Garbage in, garbage out applies doubly to LLMs.',
    ],
    url: 'https://github.com/esneidermotta/LangChain-RAG-Pinecone-LLM-Conversational-AI',
    icon: <Bot className="w-6 h-6" />,
    category: 'ai',
  },
  {
    name: 'Spring Boot Angular Webapp',
    description:
      'Full-stack blog application with JWT authentication, user management, and content management. Demonstrates complete development-to-deployment workflow.',
    tech: ['Java 17', 'Spring Boot 3', 'Angular 16', 'MySQL', 'JWT', 'Docker'],
    insights: [
      'JWT authentication requires understanding the full flow: token generation, validation, refresh, and revocation. Each step has security implications.',
      'The frontend-backend contract determines development velocity. Clear API boundaries prevent the "it works but I don\'t know why" debugging sessions.',
      'Deployment to Azure demonstrated that building and deploying are different skills. Containerization makes the gap smaller.',
    ],
    url: 'https://github.com/esneidermotta/SpringBoot-Angular-webapp',
    icon: <Layers className="w-6 h-6" />,
    category: 'fullstack',
  },
  {
    name: 'Stock Trading App',
    description:
      'ASP.NET Core 8 web application displaying real-time stock prices using Finnhub.io API. Built with 4-tier architecture and comprehensive testing.',
    tech: ['ASP.NET Core 8', 'Entity Framework Core', 'SQL Server', 'Serilog', 'xUnit'],
    insights: [
      '4-tier architecture separates concerns cleanly: presentation, business logic, data access, and infrastructure. Each layer has one job.',
      'Repository pattern wraps data access. It\'s not about abstraction for its own sake, but about making tests possible.',
      'Real-time stock APIs taught me that external services fail. Circuit breakers and fallbacks aren\'t optional.',
    ],
    url: 'https://github.com/esneidermotta/Stock-Trading-App',
    icon: <LineChart className="w-6 h-6" />,
    category: 'backend',
  },
  {
    name: 'Java-Kubernetes-Docker',
    description:
      'Microservices application deployed with Docker and Kubernetes. Demonstrates multi-service orchestration with shopfront, product catalog, and stock manager.',
    tech: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'Microservices'],
    insights: [
      'Microservices aren\'t about splitting for its own sake. Each service should have a clear boundary and independent deployability.',
      'Container orchestration is about managing failure. Services restart, reschedule, and relocate. The system keeps running.',
      'The network between services is where distributed systems complexity lives. Latency, failures, and partial degradation are the norm.',
    ],
    url: 'https://github.com/esneidermotta/Java-kubernetes-docker',
    icon: <Container className="w-6 h-6" />,
    category: 'devops',
  },
  {
    name: 'InterviewPre-Java',
    description:
      'Comprehensive Java interview preparation resource covering basics through advanced topics, Spring Boot, data structures, and system design.',
    tech: ['Java', 'Spring Boot', 'Algorithms', 'System Design', 'Collections'],
    insights: [
      'Teaching is the best way to learn. Organizing these concepts forced me to understand them at a level I couldn\'t reach by just using them.',
      'System design interviews aren\'t about the right answer. They\'re about showing how you think through trade-offs.',
      'The gap between "I know this" and "I can explain this clearly" is where real expertise lives.',
    ],
    url: 'https://github.com/esneidermotta/InterviewPre-Java',
    icon: <Braces className="w-6 h-6" />,
    category: 'backend',
  },
  {
    name: 'Recruiting Company Web API',
    description:
      'Backend for a job search website built with .NET 8. Demonstrates Entity Framework Core Code First and SQL Server integration.',
    tech: ['.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server'],
    insights: [
      'EF Core Code First means the database schema evolves with the code. Migrations tell the story of the domain model.',
      'Job search domains are complex: candidates, jobs, applications, companies, skills matching. Each relationship needs careful modeling.',
      'Clean API design means thinking about the consumer. Job seekers, recruiters, and administrators see different views of the same data.',
    ],
    url: 'https://github.com/esneidermotta/Recruiting_Company_Web_API',
    icon: <Briefcase className="w-6 h-6" />,
    category: 'backend',
  },
  {
    name: 'Time Management Odoo',
    description:
      'Time management module for Odoo ERP with desktop and Ubuntu Touch support. Demonstrates ERP customization and cross-platform development.',
    tech: ['Python', 'Odoo', 'QML', 'Qt', 'Ubuntu Touch'],
    insights: [
      'ERP customization isn\'t just adding fields. It\'s understanding business processes enough to model them correctly.',
      'Cross-platform means different things on desktop, mobile, and touch interfaces. Each has constraints and affordances.',
      'Open source contributions require thinking about users you\'ll never meet. Documentation and clean APIs become critical.',
    ],
    url: 'https://github.com/esneidermotta/Time-Management-Odoo',
    icon: <Clock className="w-6 h-6" />,
    category: 'fullstack',
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "I have been genuinely impressed by Esneider's code quality. It's clean, thoughtful, and incredibly well-structured. If you're looking for someone who truly values clarity and maintainability in their work, he's one of the best choices you can make.",
    client: 'Spring Boot Order System Client',
    role: 'Performance Optimization Project',
    rating: 5,
    highlights: ['Committed to Quality', 'Solution Oriented', 'Clear Communicator'],
  },
  {
    quote:
      'He demonstrated a very high level of seniority. In extremely limited time, they were able to diagnose our system, identify weaknesses, and propose meaningful improvements. Their ability to quickly reason about complex systems and provide structured, actionable insights is rare.',
    client: 'Backend Consulting Client',
    role: 'Data Pipeline & ETL Consulting',
    rating: 5,
    highlights: ['Solution Oriented', 'Detail Oriented', 'Accountable for Outcomes'],
  },
  {
    quote:
      "They did a wonderful job setting up the server and giving it a bit of polish. Most of the commands were working by the time they finished, and the ranks and permissions were fully operational. I can confidently recommend them.",
    client: 'Minecraft Server Project',
    role: 'Infrastructure & Configuration',
    rating: 5,
    highlights: ['Reliable', 'Committed to Quality', 'Solution Oriented', 'Accountable for Outcomes', 'Detail Oriented'],
  },
];

const skillCategoryIcons: Record<string, JSX.Element> = {
  backend: <Server className="w-5 h-5" />,
  frontend: <Code2 className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  devops: <Cloud className="w-5 h-5" />,
};

// ============ COMPONENTS ============

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-700/25 ring-1 ring-white/40">
                EM
              </div>
              <span className="font-semibold text-secondary-900 hidden sm:block">Esneider Motta</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/esneidermotta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-2xl font-semibold text-secondary-900 hover:text-primary-600 py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/esneidermotta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full justify-center mt-8"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
          </a>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-primary-50/70 to-secondary-100" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, theme('colors.secondary.900') 1px, transparent 1px),
            linear-gradient(to bottom, theme('colors.secondary.900') 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6 opacity-0 animate-slide-up">
              <Sparkles className="w-4 h-4" />
              <span>Available for backend & architecture projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 leading-tight mb-6 opacity-0 animate-slide-up animate-delay-100">
              Esneider Motta
            </h1>

            <p className="text-2xl md:text-3xl text-secondary-600 font-medium mb-6 opacity-0 animate-slide-up animate-delay-200">
              Enterprise Backend Engineer
            </p>

            <p className="text-lg text-secondary-600 mb-4 max-w-xl mx-auto lg:mx-0 opacity-0 animate-slide-up animate-delay-300">
              <span className="font-semibold text-secondary-900">Java Spring Boot. C# ASP.NET Core. Python FastAPI. Angular. React.</span>
            </p>

            <p className="text-lg text-secondary-600 mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-slide-up animate-delay-300">
              I've spent 18 years building backend systems across multiple stacks. Good architecture transcends language. Whether it's Java, C#, Python, or TypeScript, the principles of clean design and reliable systems remain the same.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-up animate-delay-400">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 opacity-0 animate-slide-up animate-delay-500">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600">18+</div>
                <div className="text-secondary-600 text-sm md:text-base">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600">4</div>
                <div className="text-secondary-600 text-sm md:text-base">Major Stacks</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600">100%</div>
                <div className="text-secondary-600 text-sm md:text-base">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative opacity-0 animate-scale-in animate-delay-300">
            <div className="relative perspective-1000">
              <div className="glass rounded-3xl p-8 shadow-2xl shadow-primary-500/10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary-300" />
                  <div className="w-3 h-3 rounded-full bg-primary-400" />
                  <div className="w-3 h-3 rounded-full bg-primary-500" />
                  <span className="ml-4 text-secondary-400 text-sm font-mono">architecture.java</span>
                </div>

                <pre className="font-mono text-xs md:text-sm leading-relaxed">
                  <code>
                    <span className="text-secondary-400"># Polyglot backend engineering</span>
                    {'\n\n'}
                    <span className="text-primary-500">stacks</span> = [
                    {'\n  '}<span className="text-primary-500">"Java Spring Boot"</span>,
                    {'\n  '}<span className="text-primary-500">"C# ASP.NET Core"</span>,
                    {'\n  '}<span className="text-primary-500">"Python FastAPI"</span>,
                    {'\n  '}<span className="text-primary-500">"Angular / React"</span>
                    {'\n]\n\n'}
                    <span className="text-primary-500">for</span> stack <span className="text-primary-500">in</span> stacks:
                    {'\n  '}
                    <span className="text-secondary-400"># Same principles, different syntax</span>
                    {'\n  '}
                    <span className="text-primary-600">build</span>(stack).with_values(
                    {'\n    '}<span className="text-accent-600">scalability</span>,
                    {'\n    '}<span className="text-accent-600">reliability</span>,
                    {'\n    '}<span className="text-accent-600">clean_code</span>
                    {'\n  })\n\n'}
                    <span className="text-secondary-400"># The language changes.</span>
                    {'\n'}
                    <span className="text-secondary-400"># The engineering doesn't.</span>
                  </code>
                </pre>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-primary-700 shadow-lg shadow-primary-500/30 flex items-center justify-center animate-float">
                <Terminal className="w-10 h-10 text-white" />
              </div>

              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-accent-600 shadow-lg shadow-accent-500/30 flex items-center justify-center animate-float"
                style={{ animationDelay: '1s' }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex flex-col items-center text-secondary-500 hover:text-primary-600 transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">About</span>
          <h2 className="section-heading">Four Stacks, One Philosophy</h2>
          <p className="section-subheading mx-auto">
            Java Spring Boot for enterprise scale. C# ASP.NET Core for Microsoft ecosystems. Python for data pipelines and ML.
            Angular/React for the frontend layer. Different syntax, same engineering principles.
          </p>
        </div>

        {/* Tech Stack Highlight */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-700 flex items-center justify-center text-white shadow-lg">
              <Server className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Java Spring Boot</h3>
            <p className="text-secondary-600 text-sm mb-4">11 years building enterprise platforms</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">Spring Boot</span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">Hibernate</span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">Maven</span>
            </div>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-700 flex items-center justify-center text-white shadow-lg">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">C# ASP.NET Core</h3>
            <p className="text-secondary-600 text-sm mb-4">6 years delivering .NET solutions</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">ASP.NET Core</span>
              <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">Entity Framework</span>
              <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">LINQ</span>
            </div>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent-600 flex items-center justify-center text-white shadow-lg">
              <Bot className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Python</h3>
            <p className="text-secondary-600 text-sm mb-4">8 years in data, ML, and automation</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">FastAPI</span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">Django</span>
              <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">AsyncIO</span>
            </div>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-700 flex items-center justify-center text-white shadow-lg">
              <Code2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Angular / React</h3>
            <p className="text-secondary-600 text-sm mb-4">8 years building frontend interfaces</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">TypeScript</span>
              <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">RxJS</span>
              <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">Node.js</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Looking at the Field from Above
              </h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                When I started in 2007, I looked up at software engineering like standing at the base of a mountain.
                Every framework was a discovery. Every bug was an adventure. I was building things, but I didn't
                really understand what I was building or why.
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Now I look down at systems from above. I see the whole landscape before writing a single line.
                I know that a decision made in the database layer ripples to the API, touches the frontend,
                and determines whether 3 AM debugging sessions happen. Architecture isn't about microservices
                or monoliths. It's about understanding trade-offs.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                The difference between knowing a language and knowing engineering? A programmer asks{' '}
                <em>"How do I implement this?"</em> An engineer asks{' '}
                <em>"Should we implement this? And if we do, what becomes possible and what becomes harder?"</em>
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                What I Actually Do
              </h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                I build backend systems for companies that need software their business can depend on. Not prototypes.
                Not MVPs that become permanent. Production platforms that handle real traffic, real users, real money.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: <Server className="w-6 h-6" />, text: 'REST APIs that scale' },
                  { icon: <Database className="w-6 h-6" />, text: 'Database architecture' },
                  { icon: <Layers className="w-6 h-6" />, text: 'Microservices design' },
                  { icon: <Shield className="w-6 h-6" />, text: 'Security & auth systems' },
                  { icon: <Zap className="w-6 h-6" />, text: 'Performance optimization' },
                  { icon: <Cloud className="w-6 h-6" />, text: 'Cloud deployment' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-secondary-50">
                    <div className="text-primary-600">{item.icon}</div>
                    <span className="text-secondary-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-500" />
                Based in Bogota, Colombia
              </h3>
              <p className="text-secondary-600 mb-4">
                Working remotely with clients across time zones. Fluent in English and Spanish.
              </p>
              <div className="flex items-center gap-2 text-primary-600">
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-500" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary-200 pl-4">
                  <div className="font-semibold text-secondary-900">Universidad Nacional de Colombia</div>
                  <div className="text-secondary-600">Software Development (2005-2007)</div>
                </div>
                <div className="border-l-2 border-primary-200 pl-4">
                  <div className="font-semibold text-secondary-900">Fundacion CIDCA</div>
                  <div className="text-secondary-600">Bachelor of Computer Science (2000-2004)</div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-500" />
                Upwork Recognition
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-primary-50">
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div className="text-secondary-600 text-sm">Job Success</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary-50">
                  <div className="text-3xl font-bold text-primary-600">Top</div>
                  <div className="text-secondary-600 text-sm">Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-secondary-700 max-w-4xl mx-auto leading-relaxed italic">
            "After 18 years, I've learned that the code that's easiest to read is the code that lasts the longest,
            and the systems that are easiest to change are the ones that deliver the most value."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Experience</span>
          <h2 className="section-heading">The Journey</h2>
          <p className="section-subheading mx-auto">
            From learning to code to building systems that run businesses. Each role taught lessons I still use.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary-600 font-medium">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-secondary-500 mt-2 md:mt-0">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-secondary-700 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-secondary-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-secondary-200 pt-4 mt-4">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {expandedIndex === idx ? 'Hide' : 'Show'} Insights & Lessons Learned
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedIndex === idx ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {expandedIndex === idx && (
                    <div className="mt-4 space-y-3 animate-fade-in">
                      {exp.insights.map((insight, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                          <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                            {iIdx + 1}
                          </div>
                          <p className="text-secondary-700 text-sm leading-relaxed italic">"{insight}"</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', 'backend', 'devops', 'ai', 'fullstack'];

  const categoryIcons: Record<string, JSX.Element> = {
    backend: <Server className="w-4 h-4" />,
    devops: <Container className="w-4 h-4" />,
    ai: <Bot className="w-4 h-4" />,
    fullstack: <Layers className="w-4 h-4" />,
  };

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Projects</span>
          <h2 className="section-heading">Code That Teaches</h2>
          <p className="section-subheading mx-auto">
            Personal projects that demonstrate how I work. Each repository includes real engineering decisions, not just working code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {cat !== 'all' && categoryIcons[cat]}
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.name}
              className="card p-6 opacity-0 animate-slide-up group"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900 text-lg">{project.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-secondary-500">
                      {categoryIcons[project.category]}
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-400 hover:text-primary-600 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="text-secondary-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="tag text-xs">
                    {t}
                  </span>
                ))}
              </div>

              <div className="border-t border-secondary-100 pt-4 mt-4">
                <h4 className="text-sm font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary-500" />
                  Key Insights
                </h4>
                <ul className="space-y-2">
                  {project.insights.map((insight, iIdx) => (
                    <li key={iIdx} className="text-secondary-600 text-sm flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/esneidermotta?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Github className="w-5 h-5" />
            View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', 'backend', 'frontend', 'database', 'devops'];

  const filteredSkills =
    activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4 inline-block">Skills</span>
          <h2 className="section-heading">Technical Arsenal</h2>
          <p className="section-subheading mx-auto">
            Tools I've used in production across Java, .NET, and Angular ecosystems. Real systems, real experience.
          </p>
        </div>

        {/* Primary Tech Stacks */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border-2 border-primary-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center text-white">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-900">Java Ecosystem</h3>
                <p className="text-sm text-secondary-500">11 years</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Spring Framework', 'Hibernate', 'Maven', 'JUnit'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-accent-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center text-white">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-900">.NET Ecosystem</h3>
                <p className="text-sm text-secondary-500">6 years</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['C#', '.NET Core', 'ASP.NET', 'Entity Framework', 'LINQ', 'Razor'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-primary-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center text-white">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-900">Python Ecosystem</h3>
                <p className="text-sm text-secondary-500">8 years</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'Django', 'AsyncIO', 'LangChain', 'Pandas'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-accent-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-700 flex items-center justify-center text-white">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-900">Angular / React</h3>
                <p className="text-sm text-secondary-500">8 years</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Angular', 'React', 'TypeScript', 'RxJS', 'Node.js', 'JavaScript'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-primary-700 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 border border-primary-100'
              }`}
            >
              {cat !== 'all' && skillCategoryIcons[cat]}
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="card p-6 bg-white border-primary-100 opacity-0 animate-slide-up"
              style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 ring-1 ring-white">
                    {skillCategoryIcons[skill.category]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800">{skill.name}</h4>
                    {skill.years && (
                      <span className="text-sm text-secondary-600">{skill.years} years</span>
                    )}
                  </div>
                </div>
                <span className="text-lg font-bold text-primary-700">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    transitionDelay: `${idx * 50 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Also Comfortable With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Odoo CRM/ERP',
              'Apache Maven',
              'Spring Security',
              'Pydantic',
              'Poetry',
              'pip/venv',
              'LangChain',
              'Pinecone',
              'JUnit',
              'pytest',
              'Git',
              'Hibernate',
              'OAuth2',
              'JWT',
              'WebSocket',
              'GraphQL',
              'Docker Compose',
              'Linux',
              'Nginx',
            ].map((tool) => (
              <span key={tool} className="tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/80 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Clients Say</h2>
          <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
            Real feedback from real projects. Not marketing fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-secondary-800 rounded-2xl p-8 border border-secondary-700 relative"
            >
              <div className="absolute -top-4 left-8 text-6xl text-primary-500 opacity-50">"</div>
              <p className="text-secondary-300 leading-relaxed mb-6 relative z-10 pt-4">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-secondary-600'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {testimonial.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-secondary-700">
                <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center text-white font-bold">
                  {testimonial.client.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.client}</div>
                  <div className="text-secondary-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    const payload: ContactFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    try {
      if (!payload.name || !payload.email || !payload.subject || !payload.message) {
        throw new Error('Please complete every field before sending.');
      }

      if (supabase) {
        const { error } = await supabase.from('contact_submissions').insert([payload]);

        if (error) throw error;

        setSubmitMessage("Message sent successfully. I'll get back to you soon.");
      } else if (contactEmail) {
        const subject = encodeURIComponent(payload.subject);
        const body = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
        );

        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
        setSubmitMessage('Your email app is opening with the message ready to send.');
      } else {
        throw new Error(
          'Contact sending is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, or set VITE_CONTACT_EMAIL for the email fallback.'
        );
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,154,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,154,255,0.12),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-primary-200" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-primary-800 border border-primary-200 shadow-sm mb-4">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Let's Build Something</h2>
            <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
              Have a backend project, API architecture challenge, or enterprise system that needs attention?
              Send me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && submitMessage && (
                  <div
                    className="p-4 bg-primary-50 border border-primary-200 rounded-lg text-primary-700 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    {submitMessage}
                  </div>
                )}

                {submitStatus === 'error' && submitMessage && (
                  <div
                    className="p-4 bg-error-50 border border-error-200 rounded-lg text-error-700 text-center"
                    role="alert"
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <div className="card p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-700 flex items-center justify-center shadow-lg shadow-primary-700/20">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-secondary-900">Private Email</div>
                  <div className="text-secondary-600">
                    Send a project inquiry directly
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-primary-700 shrink-0" />
              </div>

              <a
                href="https://github.com/esneidermotta"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary-800 flex items-center justify-center transition-colors shadow-lg shadow-secondary-800/20">
                  <Github className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-secondary-900">GitHub</div>
                  <div className="text-secondary-600 group-hover:text-primary-600 transition-colors">
                    View all repositories
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-secondary-400 group-hover:text-primary-600 transition-colors" />
              </a>

              <div className="card p-6">
                <h3 className="font-semibold text-secondary-900 mb-3">Response Time</h3>
                <div className="flex items-center gap-2 text-secondary-600">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>Usually within 24 hours on business days</span>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-secondary-900 mb-3">Availability</h3>
                <div className="flex items-center gap-2 text-primary-600">
                  <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  <span>Currently accepting new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-secondary-900 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center text-white font-bold text-sm">
              EM
            </div>
            <span className="text-secondary-400">Esneider Motta</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/esneidermotta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="text-secondary-400 hover:text-white transition-colors"
              aria-label="Go to contact form"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-secondary-500 text-sm">
            © {new Date().getFullYear()} Esneider Motta. Built with React & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
function App() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
