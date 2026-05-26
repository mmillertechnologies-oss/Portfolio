export const personal = {
  name: 'Michael Miller',
  title: 'AI Engineer & Cloud Architect',
  tagline: 'Building Intelligent Enterprise Systems at Scale',
  bio: `AI Engineer and Cloud Architect based in Raleigh, NC with 10+ years delivering production AI systems and cloud infrastructure. At Millerify I architect RAG pipelines, LLM integrations, and AI-powered search platforms for enterprise clients. Previously at Microsoft I engineered 6PB of storage infrastructure powering critical services. I translate complex AI trade-offs into executive-level business cases and ship systems that run reliably at scale.`,
  location: 'Raleigh, NC',
  email: 'mmillertechnologies@gmail.com',
  github: 'https://github.com/mmillertechnologies-oss',
  linkedin: 'https://linkedin.com/in/michaelmilleruncw',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: '10+', label: 'Years in Enterprise Tech' },
  { value: '6PB', label: 'Storage Engineered at Microsoft' },
  { value: '99.99%', label: 'Service Resolution Rate' },
  { value: '$20K', label: 'Saved via Salesforce Optimization' },
]

export const projects = [
  {
    id: 'enterprise-rag-pipeline',
    title: 'Enterprise RAG Pipeline',
    category: 'AI / LLM',
    summary: 'Production-grade retrieval-augmented generation system for intelligent document search and automated Q&A across enterprise knowledge bases.',
    problem: 'Enterprise teams wasted hours manually searching siloed documentation. Keyword search returned irrelevant results. No unified way to query internal knowledge.',
    solution: 'Built a full RAG pipeline with async document ingestion, OpenAI embeddings, ChromaDB vector storage, hybrid BM25 + semantic retrieval, and a FastAPI REST API — all containerized with Docker.',
    stack: ['Python', 'OpenAI API', 'ChromaDB', 'FastAPI', 'Docker', 'Azure', 'Pydantic'],
    impact: ['Sub-200ms query latency', 'Chunking + reranking strategy cuts hallucinations significantly', 'Incremental indexing — no full re-index on updates', 'REST API consumed by downstream enterprise apps'],
    architecture: 'Async ingestion pipeline → recursive text chunker → batch embedding → ChromaDB persistent store → hybrid retrieval → GPT-4 generation with source citations.',
    featured: true,
    color: '#6ee7f7',
    github: 'https://github.com/mmillertechnologies-oss/enterprise-rag-pipeline',
  },
  {
    id: 'azure-storage-automation',
    title: 'Azure Storage Automation Suite',
    category: 'Cloud / Infrastructure',
    summary: 'PowerShell and Python automation toolkit for enterprise storage operations — tiering, DR validation, capacity reporting, and Azure NetApp Files management.',
    problem: 'Managing petabyte-scale storage manually created toil, delayed incident response, and inconsistent DR testing. Teams lacked real-time visibility into capacity trends.',
    solution: 'Built a suite of PowerShell runbooks and Python scripts covering storage tiering, automated DR testing, capacity forecasting, and Azure NetApp Files provisioning via Terraform.',
    stack: ['PowerShell', 'Python', 'Terraform', 'Azure NetApp Files', 'Azure Monitor', 'Ansible'],
    impact: ['Automated storage tiering across multi-PB environments', 'DR validation time cut from days to hours', 'Capacity reports generated on-demand vs weekly manual process', 'Used in production at Microsoft for 6PB infrastructure'],
    architecture: 'Scheduled PowerShell runbooks → Azure Monitor metrics → Python capacity forecasting → Terraform IaC for ANF provisioning.',
    featured: true,
    color: '#a78bfa',
    github: 'https://github.com/mmillertechnologies-oss/azure-storage-automation',
  },
  {
    id: 'ai-document-search',
    title: 'AI-Powered Document Search API',
    category: 'AI / LLM',
    summary: 'FastAPI service providing semantic search over document collections — hybrid dense + sparse retrieval with confidence scoring and source attribution.',
    problem: 'Keyword search fails when users don\'t know exact terminology. Engineers needed semantic understanding, not string matching.',
    solution: 'Built a hybrid search service combining OpenAI dense embeddings with BM25 sparse retrieval, fused via Reciprocal Rank Fusion, with a clean REST API and confidence scores on every result.',
    stack: ['Python', 'FastAPI', 'OpenAI Embeddings', 'ChromaDB', 'BM25', 'Docker'],
    impact: ['Hybrid retrieval outperforms pure semantic or keyword search', 'Confidence scores let callers filter low-quality results', 'Stateless API — horizontally scalable', 'Drop-in replacement for legacy search endpoints'],
    architecture: 'Query → parallel dense + sparse retrieval → RRF fusion → confidence scoring → ranked results with source citations.',
    featured: true,
    color: '#10b981',
    github: 'https://github.com/mmillertechnologies-oss/ai-document-search',
  },
  {
    id: 'powerbi-analytics',
    title: 'Power BI Executive Analytics Platform',
    category: 'Data / Analytics',
    summary: 'Enterprise analytics platform consolidating multiple data sources into real-time executive dashboards with drill-through and natural language Q&A.',
    problem: 'C-suite and board required hours to compile reports from disparate systems. No single source of truth for organizational performance.',
    solution: 'Designed and deployed Power BI dashboards pulling from Azure, Salesforce, and SQL sources — with automated refresh, row-level security, and board-ready visualizations.',
    stack: ['Power BI', 'Azure Synapse', 'SQL Server', 'DAX', 'Salesforce', 'Python'],
    impact: ['Board-level dashboards deployed at NSBE', 'Executive insights available in real-time vs weekly manual reports', 'Row-level security ensuring data governance', 'Actionable KPIs surfaced to decision makers'],
    architecture: 'Multi-source connectors → medallion data model → DAX measures → report layer with RLS.',
    featured: false,
    color: '#f59e0b',
    github: '',
  },
]

export const skills = {
  'AI & Machine Learning': {
    icon: '⬡',
    color: '#6ee7f7',
    items: [
      { name: 'RAG Architectures', level: 95 },
      { name: 'OpenAI APIs', level: 93 },
      { name: 'LLM Integrations', level: 90 },
      { name: 'Vector Search', level: 92 },
      { name: 'Semantic Retrieval', level: 90 },
      { name: 'AI Pipeline Design', level: 88 },
      { name: 'Prompt Engineering', level: 87 },
      { name: 'Generative AI', level: 90 },
    ]
  },
  'Cloud & Infrastructure': {
    icon: '◈',
    color: '#a78bfa',
    items: [
      { name: 'Microsoft Azure', level: 93 },
      { name: 'AWS', level: 82 },
      { name: 'GCP', level: 75 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Hybrid Cloud Architecture', level: 88 },
      { name: 'Azure NetApp Files', level: 90 },
      { name: 'Terraform / IaC', level: 85 },
      { name: 'CI/CD Pipelines', level: 83 },
    ]
  },
  'Systems & Storage': {
    icon: '⬢',
    color: '#f59e0b',
    items: [
      { name: 'Enterprise Storage (NFS/SMB)', level: 92 },
      { name: 'Linux / Windows Server', level: 90 },
      { name: 'Disaster Recovery', level: 88 },
      { name: 'Capacity Planning', level: 87 },
      { name: 'Active Directory / RBAC', level: 88 },
      { name: 'Incident Response', level: 90 },
      { name: 'Object Storage', level: 85 },
      { name: 'PowerScale Administration', level: 88 },
    ]
  },
  'Development & Automation': {
    icon: '⟨⟩',
    color: '#10b981',
    items: [
      { name: 'Python', level: 92 },
      { name: 'PowerShell', level: 90 },
      { name: 'REST APIs / FastAPI', level: 88 },
      { name: 'Ansible', level: 83 },
      { name: 'SQL / Power BI', level: 88 },
      { name: 'Salesforce', level: 80 },
      { name: 'Bash', level: 85 },
      { name: 'Docker', level: 82 },
    ]
  },
}

export const experience = [
  {
    role: 'AI Solutions Architect',
    company: 'Millerify',
    period: '07/2023 – Present',
    description: 'Leading AI engineering for enterprise clients — architecting RAG platforms, LLM integrations, and production AI pipelines from planning through deployment.',
    highlights: [
      'Architected enterprise-grade RAG platforms using Python and OpenAI APIs',
      'Designed scalable AI pipelines for ingestion, embeddings, and vector search',
      'Built production Python REST APIs for AI-powered search and summarization',
      'Translated complex AI trade-offs into executive-level business cases',
    ],
    tech: ['Python', 'OpenAI API', 'RAG', 'FastAPI', 'Azure', 'AWS', 'Vector Search'],
  },
  {
    role: 'Storage Engineer',
    company: 'Microsoft',
    period: '11/2024 – 04/2026',
    description: 'Engineered and supported 6PB of enterprise storage infrastructure across five arrays powering critical Microsoft services.',
    highlights: [
      'Managed 6PB storage infrastructure across five enterprise arrays',
      'Led high-severity incident response — root cause analysis, service restoration',
      'Automated storage ops with PowerShell, Bash, and Python',
      'Deployed Azure NetApp Files for high-performance workloads',
      'Led HPE server upgrades via Terraform and Ansible with zero service disruption',
    ],
    tech: ['Azure NetApp Files', 'PowerShell', 'Python', 'Terraform', 'Ansible', 'Active Directory'],
  },
  {
    role: 'Systems Administrator',
    company: 'NSBE',
    period: '04/2023 – 11/2024',
    description: 'Managed cloud systems, Salesforce, and enterprise reporting for a national engineering organization.',
    highlights: [
      'Built Power BI dashboards for executive and board-level decision-making',
      'Led Salesforce cleanup saving $20,000 in redundant licensing and workflows',
      'Maintained 99.99% service resolution rate on Tier III support',
      'Optimized Azure and Microsoft 365 environments for availability and security',
    ],
    tech: ['Azure', 'Microsoft 365', 'Power BI', 'Salesforce', 'PowerShell'],
  },
]

export const certifications = [
  { name: 'AZ-900', full: 'Azure Fundamentals', vendor: 'Microsoft', status: 'active', year: '2023', color: '#0078d4' },
  { name: 'SAA-C03', full: 'AWS Solutions Architect Associate', vendor: 'Amazon', status: 'active', year: '2025', color: '#ff9900' },
  { name: 'PowerScale', full: 'PowerScale Advanced Administrator', vendor: 'Dell', status: 'active', year: '2024', color: '#007db8' },
  { name: 'IQ4', full: 'IQ4 Cyber Security', vendor: 'IQ4', status: 'active', year: '2023', color: '#e74c3c' },
  { name: 'DB-Agents', full: 'Databricks AI Agent Fundamentals', vendor: 'Databricks', status: 'active', year: '2025', color: '#ff3621' },
  { name: 'DB-Fund', full: 'Databricks Fundamentals', vendor: 'Databricks', status: 'active', year: '2025', color: '#ff3621' },
  { name: 'GenAI-Fund', full: 'Generative AI Fundamentals', vendor: 'Databricks', status: 'active', year: '2025', color: '#ff3621' },
  { name: 'AZ-305', full: 'Azure Solutions Architect Expert', vendor: 'Microsoft', status: 'planned', year: '2025', color: '#0078d4' },
  { name: 'AWS-MLS', full: 'AWS Machine Learning Specialty', vendor: 'Amazon', status: 'planned', year: '2026', color: '#ff9900' },
]

export const blogPosts: never[] = []
