import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

const SERVICE_DATA: Record<string, {
  name: string
  icon: string
  tagline: string
  metaTitle: string
  metaDesc: string
  heroHeadline: string
  heroSub: string
  amount: string
  rate: string
  term: string
  speed: string
  minCredit: string
  minRevenue: string
  minTime: string
  howItWorks: { title: string; desc: string }[]
  benefits: { icon: string; title: string; desc: string }[]
  useCases: { title: string; desc: string; example: string }[]
  faqs: { q: string; a: string }[]
  related: string[]
  schema: object
}> = {

  'sba-loans': {
    name: 'SBA Loans',
    icon: '🏛️',
    tagline: 'Government-backed · Lowest rates available · Up to $5M',
    metaTitle: 'SBA Loans for Small Businesses | Gateway Capital',
    metaDesc: 'Get matched to SBA-approved lenders for the lowest rates on small business loans. SBA 7(a), SBA 504, and SBA Express loans up to $5M. Apply in 2 minutes. No hard credit pull.',
    heroHeadline: 'SBA Loans — the lowest rates in small business lending.',
    heroSub: 'SBA loans are government-backed, which means lenders take on less risk — and pass the savings to you in the form of lower interest rates and longer repayment terms. We match you to SBA-approved lenders who can close faster than most banks.',
    amount: 'Up to $5,000,000',
    rate: 'Starting at 6.5% APR',
    term: 'Up to 25 years',
    speed: '2–4 weeks',
    minCredit: '650+',
    minRevenue: '$100,000/year',
    minTime: '2 years in business',
    howItWorks: [
      { title: 'Apply in 2 minutes', desc: 'Submit a single application with basic business and financial information. No hard credit pull at this stage.' },
      { title: 'We match you to SBA lenders', desc: 'Our engine routes your application to SBA-approved lenders in our network who specialize in your loan size and industry.' },
      { title: 'Review competing offers', desc: 'Receive offers from multiple lenders with full transparency on rates, terms, and fees. Your specialist walks you through each one.' },
      { title: 'Close and get funded', desc: 'SBA loans typically close in 2–4 weeks. Funds are deposited directly to your business bank account.' },
    ],
    benefits: [
      { icon: '📉', title: 'Lowest rates available', desc: 'SBA loans consistently offer the lowest interest rates of any business loan product — because the government guarantees up to 85% of the loan, lenders can offer better terms.' },
      { icon: '📅', title: 'Long repayment terms', desc: 'Up to 10 years for working capital, up to 25 years for real estate. Longer terms mean lower monthly payments and better cash flow.' },
      { icon: '💰', title: 'High loan amounts', desc: 'Borrow up to $5 million — more than most conventional business loans. Ideal for major growth initiatives, acquisitions, or real estate.' },
      { icon: '🔓', title: 'Flexible use of funds', desc: 'SBA loans can be used for almost any legitimate business purpose — working capital, equipment, real estate, inventory, debt refinancing, and more.' },
      { icon: '🤝', title: 'Expert matching', desc: 'We connect you to SBA-approved lenders who specialize in your industry and loan size — not generic banks that may decline you.' },
      { icon: '🔒', title: 'No prepayment penalty (short-term)', desc: 'SBA loans under 15 years carry no prepayment penalty — pay off early without any fees.' },
    ],
    useCases: [
      { title: 'Business Expansion', desc: 'Open a second location, expand your service area, or scale your team.', example: 'A restaurant owner borrows $350,000 to open a second location in a neighboring city.' },
      { title: 'Real Estate Purchase', desc: 'Buy the commercial property your business operates in — or invest in commercial real estate.', example: 'A dental practice borrows $1.2M to purchase the building they\'ve been renting for 6 years.' },
      { title: 'Equipment Acquisition', desc: 'Purchase major equipment with long-term financing at the best available rates.', example: 'A manufacturer borrows $800,000 to purchase a CNC machine and upgrade their production line.' },
      { title: 'Working Capital', desc: 'Fund ongoing operations, payroll, marketing, or inventory.', example: 'A staffing agency uses a $200,000 SBA loan to bridge payroll while waiting on client payments.' },
      { title: 'Debt Refinancing', desc: 'Consolidate higher-rate existing debt into a single low-rate SBA loan.', example: 'A logistics company refinances $500K in merchant cash advances into an SBA term loan, cutting their effective rate by 60%.' },
      { title: 'Business Acquisition', desc: 'Buy an existing business, franchise, or competitor.', example: 'An entrepreneur uses a $750,000 SBA loan to acquire an established HVAC company with $2M in annual revenue.' },
    ],
    faqs: [
      { q: 'How can an SBA loan help my business?', a: 'An SBA loan gives you access to the largest amounts of capital at the lowest interest rates available to small businesses. Because the government guarantees a portion of the loan, lenders can offer rates and terms they couldn\'t otherwise provide. This translates to lower monthly payments, more flexible use of funds, and longer repayment timelines — giving your business room to grow without being crushed by debt service.' },
      { q: 'What is the difference between SBA 7(a) and SBA 504 loans?', a: 'The SBA 7(a) is the most common type — flexible use of funds including working capital, equipment, and acquisitions. The SBA 504 is specifically for major fixed assets like real estate and large equipment, typically offering lower rates on those asset types but with stricter use restrictions. Our matching engine recommends the right type based on your needs.' },
      { q: 'What credit score do I need for an SBA loan?', a: 'Most SBA lenders look for a personal credit score of 650 or above. However, the full picture matters — lenders also evaluate business revenue, time in business, industry, and the strength of your business plan. Some lenders in our network work with scores as low as 620.' },
      { q: 'How long does the SBA loan process take?', a: 'SBA Express loans can close in 36 hours to 2 weeks. Standard SBA 7(a) loans typically take 2–6 weeks from application to funding. SBA 504 loans can take 4–8 weeks due to the more complex structure. Our lender partners are among the fastest in the country.' },
      { q: 'Can a startup get an SBA loan?', a: 'Startups can access certain SBA programs, but most SBA 7(a) loans require at least 2 years of business history. If you\'re under 2 years old, we\'ll match you to alternative products that are more appropriate for your stage.' },
      { q: 'Do I need collateral for an SBA loan?', a: 'SBA loans under $25,000 typically require no collateral. For larger amounts, lenders will try to collateralize with business assets first. Personal guarantee is required for owners with 20%+ ownership.' },
      { q: 'What can SBA loan funds be used for?', a: 'SBA loan proceeds can be used for working capital, inventory, equipment, furniture, renovations, real estate, business acquisition, franchise fees, and debt refinancing. Personal use is not permitted.' },
    ],
    related: ['term-loans', 'equipment-financing', 'lines-of-credit'],
    schema: { '@type': 'FinancialProduct', name: 'SBA Business Loan', description: 'Government-backed SBA loans for small businesses up to $5 million.' },
  },

  'term-loans': {
    name: 'Term Loans',
    icon: '📈',
    tagline: 'Fixed payments · Same-day funding · Up to $2M',
    metaTitle: 'Business Term Loans | Gateway Capital',
    metaDesc: 'Get matched to business term loan lenders. Fixed monthly payments, same-day funding available, up to $2M. Apply in 2 minutes. No hard credit pull. Decisions within 24 hours.',
    heroHeadline: 'Business term loans. Fixed payments, fast funding.',
    heroSub: 'A term loan gives you a lump sum of capital with fixed monthly payments over a defined period. Predictable, straightforward, and often funded the same day. We match you to the lenders offering the most competitive terms for your profile.',
    amount: '$25,000 – $2,000,000',
    rate: 'Starting at 7.9% APR',
    term: '3 – 60 months',
    speed: 'Same day – 48 hours',
    minCredit: '550+',
    minRevenue: '$180,000/year',
    minTime: '1 year in business',
    howItWorks: [
      { title: 'Apply in 2 minutes', desc: 'Tell us your loan amount, revenue, and use of funds. No hard credit pull to start.' },
      { title: 'Matched to term lenders', desc: 'We route your application to lenders who specialize in your loan size and industry — not generic banks.' },
      { title: 'Receive and compare offers', desc: 'Get multiple offers with full transparency on rates, origination fees, and prepayment terms.' },
      { title: 'Sign and get funded', desc: 'E-sign your agreement. Funds deposit to your account — often the same day you\'re approved.' },
    ],
    benefits: [
      { icon: '📋', title: 'Predictable fixed payments', desc: 'Know exactly what you owe every month. Fixed payments make budgeting and cash flow planning simple.' },
      { icon: '⚡', title: 'Same-day funding available', desc: 'Many term loan lenders in our network can fund in 24 hours or less for qualifying businesses.' },
      { icon: '💰', title: 'Large loan amounts', desc: 'Access up to $2 million for major investments — far more than most credit cards or lines of credit.' },
      { icon: '🎯', title: 'One-time capital deployment', desc: 'Perfect for a specific investment where you know exactly how much you need upfront.' },
      { icon: '📉', title: 'Competitive rates', desc: 'Our lender network competes for your business — you get the best rate available for your profile.' },
      { icon: '🔓', title: 'Flexible use of funds', desc: 'Term loans can be used for virtually any business purpose — expansion, equipment, marketing, staffing, and more.' },
    ],
    useCases: [
      { title: 'Business Expansion', desc: 'Open a new location, enter a new market, or scale your team.', example: 'A gym owner borrows $300,000 to open a second location and purchase new equipment.' },
      { title: 'Renovation & Buildout', desc: 'Upgrade your space, renovate your storefront, or build out a new office.', example: 'A law firm borrows $150,000 to renovate their office and upgrade technology infrastructure.' },
      { title: 'Marketing & Customer Acquisition', desc: 'Fund a major marketing push, hire a sales team, or launch a new product.', example: 'An e-commerce brand borrows $100,000 to scale paid advertising and triple their customer base.' },
      { title: 'Hiring & Payroll', desc: 'Bring on key hires ahead of a growth phase without straining cash flow.', example: 'A tech company borrows $250,000 to hire 5 engineers for a product build-out.' },
      { title: 'Inventory Purchase', desc: 'Stock up ahead of peak season or secure a bulk discount on inventory.', example: 'A retailer borrows $175,000 to purchase Q4 holiday inventory at a discounted bulk rate.' },
      { title: 'Opportunity Seizure', desc: 'Move fast on a time-sensitive business opportunity that requires immediate capital.', example: 'A contractor borrows $400,000 to secure a major government contract requiring immediate equipment purchases.' },
    ],
    faqs: [
      { q: 'How can a term loan help my business grow?', a: 'A term loan gives you immediate access to a defined amount of capital that you can deploy strategically. Instead of waiting until you\'ve saved enough — or letting an opportunity pass — you get the capital now and repay it over time from the revenue that investment generates. The fixed payment structure makes it easy to model the ROI: if the loan costs you $3,000/month but generates $10,000 in new monthly revenue, the math is clear.' },
      { q: 'What is the difference between a term loan and a line of credit?', a: 'A term loan gives you a lump sum upfront with fixed monthly payments — best for a specific, defined investment. A line of credit is revolving — you draw what you need, repay it, and draw again. Lines of credit are better for ongoing cash flow needs. Term loans are better for one-time capital deployments like expansions or equipment.' },
      { q: 'Can I get a term loan with bad credit?', a: 'Yes. Our network includes lenders who work with credit scores as low as 550 for term loans. Factors like strong monthly revenue and time in business can compensate for a lower credit score. The lower your score, the higher the rate — but funding is often still accessible.' },
      { q: 'How fast can I get a business term loan?', a: 'Many lenders in our network can approve and fund a term loan in 24–48 hours for qualifying businesses. The main requirements for fast funding are a complete application, 3–6 months of bank statements, and no major red flags in your credit profile.' },
      { q: 'Are there prepayment penalties on term loans?', a: 'It depends on the lender. Some charge a prepayment fee, others don\'t. We always disclose prepayment terms before you sign — and can specifically match you to lenders with no prepayment penalties if that\'s important to you.' },
      { q: 'How much can I borrow with a term loan?', a: 'Our lender network offers term loans from $25,000 to $2,000,000. The amount you qualify for depends on your annual revenue, credit score, time in business, and debt service coverage ratio. Generally, lenders approve up to 10–15% of annual revenue for unsecured term loans.' },
    ],
    related: ['sba-loans', 'lines-of-credit', 'equipment-financing'],
    schema: { '@type': 'FinancialProduct', name: 'Business Term Loan', description: 'Fixed-rate business term loans from $25K to $2M for small businesses.' },
  },

  'lines-of-credit': {
    name: 'Lines of Credit',
    icon: '💳',
    tagline: 'Revolving · Pay only on usage · Up to $1M',
    metaTitle: 'Business Lines of Credit | Gateway Capital',
    metaDesc: 'Get matched to business line of credit lenders. Revolving credit up to $1M — draw what you need, pay interest only on usage. Apply in 2 minutes. Decisions within 24 hours.',
    heroHeadline: 'Business lines of credit. Draw when you need it. Pay only what you use.',
    heroSub: 'A business line of credit is the most flexible form of financing available. Draw funds as needed, repay them, and the credit resets. Pay interest only on what you actually use — not the full limit. We match you to lenders offering the most competitive revolving credit for your business.',
    amount: 'Up to $1,000,000',
    rate: 'Starting at 8.5% APR',
    term: '6 – 48 months',
    speed: '24 – 72 hours',
    minCredit: '550+',
    minRevenue: '$180,000/year',
    minTime: '6 months in business',
    howItWorks: [
      { title: 'Apply once', desc: 'Submit basic business and financial information. No hard credit pull to start.' },
      { title: 'Get matched to LOC lenders', desc: 'We route your profile to lenders who specialize in revolving credit for your business size and industry.' },
      { title: 'Receive your credit limit', desc: 'Get approved for a credit limit — then draw funds whenever you need them, directly to your bank account.' },
      { title: 'Draw, repay, repeat', desc: 'Use your line as needed. Repay what you draw. Your available credit resets. You only pay interest on what\'s outstanding.' },
    ],
    benefits: [
      { icon: '🔄', title: 'Revolving access to capital', desc: 'Draw, repay, and draw again — your credit limit resets as you repay. It\'s always there when you need it.' },
      { icon: '💡', title: 'Pay only on what you use', desc: 'If your limit is $200,000 but you only draw $30,000, you only pay interest on $30,000. The rest sits available.' },
      { icon: '🛡️', title: 'Financial safety net', desc: 'A line of credit is insurance against cash flow gaps, slow months, and unexpected expenses — without the cost of a full loan.' },
      { icon: '⚡', title: 'Fast access to funds', desc: 'Once approved, draw funds instantly or within hours. No new application needed for each draw.' },
      { icon: '📊', title: 'Builds business credit', desc: 'Responsible use of a business line of credit helps build your business credit profile for larger loans in the future.' },
      { icon: '🎯', title: 'Flexible use', desc: 'Use for payroll, inventory, marketing, unexpected repairs — whatever your business needs, whenever it needs it.' },
    ],
    useCases: [
      { title: 'Seasonal Cash Flow', desc: 'Bridge the gap between slow and busy seasons without depleting reserves.', example: 'A landscaping company draws $60,000 in winter to cover payroll and equipment maintenance, then repays it in spring.' },
      { title: 'Emergency Expenses', desc: 'Handle unexpected costs without disrupting operations.', example: 'A restaurant\'s walk-in cooler breaks down — they draw $15,000 to replace it the next day.' },
      { title: 'Payroll Coverage', desc: 'Ensure payroll is never missed during a slow period or late-paying client.', example: 'A staffing agency draws $40,000 to cover payroll while waiting on a 45-day invoice to be paid.' },
      { title: 'Inventory Opportunities', desc: 'Jump on a bulk discount or limited inventory opportunity.', example: 'A retail store draws $25,000 to snap up discounted inventory from a competitor going out of business.' },
      { title: 'Marketing Campaigns', desc: 'Fund a campaign without committing to a full loan for a variable-cost activity.', example: 'An e-commerce brand draws $20,000 for a paid ad campaign, repays it within 60 days from resulting revenue.' },
      { title: 'Project-Based Businesses', desc: 'Fund the front-end costs of a project before client payment arrives.', example: 'A contractor draws $80,000 to purchase materials for a job, repays when the client pays in 60 days.' },
    ],
    faqs: [
      { q: 'How can a business line of credit help my company?', a: 'A line of credit is the most versatile financial tool a small business can have. It solves the fundamental problem that almost every business faces: revenue and expenses don\'t always align. A line of credit means you can cover payroll when a client pays late, stock up on inventory before a big season, or handle an emergency repair — without having to take out a new loan every time. The revolving structure means it\'s always available, and you only pay for what you use.' },
      { q: 'What is the difference between a secured and unsecured line of credit?', a: 'A secured line of credit requires collateral — typically business assets, inventory, or accounts receivable — and offers lower rates in exchange. An unsecured line requires no collateral but typically carries a higher rate. Most small business lines of credit in our network are unsecured for amounts under $250,000.' },
      { q: 'How quickly can I access funds from a line of credit?', a: 'Once your line of credit is approved and set up, draws are typically instant or within 24 hours. The approval process itself takes 24–72 hours for most businesses in our network.' },
      { q: 'Can I get a business line of credit with bad credit?', a: 'Yes — many lenders in our network offer lines of credit with scores as low as 550. Strong monthly revenue and time in business are often more important than credit score for line of credit products.' },
      { q: 'What is the minimum revenue needed for a business line of credit?', a: 'Most lenders require at least $15,000/month ($180,000/year) in business revenue. Some alternative lenders will work with lower revenue but at higher rates.' },
      { q: 'Does a line of credit affect my credit score?', a: 'The initial application typically involves a soft credit pull (no impact). Once approved, how you use the line can positively impact your business credit score if you pay on time and keep utilization moderate.' },
    ],
    related: ['term-loans', 'sba-loans', 'merchant-cash-advance'],
    schema: { '@type': 'FinancialProduct', name: 'Business Line of Credit', description: 'Revolving business lines of credit up to $1M for small businesses.' },
  },

  'equipment-financing': {
    name: 'Equipment Financing',
    icon: '⚙️',
    tagline: '100% financing · Asset as collateral · Fast approval',
    metaTitle: 'Equipment Financing for Business | Gateway Capital',
    metaDesc: 'Get matched to equipment financing lenders. Finance up to 100% of business equipment cost — vehicles, machinery, medical devices, technology. Apply in 2 minutes. Approval in 24 hours.',
    heroHeadline: 'Equipment financing. Get the tools your business needs today.',
    heroSub: 'Equipment financing lets you acquire the machinery, vehicles, or technology your business needs without depleting working capital. The equipment itself serves as collateral — making qualification easier and rates more competitive than unsecured loans.',
    amount: 'Up to $5,000,000',
    rate: 'Starting at 5.9% APR',
    term: '1 – 7 years',
    speed: '24 – 48 hours',
    minCredit: '550+',
    minRevenue: '$100,000/year',
    minTime: '6 months in business',
    howItWorks: [
      { title: 'Identify your equipment', desc: 'Know what you need to purchase — new or used, any vendor. We finance virtually all business equipment types.' },
      { title: 'Apply in 2 minutes', desc: 'Provide basic business info and equipment details. No hard credit pull to start.' },
      { title: 'Get matched to equipment lenders', desc: 'We route to specialists who finance your equipment type — medical lenders for medical devices, fleet lenders for vehicles, etc.' },
      { title: 'Get funded, acquire equipment', desc: 'Lender pays the vendor directly, or funds deposit to your account. You start using the equipment immediately.' },
    ],
    benefits: [
      { icon: '💯', title: '100% financing available', desc: 'Finance the full purchase price including delivery and installation — no down payment required with strong applications.' },
      { icon: '🏦', title: 'Equipment is the collateral', desc: 'Because the asset secures the loan, lenders take on less risk — resulting in better rates and easier qualification than unsecured loans.' },
      { icon: '💧', title: 'Preserve working capital', desc: 'Keep your cash in the business for operations, payroll, and growth. Don\'t drain reserves on depreciating assets.' },
      { icon: '📊', title: 'Tax advantages', desc: 'Section 179 allows you to deduct the full cost of financed equipment in the year of purchase — often eliminating the tax cost of the loan.' },
      { icon: '🔧', title: 'New and used accepted', desc: 'Finance brand-new equipment from a dealer or used equipment from a private seller — both are eligible in most cases.' },
      { icon: '⚡', title: 'Fast approval', desc: 'Equipment loans are among the fastest to approve because the collateral is clear. Most businesses get funded within 24–48 hours.' },
    ],
    useCases: [
      { title: 'Commercial Vehicles', desc: 'Trucks, vans, forklifts, trailers — any vehicle used for business.', example: 'A plumbing company finances 3 service vans at $45,000 each — $135,000 total, funded in 48 hours.' },
      { title: 'Restaurant Equipment', desc: 'Ovens, refrigeration, POS systems, espresso machines — all eligible.', example: 'A new restaurant finances $80,000 of commercial kitchen equipment, preserving cash for opening expenses.' },
      { title: 'Medical Devices', desc: 'X-ray machines, dental chairs, surgical equipment, diagnostics.', example: 'A dental office finances a $120,000 CBCT scanner, paid back over 5 years from the revenue it generates.' },
      { title: 'Construction Equipment', desc: 'Excavators, cranes, compactors, generators, skid steers.', example: 'A contractor finances a $250,000 excavator to take on larger projects — equipment pays for itself in 6 months.' },
      { title: 'Manufacturing Machinery', desc: 'CNC machines, lathes, presses, 3D printers, conveyor systems.', example: 'A manufacturer finances $500,000 in CNC machinery to double production capacity.' },
      { title: 'Technology & IT', desc: 'Servers, computers, software, telecommunications equipment.', example: 'A tech company finances $75,000 in servers and networking equipment rather than paying cash upfront.' },
    ],
    faqs: [
      { q: 'How can equipment financing help my business?', a: 'Equipment financing solves one of the most common dilemmas in business: you need the equipment to generate revenue, but you need revenue to pay for the equipment. Financing breaks this cycle — you get the equipment now, start generating revenue immediately, and repay the loan from that revenue over time. Meanwhile, your working capital stays intact for operations and opportunities.' },
      { q: 'Can I finance used equipment?', a: 'Yes. Most equipment lenders in our network finance used equipment, typically up to 10–15 years old depending on type and condition. An appraisal or invoice may be required for older equipment.' },
      { q: 'What equipment can be financed?', a: 'Almost any equipment used for legitimate business purposes: vehicles, machinery, medical devices, restaurant equipment, technology, construction equipment, agricultural equipment, manufacturing tools, fitness equipment, and more. Largely the test is: does it have business use and resale value?' },
      { q: 'Do I need a down payment for equipment financing?', a: 'Not always. Many lenders in our network offer 0% down for qualified businesses — meaning you finance the full purchase price. Stronger credit profiles and larger loan amounts are more likely to qualify for zero-down.' },
      { q: 'What happens to the equipment at the end of the loan?', a: 'With equipment financing (a loan), you own the equipment outright once the loan is paid off. With equipment leasing (which some lenders also offer), you may have options to buy, return, or upgrade at the end of the term.' },
      { q: 'Can a startup get equipment financing?', a: 'Yes — startups as young as 6 months can qualify for equipment financing because the equipment itself secures the loan. This makes it one of the most accessible forms of financing for newer businesses.' },
    ],
    related: ['sba-loans', 'term-loans', 'lines-of-credit'],
    schema: { '@type': 'FinancialProduct', name: 'Equipment Financing', description: 'Business equipment financing up to $5M for vehicles, machinery, and business assets.' },
  },

  'invoice-financing': {
    name: 'Invoice Financing',
    icon: '📋',
    tagline: 'Advance up to 90% · No new debt · Funded in 24 hours',
    metaTitle: 'Invoice Financing & Factoring for Business | Gateway Capital',
    metaDesc: 'Get matched to invoice financing lenders. Advance up to 90% of outstanding invoices immediately — stop waiting 30–90 days to get paid. Apply in 2 minutes. Funded in 24 hours.',
    heroHeadline: 'Invoice financing. Stop waiting to get paid.',
    heroSub: 'If your business invoices other businesses with net-30, net-60, or net-90 terms, you\'re essentially giving your clients an interest-free loan. Invoice financing unlocks that cash immediately — typically 80–90% of the invoice value, same day or next day.',
    amount: 'Up to 90% of invoice value',
    rate: '1–5% factoring fee',
    term: 'Invoice term based',
    speed: '24 hours',
    minCredit: 'No minimum (invoice-based)',
    minRevenue: 'B2B invoices required',
    minTime: 'Any business age',
    howItWorks: [
      { title: 'Submit your invoices', desc: 'Share your outstanding B2B invoices with the lender. They verify the invoices with your clients (non-disruptively).' },
      { title: 'Receive an advance', desc: 'Get 80–90% of the invoice value deposited to your account — typically within 24 hours.' },
      { title: 'Client pays the lender', desc: 'Your client pays the invoice as normal (to the lender). The lender collects the full amount.' },
      { title: 'Receive the remainder', desc: 'Once the client pays, you receive the remaining 10–20% minus a small factoring fee (typically 1–5%).' },
    ],
    benefits: [
      { icon: '⏱️', title: 'Get paid today, not in 90 days', desc: 'Turn net-30, net-60, or net-90 invoices into same-day cash. Eliminate the wait that strangles B2B cash flow.' },
      { icon: '📈', title: 'Not a loan — no new debt', desc: 'Invoice financing is based on money already owed to you. You\'re accelerating your receivables, not taking on new obligations.' },
      { icon: '🔓', title: 'No collateral, no credit score', desc: 'Lenders evaluate the creditworthiness of your clients — not you. Your clients\' credit matters more than yours.' },
      { icon: '📊', title: 'Scales with your business', desc: 'The more invoices you generate, the more financing you can access. It grows naturally with your revenue.' },
      { icon: '🤝', title: 'Recourse and non-recourse options', desc: 'Choose between recourse factoring (you\'re responsible if the client doesn\'t pay) or non-recourse (lender assumes the risk).' },
      { icon: '🚀', title: 'Accelerate growth', desc: 'With predictable cash flow, you can take on more clients, larger projects, and grow faster than your payment terms would otherwise allow.' },
    ],
    useCases: [
      { title: 'Staffing Agencies', desc: 'Fund weekly payroll while waiting on 30–60 day client invoices.', example: 'A staffing agency factors $200,000 in invoices to cover payroll while waiting for Fortune 500 clients to pay.' },
      { title: 'Contractors & Construction', desc: 'Fund materials and labor on a new project before the GC pays.', example: 'A subcontractor factors a $150,000 invoice to purchase materials for the next phase of a project.' },
      { title: 'Wholesale Distributors', desc: 'Maintain inventory levels without waiting on retailer payments.', example: 'A food distributor factors invoices to maintain inventory and take on 3 new restaurant accounts.' },
      { title: 'Logistics & Freight', desc: 'Cover fuel and driver costs while waiting on 30-day freight broker payments.', example: 'A trucking company factors freight invoices to cover fuel and maintenance between loads.' },
      { title: 'Government Contractors', desc: 'Bridge the gap on slow-paying government accounts receivable.', example: 'A tech services firm factors a $500,000 government contract invoice while waiting on standard government payment terms.' },
      { title: 'Manufacturing', desc: 'Fund production runs before receiving payment from distributors or retailers.', example: 'A manufacturer factors $300,000 in invoices to fund a new production run and take on a major new account.' },
    ],
    faqs: [
      { q: 'How can invoice financing help my business cash flow?', a: 'Invoice financing directly solves the #1 cash flow problem for B2B businesses: the gap between when you complete work and when you actually get paid. If you have $200,000 in outstanding invoices and a $50,000 payroll due this week, invoice financing bridges that gap — you get the cash from those invoices now instead of in 60 days. The result is predictable cash flow that lets you take on more work, pay your people, and grow.' },
      { q: 'What is the difference between invoice financing and invoice factoring?', a: 'Invoice factoring involves selling your invoices to a lender — the lender collects from your clients directly. Invoice financing (or invoice discounting) is a loan against your invoices — you still collect from clients and repay the lender. Factoring is more common for smaller businesses; invoice financing is more common for larger businesses wanting to keep collections in-house.' },
      { q: 'Will my clients know I am using invoice financing?', a: 'In traditional factoring, yes — clients are directed to pay the lender directly. In invoice discounting, no — clients pay you as normal. We can match you to either structure depending on your preference and client relationships.' },
      { q: 'What types of invoices can be financed?', a: 'B2B invoices are the standard — invoices issued to other businesses or government entities. Consumer-facing (B2C) businesses typically cannot use invoice financing. The invoices must be for completed work or delivered goods with no contingencies.' },
      { q: 'Can a new business use invoice financing?', a: 'Yes — this is one of the few funding products with no minimum time in business requirement. What matters is that you have creditworthy clients and legitimate outstanding invoices. A startup with $500,000 in Fortune 500 receivables can access invoice financing immediately.' },
      { q: 'What is a recourse vs non-recourse factoring agreement?', a: 'Recourse factoring means if your client doesn\'t pay, you\'re responsible for repaying the advance. Non-recourse factoring means the lender assumes the credit risk — if the client doesn\'t pay due to insolvency, you keep the advance. Non-recourse typically carries a higher fee.' },
    ],
    related: ['lines-of-credit', 'merchant-cash-advance', 'term-loans'],
    schema: { '@type': 'FinancialProduct', name: 'Invoice Financing', description: 'Invoice financing and factoring — advance up to 90% of outstanding invoices.' },
  },

  'merchant-cash-advance': {
    name: 'Merchant Cash Advance',
    icon: '⚡',
    tagline: 'Same-day funding · Revenue-based · 500+ credit OK',
    metaTitle: 'Merchant Cash Advance for Business | Gateway Capital',
    metaDesc: 'Get matched to merchant cash advance lenders. Same-day funding based on daily sales — no fixed monthly payment. 500+ credit score. Apply in 2 minutes.',
    heroHeadline: 'Merchant cash advance. Fast capital, flexible repayment.',
    heroSub: 'An MCA gives you capital based on your future sales — repaid automatically as a percentage of your daily revenue. No fixed monthly payment, no collateral, minimal documentation. Typically the fastest path to business capital available.',
    amount: '$5,000 – $750,000',
    rate: '1.1 – 1.5 factor rate',
    term: '3 – 18 months',
    speed: 'Same day',
    minCredit: '500+',
    minRevenue: '$10,000/month',
    minTime: '3 months in business',
    howItWorks: [
      { title: 'Apply in 2 minutes', desc: 'Provide basic business info and 3 months of bank or processing statements. No hard credit pull.' },
      { title: 'Get matched to MCA providers', desc: 'We match you to funders who specialize in your industry and revenue volume.' },
      { title: 'Receive your offer', desc: 'See the advance amount, factor rate, and estimated repayment timeline. Full transparency before you sign.' },
      { title: 'Funded same day', desc: 'E-sign your agreement and funds are in your account the same business day in most cases.' },
    ],
    benefits: [
      { icon: '⚡', title: 'Same-day funding', desc: 'The fastest funding product available — many businesses receive capital the same day they apply.' },
      { icon: '📊', title: 'Revenue-based repayment', desc: 'Repay as a percentage of daily sales — payments are naturally lower in slow periods and higher in busy ones.' },
      { icon: '📋', title: 'Minimal documentation', desc: 'Typically just 3–6 months of bank or processing statements. No tax returns, no extensive financial statements.' },
      { icon: '🔓', title: 'No fixed monthly payment', desc: 'There\'s no set monthly payment to miss. Repayment adjusts automatically with your revenue — reducing stress in slow months.' },
      { icon: '🎯', title: 'Any business purpose', desc: 'No restrictions on how you use the capital — inventory, payroll, marketing, repairs, opportunities.' },
      { icon: '✅', title: 'Accessible with lower credit', desc: 'MCA providers focus on revenue and card volume more than credit score. 500+ scores often qualify.' },
    ],
    useCases: [
      { title: 'Emergency Capital', desc: 'Handle an urgent expense that can\'t wait for traditional loan approval timelines.', example: 'A restaurant\'s HVAC system fails in July — they get $30,000 funded same-day to replace it.' },
      { title: 'Seasonal Inventory', desc: 'Stock up before peak season when traditional lenders may be slower.', example: 'A gift shop gets $75,000 funded in 24 hours to purchase Q4 holiday inventory.' },
      { title: 'Marketing Opportunities', desc: 'Fund a time-sensitive campaign or promotional event.', example: 'A salon receives $20,000 to fund a local marketing blitz and triple new client bookings.' },
      { title: 'Payroll Coverage', desc: 'Ensure payroll is met during a cash flow crunch.', example: 'A contractor draws $40,000 to cover 2 weeks of payroll while waiting on a delayed payment.' },
      { title: 'Equipment Repair', desc: 'Fix critical equipment immediately without downtime.', example: 'A printing company gets $25,000 to repair a press that broke down mid-contract.' },
      { title: 'Opportunity Seizure', desc: 'Move fast on a deal that can\'t wait for a bank loan.', example: 'A retailer gets $100,000 in 24 hours to purchase discounted inventory from a closing competitor.' },
    ],
    faqs: [
      { q: 'How does a merchant cash advance work?', a: 'An MCA provider gives you a lump sum of capital upfront. In exchange, you agree to repay a larger total amount (determined by the factor rate) through a percentage of your daily credit card or debit card sales, or daily ACH withdrawals from your bank account. For example: a $100,000 advance with a 1.3 factor rate = $130,000 total repayment, paid at 10% of daily sales until the balance is cleared.' },
      { q: 'How can a merchant cash advance help my business?', a: 'An MCA solves the speed problem in business lending. When you need capital now — for an emergency, a seasonal opportunity, or a time-sensitive decision — an MCA can fund the same day. The revenue-based repayment also means you\'re never stuck with a fixed payment you can\'t afford in a slow month. The trade-off is cost — MCAs are more expensive than term loans or SBA products — but for the right situation, the speed and flexibility justify it.' },
      { q: 'What is a factor rate and how does it compare to an interest rate?', a: 'A factor rate (like 1.3) is different from an APR. A 1.3 factor rate means you repay $1.30 for every $1.00 borrowed — so $100,000 becomes $130,000 total. This is simpler to calculate but typically more expensive than a traditional interest rate when expressed as APR. Use MCAs when speed and flexibility matter more than cost.' },
      { q: 'Can I get a merchant cash advance with bad credit?', a: 'Yes — MCA providers focus primarily on your revenue and daily sales volume, not your credit score. Many businesses with 500 credit scores receive MCA funding. A consistent history of daily credit card sales is the most important qualifying factor.' },
      { q: 'How long does it take to repay a merchant cash advance?', a: 'Repayment timelines are estimated, not fixed — they depend on your daily sales volume. Typical estimated repayment periods range from 3–18 months. Higher daily sales volume means faster repayment. The retrieved percentage is fixed, so slower months extend repayment and faster months shorten it.' },
      { q: 'Can I have multiple merchant cash advances at once?', a: 'Some MCA providers offer "stacking" (multiple concurrent advances), but this is generally not recommended — it significantly increases your total repayment burden and daily withdrawal amount. We typically recommend one advance at a time and exploring longer-term products for subsequent needs.' },
    ],
    related: ['term-loans', 'lines-of-credit', 'invoice-financing'],
    schema: { '@type': 'FinancialProduct', name: 'Merchant Cash Advance', description: 'Merchant cash advances from $5K to $750K based on daily business revenue.' },
  },
}

const SERVICE_NAMES: Record<string, string> = {
  'sba-loans': 'SBA Loans',
  'term-loans': 'Term Loans',
  'lines-of-credit': 'Lines of Credit',
  'equipment-financing': 'Equipment Financing',
  'invoice-financing': 'Invoice Financing',
  'merchant-cash-advance': 'Merchant Cash Advance',
}

const SERVICE_ICONS: Record<string, string> = {
  'sba-loans': '🏛️',
  'term-loans': '📈',
  'lines-of-credit': '💳',
  'equipment-financing': '⚙️',
  'invoice-financing': '📋',
  'merchant-cash-advance': '⚡',
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DATA).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = SERVICE_DATA[params.slug]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    openGraph: { title: data.metaTitle, description: data.metaDesc, type: 'website' },
    alternates: { canonical: `https://gatewaycapitalfunding.com/services/${params.slug}` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const data = SERVICE_DATA[params.slug]
  if (!data) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...data.schema,
            provider: { '@type': 'FinancialService', name: 'Gateway Capital', url: 'https://gatewaycapitalfunding.com' },
          }),
        }}
      />
      <SmartBar />
      <Nav />
      <MobileCTA />

      <main className="pt-[100px]">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16 pb-20 px-5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>›</span>
              <Link href="/services" className="hover:text-slate-300 transition-colors">Services</Link>
              <span>›</span>
              <span className="text-slate-300">{data.name}</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-5">
                  <span className="text-base">{data.icon}</span>
                  <span className="text-xs font-semibold text-white">{data.tagline}</span>
                </div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight">
                  {data.heroHeadline}
                </h1>
                <p className="text-slate-300 text-base leading-relaxed mb-7">{data.heroSub}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl">
                    Apply for {data.name} →
                  </Link>
                  <Link href="#how-it-works" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">
                    How It Works
                  </Link>
                </div>
              </div>

              {/* Quick stats */}
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">{data.name} — At a Glance</div>
                <div className="space-y-3">
                  {[
                    { label: 'Loan Amount', val: data.amount },
                    { label: 'Starting Rate', val: data.rate },
                    { label: 'Repayment Term', val: data.term },
                    { label: 'Funding Speed', val: data.speed },
                    { label: 'Min. Credit Score', val: data.minCredit },
                    { label: 'Min. Revenue', val: data.minRevenue },
                    { label: 'Min. Time in Business', val: data.minTime },
                  ].map(r => (
                    <div key={r.label} className="flex items-center justify-between py-2 border-b border-white/8 last:border-none">
                      <span className="text-xs text-slate-400">{r.label}</span>
                      <span className="text-xs font-bold text-white">{r.val}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="mt-5 block bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-4 py-3 rounded-xl text-center transition-all">
                  Get My Offers — Free →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-16 bg-white px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />The Process
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                How {data.name} works with Gateway Capital
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.howItWorks.map((step, i) => (
                <div key={i} className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  {i < data.howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10 text-slate-300 font-bold">→</div>
                  )}
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-display font-bold text-sm text-slate-900 mb-1.5">{step.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Benefits
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Why businesses choose {data.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.benefits.map(b => (
                <div key={b.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="text-2xl mb-3">{b.icon}</div>
                  <div className="font-display font-bold text-sm text-slate-900 mb-2">{b.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-16 bg-white px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Use Cases
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                When to use {data.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {data.useCases.map(u => (
                <div key={u.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-sm text-slate-900 mb-1.5">{u.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{u.desc}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                    <div className="text-xs font-bold text-blue-600 mb-1">Real example</div>
                    <p className="text-xs text-blue-800 leading-relaxed italic">{u.example}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-600 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <div className="font-display font-bold text-lg text-white mb-1">Ready to apply for {data.name}?</div>
                <p className="text-blue-200 text-sm">One 2-minute application. Matched to the best {data.name.toLowerCase()} lenders for your profile.</p>
              </div>
              <Link href="/apply" className="shrink-0 bg-white text-blue-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-all whitespace-nowrap">
                Get My Offers Free →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />FAQ
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Common questions about {data.name}
              </h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-base text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-12 bg-white px-5">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-6">Other funding products</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.related.map(slug => (
                <Link key={slug} href={`/services/${slug}`}
                  className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="text-2xl mb-2">{SERVICE_ICONS[slug]}</div>
                  <div className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">{SERVICE_NAMES[slug]}</div>
                  <div className="text-xs text-blue-600 font-semibold mt-1 group-hover:translate-x-1 transition-transform inline-block">Learn more →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-600 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">
              Get matched to {data.name} lenders today.
            </h2>
            <p className="text-blue-200 mb-7">Two minutes to apply. No hard credit pull. Funded in {data.speed}.</p>
            <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
              Apply Free — Get My Offers →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
