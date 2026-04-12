import { useState, useEffect, useRef, FormEvent, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Download, 
  Moon, 
  Sun, 
  Smartphone, 
  Shield, 
  Zap, 
  Globe, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  CheckCircle2, 
  HelpCircle,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Building2,
  Users,
  Bell,
  CreditCard,
  Phone,
  Wrench,
  Calendar,
  ArrowUp,
  MapPin,
  Calculator,
  Lock,
  Plus,
  Trash2,
  ImagePlus,
  Save
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const { scrollYProgress } = useScroll();
  const showFloatingBtn = useTransform(scrollYProgress, [0, 0.2], [false, true]);
  const [showBtn, setShowBtn] = useState(false);

  // Content State
  const [content, setContent] = useState({
    buildingName: "হলান টাওয়ার",
    location: "হলান, দক্ষিণখান",
    logoUrl: "https://i.imghippo.com/files/xPV6164w.png",
    heroTitle1: "আপনার বিল্ডিং ব্যবস্থাপনা",
    heroTitle2: "এখন হাতের মুঠোয়",
    heroSubtitle: "হলান টাওয়ার অ্যাপের মাধ্যমে সার্ভিস চার্জ পরিশোধ, নোটিশ দেখা এবং মেইনটেন্যান্স আপডেট পাওয়া এখন আরও সহজ ও নিরাপদ।",
    heroImageUrl: "https://i.imghippo.com/files/KbLJ8581V.jpg",
    features: [
      { icon: "CreditCard", title: "সার্ভিস চার্জ পরিশোধ", desc: "বর্তমানে তত্ত্বাবধানে থাকা ব্যক্তির কাছে সার্ভিস চার্জ পরিশোধ করা হচ্ছে। বিকাশ বা নগদের মাধ্যমে খুব শীঘ্রই মাসিক সার্ভিস চার্জ পরিশোধ করার প্রক্রিয়া চালু হবে।" },
      { icon: "Zap", title: "মিটার রিচার্জ", desc: "আমাদের অ্যাপের মাধ্যমে ডেসকো প্রিপেইড মিটার রিচার্জ করুন ঘরে বসেই Ekpay মাধ্যমে, কোনো ঝামেলা ছাড়াই। (পেমেন্ট অপশন: বিকাশ, নগদ, উপায়, রকেট ও ব্যাংকের মাধ্যমে)" },
      { icon: "Calculator", title: "আয় ব্যয় হিসাব", desc: "বিল্ডিংয়ের সকল আয়-ব্যয়ের হিসাব স্বচ্ছভাবে সংরক্ষণ ও প্রদর্শন করা হয়।" },
      { icon: "Phone", title: "জরুরি নম্বর তালিকা", desc: "বিল্ডিং সম্পর্কিত সকলের জরুরি নাম্বার হাতের কাছেই।" },
      { icon: "Bell", title: "বিল্ডিং নোটিশ বোর্ড", desc: "বিল্ডিংয়ের যেকোনো জরুরি নোটিশ বা ঘোষণা সাথে সাথে জানুন।" },
      { icon: "ArrowUp", title: "লিফট নির্দেশনা", desc: "লিফট মেইনটেন্যান্স বা সমস্যার আপডেট রিয়েল-টাইমে দেখুন।" },
      { icon: "Wrench", title: "মেইনটেন্যান্স আপডেট", desc: "পানির পাম্প বা যে কোনো ইলেকট্রিক মেরামতের খবর আগে থেকেই জানুন।" },
      { icon: "Shield", title: "নিরাপত্তা তথ্য", desc: "নিরাপত্তার জন্য সর্বক্ষণিক গার্ডের ব্যবস্থা।" },
      { icon: "Calendar", title: "ইভেন্ট ঘোষণা", desc: "কমিউনিটি ইভেন্ট বা মিটিংয়ের সময়সূচি জেনে নিন।" }
    ],
    installSteps: [
      { step: "০১", title: "ডাউনলোড বাটনে ক্লিক করুন", desc: "নিচের ডাউনলোড বাটনে ক্লিক করে অ্যাপটি ডাউনলোড শুরু করুন", imageUrl: "https://picsum.photos/seed/step0/400/300" },
      { step: "০২", title: "ফাইল ওপেন করে Install চাপুন", desc: "ডাউনলোড শেষ হলে নোটিফিকেশন বার থেকে ফাইলটি ওপেন করুন", imageUrl: "https://picsum.photos/seed/step1/400/300" },
      { step: "০৩", title: "Unknown Sources Allow করুন", desc: "যদি পারমিশন চায়, তবে সেটিংস থেকে 'Allow' করে দিন", imageUrl: "https://picsum.photos/seed/step2/400/300" },
      { step: "০৪", title: "অ্যাপ ওপেন করে লগইন করুন", desc: "আপনার ফ্ল্যাট নম্বর দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন", imageUrl: "https://picsum.photos/seed/step3/400/300" }
    ],
    installTitle: "ইন্সটলেশন গাইড",
    installSubtitle: "মাত্র ৪টি সহজ ধাপে অ্যাপটি আপনার ফোনে সেটআপ করুন",
    interfaceTitle: "অ্যাপ ইন্টারফেস",
    interfaceSubtitle: "সহজ এবং ইউজার ফ্রেন্ডলি ডিজাইন",
    interfaceImages: [
      "https://picsum.photos/seed/ui1/560/1120",
      "https://picsum.photos/seed/ui2/560/1120",
      "https://picsum.photos/seed/ui3/560/1120",
      "https://picsum.photos/seed/ui4/560/1120"
    ],
    faqs: [
      { q: "অ্যাপ কিভাবে ডাউনলোড করবো?", a: "আমাদের ওয়েবসাইটের 'ডাউনলোড' বাটনে ক্লিক করলেই অ্যাপটি ডাউনলোড শুরু হবে।" },
      { q: "লগইন সমস্যা হলে কি করবো?", a: "লগইন করতে সমস্যা হলে বিল্ডিং ম্যানেজারের সাথে যোগাযোগ করুন অথবা সাপোর্ট নম্বরে কল করুন।" },
      { q: "আপডেট কিভাবে পাবো?", a: "অ্যাপের মধ্যেই আপডেটের নোটিফিকেশন পাবেন। সেখান থেকে এক ক্লিকেই আপডেট করা যাবে।" },
      { q: "আইফোনে কি ব্যবহার করা যাবে?", a: "বর্তমানে এটি শুধুমাত্র অ্যান্ড্রয়েড ব্যবহারকারীদের জন্য। আইওএস ভার্সন শীঘ্রই আসছে।" }
    ],
    appDetails: {
      version: "১.০.০",
      size: "১৫ মেগাবাইট",
      developer: "হলান টেক",
      updateDate: "২৪ ফেব্রুয়ারি ২০২৬",
      requirement: "Android 8.0+"
    },
    footerDesc: "আধুনিক আবাসন ব্যবস্থাপনার এক অনন্য উদাহরণ। আমরা নিশ্চিত করি সর্বোচ্চ নিরাপত্তা এবং নাগরিক সুবিধা।"
  });

  const iconMap: Record<string, ReactNode> = {
    CreditCard: <CreditCard className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Calculator: <Calculator className="w-6 h-6" />,
    Phone: <Phone className="w-6 h-6" />,
    Bell: <Bell className="w-6 h-6" />,
    ArrowUp: <ArrowUp className="w-6 h-6" />,
    Wrench: <Wrench className="w-6 h-6" />,
    Shield: <Shield className="w-6 h-6" />,
    Calendar: <Calendar className="w-6 h-6" />
  };

  const updateContent = (path: string, value: any) => {
    const keys = path.split('.');
    setContent(prev => {
      const newContent = { ...prev };
      let current: any = newContent;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newContent;
    });
  };

  useEffect(() => {
    const unsubscribe = showFloatingBtn.on("change", (latest) => {
      setShowBtn(latest);
    });
    return () => unsubscribe();
  }, [showFloatingBtn]);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleAdminLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === '1966') {
      setIsAdminLoggedIn(true);
      setIsAdminModalOpen(false);
      setLoginError('');
      alert('এডমিন প্যানেলে স্বাগতম!');
    } else {
      setLoginError('ভুল পাসওয়ার্ড!');
    }
  };

  const EditableText = ({ path, value, className, multiline = false }: { path: string, value: string, className?: string, multiline?: boolean }) => {
    if (!isAdminLoggedIn) return <span className={className}>{value}</span>;
    
    return (
      <span 
        contentEditable 
        suppressContentEditableWarning
        onBlur={(e) => updateContent(path, e.currentTarget.textContent || "")}
        className={`${className} outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1 transition-all bg-emerald-500/5 min-w-[20px] inline-block`}
      >
        {value}
      </span>
    );
  };

  const EditableImage = ({ path, src, alt, className }: { path: string, src: string, alt: string, className?: string }) => {
    if (!isAdminLoggedIn) return <img src={src} alt={alt} className={className} />;

    return (
      <div className={`relative group/img ${className?.includes('w-full') ? 'w-full' : 'inline-block'} ${className?.includes('h-full') ? 'h-full' : ''}`}>
        <img src={src} alt={alt} className={className} />
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const newUrl = prompt('নতুন ইমেজের URL দিন:', src);
            if (newUrl) updateContent(path, newUrl);
          }}
          className="absolute bottom-2 right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-2xl hover:bg-emerald-600 transition-all z-40 flex items-center gap-1.5 text-[10px] font-bold border-2 border-white dark:border-slate-900 hover:scale-110 active:scale-95"
          title="ছবি পরিবর্তন করুন"
        >
          <ImagePlus size={14} />
          <span>URL</span>
        </button>
      </div>
    );
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900/80 border-b border-slate-800' : 'bg-white/80 border-b border-slate-200'} backdrop-blur-xl`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <EditableImage path="logoUrl" src={content.logoUrl} alt="Logo" className="w-12 h-12 object-contain" />
              <div>
                <EditableText path="buildingName" value={content.buildingName} className="font-bold text-xl tracking-tight block leading-none" />
                <div className={`flex items-center gap-1 text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <MapPin size={12} />
                  <EditableText path="location" value={content.location} />
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-emerald-500 transition-colors font-medium">সুবিধাসমূহ</a>
              <a href="#screenshots" className="hover:text-emerald-500 transition-colors font-medium">স্ক্রিনশট</a>
              <a href="#install" className="hover:text-emerald-500 transition-colors font-medium">ইন্সটল গাইড</a>
              <a href="#faq" className="hover:text-emerald-500 transition-colors font-medium">FAQ</a>
              {isAdminLoggedIn ? (
                <button 
                  onClick={() => setIsAdminLoggedIn(false)}
                  className="px-4 py-2 rounded-xl bg-red-500 text-white font-medium flex items-center gap-2"
                >
                  <Save size={16} />
                  সেভ করুন
                </button>
              ) : (
                <button 
                  onClick={() => setIsAdminModalOpen(true)}
                  className="hover:text-emerald-500 transition-colors font-medium flex items-center gap-1"
                >
                  <Lock size={16} />
                  এডমিন প্যানেল
                </button>
              )}
              <button 
                onClick={toggleTheme} 
                className={`p-2.5 rounded-full transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a 
                href="https://github.com/rifathasan1970r/Holantower-apps-download/raw/refs/heads/main/HolanTower.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-medium transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                ডাউনলোড
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="font-medium py-2 border-b border-slate-100 dark:border-slate-800">সুবিধাসমূহ</a>
                <a href="#screenshots" onClick={() => setIsMenuOpen(false)} className="font-medium py-2 border-b border-slate-100 dark:border-slate-800">স্ক্রিনশট</a>
                <a href="#install" onClick={() => setIsMenuOpen(false)} className="font-medium py-2 border-b border-slate-100 dark:border-slate-800">ইন্সটল গাইড</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="font-medium py-2 border-b border-slate-100 dark:border-slate-800">FAQ</a>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAdminModalOpen(true);
                  }} 
                  className="font-medium py-2 border-b border-slate-100 dark:border-slate-800 text-left flex items-center gap-2"
                >
                  <Lock size={16} />
                  এডমিন প্যানেল
                </button>
                <a href="https://github.com/rifathasan1970r/Holantower-apps-download/raw/refs/heads/main/HolanTower.apk" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-center px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-medium shadow-lg">
                  ডাউনলোড করুন
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className={`absolute inset-0 -z-10 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-40"></div>
          {/* Grid Pattern */}
          <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] ${darkMode ? 'invert' : ''}`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                <EditableText path="heroTitle1" value={content.heroTitle1} /> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                  <EditableText path="heroTitle2" value={content.heroTitle2} />
                </span>
              </h1>
              
              <p className={`text-lg lg:text-xl mb-10 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <EditableText path="heroSubtitle" value={content.heroSubtitle} />
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a href="https://github.com/rifathasan1970r/Holantower-apps-download/raw/refs/heads/main/HolanTower.apk" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Download size={24} />
                  <span className="font-bold text-lg">এখনই ডাউনলোড করুন</span>
                </a>
                <a href="https://holan-tower-apps.vercel.app/" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-white text-slate-700'} shadow-sm hover:shadow-md`}>
                  <Globe size={20} />
                  <span>ওয়েব ভার্সন</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative mx-auto lg:mr-0"
            >
              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden mx-auto z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-800 rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-slate-800 relative group">
                  <EditableImage 
                    path="heroImageUrl"
                    src={content.heroImageUrl} 
                    alt="App Interface" 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glass Overlay UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 mb-4 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">সার্ভিস চার্জ</p>
                          <p className="text-emerald-300 text-xs">পরিশোধ সফল হয়েছে</p>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-emerald-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-32 -left-8 md:-left-16 p-5 rounded-2xl shadow-xl ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white/80 border-white'} backdrop-blur-md border z-20 max-w-[200px]`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Bell size={20} />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase">নোটিশ</p>
                </div>
                <p className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>আগামীকাল লিফট মেইনটেন্যান্স চলবে</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute bottom-40 -right-8 md:-right-12 p-5 rounded-2xl shadow-xl ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white/80 border-white'} backdrop-blur-md border z-20`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">নিরাপত্তা</p>
                    <p className={`font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>সিসিটিভি অ্যাক্টিভ</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm">ফিচারসমূহ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">বিল্ডিং ম্যানেজমেন্ট এখন আরও সহজ</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              হলান টাওয়ার অ্যাপের মাধ্যমে আপনার দৈনন্দিন জীবনের সকল কাজ এখন এক ক্লিকেই সম্ভব।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`p-8 rounded-3xl border transition-all duration-300 relative ${darkMode ? 'bg-slate-800/40 border-slate-700 hover:bg-slate-800 hover:border-emerald-500/50' : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-xl'} group`}
              >
                {isAdminLoggedIn && (
                  <button 
                    onClick={() => {
                      const newFeatures = [...content.features];
                      newFeatures.splice(idx, 1);
                      updateContent('features', newFeatures);
                    }}
                    className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${darkMode ? 'bg-slate-700 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white' : 'bg-white text-emerald-600 shadow-sm group-hover:bg-emerald-500 group-hover:text-white'}`}>
                  {iconMap[feature.icon] || <Smartphone />}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  <EditableText path={`features.${idx}.title`} value={feature.title} />
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <EditableText path={`features.${idx}.desc`} value={feature.desc} />
                </p>
              </motion.div>
            ))}
            {isAdminLoggedIn && (
              <button 
                onClick={() => {
                  updateContent('features', [...content.features, { icon: "Smartphone", title: "নতুন ফিচার", desc: "ফিচারের বর্ণনা এখানে লিখুন" }]);
                }}
                className={`p-8 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-4 transition-all ${darkMode ? 'border-slate-700 hover:border-emerald-500 text-slate-500 hover:text-emerald-500' : 'border-slate-200 hover:border-emerald-500 text-slate-400 hover:text-emerald-500'}`}
              >
                <Plus size={32} />
                <span className="font-bold">ফিচার যোগ করুন</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Screenshots Slider */}
      <section id="screenshots" className="py-24 overflow-hidden relative">
        <div className={`absolute inset-0 ${darkMode ? 'bg-slate-950' : 'bg-slate-50/50'}`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <EditableText path="interfaceTitle" value={content.interfaceTitle} />
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <EditableText path="interfaceSubtitle" value={content.interfaceSubtitle} />
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 hide-scrollbar gap-8 snap-x snap-mandatory px-4 md:justify-center">
             {content.interfaceImages.map((img, idx) => (
               <div key={idx} className="snap-center shrink-0">
                 <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative group transition-transform hover:-translate-y-4 duration-500">
                    {isAdminLoggedIn && (
                      <button 
                        onClick={() => {
                          const newImgs = [...content.interfaceImages];
                          newImgs.splice(idx, 1);
                          updateContent('interfaceImages', newImgs);
                        }}
                        className="absolute top-6 right-6 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-lg"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                    <EditableImage 
                      path={`interfaceImages.${idx}`} 
                      src={img} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                      alt={`Screen ${idx + 1}`} 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                 </div>
               </div>
             ))}
             {isAdminLoggedIn && (
               <div className="snap-center shrink-0">
                 <button 
                   onClick={() => {
                     updateContent('interfaceImages', [...content.interfaceImages, "https://picsum.photos/seed/newui/560/1120"]);
                   }}
                   className={`w-[280px] h-[580px] rounded-[3rem] border-4 border-dashed flex flex-col items-center justify-center gap-4 transition-all ${darkMode ? 'border-slate-800 hover:border-emerald-500 text-slate-700 hover:text-emerald-500' : 'border-slate-200 hover:border-emerald-500 text-slate-300 hover:text-emerald-500'}`}
                 >
                   <Plus size={48} />
                   <span className="font-bold text-xl">স্ক্রিনশট যোগ করুন</span>
                 </button>
               </div>
             )}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="install" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <EditableText path="installTitle" value={content.installTitle} />
            </h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <EditableText path="installSubtitle" value={content.installSubtitle} />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.installSteps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                <div className={`p-8 rounded-3xl h-full border transition-all relative ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-emerald-500/50' : 'bg-slate-50 border-slate-100 hover:shadow-xl hover:bg-white'}`}>
                  {isAdminLoggedIn && (
                    <button 
                      onClick={() => {
                        const newSteps = [...content.installSteps];
                        newSteps.splice(idx, 1);
                        updateContent('installSteps', newSteps);
                      }}
                      className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                    <EditableText path={`installSteps.${idx}.step`} value={item.step} />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4 h-14 flex items-center">
                      <EditableText path={`installSteps.${idx}.title`} value={item.title} />
                    </h3>
                    <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <EditableText path={`installSteps.${idx}.desc`} value={item.desc} />
                    </p>
                    <div className={`w-full h-32 rounded-xl overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>
                       <EditableImage 
                         path={`installSteps.${idx}.imageUrl`} 
                         src={item.imageUrl || `https://picsum.photos/seed/step${idx}/400/300`} 
                         className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                         alt="Step" 
                       />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {isAdminLoggedIn && (
              <button 
                onClick={() => {
                  updateContent('installSteps', [...content.installSteps, { step: "০৫", title: "নতুন ধাপ", desc: "ধাপের বর্ণনা এখানে লিখুন", imageUrl: "https://picsum.photos/seed/newstep/400/300" }]);
                }}
                className={`p-8 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-4 transition-all min-h-[300px] ${darkMode ? 'border-slate-700 hover:border-emerald-500 text-slate-500 hover:text-emerald-500' : 'border-slate-200 hover:border-emerald-500 text-slate-400 hover:text-emerald-500'}`}
              >
                <Plus size={32} />
                <span className="font-bold">ধাপ যোগ করুন</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* App Details & Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Why Choose Us */}
            <div>
              <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">কেন ব্যবহার করবেন?</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">ডিজিটাল জীবনযাত্রার সুবিধা</h2>
              <div className="space-y-6">
                {[
                  "সময় বাঁচান এবং ঝামেলা মুক্ত থাকুন",
                  "দ্রুত এবং নিরাপদ বিল পরিশোধ ব্যবস্থা",
                  "রিয়েল-টাইম নোটিশ এবং আপডেট",
                  "সিকিউরড কমিউনিকেশন চ্যানেল",
                  "সম্পূর্ণ ডিজিটাল ম্যানেজমেন্ট সিস্টেম"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-5 p-5 rounded-2xl border transition-all ${darkMode ? 'bg-slate-800/30 border-slate-700 hover:bg-slate-800' : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-md'}`}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-semibold text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* App Details Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[2.5rem] blur-2xl opacity-20"></div>
              <div className={`relative p-10 rounded-[2.5rem] border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100 shadow-2xl'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                    <Building2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">হলান টাওয়ার অ্যাপ</h3>
                    <p className="text-emerald-500 font-medium">অফিসিয়াল ভার্সন</p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className={`flex justify-between py-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    <span className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>বর্তমান ভার্সন</span>
                    <span className="font-bold font-mono">
                      <EditableText path="appDetails.version" value={content.appDetails.version} />
                    </span>
                  </div>
                  <div className={`flex justify-between py-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    <span className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>অ্যাপ সাইজ</span>
                    <span className="font-bold font-mono">
                      <EditableText path="appDetails.size" value={content.appDetails.size} />
                    </span>
                  </div>
                  <div className={`flex justify-between py-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    <span className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>ডেভেলপার</span>
                    <span className="font-bold">
                      <EditableText path="appDetails.developer" value={content.appDetails.developer} />
                    </span>
                  </div>
                  <div className={`flex justify-between py-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    <span className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>আপডেট তারিখ</span>
                    <span className="font-bold font-mono">
                      <EditableText path="appDetails.updateDate" value={content.appDetails.updateDate} />
                    </span>
                  </div>
                  <div className={`flex justify-between py-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                    <span className={`${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>রিকোয়ারমেন্ট</span>
                    <span className="font-bold">
                      <EditableText path="appDetails.requirement" value={content.appDetails.requirement} />
                    </span>
                  </div>
                </div>

                <div className="mt-10">
                  <a href="https://github.com/rifathasan1970r/Holantower-apps-download/raw/refs/heads/main/HolanTower.apk" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center gap-3">
                    <Download size={22} />
                    সরাসরি ডাউনলোড করুন
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              আপনার মনে হতে পারে এমন কিছু প্রশ্নের উত্তর
            </p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((item, idx) => (
              <details key={idx} className={`group rounded-2xl border overflow-hidden transition-all duration-300 relative ${darkMode ? 'bg-slate-800 border-slate-700 open:bg-slate-800' : 'bg-white border-slate-200 open:shadow-lg'}`}>
                {isAdminLoggedIn && (
                  <button 
                    onClick={() => {
                      const newFaqs = [...content.faqs];
                      newFaqs.splice(idx, 1);
                      updateContent('faqs', newFaqs);
                    }}
                    className="absolute top-6 right-16 p-2 bg-red-500 text-white rounded-full z-10"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg pr-4">
                    <EditableText path={`faqs.${idx}.q`} value={item.q} />
                  </span>
                  <span className={`transition-transform duration-300 group-open:rotate-180 p-2 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                    <ChevronRight size={20} />
                  </span>
                </summary>
                <div className={`px-6 pb-6 pt-0 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <EditableText path={`faqs.${idx}.a`} value={item.a} />
                </div>
              </details>
            ))}
            {isAdminLoggedIn && (
              <button 
                onClick={() => {
                  updateContent('faqs', [...content.faqs, { q: "নতুন প্রশ্ন", a: "উত্তর এখানে লিখুন" }]);
                }}
                className={`w-full p-6 rounded-2xl border-2 border-dashed flex items-center justify-center gap-4 transition-all ${darkMode ? 'border-slate-700 hover:border-emerald-500 text-slate-500 hover:text-emerald-500' : 'border-slate-200 hover:border-emerald-500 text-slate-400 hover:text-emerald-500'}`}
              >
                <Plus size={24} />
                <span className="font-bold">প্রশ্ন যোগ করুন</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">আজই যুক্ত হোন আমাদের ডিজিটাল কমিউনিটিতে</h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
            আপনার জীবনযাত্রাকে আরও সহজ, নিরাপদ এবং আধুনিক করতে হলান টাওয়ার অ্যাপটি আজই ডাউনলোড করুন।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://github.com/rifathasan1970r/Holantower-apps-download/raw/refs/heads/main/HolanTower.apk" target="_blank" rel="noopener noreferrer" className="relative group bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden">
              <span className="absolute w-full h-full bg-emerald-100/50 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></span>
              <Download size={24} className="relative z-10" />
              <span className="relative z-10">ডাউনলোড করুন</span>
            </a>
            <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 w-full sm:w-auto backdrop-blur-sm">
              <HelpCircle size={24} />
              <span>সাপোর্ট</span>
            </button>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-2 text-emerald-200 text-sm">
            <Shield size={16} />
            <span>১০০% নিরাপদ ও সুরক্ষিত ডাউনলোড</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`pt-20 pb-10 ${darkMode ? 'bg-slate-950 text-slate-400' : 'bg-slate-900 text-slate-400'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6 text-white">
                <EditableImage path="logoUrl" src={content.logoUrl} alt="Logo" className="w-12 h-12 object-contain" />
                <span className="font-bold text-2xl tracking-tight">
                  <EditableText path="buildingName" value={content.buildingName} />
                </span>
              </div>
              <p className="mb-8 max-w-sm leading-relaxed">
                <EditableText path="footerDesc" value={content.footerDesc} />
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">কুইক লিঙ্কস</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">হোম</a></li>
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">ফিচারস</a></li>
                <li><a href="#install" className="hover:text-emerald-400 transition-colors">ইন্সটল গাইড</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">প্রশ্নাবলী</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">যোগাযোগ</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-500" />
                  <span>support@holantower.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-500" />
                  <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 size={18} className="text-emerald-500 mt-1" />
                  <span>হলান টাওয়ার, ঢাকা-১২৩০</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p>© ২০২৬ হলান টাওয়ার। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</a>
              <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
              <a href="#" className="hover:text-white transition-colors">কুকিজ পলিসি</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Download Button */}
      <AnimatePresence>
        {showBtn && (
          <motion.a
            href="https://github.com/rifathasan1970r/Holantower-apps-download/raw/refs/heads/main/HolanTower.apk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 right-8 z-40 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-colors hover:scale-110"
          >
            <Download size={24} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {isAdminModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdminModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative w-full max-w-md p-8 rounded-[2rem] border shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
            >
              <button 
                onClick={() => setIsAdminModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Lock size={32} />
                </div>
                <h3 className="text-2xl font-bold">এডমিন লগইন</h3>
                <p className={`mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>প্যানেল অ্যাক্সেস করতে লগইন করুন</p>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">ইউজারনেম</label>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`w-full px-5 py-3 rounded-xl border outline-none transition-all ${darkMode ? 'bg-slate-800 border-slate-700 focus:border-emerald-500' : 'bg-slate-50 border-slate-200 focus:border-emerald-500'}`}
                    placeholder="ইউজারনেম দিন"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">পাসওয়ার্ড</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-5 py-3 rounded-xl border outline-none transition-all ${darkMode ? 'bg-slate-800 border-slate-700 focus:border-emerald-500' : 'bg-slate-50 border-slate-200 focus:border-emerald-500'}`}
                    placeholder="পাসওয়ার্ড দিন"
                    required
                  />
                </div>
                
                {loginError && (
                  <p className="text-red-500 text-sm font-medium text-center">{loginError}</p>
                )}

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  লগইন করুন
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
