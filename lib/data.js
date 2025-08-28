export const onboardingQuestions = {
    seller: [
        { question: "What industry is your business in?", type: "text", placeholder: "e.g., E-commerce, SaaS, Healthcare" },
        { question: "What was your approximate annual revenue for the last fiscal year?", type: "select", options: ["<$500k", "$500k - $2M", "$2M - $10M", "$10M+"] },
        { question: "How many full-time employees do you have?", type: "number", placeholder: "e.g., 15" },
        { question: "What is your primary reason for selling?", type: "radio", options: ["Retirement", "New Venture", "Burnout", "Strategic Exit"] }
    ],
    buyer: [
        { question: "Which industries are you most interested in?", type: "text", placeholder: "e.g., FinTech, Manufacturing, Retail" },
        { question: "What is your available capital for an acquisition?", type: "select", options: ["<$1M", "$1M - $5M", "$5M - $20M", "$20M+"] },
        { question: "Describe your investment thesis in a few sentences.", type: "textarea", placeholder: "e.g., We acquire profitable SaaS companies to scale through our distribution channels..." },
        { question: "What is your level of experience in acquisitions?", type: "radio", options: ["First-time buyer", "Experienced (1-5 deals)", "Serial Acquirer (5+ deals)"] }
    ]
};

export const buyerProfiles = [
  { 
    id: 'B-123', 
    title: 'Strategic Buyer', 
    industry: 'SaaS & Enterprise Software', 
    capital: '$5M - $10M', 
    bio: 'Experienced operator looking to acquire a B2B SaaS company with strong recurring revenue and growth potential. Aiming to scale operations and expand market reach.', 
    experience: '10+ years in Tech', 
    acquisitions: 3, 
    thesis: 'Our focus is on acquiring established B2B SaaS companies with a proven product-market fit, an annual recurring revenue (ARR) between $1M and $5M, and a dedicated customer base. We prioritize businesses with high retention rates and opportunities for operational improvements and strategic expansion into adjacent markets.', 
    criteria: { revenue: '$1M - $5M ARR', geography: 'North America', EBITDA: 'Profitable or near-profitable', teamSize: '10-50 employees' } 
  },
  { 
    id: 'B-456', 
    title: 'Private Equity Group', 
    industry: 'E-commerce & Consumer Goods', 
    capital: '$20M+', 
    bio: 'We partner with founders of profitable e-commerce brands to provide capital and strategic guidance for accelerated growth and market leadership.', 
    experience: '20+ years in Finance', 
    acquisitions: 12, 
    thesis: 'We seek out direct-to-consumer (DTC) brands with a strong brand identity, loyal customer base, and revenues exceeding $5M. Our ideal partners have a diversified marketing strategy and are looking for a strategic partner to help with supply chain optimization, international expansion, and new product development.', 
    criteria: { revenue: '$5M - $25M', geography: 'Global', EBITDA: '$1M+', teamSize: '20-100 employees' } 
  },
  { 
    id: 'B-789', 
    title: 'Family Office Investor', 
    industry: 'Healthcare Services', 
    capital: '$50M+', 
    bio: 'Multi-generational family office with a strong interest in healthcare services and technology-enabled care platforms.', 
    experience: '30+ years in Healthcare & Investments', 
    acquisitions: 8, 
    thesis: 'We look for healthcare businesses with a scalable model, strong patient outcomes, and recurring revenues. Our investment horizon is long-term with a focus on sustainable growth.', 
    criteria: { revenue: '$10M - $50M', geography: 'United States', EBITDA: '$2M+', teamSize: '50-200 employees' } 
  },
  { 
    id: 'B-321', 
    title: 'Search Fund Entrepreneur', 
    industry: 'Industrial Manufacturing', 
    capital: '$2M - $5M', 
    bio: 'Entrepreneur backed by a group of investors, looking for a single business to acquire and operate long-term.', 
    experience: '5+ years in Operations', 
    acquisitions: 0, 
    thesis: 'Targeting stable industrial manufacturing businesses with steady cash flows, strong customer relationships, and succession planning opportunities.', 
    criteria: { revenue: '$5M - $20M', geography: 'North America', EBITDA: '$1M - $3M', teamSize: '20-100 employees' } 
  },
  { 
    id: 'B-654', 
    title: 'Venture Studio', 
    industry: 'Fintech & Payments', 
    capital: '$15M+', 
    bio: 'We build, acquire, and scale fintech ventures with innovative financial products aimed at underserved markets.', 
    experience: '15+ years in Startups & Venture Capital', 
    acquisitions: 5, 
    thesis: 'Interested in early-growth fintech platforms with $2M+ ARR and strong customer adoption. We bring product, design, and growth expertise to scale globally.', 
    criteria: { revenue: '$2M - $10M ARR', geography: 'Global', EBITDA: 'Breakeven or scalable', teamSize: '10-50 employees' } 
  },
  { 
    id: 'B-987', 
    title: 'Corporate Development Team', 
    industry: 'Logistics & Supply Chain', 
    capital: '$100M+', 
    bio: 'Division of a multinational corporation seeking acquisitions in logistics and last-mile delivery to complement existing operations.', 
    experience: '25+ years in Logistics & Operations', 
    acquisitions: 20, 
    thesis: 'Focused on acquiring regional logistics providers with strong delivery networks and technology platforms that enhance efficiency.', 
    criteria: { revenue: '$20M - $100M', geography: 'North America & Europe', EBITDA: '$5M+', teamSize: '100-500 employees' } 
  },
  { 
    id: 'B-741', 
    title: 'Impact Investor', 
    industry: 'Renewable Energy', 
    capital: '$30M+', 
    bio: 'We invest in sustainable businesses that reduce carbon emissions and promote renewable energy adoption.', 
    experience: '18+ years in Sustainability & Impact Investing', 
    acquisitions: 6, 
    thesis: 'Our goal is to acquire and grow renewable energy companies with proven technologies, stable cash flows, and long-term contracts.', 
    criteria: { revenue: '$10M - $40M', geography: 'Global', EBITDA: 'Positive cash flow', teamSize: '50-150 employees' } 
  },
  { 
    id: 'B-852', 
    title: 'Independent Sponsor', 
    industry: 'Hospitality & Leisure', 
    capital: '$10M - $25M', 
    bio: 'Experienced hospitality operator partnering with investors to acquire and scale boutique hotels and resorts.', 
    experience: '12+ years in Hospitality Management', 
    acquisitions: 2, 
    thesis: 'We are focused on acquiring underperforming hospitality assets with turnaround potential and opportunities for branding and operational improvements.', 
    criteria: { revenue: '$5M - $15M', geography: 'North America & Asia', EBITDA: 'Breakeven or profitable', teamSize: '50-200 employees' } 
  },
  { 
    id: 'B-963', 
    title: 'Growth Equity Firm', 
    industry: 'EdTech & Online Learning', 
    capital: '$40M+', 
    bio: 'We back fast-growing education technology companies that are transforming the future of learning.', 
    experience: '20+ years in Growth Equity', 
    acquisitions: 10, 
    thesis: 'We seek high-growth EdTech companies with $5M+ ARR, scalable platforms, and international expansion potential.', 
    criteria: { revenue: '$5M - $20M ARR', geography: 'Global', EBITDA: 'Reinvesting growth', teamSize: '50-300 employees' } 
  },
  { 
    id: 'B-159', 
    title: 'Strategic Corporate Investor', 
    industry: 'Cybersecurity & IT Services', 
    capital: '$75M+', 
    bio: 'Publicly listed technology company actively acquiring cybersecurity firms to expand product suite and global presence.', 
    experience: '30+ years in Technology & Security', 
    acquisitions: 15, 
    thesis: 'We are acquiring cybersecurity companies with recurring revenue, innovative solutions, and strong enterprise customer relationships.', 
    criteria: { revenue: '$10M - $50M', geography: 'Global', EBITDA: '$3M+', teamSize: '100-500 employees' } 
  },
];

export const dummyChats = [
    { id: 'chat1', name: 'John Doe (Buyer B-123)', avatar: 'JD', lastMessage: 'Great, I will review the documents this evening.', timestamp: '5:45 PM' },
    { id: 'chat2', name: 'Jane Smith (Advisor)', avatar: 'JS', lastMessage: 'Let\'s schedule a call for tomorrow morning to discuss.', timestamp: 'Yesterday' },
    { id: 'chat3', name: 'AcquireFlow Support', avatar: 'AF', lastMessage: 'Welcome to AcquireFlow! Let us know if you need help.', timestamp: '3d ago' },
];

export const chatHistory = {
    'chat1': [
        { sender: 'John Doe', text: 'Thanks for sending over the initial financials. Everything looks good at a glance.', timestamp: '5:30 PM' },
        { sender: 'You', text: 'You\'re welcome. Let me know if you have any questions as you dig deeper.', timestamp: '5:32 PM' },
        { sender: 'John Doe', text: 'Great, I will review the documents this evening.', timestamp: '5:45 PM' },
    ],
    'chat2': [
        { sender: 'Jane Smith', text: 'I\'ve reviewed your profile. I think we should adjust the valuation expectation slightly.', timestamp: 'Yesterday' },
        { sender: 'You', text: 'Okay, I\'m open to that. What were you thinking?', timestamp: 'Yesterday' },
        { sender: 'Jane Smith', text: 'Let\'s schedule a call for tomorrow morning to discuss.', timestamp: 'Yesterday' },
    ],
    'chat3': [
        { sender: 'AcquireFlow Support', text: 'Welcome to AcquireFlow! Let us know if you need help.', timestamp: '3d ago' },
    ],
};