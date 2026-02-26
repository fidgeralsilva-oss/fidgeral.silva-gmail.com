import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  ChevronRight, 
  Cloud, 
  Cpu, 
  Box, 
  Users, 
  TrendingUp, 
  Globe, 
  Zap,
  ArrowUpRight,
  BarChart3,
  Bot,
  Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const REVENUE_DATA = [
  { name: 'Online Stores', value: 37.6, color: '#F27D26' },
  { name: 'Third-party', value: 24.0, color: '#FF9900' },
  { name: 'AWS', value: 18.0, color: '#232F3E' },
  { name: 'Advertising', value: 9.6, color: '#00A8E1' },
  { name: 'Subscriptions', value: 6.9, color: '#37475A' },
  { name: 'Physical Stores', value: 3.1, color: '#146EB4' },
  { name: 'Others', value: 0.8, color: '#8E9299' },
];

const GROWTH_DATA = [
  { year: '2020', revenue: 386.1 },
  { year: '2021', revenue: 469.8 },
  { year: '2022', revenue: 514.0 },
  { year: '2023', revenue: 574.8 },
  { year: '2024', revenue: 638.0 },
  { year: '2025', revenue: 716.9 },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1111] text-white font-sans selection:bg-[#FF9900] selection:text-black">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        scrolled ? "bg-[#131921]/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
      )}>
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white">AMAZON</span>
            <div className="h-1 w-8 bg-[#FF9900] rounded-full -mt-1 ml-1" />
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            <a href="#" className="hover:text-[#FF9900] transition-colors">Retail</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors">AWS</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors">Innovation</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors">Investors</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-[#FF9900] transition-all">
            <Search className="w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search ecosystem..." 
              className="bg-transparent border-none outline-none text-sm px-3 w-48 placeholder:text-white/20"
            />
          </div>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <button className="hidden md:block bg-[#FF9900] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-[#F27D26] transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1111] via-[#0F1111]/80 to-transparent z-10" />
          <img 
            src="https://picsum.photos/seed/amazon-hq/1920/1080?blur=2" 
            alt="Amazon Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#FF9900]/30 bg-[#FF9900]/10 text-[#FF9900] text-xs font-bold uppercase tracking-widest mb-6">
              Strategic Report 2025
            </span>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              Amazon<span className="text-[#FF9900]">.</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/60 max-w-2xl font-light leading-relaxed mb-10">
              Defining the future of <span className="text-white font-medium">global commerce</span>, 
              <span className="text-white font-medium"> cloud intelligence</span>, and 
              <span className="text-white font-medium"> autonomous logistics</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Explore Ecosystem <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 border border-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                Investor Relations
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 grid grid-cols-2 md:grid-cols-4 gap-4 z-20">
          {[
            { label: '2025 Revenue', value: '$716.9B', icon: TrendingUp, trend: '+12% YoY' },
            { label: 'Active Customers', value: '310M+', icon: Users, trend: 'Global' },
            { label: 'Cloud Share', value: '30%', icon: Cloud, trend: 'Market Leader' },
            { label: 'Market Cap', value: '$2.39T', icon: Globe, trend: 'Nasdaq: AMZN' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#FF9900]/20 rounded-lg">
                  <stat.icon className="w-4 h-4 text-[#FF9900]" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-[10px] text-[#FF9900] font-bold mt-1">{stat.trend}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Ecosystem Section */}
      <section className="py-32 px-6 md:px-12 bg-[#131921]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                Diversified <br /> <span className="text-white/40">Ecosystem</span>
              </h2>
              <p className="text-white/50 max-w-md">
                A multi-layered business model integrating retail, technology services, and digital media into a seamless customer experience.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#FF9900] font-bold text-sm cursor-pointer hover:gap-4 transition-all">
              VIEW FULL SEGMENT ANALYSIS <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Chart Card */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#FF9900]" />
                Revenue Distribution 2025
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={REVENUE_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {REVENUE_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#131921', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {REVENUE_DATA.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-white/60">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              <div className="group bg-[#232F3E] rounded-3xl p-8 relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cloud className="w-32 h-32" />
                </div>
                <h4 className="text-2xl font-bold mb-2">AWS Cloud</h4>
                <p className="text-white/60 text-sm mb-6 max-w-[200px]">The engine of Amazon's profitability and global tech infrastructure.</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-black">$128.7B</div>
                    <div className="text-xs text-[#FF9900] font-bold">2025 REVENUE</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black">57%</div>
                    <div className="text-xs text-white/40 font-bold">OF TOTAL PROFITS</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Amazon Prime</h4>
                  <p className="text-white/60 text-sm">200M+ members with &gt;90% retention rate.</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-[#131921]" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-[#FF9900] text-black flex items-center justify-center text-xs font-bold border-2 border-[#131921]">
                      +200M
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white/40 uppercase tracking-tighter">Global Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & AI Section */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,153,0,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/60 uppercase tracking-widest mb-6"
            >
              <Bot className="w-4 h-4 text-[#FF9900]" /> Intelligence First
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
              The <span className="text-[#FF9900]">Nova</span> Era
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Investing $200B in AI infrastructure by 2026. From custom silicon to foundation models, we are building the brain of the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nova Pro',
                desc: 'Advanced multimodal foundation models competing at the frontier of generative AI.',
                icon: Cpu,
                metric: 'GPT-4 Class',
                color: 'from-blue-500/20'
              },
              {
                title: 'Trainium 3',
                desc: 'Custom AI silicon delivering 40% better price-performance for massive model training.',
                icon: Zap,
                metric: '+40% Efficiency',
                color: 'from-orange-500/20'
              },
              {
                title: 'Rufus',
                desc: 'The AI shopping assistant used by 300M+ customers to redefine the retail journey.',
                icon: Bot,
                metric: '300M+ Users',
                color: 'from-emerald-500/20'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={cn(
                  "bg-white/5 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group",
                  "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity hover:before:opacity-100",
                  item.color
                )}
              >
                <div className="relative z-10">
                  <div className="p-4 bg-white/5 rounded-2xl w-fit mb-8 group-hover:bg-[#FF9900] group-hover:text-black transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Performance</span>
                    <span className="text-sm font-black text-[#FF9900]">{item.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Robotics Section */}
      <section className="py-32 px-6 md:px-12 bg-white text-black rounded-[3rem] mx-4 md:mx-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-black/40 mb-6 block">Autonomous Operations</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
                Logistics <br /> <span className="text-[#FF9900]">Redefined</span>
              </h2>
              <p className="text-black/60 text-lg mb-12 leading-relaxed">
                $25B investment in next-generation warehouse automation. Our robotic systems like Sequoia and Proteus are reducing operational costs by 25% while increasing safety.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: 'Robotic Density', value: '10x', desc: 'vs traditional fulfillment centers' },
                  { label: 'Cost Reduction', value: '-25%', desc: 'in automated facilities' },
                  { label: 'Processing Speed', value: '+75%', desc: 'faster inventory management' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-default">
                    <div className="text-4xl font-black text-[#FF9900] w-24">{item.value}</div>
                    <div>
                      <div className="font-bold text-lg">{item.label}</div>
                      <div className="text-sm text-black/40">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-neutral-100 rounded-[3rem] overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/amazon-robot/1000/1000" 
                  alt="Amazon Robotics" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#FF9900] rounded-full flex items-center justify-center text-black">
                      <Truck className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl">Proteus Unit 042</span>
                  </div>
                  <p className="text-white/80">Fully autonomous mobile robot navigating dynamic warehouse environments.</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-[#FF9900] rounded-tr-[3rem]" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-[#FF9900] rounded-bl-[3rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-12 px-6 md:px-12 bg-[#0F1111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
            <div className="col-span-2">
              <div className="flex flex-col mb-8">
                <span className="text-3xl font-black tracking-tighter text-white">AMAZON</span>
                <div className="h-1.5 w-10 bg-[#FF9900] rounded-full -mt-1 ml-1" />
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Building the world's most customer-centric company. From A to Z, we are obsessed with innovation and excellence.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Ecosystem</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Retail</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">AWS Cloud</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Prime Video</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Advertising</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Company</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Press Center</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Investors</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Stock Info</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Quarterly Results</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Governance</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Annual Report</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-white/40">Support</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#FF9900] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-white/20 font-medium">
              © 2025 Amazon.com, Inc. or its affiliates. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Globe className="w-4 h-4 text-white/20" />
              <span className="text-xs text-white/40 font-bold uppercase tracking-widest">English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
