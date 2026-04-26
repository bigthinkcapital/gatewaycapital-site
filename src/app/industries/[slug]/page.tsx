import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmartBar from '@/components/SmartBar'
import MobileCTA from '@/components/MobileCTA'

const INDUSTRY_DATA: Record<string, {
  name: string
  icon: string
  tagline: string
  metaTitle: string
  metaDesc: string
  heroHeadline: string
  heroSub: string
  avgFunding: string
  speed: string
  approval: string
  products: { name: string; desc: string; amount: string; tag: string }[]
  faqs: { q: string; a: string }[]
  stats: { val: string; label: string }[]
  challenges: string[]
  schema: object
}> = {

  restaurant: {
    name: 'Restaurant & Food Service',
    icon: '🍕',
    tagline: 'Funding for restaurants, cafes, bars & food trucks',
    metaTitle: 'Restaurant Business Loans & Funding | Gateway Capital',
    metaDesc: 'Get matched to restaurant business loans and lenders who specialize in food service. Equipment financing, working capital, SBA loans up to $5M. Apply in 2 minutes. No hard credit pull.',
    heroHeadline: 'Restaurant funding from lenders who know food service.',
    heroSub: 'Whether you\'re buying equipment, covering payroll during a slow season, or opening a second location — our matching engine connects you to lenders who specialize in restaurant and food service businesses.',
    avgFunding: '$85,000',
    speed: '24–48 hours',
    approval: '72%',
    stats: [
      { val: '$85K', label: 'Avg. Funding' },
      { val: '24hr', label: 'Funding Speed' },
      { val: '72%', label: 'Approval Rate' },
      { val: '$5M', label: 'Max Available' },
    ],
    products: [
      { name: 'Equipment Financing', desc: 'Finance ovens, refrigeration, POS systems, and kitchen equipment. Up to 100% financing — the equipment is the collateral.', amount: 'Up to $500K', tag: 'Most Popular' },
      { name: 'Working Capital Loans', desc: 'Cover payroll, inventory, and operating costs during slow seasons or unexpected gaps.', amount: '$10K – $500K', tag: 'Fast Approval' },
      { name: 'SBA Loans', desc: 'Government-backed financing for expansion, renovation, or purchasing a second location.', amount: 'Up to $5M', tag: 'Lowest Rates' },
      { name: 'Merchant Cash Advance', desc: 'Fast capital based on your daily credit card sales. Ideal for high-volume restaurants needing quick cash.', amount: '$5K – $500K', tag: 'Same Day' },
      { name: 'Business Line of Credit', desc: 'Revolving credit to draw when you need it — perfect for managing seasonal cash flow.', amount: 'Up to $250K', tag: 'Flexible' },
      { name: 'Renovation Loans', desc: 'Finance kitchen upgrades, dining room renovations, or ADA compliance improvements.', amount: '$25K – $1M', tag: 'Term Loan' },
    ],
    challenges: [
      'Seasonal cash flow gaps between busy and slow periods',
      'High upfront cost of commercial kitchen equipment',
      'Tight margins requiring precise working capital management',
      'Expansion costs for second locations or franchise buyouts',
      'Unexpected repairs on critical equipment',
    ],
    faqs: [
      { q: 'Can restaurants with bad credit get funded?', a: 'Yes. Many of our lender partners specialize in restaurant financing and look beyond credit scores — they evaluate revenue, daily sales volume, and time in business. Scores as low as 500 may qualify.' },
      { q: 'How quickly can a restaurant get funded?', a: 'Many restaurant loans fund within 24–48 hours, especially merchant cash advances based on daily sales. SBA loans typically take 2–4 weeks.' },
      { q: 'Do I need collateral for a restaurant loan?', a: 'Not always. Unsecured working capital loans and MCAs typically require no collateral. Equipment financing uses the equipment itself as collateral.' },
      { q: 'Can I get funding for a new restaurant?', a: 'Startups and new restaurants can qualify for certain products. SBA loans, equipment financing, and some alternative lenders work with businesses under 1 year old.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Restaurant Business Loans',
      description: 'Business loans and financing for restaurants, cafes, bars, and food service businesses.',
      category: 'Business Loan',
    },
  },

  construction: {
    name: 'Construction & Contractors',
    icon: '🏗️',
    tagline: 'Funding for general contractors, subcontractors & builders',
    metaTitle: 'Construction Business Loans & Contractor Financing | Gateway Capital',
    metaDesc: 'Construction business loans matched to specialized lenders. Equipment financing, lines of credit, and project capital for contractors and builders. Up to $5M. Apply in 2 minutes.',
    heroHeadline: 'Construction financing from lenders who understand project cycles.',
    heroSub: 'Construction businesses have unique cash flow needs — long payment cycles, equipment costs, and project-based revenue. Our network includes lenders who specialize in contractor financing and understand the trade.',
    avgFunding: '$250,000',
    speed: '24–72 hours',
    approval: '68%',
    stats: [
      { val: '$250K', label: 'Avg. Funding' },
      { val: '48hr', label: 'Funding Speed' },
      { val: '68%', label: 'Approval Rate' },
      { val: '$5M', label: 'Max Available' },
    ],
    products: [
      { name: 'Equipment Financing', desc: 'Finance excavators, cranes, trucks, and tools. Up to 100% financing — equipment is collateral. Keep your working capital liquid.', amount: 'Up to $5M', tag: 'Most Popular' },
      { name: 'Business Line of Credit', desc: 'Draw funds as needed to cover payroll, materials, and subcontractor costs between project payments.', amount: 'Up to $1M', tag: 'Flexible' },
      { name: 'SBA Loans', desc: 'Long-term, low-rate financing for business growth, equipment, or commercial property.', amount: 'Up to $5M', tag: 'Lowest Rates' },
      { name: 'Invoice Financing', desc: 'Stop waiting 60–90 days for GC payments. Advance up to 90% of outstanding invoices immediately.', amount: 'Up to 90% of invoice', tag: '24hr Funding' },
      { name: 'Term Loans', desc: 'Fixed capital for equipment purchases, working capital, or business expansion.', amount: '$25K – $2M', tag: 'Same Day' },
      { name: 'Surety Bond Financing', desc: 'Access capital to meet bonding requirements and qualify for larger government contracts.', amount: 'Custom', tag: 'Specialist' },
    ],
    challenges: [
      'Long payment cycles — 60 to 90 days between invoicing and payment',
      'High upfront costs for materials, equipment, and labor',
      'Seasonal slowdowns requiring working capital bridge',
      'Growth limiting without sufficient bonding capacity',
      'Managing cash flow across multiple simultaneous projects',
    ],
    faqs: [
      { q: 'What credit score do contractors need for a business loan?', a: 'Our lender network includes options for contractors with scores as low as 550. Equipment financing is especially accessible since the asset serves as collateral.' },
      { q: 'Can I finance used construction equipment?', a: 'Yes. Many of our equipment financing partners fund both new and used equipment, including trucks, excavators, lifts, and specialized tools.' },
      { q: 'How does invoice financing work for contractors?', a: 'You submit outstanding invoices to a lender who advances you up to 90% of the invoice value immediately. When the GC or client pays, you receive the remainder minus a small fee.' },
      { q: 'Can a new contracting business get funded?', a: 'Startups and contractors under 2 years can qualify for equipment financing, MCAs, and some term loans. Revenue and contracts on hand are key qualifying factors.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Construction Business Loans',
      description: 'Business loans and financing for construction companies, contractors, and builders.',
      category: 'Business Loan',
    },
  },

  healthcare: {
    name: 'Healthcare & Medical',
    icon: '🏥',
    tagline: 'Funding for medical, dental & wellness practices',
    metaTitle: 'Healthcare & Medical Practice Loans | Gateway Capital',
    metaDesc: 'Medical and dental practice loans matched to healthcare lenders. SBA loans, equipment financing, and practice acquisition funding. Up to $5M. Apply in 2 minutes. No hard credit pull.',
    heroHeadline: 'Healthcare funding from lenders who specialize in medical practices.',
    heroSub: 'Medical and dental practices have unique financing needs — from equipment purchases to practice acquisitions. Our matching engine connects you to lenders who understand healthcare cash flow and reimbursement cycles.',
    avgFunding: '$500,000',
    speed: '48–72 hours',
    approval: '78%',
    stats: [
      { val: '$500K', label: 'Avg. Funding' },
      { val: '48hr', label: 'Funding Speed' },
      { val: '78%', label: 'Approval Rate' },
      { val: '$5M', label: 'Max Available' },
    ],
    products: [
      { name: 'SBA Loans', desc: 'The gold standard for healthcare financing — low rates, long terms, and high amounts for practice acquisition, expansion, or equipment.', amount: 'Up to $5M', tag: 'Most Popular' },
      { name: 'Medical Equipment Financing', desc: 'Finance MRI machines, dental chairs, surgical equipment, and diagnostic tools. 100% financing available.', amount: 'Up to $5M', tag: 'Specialist' },
      { name: 'Practice Acquisition Loans', desc: 'Buying an existing practice? We match you to healthcare-specific lenders who understand goodwill and patient base valuation.', amount: '$100K – $5M', tag: 'Healthcare Specific' },
      { name: 'Working Capital', desc: 'Bridge the gap between services rendered and insurance reimbursement — typically 30–90 day cycles.', amount: '$25K – $500K', tag: 'Fast Approval' },
      { name: 'Lines of Credit', desc: 'Revolving credit for hiring staff, marketing, or managing cash flow between reimbursement cycles.', amount: 'Up to $500K', tag: 'Flexible' },
      { name: 'Expansion Loans', desc: 'Open a second location, add a specialty, or renovate your existing practice.', amount: '$100K – $2M', tag: 'Term Loan' },
    ],
    challenges: [
      'Insurance reimbursement delays creating 30–90 day cash flow gaps',
      'High cost of medical and diagnostic equipment',
      'Practice acquisition requiring large upfront capital',
      'Staff expansion during practice growth phases',
      'EMR system upgrades and technology investments',
    ],
    faqs: [
      { q: 'Can I get a loan to buy a medical practice?', a: 'Yes. Practice acquisition is one of the most common healthcare loans we facilitate. SBA 7(a) loans are ideal for this — up to $5M with competitive rates and long repayment terms.' },
      { q: 'Do healthcare lenders look at insurance receivables?', a: 'Yes. Many specialized healthcare lenders factor in your receivables pipeline and reimbursement rates from insurance companies as part of their underwriting.' },
      { q: 'How quickly can a medical practice get funded?', a: 'Working capital and equipment financing can fund in 48–72 hours. SBA loans typically take 2–6 weeks but offer the best long-term terms.' },
      { q: 'Can dental practices get SBA loans?', a: 'Absolutely. Dental practices are among the most frequently funded via SBA loans due to their stable revenue and low default rates.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Medical Practice Loans',
      description: 'Business loans and financing for healthcare providers, medical practices, and dental offices.',
      category: 'Business Loan',
    },
  },

  retail: {
    name: 'Retail & E-commerce',
    icon: '🛍️',
    tagline: 'Funding for retail stores and online sellers',
    metaTitle: 'Retail & E-commerce Business Loans | Gateway Capital',
    metaDesc: 'Retail and e-commerce business loans from lenders who understand inventory cycles and seasonal demand. Up to $5M. Apply in 2 minutes. Same-day funding available.',
    heroHeadline: 'Retail and e-commerce funding built for your selling cycle.',
    heroSub: 'Retail and online businesses need capital that moves as fast as their inventory. Our network includes lenders who understand seasonal demand, inventory cycles, and platform-based revenue.',
    avgFunding: '$150,000',
    speed: '24–48 hours',
    approval: '70%',
    stats: [
      { val: '$150K', label: 'Avg. Funding' },
      { val: '24hr', label: 'Funding Speed' },
      { val: '70%', label: 'Approval Rate' },
      { val: '$5M', label: 'Max Available' },
    ],
    products: [
      { name: 'Inventory Financing', desc: 'Fund bulk inventory purchases ahead of peak seasons — Black Friday, Q4, back-to-school, and more.', amount: '$25K – $2M', tag: 'Most Popular' },
      { name: 'Merchant Cash Advance', desc: 'Fast capital based on daily sales volume. Repay automatically as a percentage of daily revenue.', amount: '$5K – $750K', tag: 'Same Day' },
      { name: 'E-commerce Revenue Financing', desc: 'Revenue-based advances for Shopify, Amazon, WooCommerce, and other platform sellers based on verified sales data.', amount: '$10K – $1M', tag: 'Platform-Based' },
      { name: 'Term Loans', desc: 'Fixed capital for store buildouts, website redesigns, marketing spend, or equipment.', amount: '$25K – $2M', tag: 'Fixed Rate' },
      { name: 'Lines of Credit', desc: 'Revolving credit to manage cash flow between inventory purchases and sales cycles.', amount: 'Up to $500K', tag: 'Flexible' },
      { name: 'SBA Loans', desc: 'Long-term, low-rate financing for retail expansion, commercial leases, or major investments.', amount: 'Up to $5M', tag: 'Lowest Rates' },
    ],
    challenges: [
      'Seasonal demand spikes requiring large upfront inventory purchases',
      'Cash flow gaps between inventory purchase and sales revenue',
      'Platform fees, ad spend, and fulfillment costs consuming margins',
      'Returns and chargebacks affecting working capital',
      'Rapid scaling requiring fast access to growth capital',
    ],
    faqs: [
      { q: 'Can Amazon or Shopify sellers get business loans?', a: 'Yes. Many lenders in our network specialize in e-commerce sellers and use platform sales data (Amazon, Shopify, Etsy, etc.) as the primary underwriting metric.' },
      { q: 'What is inventory financing and how does it work?', a: 'Inventory financing lets you borrow against the value of inventory you plan to purchase. The inventory itself serves as collateral, making it easier to qualify.' },
      { q: 'How can I get funding for a seasonal business?', a: 'Lines of credit and MCAs work well for seasonal retailers — draw capital before your peak season and repay as sales come in.' },
      { q: 'Can a retail startup get funded?', a: 'Yes. E-commerce startups with 3–6 months of sales history can qualify for revenue-based financing and MCAs.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Retail Business Loans',
      description: 'Business loans and financing for retail stores and e-commerce businesses.',
      category: 'Business Loan',
    },
  },

  transportation: {
    name: 'Transportation & Trucking',
    icon: '🚚',
    tagline: 'Funding for trucking companies, fleets & logistics',
    metaTitle: 'Trucking & Transportation Business Loans | Gateway Capital',
    metaDesc: 'Trucking and transportation business loans from specialist lenders. Commercial vehicle financing, fleet expansion, and working capital. Up to $5M. Apply in 2 minutes.',
    heroHeadline: 'Transportation funding from lenders who know the road.',
    heroSub: 'Trucking and logistics businesses need fast, flexible capital — for vehicles, fuel, maintenance, and growth. Our network includes commercial vehicle lenders and transportation specialists who understand your business.',
    avgFunding: '$200,000',
    speed: '24–48 hours',
    approval: '71%',
    stats: [
      { val: '$200K', label: 'Avg. Funding' },
      { val: '24hr', label: 'Funding Speed' },
      { val: '71%', label: 'Approval Rate' },
      { val: '$5M', label: 'Max Available' },
    ],
    products: [
      { name: 'Commercial Truck Financing', desc: 'Finance semis, box trucks, flatbeds, and specialty vehicles. New and used accepted. The vehicle is the collateral.', amount: '$25K – $2M', tag: 'Most Popular' },
      { name: 'Fleet Expansion Loans', desc: 'Add vehicles to your fleet without depleting cash reserves. Competitive rates for 2+ vehicle purchases.', amount: '$100K – $5M', tag: 'Fleet Specialist' },
      { name: 'Working Capital', desc: 'Cover fuel, maintenance, insurance, and driver payroll between load payments.', amount: '$10K – $500K', tag: 'Fast Approval' },
      { name: 'Invoice Factoring', desc: 'Stop waiting 30–90 days for freight broker payments. Factor invoices immediately for cash flow.', amount: 'Up to 95% of invoice', tag: '24hr Funding' },
      { name: 'SBA Loans', desc: 'Long-term financing for fleet acquisition, terminal purchase, or major business investment.', amount: 'Up to $5M', tag: 'Lowest Rates' },
      { name: 'Owner-Operator Loans', desc: 'Financing specifically for independent owner-operators — even without a long business history.', amount: '$25K – $500K', tag: 'Alt Docs OK' },
    ],
    challenges: [
      'High cost of commercial vehicles and fleet maintenance',
      'Freight broker payment cycles of 30–90 days',
      'Fuel cost volatility requiring flexible working capital',
      'Driver shortage requiring competitive compensation',
      'Equipment breakdown creating unexpected repair costs',
    ],
    faqs: [
      { q: 'Can owner-operators with a CDL get a business loan?', a: 'Yes. Many lenders specialize in owner-operator financing using your CDL, driving history, and freight contracts as underwriting criteria — not just traditional business metrics.' },
      { q: 'Can I finance a used semi-truck?', a: 'Absolutely. Most commercial vehicle lenders fund used trucks up to 10–15 years old, depending on mileage and condition.' },
      { q: 'What is freight invoice factoring?', a: 'Factoring lets you sell outstanding freight invoices to a lender at a small discount in exchange for immediate cash. It\'s one of the fastest funding options for truckers.' },
      { q: 'How quickly can a trucking company get funded?', a: 'Commercial vehicle loans and invoice factoring can fund in 24–48 hours. SBA loans take 2–4 weeks but offer the best long-term rates.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Trucking Business Loans',
      description: 'Commercial vehicle financing and business loans for trucking and transportation companies.',
      category: 'Business Loan',
    },
  },

  technology: {
    name: 'Technology & SaaS',
    icon: '💻',
    tagline: 'Funding for tech companies, startups & SaaS businesses',
    metaTitle: 'Technology & SaaS Business Loans | Gateway Capital',
    metaDesc: 'Tech and SaaS business loans from lenders who understand recurring revenue models. Revenue-based financing, term loans, and lines of credit. Apply in 2 minutes.',
    heroHeadline: 'Tech funding from lenders who understand recurring revenue.',
    heroSub: 'Traditional lenders often misunderstand SaaS and tech businesses — they look for hard assets that don\'t exist. Our network includes lenders who underwrite on ARR, MRR, churn, and growth metrics.',
    avgFunding: '$300,000',
    speed: '48–72 hours',
    approval: '65%',
    stats: [
      { val: '$300K', label: 'Avg. Funding' },
      { val: '48hr', label: 'Funding Speed' },
      { val: '65%', label: 'Approval Rate' },
      { val: '$5M', label: 'Max Available' },
    ],
    products: [
      { name: 'Revenue-Based Financing', desc: 'Capital based on your MRR or ARR with flexible repayment tied to revenue — no fixed monthly payment. Ideal for SaaS.', amount: '$50K – $2M', tag: 'Most Popular' },
      { name: 'Term Loans', desc: 'Fixed capital for hiring engineers, marketing spend, or infrastructure investment.', amount: '$25K – $2M', tag: 'Fixed Rate' },
      { name: 'Lines of Credit', desc: 'Revolving credit for R&D costs, sales team expansion, or managing burn rate.', amount: 'Up to $500K', tag: 'Flexible' },
      { name: 'SBA Loans', desc: 'Government-backed financing for established tech companies with 2+ years of history.', amount: 'Up to $5M', tag: 'Lowest Rates' },
      { name: 'Venture Debt', desc: 'Non-dilutive capital for VC-backed companies extending runway without giving up equity.', amount: '$500K – $5M', tag: 'Specialist' },
      { name: 'AR Financing', desc: 'Advance on outstanding B2B software invoices and annual contract receivables.', amount: 'Up to 90% of AR', tag: '24hr Funding' },
    ],
    challenges: [
      'Capital-intensive growth phase with negative short-term cash flow',
      'Traditional lenders not understanding intangible asset models',
      'Runway management between funding rounds',
      'Scaling sales and marketing before revenue catches up',
      'Managing churn while maintaining growth metrics',
    ],
    faqs: [
      { q: 'Can a SaaS company with no physical assets get a loan?', a: 'Yes. Revenue-based financing and venture debt lenders specifically underwrite on recurring revenue metrics like MRR, ARR, and churn — no physical collateral needed.' },
      { q: 'What is revenue-based financing for tech companies?', a: 'RBF provides capital in exchange for a percentage of future revenue until a set amount is repaid. Payments flex with revenue — lower in slow months, higher in strong ones.' },
      { q: 'Can a startup under 1 year old get funded?', a: 'Some lenders fund early-stage companies with 3–6 months of revenue history. The stronger your MRR and growth trajectory, the better your options.' },
      { q: 'Does taking a business loan dilute my equity?', a: 'No. Debt financing is non-dilutive — you keep 100% of your equity. This makes it attractive for founders looking to extend runway between equity rounds.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Technology Business Loans',
      description: 'Business loans and revenue-based financing for tech companies and SaaS businesses.',
      category: 'Business Loan',
    },
  },

  franchise: {
    name: 'Franchise Businesses',
    icon: '🍔',
    tagline: 'Funding for franchise owners and multi-unit operators',
    metaTitle: 'Franchise Business Loans & Financing | Gateway Capital',
    metaDesc: 'Franchise business loans from SBA-approved lenders who specialize in franchisee financing. Single unit, multi-unit, and franchise acquisition funding. Up to $5M. Apply in 2 minutes.',
    heroHeadline: 'Franchise financing from lenders who know the franchise model.',
    heroSub: 'Franchise businesses are uniquely positioned for funding — predictable revenue models and brand recognition make them attractive to lenders. Our network includes SBA lenders and franchise specialists who move fast.',
    avgFunding: '$450,000',
    speed: '48–72 hours',
    approval: '76%',
    stats: [
      { val: '$450K', label: 'Avg. Funding' },
      { val: '48hr', label: 'Funding Speed' },
      { val: '76%', label: 'Approval Rate' },
      { val: '$5M', label: 'Max Available' },
    ],
    products: [
      { name: 'SBA Franchise Loans', desc: 'The most popular funding for franchise buyers. SBA 7(a) loans cover franchise fees, equipment, buildout, and working capital.', amount: 'Up to $5M', tag: 'Most Popular' },
      { name: 'Franchise Acquisition Loans', desc: 'Buying an existing franchise location? We match you to lenders who understand franchise resale valuation.', amount: '$100K – $5M', tag: 'Specialist' },
      { name: 'Multi-Unit Expansion', desc: 'Capital to open your second, third, or tenth location. Blanket financing for multiple units simultaneously.', amount: '$500K – $5M', tag: 'Growth' },
      { name: 'Equipment Financing', desc: 'Finance restaurant equipment, fitness machines, retail fixtures — whatever your franchise requires.', amount: 'Up to $2M', tag: 'Fast Approval' },
      { name: 'Working Capital', desc: 'Cover royalties, marketing fees, staffing, and operating costs during ramp-up and slow periods.', amount: '$25K – $500K', tag: 'Flexible' },
      { name: 'Remodeling Loans', desc: 'Fund required brand updates and renovations mandated by your franchisor.', amount: '$50K – $1M', tag: 'Term Loan' },
    ],
    challenges: [
      'High upfront franchise fees and buildout costs',
      'Franchisor-mandated equipment and design standards',
      'Working capital during ramp-up before hitting break-even',
      'Royalty and marketing fee obligations from day one',
      'Multi-unit expansion requiring simultaneous capital deployment',
    ],
    faqs: [
      { q: 'Is the SBA franchise loan the best option for buying a franchise?', a: 'For most franchise buyers, yes. SBA 7(a) loans offer the lowest interest rates, longest terms (up to 10 years for working capital, 25 years for real estate), and can cover franchise fees, equipment, and buildout.' },
      { q: 'Can I get a franchise loan with no prior business experience?', a: 'Yes. Many lenders view franchise businesses favorably for first-time owners because the franchisor provides training and a proven business model.' },
      { q: 'How much do I need to put down for a franchise loan?', a: 'SBA loans typically require 10–20% down depending on the franchise and your credit profile. Some alternative lenders offer 0–10% down on equipment financing.' },
      { q: 'Can existing franchisees get funding for a second location?', a: 'Absolutely — and existing franchisees often get better rates because they have proven performance data. Multi-unit expansion loans are a specialty of our lender network.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Franchise Business Loans',
      description: 'SBA loans and financing for franchise businesses and multi-unit franchise operators.',
      category: 'Business Loan',
    },
  },

  'real-estate': {
    name: 'Real Estate',
    icon: '🏢',
    tagline: 'Funding for real estate investors and developers',
    metaTitle: 'Real Estate Business Loans & Investor Financing | Gateway Capital',
    metaDesc: 'Real estate business loans from specialist lenders. Bridge loans, fix-and-flip financing, commercial real estate, and DSCR loans. Up to $5M+. Apply in 2 minutes.',
    heroHeadline: 'Real estate financing from lenders who move at deal speed.',
    heroSub: 'Real estate deals don\'t wait. Our network includes bridge lenders, commercial real estate specialists, and fix-and-flip lenders who can move in days — not months.',
    avgFunding: '$750,000',
    speed: '48–96 hours',
    approval: '69%',
    stats: [
      { val: '$750K', label: 'Avg. Funding' },
      { val: '72hr', label: 'Funding Speed' },
      { val: '69%', label: 'Approval Rate' },
      { val: '$5M+', label: 'Max Available' },
    ],
    products: [
      { name: 'Bridge Loans', desc: 'Short-term financing to close deals fast while permanent financing is arranged. Close in days, not months.', amount: '$100K – $5M+', tag: 'Most Popular' },
      { name: 'Fix & Flip Loans', desc: 'Purchase and renovation financing for residential fix-and-flip investors. Draw-based funding for rehab costs.', amount: '$75K – $3M', tag: 'Investor Specialist' },
      { name: 'DSCR Loans', desc: 'Debt service coverage ratio loans — qualify based on property income, not personal income. No tax returns needed.', amount: '$100K – $5M', tag: 'No Tax Returns' },
      { name: 'Commercial RE Loans', desc: 'Purchase or refinance commercial properties — office, retail, industrial, multifamily, and mixed-use.', amount: 'Up to $5M+', tag: 'Long Term' },
      { name: 'Ground-Up Construction', desc: 'Construction loans for new residential and commercial development projects.', amount: '$500K – $10M', tag: 'Developer' },
      { name: 'Cash-Out Refinance', desc: 'Leverage equity in existing properties to fund new acquisitions or improvements.', amount: 'Up to 80% LTV', tag: 'Equity Access' },
    ],
    challenges: [
      'Speed requirements — deals fall apart waiting for slow bank approvals',
      'Complex property types not qualifying at traditional banks',
      'High leverage requirements eating into acquisition capital',
      'Renovation cost overruns requiring flexible draw schedules',
      'Portfolio scaling limited by debt-to-income ratios',
    ],
    faqs: [
      { q: 'How fast can I close a bridge loan?', a: 'Many bridge loan lenders in our network can close in 5–10 business days. For straightforward deals with clean titles, even faster closings are possible.' },
      { q: 'What is a DSCR loan for real estate investors?', a: 'A DSCR (Debt Service Coverage Ratio) loan qualifies you based on the rental income of the property — not your personal income or tax returns. Ideal for investors with complex tax situations.' },
      { q: 'Can I get a fix-and-flip loan with no experience?', a: 'Some lenders work with first-time flippers, though experienced investors get better rates. We can match you to lenders who work with your specific experience level.' },
      { q: 'What LTV do real estate lenders typically offer?', a: 'Bridge and fix-and-flip lenders typically fund 65–80% LTV. DSCR rental loans go up to 80% LTV. Commercial loans typically 65–75% LTV depending on property type.' },
    ],
    schema: {
      '@type': 'FinancialProduct',
      name: 'Real Estate Business Loans',
      description: 'Bridge loans, fix-and-flip financing, and commercial real estate loans for investors and developers.',
      category: 'Business Loan',
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_DATA).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = INDUSTRY_DATA[params.slug]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      type: 'website',
    },
    alternates: {
      canonical: `https://gatewaycapitalfunding.com/industries/${params.slug}`,
    },
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const data = INDUSTRY_DATA[params.slug]
  if (!data) notFound()

  const RELATED = Object.entries(INDUSTRY_DATA)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...data.schema,
            provider: {
              '@type': 'FinancialService',
              name: 'Gateway Capital',
              url: 'https://gatewaycapitalfunding.com',
            },
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
              <Link href="/industries" className="hover:text-slate-300 transition-colors">Industries</Link>
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
                    Get My Offers →
                  </Link>
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/20 transition-all">
                    See Products
                  </Link>
                </div>
              </div>

              {/* Stats card */}
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">{data.name} — Funding Overview</div>
                <div className="grid grid-cols-2 gap-3">
                  {data.stats.map(s => (
                    <div key={s.label} className="bg-white/8 rounded-xl p-4">
                      <div className="font-display font-extrabold text-2xl text-blue-400 mb-1">{s.val}</div>
                      <div className="text-xs text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400 mb-2">One application routes to our full lender network</div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-20 bg-white px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Funding Products<span className="w-5 h-px bg-blue-600" />
              </div>
              <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mb-3">
                Products matched to {data.name.toLowerCase()} businesses
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">Our matching engine routes your application to lenders who specialize in these products for your industry.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {data.products.map(p => (
                <Link key={p.name} href="/apply"
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-base text-slate-900">{p.name}</h3>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ml-2">{p.tag}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-sm font-bold text-blue-600">{p.amount}</span>
                    <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-block">Apply →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="bg-blue-600 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <div className="font-display font-bold text-xl text-white mb-1">Ready to get matched?</div>
                <p className="text-blue-200 text-sm">One 2-minute application routes to every lender in our network who specializes in {data.name.toLowerCase()} funding.</p>
              </div>
              <Link href="/apply" className="shrink-0 bg-white text-blue-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-all whitespace-nowrap">
                Get My Offers Free →
              </Link>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 bg-slate-50 px-5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />Industry Challenges
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-4">
                We understand what {data.icon} businesses face
              </h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Generic lenders don&apos;t understand your industry. Our network includes specialists who do — and who structure offers around how {data.name.toLowerCase()} businesses actually operate.
              </p>
              <ul className="space-y-3">
                {data.challenges.map(c => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-slate-600">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-7">
              <div className="font-display font-bold text-lg text-slate-900 mb-4">Why Gateway Capital?</div>
              <div className="space-y-4">
                {[
                  { icon: '🧠', title: 'Industry-specific matching', desc: `Your application is routed to lenders who specialize in ${data.name.toLowerCase()} — not generic business lenders.` },
                  { icon: '⚡', title: 'Speed that matches your pace', desc: `Most ${data.name.toLowerCase()} businesses get funded in ${data.speed} from application to deposit.` },
                  { icon: '⚖️', title: 'Competing offers', desc: 'Multiple lenders see your application and compete — you always choose the best terms.' },
                  { icon: '🔒', title: 'No hard credit pull to start', desc: 'Check your options risk-free. A hard pull only happens when you choose to proceed with an offer.' },
                ].map(f => (
                  <div key={f.title} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{f.title}</div>
                      <div className="text-xs text-slate-500 leading-relaxed mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/apply" className="mt-6 block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl text-center transition-all">
                Get My Offers — It&apos;s Free →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
                <span className="w-5 h-px bg-blue-600" />FAQ
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Common questions from {data.name.toLowerCase()} owners
              </h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="font-display font-bold text-base text-slate-900 mb-2">{faq.q}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related industries */}
        <section className="py-14 bg-slate-50 px-5">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-6">Explore other industries</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map(([slug, ind]) => (
                <Link key={slug} href={`/industries/${slug}`}
                  className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="text-2xl mb-2">{ind.icon}</div>
                  <div className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{ind.name}</div>
                  <div className="text-xs text-slate-400">Avg. {ind.avgFunding} · {ind.speed}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-600 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mb-3">
              Get matched to {data.name.toLowerCase()} lenders today.
            </h2>
            <p className="text-blue-200 mb-7">Two minutes to apply. No hard credit pull. Decisions in {data.speed}.</p>
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
