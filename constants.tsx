
import { Project, Experience, Certificate, BlogPost } from './types';

export const PROJECTS: Project[] = [
  // Azure Projects
  {
    id: 'azure-multi-vm',
    title: 'Automated Azure Multi-VM Private Networking',
    category: 'Azure',
    description: 'Infrastructure as Code project using Terraform to deploy multi-VM private networking in Azure.',
    tools: ['Terraform', 'Azure Networking', 'IaC', 'Security Groups'],
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/automated-azure-multi-vm-private-networking-with-terraform-infrastructure-as-code-29pg'
  },
  {
    id: 'azure-aks-web-app',
    title: 'Web Application on Azure Kubernetes Service (AKS)',
    category: 'Azure',
    description: 'Step-by-step guide to deploying a containerized web application on Azure Kubernetes Service.',
    tools: ['AKS', 'Kubernetes', 'Docker', 'Azure Container Registry'],
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4410ef50cb?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/step-by-step-guide-deploying-a-web-application-on-azure-kubernetes-service-aks'
  },
  {
    id: 'azure-dns-settings',
    title: 'Azure DNS Zones & Settings Configuration',
    category: 'Azure',
    description: 'Comprehensive guide on creating DNS zones and configuring settings for custom domains in Azure.',
    tools: ['Azure DNS', 'Networking', 'Domain Management'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-create-dns-zones-and-configure-dns-settings-3c72'
  },
  {
    id: 'azure-firewall',
    title: 'Creating and Configuring Azure Firewall',
    category: 'Azure',
    description: 'Implementation guide for deploying Azure Firewall to secure virtual network resources.',
    tools: ['Azure Firewall', 'Network Security', 'Azure VNet'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-create-and-configure-azure-firewall-2da8'
  },
  {
    id: 'azure-vmss',
    title: 'Azure Virtual Machine Scale Set (VMSS) Deployment',
    category: 'Azure',
    description: 'Storing VM images in Azure Compute Gallery and deploying scalable VM Scale Sets.',
    tools: ['VMSS', 'Compute Gallery', 'Azure Compute', 'Automation'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-create-a-vm-image-store-it-in-azure-compute-gallery-and-deploy-a-virtual-machine-scale-set-48h0'
  },
  {
    id: 'azure-vnet',
    title: 'Azure Virtual Networks Configuration',
    category: 'Azure',
    description: 'Deep dive into creating and configuring virtual networks and subnets in Microsoft Azure.',
    tools: ['Azure VNet', 'Subnets', 'Private Networking'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-create-and-configure-virtual-networks-in-azure-3ggk'
  },
  {
    id: 'azure-nsg',
    title: 'Azure Network Security Groups (NSG)',
    category: 'Azure',
    description: 'Practical guide to creating and configuring NSG rules to control inbound and outbound traffic in Azure.',
    tools: ['Azure NSG', 'Security Rules', 'Networking'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-create-and-configure-network-security-groups-in-azure-1kl2'
  },
  {
    id: 'azure-routing',
    title: 'Mastering Azure Network Routing',
    category: 'Azure',
    description: 'Detailed tutorial on configuring user-defined routes (UDR) and system routes in Azure Virtual Networks.',
    tools: ['Azure Routing', 'UDR', 'Networking', 'VNet'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-configure-network-routing-in-azure-4g8l'
  },
  {
    id: 'azure-monitoring-compute',
    title: 'Monitoring for Azure Compute Services',
    category: 'Azure',
    description: 'How to configure comprehensive monitoring and diagnostics for Azure virtual machines and compute resources.',
    tools: ['Azure Monitor', 'Compute', 'Diagnostics', 'Metrics'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad3a?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-configure-monitoring-for-compute-services-24p2'
  },
  {
    id: 'azure-alerts',
    title: 'Azure Alerts & Notification Strategy',
    category: 'Azure',
    description: 'Setting up and configuring alerts in Microsoft Azure to stay informed about infrastructure health.',
    tools: ['Azure Alerts', 'Action Groups', 'Monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-configure-alert-in-azure-153c'
  },
  {
    id: 'azure-tags-locks',
    title: 'Governance: VM Tags & Locks in Azure',
    category: 'Azure',
    description: 'Best practices for managing resources using tags and protecting critical VMs with Azure resource locks.',
    tools: ['Governance', 'Tags', 'Resource Locks', 'Azure Resource Manager'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-manage-tags-and-locks-on-vms-in-azure-13n9'
  },
  {
    id: 'azure-app-service',
    title: 'Web App via Azure App Service',
    category: 'Azure',
    description: 'Step-by-step guide to creating and configuring web applications using Azure App Service.',
    tools: ['Azure App Service', 'Web Apps', 'PaaS'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-create-a-web-app-using-azure-app-service-1fig'
  },
  {
    id: 'azure-log-analytics',
    title: 'Azure Log Analytics Deployment',
    category: 'Azure',
    description: 'How to deploy and configure Log Analytics for centralized monitoring in Azure environments.',
    tools: ['Log Analytics', 'Azure Monitor', 'Logging'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad3a?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-deploy-log-analytics-in-azure-4ef0'
  },
  {
    id: 'azure-rental-app',
    title: 'Azure Container Instances Strategy',
    category: 'Azure',
    description: 'Dockerizing a rental application and deploying it to Azure Container Instances.',
    tools: ['Azure Container Instances', 'Docker', 'Serverless Containers'],
    imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b193ef5?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/guide-dockerizing-a-rental-application-and-deploying-to-azure-container-instances'
  },

  // AWS More
  {
    id: 'aws-ec2-apache',
    title: 'Static Website on AWS EC2 (Apache)',
    category: 'AWS',
    description: 'Deploying a static website on AWS EC2 using Apache2 web server for high performance.',
    tools: ['AWS EC2', 'Apache2', 'Linux', 'Web Server'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/deploying-a-static-website-on-aws-ec2-using-apache2-web-server-a-beginners-guide'
  },
  {
    id: 'aws-ec2-putty',
    title: 'AWS EC2 File Transfer Guide',
    category: 'AWS',
    description: 'Using PuttyGen and WinSCP to securely transfer files from local machines to AWS EC2.',
    tools: ['AWS EC2', 'WinSCP', 'PuttyGen', 'SSH'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/step-by-step-guide-to-transfer-files-from-local-machine-to-aws-ec2-using-puttygen-and-winscp'
  },

  // AWS Projects
  {
    id: 'aws-eks-electrochip',
    title: 'Deploying Electrochip Website on AWS EKS',
    category: 'AWS',
    description: 'Advanced deployment of a web application on AWS Elastic Kubernetes Service with ECR and Load Balancer.',
    tools: ['EKS', 'ECR', 'ELB', 'Kubernetes', 'AWS'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/deploying-electrochip-website-on-aws-eks-with-ecr-and-loadbalancer-elb'
  },
  {
    id: 'aws-ecs-fast-food',
    title: 'Scalable Fast Food App on AWS ECS',
    category: 'AWS',
    description: 'Deploying a Dockerized application using ECS, ECR, and Application Load Balancer (ALB).',
    tools: ['ECS', 'Fargate', 'ALB', 'Docker', 'ECR'],
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/deploying-a-scalable-fast-food-web-application-on-aws-with-docker-ec2-ecr-ecs-and-elastic-load-balancer-alb'
  },
  {
    id: 'aws-ec2-efs',
    title: 'AWS EC2 with Shared EFS Storage',
    category: 'AWS',
    description: 'A step-by-step guide to deploying EC2 instances with shared Elastic File System (EFS) storage.',
    tools: ['EC2', 'EFS', 'Cloud Storage', 'Linux'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/a-step-by-step-guide-to-deploying-ec2-instances-with-shared-efs-storage'
  },
  {
    id: 'aws-elastic-beanstalk',
    title: 'Node.js App on AWS Elastic Beanstalk',
    category: 'AWS',
    description: 'Deploying and scaling a Node.js application using AWS Elastic Beanstalk environment.',
    tools: ['Elastic Beanstalk', 'Node.js', 'AWS PaaS', 'Deployment'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad3a?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/deploying-a-nodejs-application-to-aws-elastic-beanstalk-3455'
  },

  // CI/CD Projects
  {
    id: 'cicd-nodejs-k8s',
    title: 'Complete CI/CD Pipeline (Node.js, Docker, K8s)',
    category: 'CI/CD',
    description: 'End-to-end automation pipeline for a Node.js application from source code to Kubernetes.',
    tools: ['GitHub Actions', 'Docker', 'Kubernetes', 'CI/CD'],
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/complete-cicd-pipeline-with-nodejs-docker-and-kubernetes-2604'
  },
  {
    id: 'cicd-github-actions-azure',
    title: 'GitHub CI/CD for Azure Web App',
    category: 'CI/CD',
    description: 'Deploying a stylish e-commerce application using Azure Web App and GitHub Actions.',
    tools: ['Azure App Service', 'GitHub Actions', 'E-commerce', 'CI/CD'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://nucloud.hashnode.dev/how-i-deployed-stylish-e-commerce-application-using-azure-web-app-and-github-cicd'
  },
  {
    id: 'cicd-devops-workflows',
    title: 'Production-Ready DevOps Workflows',
    category: 'CI/CD',
    description: 'Branching and merging lab focusing on building robust, production-ready DevOps workflows.',
    tools: ['Git', 'Workflows', 'DevOps', 'Pipelines'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/branching-merging-lab-building-production-ready-devops-workflows-5767'
  },

  // Linux & Other
  {
    id: 'linux-file-management',
    title: 'Linux File & Directory Management Project',
    category: 'Linux',
    description: 'A mock company project mastering Linux administration, permissions, and file systems.',
    tools: ['Linux', 'Bash', 'System Administration', 'Permissions'],
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/mastering-linux-file-directory-management-with-a-mock-company-project-499l'
  },
  {
    id: 'containerize-app',
    title: 'Comprehensive Guide to Containerization',
    category: 'Automation',
    description: 'How to containerize applications using Docker for consistent development and deployment.',
    tools: ['Docker', 'Containers', 'Microservices'],
    imageUrl: 'https://images.unsplash.com/photo-1605745341112-85968b193ef5?q=80&w=800&h=450&auto=format&fit=crop',
    link: 'https://dev.to/subair09/how-to-containerize-an-application-1446'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'CloudScale Solutions',
    role: 'Senior DevOps Engineer',
    period: '2021 - Present',
    description: [
      'Migrated 200+ microservices from legacy data centers to AWS, reducing operational costs by 35%.',
      'Implemented GitOps workflows using ArgoCD, improving deployment frequency by 400%.',
      'Architected a self-service infrastructure portal for developers using Backstage and Terraform.'
    ]
  },
  {
    id: 'e2',
    company: 'AutoSys Technologies',
    role: 'Site Reliability Engineer',
    period: '2019 - 2021',
    description: [
      'Reduced MTTD (Mean Time to Detection) from 45 minutes to 8 minutes through Prometheus/Grafana alerting.',
      'Developed automated incident response playbooks using Ansible and Python.',
      'Managed 24/7 on-call rotation for high-traffic e-commerce systems.'
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c4',
    title: 'Microsoft Applied Skills: Secure storage for Azure Files and Azure Blob Storage',
    issuer: 'Microsoft',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/subairnurudeenadewale-0380/credentials/ec3c5a390f2bfa91'
  },
  {
    id: 'c5',
    title: 'Microsoft Applied Skills: Deploy and configure Azure Monitor',
    issuer: 'Microsoft',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/subairnurudeenadewale-0380/credentials/8368ce577d10030b'
  },
  {
    id: 'c6',
    title: 'ISO/IEC 27001:2022 Lead Auditor',
    issuer: 'Credly',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://www.credly.com/badges/22ee0e9d-ee2a-487f-ad9a-ec1cf82c70bf/linked_in_profile'
  },
  {
    id: 'c7',
    title: 'Multicloud Network Associate',
    issuer: 'Aviatrix',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://www.credly.com/badges/4cd926e2-4dec-4404-ab84-9c0253e0059e/linked_in_profile'
  },
  {
    id: 'c8',
    title: 'Microsoft Applied Skills: Get started with Azure management tasks',
    issuer: 'Microsoft',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4410ef50cb?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/subairnurudeenadewale-0380/credentials/c26ff78f6f1212b'
  },
  {
    id: 'c9',
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aade122f1?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://www.credly.com/badges/7d767522-4782-4a26-afe8-d11d04f2ff6f/linked_in_profile'
  },
  {
    id: 'c10',
    title: 'Microsoft Certified: DevOps Engineer Expert',
    issuer: 'Microsoft',
    date: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/subairnurudeenadewale-7543/credentials/d27fc87f3b492daa'
  },
  {
    id: 'c11',
    title: 'Certified FinOps Practitioner',
    issuer: 'FinOps Foundation',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://verify.skilljar.com/c/omak66523zwx'
  },
  {
    id: 'c12',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/SUBAIRNURUDEENADEWALE-0380/credentials/F4B1AEDA698E6E4D'
  },
  {
    id: 'c13',
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4410ef50cb?q=80&w=400&h=300&auto=format&fit=crop',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/subairnurudeenadewale-7543/credentials/4fade57fd621104e'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Localized AI: The Strategic Imperative for Africa',
    excerpt: 'Exploring the strategic imperative of developing LLMs for African linguistic and business diversity to drive localized innovation.',
    date: 'Mar 7, 2026',
    category: 'AI',
    readTime: '10 min read',
    content: 'Full content available on Quotients Africa.',
    link: 'https://www.quotientsafrica.com/2026-03-07T09:35:34.220Z?article=localized-ai-the-strategic-imperative-of-developing-llms-for-african-linguistic-and-business-diversity'
  },
  {
    id: 'b2',
    title: 'Will Artificial Intelligence Replace Human Workers?',
    excerpt: 'Analyzing the operational shift of AI in global labor markets and its impact on the future of human workforce.',
    date: '2026',
    category: 'Future of Work',
    readTime: '7 min read',
    content: 'Full content available on Businessday NG.',
    link: 'https://businessday.ng/opinion/article/will-artificial-intelligence-replace-human-workers/'
  },
  {
    id: 'b3',
    title: 'Nigeria’s Tech Training vs. Job Creation Crisis',
    excerpt: 'Addressing the growing gap between the production of tech trainers and actual tech jobs in Nigeria’s ecosystem.',
    date: 'Feb 24, 2026',
    category: 'Tech Economy',
    readTime: '9 min read',
    content: 'Full content available on Quotients Africa.',
    link: 'https://quotientsafrica.com/2026-02-24T14:46:47.501Z?article=nigeria-is-producing-more-tech-trainers-than-tech-jobs-and-it-is-becoming-a-crisis'
  },
  {
    id: 'b4',
    title: 'AI and Big Data: Combatting Political Instability',
    excerpt: 'How data-driven tools can illuminate causes and predict patterns to equip leaders in combating political instability.',
    date: '2026',
    category: 'Big Data',
    readTime: '8 min read',
    content: 'Full content available on Businessday NG.',
    link: 'https://businessday.ng/opinion/article/ai-and-big-data-tools-for-combating-political-instability-in-nigeria/'
  },
  {
    id: 'b5',
    title: 'Cloud Technology in Nigeria’s Tax Reforms',
    excerpt: 'Why cloud technology is the cornerstone for modernizing revenue collection and ensuring transparency in tax reforms.',
    date: '2026',
    category: 'Cloud',
    readTime: '6 min read',
    content: 'Full content available on BusinessDay Premium.',
    link: 'https://premium.businessday.ng/article/insights/Nigeria-2026-tax-reforms-Why-cloud-technology-is-key-to-modernising-revenue-collection'
  },
  {
    id: 'b6',
    title: 'Cloud or Collapse: Banks and Legacy Systems',
    excerpt: 'Discussing the urgent necessity for financial institutions to migrate from legacy systems to cloud infrastructure.',
    date: '2026',
    category: 'FinTech',
    readTime: '7 min read',
    content: 'Full content available on Businessday NG.',
    link: 'https://businessday.ng/opinion/article/cloud-or-collapse-why-banks-must-leave-legacy-systems-behind/'
  },
  {
    id: 'b7',
    title: 'Cloud Computing for Data Security in Nigeria',
    excerpt: 'A comprehensive look at cloud computing as a viable solution to the pressing data security challenges in Nigeria.',
    date: '2026',
    category: 'Cybersecurity',
    readTime: '8 min read',
    content: 'Full content available on Businessday NG.',
    link: 'https://businessday.ng/opinion/article/cloud-computing-a-solution-to-nigerias-data-security-challenges/'
  }
];

export const RESUME_LINK = 'https://drive.google.com/file/d/1_your_actual_google_drive_id_here/view?usp=sharing';
