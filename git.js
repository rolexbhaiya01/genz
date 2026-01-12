import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowUpRight, Globe, Zap, Heart, Instagram, Twitter, ExternalLink, ChevronRight } from 'lucide-react';

/* GENZALPHA - Modern E-Commerce Affiliate/Redirect Platform
  Aesthetic: Gen-Z, Brutalist, Dark Mode with Neon Accents
*/

// --- Mock Data ---
const PRODUCTS = [
  {
    id: 9,
    name: "Aesthetic Oversized",
    price: "$49.99",
    category: "Fashion",
    image: "https://m.media-amazon.com/images/I/514LGPGQC9L._SY741_.jpg",
    link: "https://amzn.in/d/4JAhFyE",
    badge: "Must Cop",
    desc: "Premium heavyweight cotton. Boxy drop-shoulder fit for the ultimate vibe."
  },
  {
    id: 1,
    name: "Cyber Y2K Sunglasses",
    price: "$45.00",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    link: "https://amazon.com",
    badge: "Trending",
    desc: "Rimless futuristic shades for the main character energy."
  },
  {
    id: 2,
    name: "Transparent Mech Keyboard",
    price: "$120.00",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
    link: "https://keychron.com",
    badge: "Best Seller",
    desc: "See-through chassis with RGB that syncs to your heartbeat."
  },
  {
    id: 3,
    name: "Oversized Cargo Parachutes",
    price: "$85.00",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1517445312882-b412140493ae?auto=format&fit=crop&q=80&w=800", // Generic fashion image
    link: "https://asos.com",
    badge: "New Drop",
    desc: "Maximum volume. Water-resistant techwear fabric."
  },
  {
    id: 4,
    name: "Retro 35mm Point & Shoot",
    price: "$250.00",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800",
    link: "https://ebay.com",
    badge: "Rare",
    desc: "Capture the vibe in pure analog grain. No filters needed."
  },
  {
    id: 5,
    name: "Neon LED Wall Art",
    price: "$60.00",
    category: "Decor",
    image: "https://images.unsplash.com/photo-1563245372-f21720e32c4d?auto=format&fit=crop&q=80&w=800",
    link: "https://etsy.com",
    badge: null,
    desc: "Customizable text. Set the mood in your sanctuary."
  },
  {
    id: 6,
    name: "Chrome Platform Boots",
    price: "$140.00",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?auto=format&fit=crop&q=80&w=800",
    link: "https://dollskill.com",
    badge: "Limited",
    desc: "Stomp on the competition. 5-inch heels, zero apologies."
  },
  {
    id: 7,
    name: "Handheld Retro Console",
    price: "$89.99",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1555617981-7783903252c8?auto=format&fit=crop&q=80&w=800",
    link: "https://analogue.co",
    badge: "Viral",
    desc: "Plays every gameboy game ever made. Pocket nostalgia."
  },
  {
    id: 8,
    name: "Abstract Rug Tufted",
    price: "$110.00",
    category: "Decor",
    image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80&w=800",
    link: "https://ruggable.com",
    badge: null,
    desc: "Hand-tufted wavy patterns. Soft on feet, hard on style."
  }
];

const CATEGORIES = ["All", "Fashion", "Tech", "Decor"];

const App = () => {
  const [view, setView] = useState('home'); // home, shop, about
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Custom Cursor Logic (optional visual flair)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRedirect = (link) => {
    window.open(link, '_blank');
  };

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const navigateTo = (page) => {
    setView(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // --- Components ---

  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => navigateTo('home')}
            className="flex-shrink-0 cursor-pointer group relative"
          >
            <h1 className="text-3xl font-black tracking-tighter text-white italic">
              GENZ<span className="text-[#CCFF00]">ALPHA</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-[#CCFF00] transition-all group-hover:w-full"></div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Shop', 'About'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item.toLowerCase())}
                className={`text-sm font-bold uppercase tracking-widest hover:text-[#CCFF00] transition-colors ${view === item.toLowerCase() ? 'text-[#CCFF00]' : 'text-zinc-400'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="SEARCH..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (view !== 'shop') setView('shop');
                }}
                className="bg-transparent border-b border-zinc-700 text-white text-sm pb-1 w-32 focus:w-64 focus:border-[#CCFF00] focus:outline-none transition-all placeholder-zinc-600 font-mono"
              />
              <Search className="w-4 h-4 text-zinc-500 absolute right-0 top-0 pointer-events-none" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col space-y-6 animate-in slide-in-from-top-10">
          {['Home', 'Shop', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item.toLowerCase())}
              className="text-2xl font-black text-white uppercase tracking-tighter hover:text-[#CCFF00] text-left"
            >
              {item}
            </button>
          ))}
          <div className="pt-4 border-t border-zinc-800">
             <input 
                type="text" 
                placeholder="SEARCH PRODUCTS..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if(view !== 'shop') setView('shop');
                }}
                className="w-full bg-zinc-900 border border-zinc-700 p-4 text-white font-mono focus:border-[#CCFF00] outline-none"
              />
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/10">
      {/* Background Video/Image Placeholder with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1616731948638-b0d0befef759?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block border border-[#CCFF00] px-4 py-1 rounded-full mb-6 animate-pulse">
           <span className="text-[#CCFF00] text-xs font-mono font-bold tracking-widest">NEW COLLECTION DROP v.2.0</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-6">
          FUTURE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600 hover:text-[#CCFF00] transition-colors cursor-default">READY.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-mono max-w-2xl mx-auto mb-10">
          We don't sell products. We curate the artifacts of the next generation.
          Strictly aesthetics. High utility. Zero compromise.
        </p>
        <button 
          onClick={() => setView('shop')}
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#CCFF00] overflow-hidden font-bold text-black tracking-widest hover:bg-white transition-colors"
        >
          <span className="relative z-10 flex items-center gap-2">
            EXPLORE THE VAULT <ChevronRight size={20} />
          </span>
          <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>
      </div>
    </header>
  );

  const ProductCard = ({ product }) => (
    <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-[#CCFF00] transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-800">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-[10px] font-bold px-3 py-1 border border-white/20 uppercase tracking-widest">
            {product.badge}
          </div>
        )}
        
        {/* Hover Overlay Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
              onClick={() => handleRedirect(product.link)}
              className="bg-[#CCFF00] text-black font-black px-8 py-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-white"
            >
              ACQUIRE <ExternalLink size={16} />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{product.category}</p>
          <p className="text-white font-mono font-bold">{product.price}</p>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#CCFF00] transition-colors">
          {product.name}
        </h3>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{product.desc}</p>
      </div>
    </div>
  );

  const ShopGrid = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-5xl font-black text-white mb-4 uppercase italic">The Vault</h2>
          <p className="text-zinc-400 font-mono">Select your loadout.</p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 border text-sm font-bold uppercase tracking-wider transition-all
                ${activeCategory === cat 
                  ? 'bg-[#CCFF00] border-[#CCFF00] text-black' 
                  : 'bg-transparent border-zinc-700 text-zinc-400 hover:border-white hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-zinc-800 rounded-lg">
          <p className="text-zinc-500 font-mono text-xl">No artifacts found matching your specifications.</p>
          <button 
            onClick={() => {setActiveCategory('All'); setSearchQuery('')}}
            className="mt-4 text-[#CCFF00] underline underline-offset-4 hover:text-white"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );

  const AboutPage = () => (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="border-l-4 border-[#CCFF00] pl-8 mb-12">
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
          Origin <br/> Story
        </h2>
      </div>
      
      <div className="space-y-8 text-xl text-zinc-300 leading-relaxed">
        <p>
          <strong className="text-white">GENZALPHA</strong> is not a store. It is a filter for the noise. 
          The internet is a landfill of mediocre products. We dig through the trash to find the gold.
        </p>
        <p>
          Born from the intersection of Y2K nostalgia and Cyberpunk futurism, we curate items that 
          define the aesthetic of the new era.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="bg-zinc-900 p-8 border border-zinc-800">
            <Zap className="text-[#CCFF00] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">High Voltage</h3>
            <p className="text-zinc-400 text-sm">We only pick items that spark energy. If it's boring, it's gone.</p>
          </div>
          <div className="bg-zinc-900 p-8 border border-zinc-800">
            <Globe className="text-[#CCFF00] mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">Global Scout</h3>
            <p className="text-zinc-400 text-sm">Sourced from the weirdest corners of the web. Trusted marketplaces only.</p>
          </div>
        </div>

        <p className="font-mono text-sm text-zinc-500">
          *Disclaimer: We operate as an affiliate curator. Clicking 'BUY' redirects you to the original seller. 
          We do not handle shipping, payments, or returns. We just show you the way.
        </p>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-zinc-900 border-t border-zinc-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-black text-white mb-6 italic">GENZ<span className="text-[#CCFF00]">ALPHA</span></h2>
            <p className="text-zinc-400 max-w-md mb-8">
              Curating the future aesthetic. <br/>
              Bold. Minimal. Essential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-[#CCFF00] hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-[#CCFF00] hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'About'].map(link => (
                <li key={link}>
                  <button 
                    onClick={() => navigateTo(link.toLowerCase())}
                    className="text-zinc-400 hover:text-[#CCFF00] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Affiliate Disclosure</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono">
          <p>© {new Date().getFullYear()} GENZALPHA STUDIOS. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-2">
            DESIGNED FOR THE BOLD <Heart size={12} className="text-[#CCFF00]" fill="#CCFF00" />
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* Inject Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Montserrat:wght@400;700;900&display=swap');
          body { font-family: 'Space Grotesk', sans-serif; }
          h1, h2, h3, .font-display { font-family: 'Montserrat', sans-serif; }
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { bg: #09090b; }
          ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #CCFF00; }
        `}
      </style>

      <Navbar />
      
      <main>
        {view === 'home' && (
          <>
            <Hero />
            <div className="bg-zinc-950 border-b border-white/10 p-4 overflow-hidden">
               <div className="flex gap-12 animate-marquee whitespace-nowrap text-zinc-800 font-black text-4xl uppercase select-none">
                 <span>• New Arrivals • Limited Edition • Free Shipping Worldwide • Secure Checkout •</span>
                 <span>• New Arrivals • Limited Edition • Free Shipping Worldwide • Secure Checkout •</span>
                 <span>• New Arrivals • Limited Edition • Free Shipping Worldwide • Secure Checkout •</span>
               </div>
            </div>
            {/* Featured Section (Reuse Shop Grid Logic but limited) */}
            <div className="py-20 max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-end mb-8">
                 <h2 className="text-3xl font-black uppercase text-white">Trending Now</h2>
                 <button onClick={() => setView('shop')} className="text-[#CCFF00] font-bold hover:underline underline-offset-4 flex items-center gap-1">
                   VIEW ALL <ArrowUpRight size={16} />
                 </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          </>
        )}

        {view === 'shop' && <ShopGrid />}
        
        {view === 'about' && <AboutPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;