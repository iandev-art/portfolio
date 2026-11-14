export const profile = {
  name: 'Ian Njoroge',
  email: 'iannjoroge706@gmail.com',
  whatsapp: { display: '0701 502 191', international: '254701502191' },
  phone: { display: '0728 225 417', international: '+254728225417' },
  location: 'Nairobi, Kenya',
  roles: ['Mathematics & CS student', 'Data Science learner', 'Prompt engineer', 'Virtual Assistant'],
}

export type Education = {
  id: string
  institution: string
  program: string
  status: string
  summary: string
  focus: string[]
}

export const education: Education[] = [
  {
    id: 'mmu',
    institution: 'Multimedia University of Kenya',
    program: 'BSc. Mathematics & Computer Science',
    status: 'In progress',
    summary:
      'Building a rigorous base in pure and applied mathematics alongside core computer science — the reasoning behind every model and every line of code.',
    focus: ['Calculus & Linear Algebra', 'Probability & Statistics', 'Discrete Mathematics', 'Algorithms & Data Structures', 'Programming'],
  },
  {
    id: 'alx',
    institution: 'ALX Africa',
    program: 'Data Science Programme',
    status: 'In progress',
    summary:
      'Hands-on, project-based training in turning raw data into decisions: cleaning, analysing, visualising and modelling real datasets.',
    focus: ['Python', 'SQL', 'Data Analysis', 'Data Visualisation', 'Machine Learning foundations'],
  },
]

export type Certificate = {
  id: string
  title: string
  issuer: string
  issued: string
  description: string
  skills: string[]
  image?: string
  file?: string
  verifyUrl?: string
  credentialId: string
}

export const certificates: Certificate[] = [
  {
    id: 'aice',
    title: 'AI Career Essentials',
    issuer: 'ALX Africa',
    issued: '8 April 2025',
    description:
      'A 6-week programme on leveraging AI tools for productivity, research and communication, with a strong focus on prompt engineering.',
    skills: ['Prompt engineering', 'Generative AI tools', 'AI-assisted research', 'Responsible AI'],
    image: '/certificates/alx-ai-career-essentials.png',
    verifyUrl: 'https://savanna.alxafrica.com/certificates/xFEBh9RHn6',
    credentialId: 'xFEBh9RHn6',
  },
  {
    id: 'pf',
    title: 'Professional Foundations',
    issuer: 'ALX Africa',
    issued: '5 August 2025',
    description:
      'Professional development skills for the digital age: communication, collaboration, critical thinking and self-leadership.',
    skills: ['Communication', 'Collaboration', 'Critical thinking', 'Time management'],
    image: '/certificates/alx-professional-foundations.png',
    verifyUrl: 'https://savanna.alxafrica.com/certificates/rEn7mLSCXF',
    credentialId: 'rEn7mLSCXF',
  },
  {
    id: 'va',
    title: 'Virtual Assistant',
    issuer: 'Elvis Warutumo',
    issued: 'Certificate of completion',
    description:
      'Client acquisition, onboarding and retention; service packaging, pricing and proposals; workflow automation; social media management; AI tools for client delivery.',
    skills: ['Client management', 'Workflow automation', 'Social media', 'ChatGPT · Google Workspace · Canva'],
    file: '/certificates/virtual-assistant-elvis-warutumo.pdf',
    credentialId: '4cd34d30bfb358f3',
  },
]

export type ProjectCategory = 'Web' | 'Data' | 'AI'

export type Project = {
  title: string
  description: string
  category: ProjectCategory
  tags: string[]
  liveUrl?: string
  codeUrl?: string
}

// Add new projects to the top of this list; they appear on the site automatically.
export const projects: Project[] = [
  {
    title: 'Interactive Portfolio',
    description:
      'This site. Vibe-coded with AI assistance and built on Next.js — featuring section tracking, filterable projects and verifiable certificates with QR codes.',
    category: 'Web',
    tags: ['Next.js', 'Tailwind CSS', 'AI-assisted'],
  },
]

export const skillGroups = [
  { name: 'Mathematics', items: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics', 'Discrete Math'] },
  { name: 'Data & Code', items: ['Python', 'SQL', 'Data Analysis', 'Visualisation', 'Spreadsheets'] },
  { name: 'AI', items: ['Prompt Engineering', 'ChatGPT', 'Generative AI', 'Vibe Coding', 'AI Research'] },
  { name: 'Professional', items: ['Communication', 'Client Management', 'Workflow Automation', 'Canva', 'Google Workspace'] },
]
