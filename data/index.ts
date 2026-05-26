export const personal = {
  name: 'Michael Miller',
  title: 'AI Engineer & Cloud Architect',
  tagline: 'Building Intelligent Enterprise Systems at Scale',
  bio: `AI Engineer and Cloud Architect based in Raleigh, NC. I design and ship production AI systems — RAG pipelines, LLM agents, and cloud infrastructure — that solve real enterprise problems and deliver measurable ROI. I've led migrations of 200+ workloads to Azure, built chatbot platforms serving 500+ users, and automated workflows saving thousands of hours annually.`,
  location: 'Raleigh, NC',
  email: 'mmillertechnologies@gmail.com',
  github: 'https://github.com/mmillertechnologies-oss',
  linkedin: 'https://linkedin.com/in/michael-miller',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: '12+', label: 'Enterprise AI Projects' },
  { value: '$2M+', label: 'Cost Savings Delivered' },
  { value: '40%', label: 'Avg. Efficiency Gain' },
  { value: '5+', label: 'Cloud Migrations Led' },
]

export const projects = [
  {
    id: 'enterprise-chatbot',
    title: 'AI Enterprise Chatbot Platform',
    category: 'AI / LLM',
    summary: 'Production-grade internal AI assistant serving 500+ enterprise employees with RAG-powered knowledge retrieval.',
    problem: 'Enterprise employees spent 2+ hours daily searching internal documentation, SharePoint, and legacy systems for answers. Knowledge was siloed across 15+ systems.',
    solution: 'Built a multi-tenant RAG chatbot platform with Azure OpenAI, Pinecone vector DB, and custom ingestion pipelines that unified all enterprise knowledge into a single conversational interface.',
    stack: ['Azure OpenAI', 'LangChain', 'Pinecone', 'Next.js', 'FastAPI', 'Azure Blob', 'PostgreSQL'],
    impact: ['85% reduction in time-to-answer for internal queries', '500+ daily active users at launch', '$180K annual productivity savings', '98.2% user satisfaction score'],
    architecture: 'Multi-tenant SaaS with per-org vector namespaces, streaming SSE responses, role-based access control, and audit logging.',
    featured: true,
    color: '#6ee7f7',
  },
  {
    id: 'ai-lead-gen',
    title: 'AI Lead Generation Engine',
    category: 'AI / Automation',
    summary: 'Automated B2B lead generation system using AI to find, score, and personalize outreach for 800+ prospects monthly.',
    problem: 'Sales team spent 60% of their time on manual prospecting with inconsistent outreach quality and low conversion rates.',
    solution: 'Built an end-to-end AI pipeline: Apollo API for lead discovery, GPT-4 for personalization, Instantly for sequencing, and a custom scoring engine using firmographic + behavioral signals.',
    stack: ['OpenAI GPT-4', 'Apollo API', 'Make.com', 'Instantly', 'PostgreSQL', 'Python', 'FastAPI'],
    impact: ['300% increase in outreach volume', '4.2x improvement in reply rate', '22% meeting-to-close conversion', '$840K pipeline generated in Q1'],
    architecture: 'Event-driven pipeline with async enrichment workers, AI personalization service, and real-time CRM sync.',
    featured: true,
    color: '#a78bfa',
  },
  {
    id: 'powerbi-dashboard',
    title: 'Power BI Executive Analytics Platform',
    category: 'Data / Analytics',
    summary: 'Enterprise analytics platform consolidating 8 data sources into executive-ready dashboards with real-time KPI tracking.',
    problem: 'C-suite executives required 48+ hours to compile weekly reports from disparate systems. No single source of truth for business performance.',
    solution: 'Architected a medallion data lake on Azure, built automated ETL pipelines, and designed 12 executive dashboards with drill-through capabilities and natural language Q&A.',
    stack: ['Power BI Premium', 'Azure Synapse', 'Azure Data Factory', 'SQL Server', 'Python', 'DAX'],
    impact: ['Report generation time from 48hrs to real-time', '$120K saved annually in analyst hours', '12 C-suite dashboards deployed', '99.9% data pipeline uptime'],
    architecture: 'Bronze/Silver/Gold data lakehouse on Azure Synapse with incremental refresh and row-level security.',
    featured: true,
    color: '#f59e0b',
  },
  {
    id: 'cloud-migration',
    title: 'Enterprise Cloud Migration Platform',
    category: 'Cloud / Infrastructure',
    summary: 'Led end-to-end migration of 200+ workloads from on-premise data center to Azure, achieving 40% infrastructure cost reduction.',
    problem: 'Organization running aging on-premise infrastructure with $2M+ annual maintenance costs, scaling limitations, and security vulnerabilities.',
    solution: 'Designed Azure landing zone architecture, built automated assessment tooling, executed phased migration with zero downtime using Azure Migrate and custom runbooks.',
    stack: ['Azure', 'Terraform', 'PowerShell', 'Azure DevOps', 'Ansible', 'Azure Monitor'],
    impact: ['200+ workloads migrated', '40% infrastructure cost reduction', 'Zero downtime migrations', '$800K annual savings'],
    architecture: 'Hub-spoke network topology with centralized security, governance automation, and cost management tooling.',
    featured: false,
    color: '#10b981',
  },
  {
    id: 'ai-workflow',
    title: 'AI Workflow Automation System',
    category: 'AI / Automation',
    summary: 'No-code AI automation platform enabling business teams to build AI-powered workflows without engineering support.',
    problem: 'Engineering team bottleneck — business teams waited 3–6 weeks for simple automation requests.',
    solution: 'Built a visual workflow builder with pre-built AI connectors (OpenAI, Claude, Whisper), drag-and-drop logic, and enterprise authentication.',
    stack: ['Next.js', 'Node.js', 'OpenAI', 'Anthropic Claude', 'PostgreSQL', 'Redis', 'Docker'],
    impact: ['150+ automated workflows deployed', '6,000+ hours saved annually', 'Business teams self-sufficient in 2 days', '94% reduction in engineering tickets'],
    architecture: 'Queue-based execution engine with retry logic, parallel execution, and real-time execution monitoring.',
    featured: false,
    color: '#6ee7f7',
  },
  {
    id: 'rag-search',
    title: 'RAG-Powered Enterprise Search',
    category: 'AI / LLM',
    summary: 'Semantic search system replacing keyword search across 1M+ enterprise documents with natural language understanding.',
    problem: 'Legacy keyword search returning irrelevant results. Employees unable to find critical documents, policies, and procedures.',
    solution: 'Built hybrid search combining dense vector retrieval (Pinecone) with sparse BM25 ranking, re-ranked by a cross-encoder, surfacing citations with confidence scores.',
    stack: ['OpenAI Embeddings', 'Pinecone', 'Python', 'FastAPI', 'Next.js', 'Azure Cognitive Search'],
    impact: ['92% search relevance improvement', '1M+ documents indexed', 'Sub-200ms query latency', '78% reduction in "no results" queries'],
    architecture: 'Hybrid retrieval pipeline with async document ingestion, incremental re-indexing, and A/B testing framework.',
    featured: true,
    color: '#a78bfa',
  },
]

export const skills = {
  'AI & Machine Learning': {
    icon: '⬡',
    color: '#6ee7f7',
    items: [
      { name: 'OpenAI / GPT-4', level: 95 },
      { name: 'LangChain / LlamaIndex', level: 90 },
      { name: 'RAG Architecture', level: 92 },
      { name: 'AI Agents', level: 88 },
      { name: 'Vector Databases', level: 87 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'Anthropic Claude API', level: 90 },
      { name: 'Hugging Face', level: 80 },
    ]
  },
  'Cloud Architecture': {
    icon: '◈',
    color: '#a78bfa',
    items: [
      { name: 'Microsoft Azure', level: 92 },
      { name: 'AWS', level: 85 },
      { name: 'Terraform / IaC', level: 82 },
      { name: 'Cloud Migrations', level: 90 },
      { name: 'Azure DevOps', level: 88 },
      { name: 'Kubernetes', level: 78 },
      { name: 'Docker', level: 88 },
      { name: 'CI/CD Pipelines', level: 85 },
    ]
  },
  'Development': {
    icon: '⟨⟩',
    color: '#10b981',
    items: [
      { name: 'Python', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js / React', level: 85 },
      { name: 'FastAPI', level: 87 },
      { name: 'Node.js', level: 82 },
      { name: 'SQL / PostgreSQL', level: 88 },
      { name: 'REST / GraphQL APIs', level: 90 },
      { name: 'PowerShell', level: 85 },
    ]
  },
  'Enterprise Systems': {
    icon: '⬢',
    color: '#f59e0b',
    items: [
      { name: 'Power BI', level: 93 },
      { name: 'Salesforce', level: 82 },
      { name: 'Azure Synapse', level: 85 },
      { name: 'Data Engineering', level: 87 },
      { name: 'Automation', level: 94 },
      { name: 'Cybersecurity', level: 80 },
      { name: 'Systems Architecture', level: 90 },
      { name: 'Analytics Engineering', level: 88 },
    ]
  },
}

export const experience = [
  {
    role: 'Senior AI Engineer',
    company: 'Miller Technologies',
    period: '2023 – Present',
    description: 'Leading AI engineering for enterprise clients — architecting LLM platforms, RAG systems, and intelligent automation.',
    highlights: ['Built RAG chatbot serving 500+ users', 'Led 5-person AI engineering team', 'Delivered $2M+ in measurable ROI'],
    tech: ['Azure OpenAI', 'LangChain', 'Python', 'Next.js'],
  },
  {
    role: 'Cloud Architect',
    company: 'Independent Consulting',
    period: '2021 – 2023',
    description: 'Architected and executed enterprise cloud migrations and infrastructure modernization for mid-market and enterprise clients.',
    highlights: ['Migrated 200+ workloads to Azure', '40% infrastructure cost reduction', 'Zero downtime SLA maintained'],
    tech: ['Azure', 'Terraform', 'PowerShell', 'DevOps'],
  },
  {
    role: 'Systems Engineer',
    company: 'Independent Consulting',
    period: '2019 – 2021',
    description: 'Built enterprise reporting systems, automated workflows, and integrated SaaS platforms for regional organizations.',
    highlights: ['Built Power BI analytics platform for C-suite', 'Automated 40+ manual processes', 'Salesforce CRM integration'],
    tech: ['Power BI', 'SQL', 'PowerShell', 'Salesforce'],
  },
]

export const certifications = [
  { name: 'AZ-900', full: 'Azure Fundamentals', vendor: 'Microsoft', status: 'active', year: '2023', color: '#0078d4' },
  { name: 'AI-900', full: 'Azure AI Fundamentals', vendor: 'Microsoft', status: 'active', year: '2023', color: '#0078d4' },
  { name: 'SAA-C03', full: 'AWS Solutions Architect Associate', vendor: 'Amazon', status: 'active', year: '2024', color: '#ff9900' },
  { name: 'AZ-104', full: 'Azure Administrator', vendor: 'Microsoft', status: 'in-progress', year: '2025', color: '#0078d4' },
  { name: 'AZ-305', full: 'Azure Solutions Architect Expert', vendor: 'Microsoft', status: 'planned', year: '2025', color: '#0078d4' },
  { name: 'AWS-ML', full: 'AWS Machine Learning Specialty', vendor: 'Amazon', status: 'planned', year: '2025', color: '#ff9900' },
]

export const blogPosts = [
  { slug: 'rag-enterprise', title: 'Building Production RAG Systems for Enterprise', date: '2024-05-10', readTime: '8 min', category: 'AI Engineering', excerpt: 'A deep dive into building reliable RAG pipelines for enterprise use cases — from chunking strategies to hybrid retrieval.' },
  { slug: 'ai-agents-workflow', title: 'AI Agents for Enterprise Workflow Automation', date: '2024-04-22', readTime: '6 min', category: 'Automation', excerpt: 'How to design AI agents that reliably automate complex business workflows without hallucinating critical steps.' },
  { slug: 'azure-openai-production', title: 'Deploying Azure OpenAI at Scale', date: '2024-03-15', readTime: '10 min', category: 'Cloud', excerpt: 'Lessons from deploying GPT-4 to 500+ enterprise users — rate limiting, cost management, and reliability patterns.' },
  { slug: 'cloud-migration-playbook', title: 'The Enterprise Cloud Migration Playbook', date: '2024-02-08', readTime: '12 min', category: 'Cloud Architecture', excerpt: 'A practical framework for migrating enterprise workloads to Azure with zero downtime and measurable ROI.' },
  { slug: 'prompt-engineering-enterprise', title: 'Prompt Engineering for Enterprise AI Systems', date: '2024-01-20', readTime: '7 min', category: 'AI Engineering', excerpt: 'Advanced prompt engineering techniques that actually work in production — beyond chain-of-thought.' },
  { slug: 'vector-db-comparison', title: 'Pinecone vs Weaviate vs Chroma: Enterprise Comparison', date: '2023-12-12', readTime: '9 min', category: 'AI Engineering', excerpt: 'A technical comparison of vector databases for enterprise AI applications based on real production usage.' },
]
