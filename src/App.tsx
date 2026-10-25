
import { useState } from 'react'
import { useEffect} from "react";
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    title: 'EduAssist',
    type: 'AI Study Assistant',
    description:
      'An AI study assistant designed to answer questions using students’ learning materials.',
    stack: 'RAG · ChromaDB · FastAPI · LLMs',
    link: 'https://github.com/tag-ecosystemai/c1-tuners-project-2',
  },
  {
    title: 'Kredt',
    type: 'AI Investigation Agent',
    description:
      'it is a credit-intelligence prototype designed to support loan application review. It brings borrower onboarding and application handling together with financial analysis, policy checks, machine-learning risk scoring, document review, and an investigation report for human analysts.',
    stack: 'Python · APIs · pandas .  NumPy · scikit-learn  · joblib',
    link: 'https://github.com/tag-ecosystemai/c1-tuners-project-3',
  },
  {
    title: "Agriculture Crop Image Inspector",
    type: 'AI Agric',
    category: "Computer Vision",
    description:
    "An AI-powered image classification system that identifies potato leaves and classifies their condition as Healthy, Early Blight, or Late Blight.",
    stack: "Python · PyTorch · Torchvision · ResNet18 · FastAPI · Streamlit",
    link: "https://github.com/tag-ecosystemai/c1-tuners-project-1", 
    },
  {
    title: 'Fake Drug Checker',
    type: 'AI Application',
    description:
      'A prototype combining drug information lookup and barcode checking to support medicine verification.',
    stack: 'Python · XGBoost · Streamlit',
    link: 'https://github.com/Shukrah-Oyetunji/Fake-Drug-Text_Barcode-Checker',
  },
]

const skills = [
  'Python',
  'scikit-learn',
  'Pandas',
  'NumPy',
  'Machine Learning',
  'LLM Integration',
  'RAG',
  'ChromaDB',
  'FastAPI',
  'Streamlit',
  'React',
  'Git & GitHub',
  'Model Evaluation',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const introductions = [
  "Hello, I'm Shukrah Oyetunji",
  "An AI & Machine Learning Enthusiast",
  "Building Intelligent AI Applications",
];

const [introIndex, setIntroIndex] = useState(0);
const [displayText, setDisplayText] = useState("");
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  const currentText = introductions[introIndex];

  const timeout = setTimeout(
    () => {
      if (!deleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));

        if (displayText.length === currentText.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));

        if (displayText.length === 0) {
          setDeleting(false);
          setIntroIndex((prev) => (prev + 1) % introductions.length);
        }
      }
    },
    !deleting && displayText.length === currentText.length
      ? 1500
      : deleting
        ? 35
        : 65
  );

  return () => clearTimeout(timeout);
}, [displayText, deleting, introIndex]);

  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100"
    >
      <header className="relative z-20 border-b border-white/[0.07]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-lg font-semibold tracking-tight">
              shukrah<span className="text-lime-300">.ai</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-lime-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-lime-300/60 hover:text-lime-300 sm:flex"
          >
            Let's connect <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-zinc-950 px-6 py-5 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-zinc-300 hover:text-lime-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-lime-400/[0.06] blur-[110px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.06] px-4 py-2 text-sm text-lime-200">
            <Sparkles size={15} />
            AI Engineering · Machine Learning · AI Systems
          </div>
          <p className="mb-4 min-h-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {displayText}
            <span className="ml-1 animate-pulse text-lime-400">|</span>
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Turning ideas into{' '}
            <span className="text-lime-300">intelligent</span> solutions.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build practical AI applications, machine learning models, and
            intelligent workflows to solve real-world problems. I'm 
            interested in AI and meaningful applications.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200"
            >
              Explore my work <ArrowRight size={17} />
            </a>

            <a
              href="https://github.com/Shukrah-Oyetunji"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm transition hover:border-white/40"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-lime-300/[0.04] blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101013] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  My engineering focus
                </p>
                <p className="mt-2 text-lg font-medium">Building with AI</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  number: '01',
                  title: 'Machine Learning',
                  detail: 'Predictive models & evaluation',
                  icon: 'ML',
                },
                {
                  number: '02',
                  title: 'LLMs & AI Agents',
                  detail: 'RAG, tools & intelligent workflows',
                  icon: 'AI',
                },
                {
                  number: '03',
                  title: 'AI Applications',
                  detail: 'APIs, integration & deployment',
                  icon: 'API',
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-lime-300/25 hover:bg-lime-300/[0.03]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] font-mono text-sm text-lime-300">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
                      {item.detail}
                    </p>
                  </div>
                  <span className="text-xs text-zinc-600">{item.number}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-lime-300/15 bg-lime-300/[0.05] p-5">
              <div className="flex items-center gap-2 text-sm text-lime-200">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                Research interests
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Exploring AI systems that make knowledge more accessible and
                support better-informed decisions, especially in healthcare.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-zinc-600">
              <span>Python · React · FastAPI</span>
              <span>AI / ML</span>
            </div>
          </div>
        </motion.div>

        <a
          href="#projects"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-600 transition hover:text-lime-300 lg:flex"
        >
          Scroll to explore <ArrowDown size={14} />
        </a>
      </section>

      <section
        id="projects"
        className="border-t border-white/[0.07] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.22em] text-lime-300">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            AI built to solve problems.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Projects spanning predictive machine learning, AI assistants, and
            intelligent workflows.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-lime-300/30 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-lime-300">
                    {project.type}
                  </span>
                  <span className="font-mono text-xs text-zinc-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-5 border-t border-white/[0.08] pt-4 text-xs leading-6 text-zinc-500">
                  {project.stack}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-lime-300 hover:text-lime-200"
                  >
                    View source code <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>

        </div>
      </section>

      <section
        id="skills"
        className="border-t border-white/[0.07] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.22em] text-lime-300">
            Toolkit
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Technical skills.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/[0.07] px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.22em] text-lime-300">
            About me
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Engineering with purpose.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
            I have a background in Information and Communication Engineering
            and an interest in developing AI systems that address practical
            challenges. My experience spans machine learning, AI application
            development, and backend integration. I am particularly interested
            in healthcare AI and research that addresses challenges in
            resource-constrained settings.
          </p>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/[0.07] px-6 py-12 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-semibold">
              Let's build something{' '}
              <span className="text-lime-300">meaningful.</span>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Interested in AI engineering, research, and collaboration?
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="shoyetunji@gmail.com"
               className="rounded-full bg-lime-400 px-5 py-3 font-medium text-zinc-950 transition hover:bg-lime-300"
               > Email Me
              </a>
              <a href="https://www.linkedin.com/in/oyetunji-shukrah/"
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full border border-zinc-700 px-5 py-3 font-medium text-zinc-200 transition hover:border-lime-400 hover:text-lime-400"
               > LinkedIn Profile 
              </a>
            </div>
          </div>

          <a
            href="https://github.com/Shukrah-Oyetunji"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-lime-300/40 hover:text-lime-300"
          >
            GitHub ↗
          </a>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-xs text-zinc-600">
          © {new Date().getFullYear()} Shukrah Oyetunji.
        </p>
      </footer>
    </main>
  )
}

export default App
