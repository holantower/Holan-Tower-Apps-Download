/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Mail
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900/80 border-b border-slate-800' : 'bg-white/80 border-b border-slate-200'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-bold text-xl tracking-tight">স্মার্ট লাইফ</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-indigo-500 transition-colors font-medium">বৈশিষ্ট্য</a>
              <a href="#install" className="hover:text-indigo-500 transition-colors font-medium">ইনস্টলেশন</a>
              <a href="#faq" className="hover:text-indigo-500 transition-colors font-medium">প্রশ্নাবলী</a>
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a 
                href="#download"
                className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-500/30"
              >
                ডাউনলোড করুন
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
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
              <div className="px-4 py-4 space-y-4 flex flex-col">
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="font-medium py-2">বৈশিষ্ট্য</a>
                <a href="#install" onClick={() => setIsMenuOpen(false)} className="font-medium py-2">ইনস্টলেশন</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="font-medium py-2">প্রশ্নাবলী</a>
                <a href="#download" onClick={() => setIsMenuOpen(false)} className="text-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium">
                  ডাউনলোড করুন
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className={`absolute inset-0 -z-10 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
                <Star size={14} className="fill-current" />
                <span>সেরা লাইফস্টাইল অ্যাপ ২০২৬</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                আপনার জীবনকে <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">স্মার্ট ও সহজ</span> করুন
              </h1>
              <p className={`text-lg lg:text-xl mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                স্মার্ট লাইফ অ্যাপের মাধ্যমে আপনার প্রতিদিনের কাজগুলো ম্যানেজ করুন খুব সহজেই। এটি দ্রুত, নিরাপদ এবং ব্যবহার করা অত্যন্ত সহজ।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                </button>
                <button className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-semibold transition-all border ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-white'} shadow-sm hover:shadow-md`}>
                  <Globe size={20} />
                  <span>ওয়েব ভার্সন</span>
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i}/100/100`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p>১০,০০০+ মানুষ ব্যবহার করছে</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto lg:mr-0"
            >
              <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden mx-auto">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                <div className="w-full h-full bg-slate-800 relative">
                  <img 
                    src="https://picsum.photos/seed/appui1/560/1120" 
                    alt="App Screenshot" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  {/* Mock UI Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 mb-4">
                      <div className="h-2 w-12 bg-white/50 rounded-full mb-2"></div>
                      <div className="h-2 w-24 bg-white/30 rounded-full"></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                        <Zap size={20} />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center text-white">
                        <Shield size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-20 -left-12 p-4 rounded-2xl shadow-xl ${darkMode ? 'bg-slate-800/90 border-slate-700' : 'bg-white/90 border-white'} backdrop-blur-md border`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <Shield size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">সিকিউরিটি</p>
                    <p className="font-bold">১০০% নিরাপদ</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute bottom-32 -right-12 p-4 rounded-2xl shadow-xl ${darkMode ? 'bg-slate-800/90 border-slate-700' : 'bg-white/90 border-white'} backdrop-blur-md border`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                    <Star size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">রেটিং</p>
                    <p className="font-bold">৪.৯/৫.০</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">অসাধারণ সব ফিচার</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              আমাদের অ্যাপটি এমনভাবে ডিজাইন করা হয়েছে যাতে আপনি সর্বোচ্চ সুবিধা পান। নিচে কিছু মূল বৈশিষ্ট্য তুলে ধরা হলো।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "সুপার ফাস্ট", desc: "বজ্রগতিতে কাজ করে, কোনো ল্যাগ ছাড়াই।" },
              { icon: <Shield className="w-6 h-6" />, title: "নিরাপদ ও সুরক্ষিত", desc: "আপনার ব্যক্তিগত তথ্য সম্পূর্ণ সুরক্ষিত থাকে।" },
              { icon: <Moon className="w-6 h-6" />, title: "ডার্ক মোড", desc: "চোখের আরামের জন্য বিল্ট-ইন ডার্ক মোড।" },
              { icon: <Globe className="w-6 h-6" />, title: "অফলাইন সাপোর্ট", desc: "ইন্টারনেট ছাড়াও জরুরি কাজ করা যায়।" },
              { icon: <Smartphone className="w-6 h-6" />, title: "রেসপন্সিভ ডিজাইন", desc: "সব ডিভাইসে সুন্দরভাবে মানিয়ে নেয়।" },
              { icon: <Star className="w-6 h-6" />, title: "প্রিমিয়াম সাপোর্ট", desc: "২৪/৭ কাস্টমার সাপোর্ট সুবিধা।" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border transition-all duration-300 ${darkMode ? 'bg-slate-900 border-slate-700 hover:border-indigo-500/50' : 'bg-slate-50 border-slate-100 hover:border-indigo-200'} group`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${darkMode ? 'bg-slate-800 text-indigo-400 group-hover:bg-indigo-900/30' : 'bg-white text-indigo-600 shadow-sm group-hover:bg-indigo-50'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Slider */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">অ্যাপ ইন্টারফেস</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              এক নজরে দেখে নিন আমাদের অ্যাপের সুন্দর ইন্টারফেস
            </p>
          </div>

          <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar flex gap-6 snap-x snap-mandatory justify-start md:justify-center">
             {[1, 2, 3, 4, 5].map((item) => (
               <div key={item} className="snap-center shrink-0 first:pl-4 last:pr-4">
                 <div className="w-[260px] h-[520px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-xl overflow-hidden relative group transition-transform hover:-translate-y-2 duration-300">
                    <img 
                      src={`https://picsum.photos/seed/screen${item}/520/1040`} 
                      alt={`Screen ${item}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="install" className={`py-20 ${darkMode ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">কিভাবে ইনস্টল করবেন?</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              মাত্র ৩টি সহজ ধাপে অ্যাপটি আপনার ফোনে ইনস্টল করুন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "০১", title: "ডাউনলোড করুন", desc: "নিচের ডাউনলোড বাটনে ক্লিক করে অ্যাপটি ডাউনলোড করুন।" },
              { step: "০২", title: "ইনস্টল করুন", desc: "ডাউনলোড শেষ হলে ফাইলটি ওপেন করে ইনস্টল বাটনে চাপ দিন।" },
              { step: "০৩", title: "উপভোগ করুন", desc: "ইনস্টলেশন শেষ হলে অ্যাপটি ওপেন করুন এবং সাইন আপ করুন।" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className={`p-8 rounded-2xl h-full border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="text-6xl font-bold text-slate-200 dark:text-slate-800 absolute top-4 right-4 select-none">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-indigo-500/30">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-slate-300 dark:text-slate-700">
                    <ChevronRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Details & Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold mb-8">কেন এই অ্যাপটি বেছে নেবেন?</h2>
              <div className="space-y-6">
                {[
                  "সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়",
                  "কোনো বিরক্তিকর বিজ্ঞাপন নেই",
                  "নিয়মিত আপডেট এবং নতুন ফিচার",
                  "সহজ এবং ইউজার ফ্রেন্ডলি ইন্টারফেস",
                  "ব্যাটারি সাশ্রয়ী মোড"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-100'}`}
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* App Details Card */}
            <div>
              <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-xl'}`}>
                <h3 className="text-2xl font-bold mb-6 border-b pb-4 border-slate-200 dark:border-slate-800">অ্যাপ ইনফরমেশন</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">ভার্সন</span>
                    <span className="font-medium">২.৫.০ (বেটা)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">সাইজ</span>
                    <span className="font-medium">৪৫ মেগাবাইট</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">ডেভেলপার</span>
                    <span className="font-medium">স্মার্ট সলিউশনস লিঃ</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">আপডেট</span>
                    <span className="font-medium">২৪ ফেব্রুয়ারি ২০২৬</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">ক্যাটাগরি</span>
                    <span className="font-medium">লাইফস্টাইল</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">লাইসেন্স</span>
                    <span className="font-medium text-green-500">ফ্রি</span>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors flex items-center justify-center gap-2">
                    <Download size={20} />
                    সরাসরি ডাউনলোড করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-20 ${darkMode ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              আপনার মনে হতে পারে এমন কিছু প্রশ্নের উত্তর
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "এই অ্যাপটি কি সম্পূর্ণ ফ্রি?", a: "হ্যাঁ, অ্যাপটির বেসিক ভার্সন সম্পূর্ণ ফ্রি। তবে কিছু প্রিমিয়াম ফিচারের জন্য সাবস্ক্রিপশন লাগতে পারে।" },
              { q: "এটি কি আইফোনে চলবে?", a: "বর্তমানে এটি শুধুমাত্র অ্যান্ড্রয়েড ডিভাইসের জন্য উপলব্ধ। আইওএস ভার্সন খুব শীঘ্রই আসছে।" },
              { q: "আমার ডেটা কি নিরাপদ?", a: "অবশ্যই। আমরা এন্ড-টু-এন্ড এনক্রিপশন ব্যবহার করি, তাই আপনার ডেটা সম্পূর্ণ নিরাপদ।" },
              { q: "কিভাবে সাপোর্ট পাবো?", a: "অ্যাপের সেটিংস থেকে 'হেল্প' অপশনে গিয়ে আমাদের সাথে সরাসরি চ্যাট করতে পারবেন।" }
            ].map((item, idx) => (
              <details key={idx} className={`group rounded-xl border overflow-hidden transition-all ${darkMode ? 'bg-slate-900 border-slate-700 open:bg-slate-800' : 'bg-white border-slate-200 open:shadow-md'}`}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-lg pr-4">{item.q}</span>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronRight />
                  </span>
                </summary>
                <div className={`px-6 pb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">আজই শুরু করুন আপনার স্মার্ট যাত্রা</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            লক্ষ লক্ষ মানুষের সাথে যোগ দিন এবং আপনার জীবনকে আরও সহজ ও সুন্দর করে তুলুন।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
              <Download size={24} />
              ডাউনলোড করুন
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <HelpCircle size={24} />
              আরো জানুন
            </button>
          </div>
          <p className="mt-6 text-sm text-indigo-200">
            * অ্যান্ড্রয়েড ৮.০ বা তার উপরের ভার্সন প্রয়োজন
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`pt-16 pb-8 ${darkMode ? 'bg-slate-950 text-slate-400' : 'bg-slate-900 text-slate-400'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xl">
                  S
                </div>
                <span className="font-bold text-xl tracking-tight">স্মার্ট লাইফ</span>
              </div>
              <p className="mb-6 max-w-sm">
                আমরা মানুষের জীবনকে প্রযুক্তির মাধ্যমে সহজ করার লক্ষ্যে কাজ করছি। আমাদের সাথে থাকার জন্য ধন্যবাদ।
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">লিঙ্কস</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">হোম</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">ফিচারস</a></li>
                <li><a href="#install" className="hover:text-white transition-colors">গাইড</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">প্রশ্নাবলী</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">যোগাযোগ</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>support@smartlife.com</span>
                </li>
                <li>ঢাকা, বাংলাদেশ</li>
                <li>+৮৮০ ১২৩৪ ৫৬৭৮৯০</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© ২০২৬ স্মার্ট লাইফ অ্যাপ। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</a>
              <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
