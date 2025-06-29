import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'
import { COMPANY_NAME } from '@/constants';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Set showConsult default based on screen size
  const [showConsult, setShowConsult] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768; // true for desktop, false for mobile/tablet
    }
    return true;
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(true);
  const consultTimer = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update showConsult if screen is resized across mobile/desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      setShowConsult(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-fixmy-orange-50'}
      `}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 animate-slide-in-left">
              <img
                src={logo}
                alt="Fixmydb Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold gradient-text">{COMPANY_NAME}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 animate-fade-in">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-fixmy-orange-600 relative ${location.pathname === item.href
                    ? 'text-fixmy-orange-600'
                    : 'text-gray-700'
                    }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-fixmy-orange-600 animate-scale-in" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block animate-slide-in-right">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white hover-glow">
                  Get Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 text-gray-700 hover:text-fixmy-orange-600"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`text-base font-medium transition-all duration-300 hover:text-fixmy-orange-600 py-2 px-3 rounded-lg hover:bg-fixmy-orange-50 ${location.pathname === item.href
                      ? 'text-fixmy-orange-600 bg-fixmy-orange-50'
                      : 'text-gray-700'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    <Button className="w-full bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* Fixed Support/Consultation Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-end">
        {/* Expanded Chat Interface */}
        <div className={`transition-all duration-500 ease-in-out transform ${showConsult
          ? 'max-h-[450px] opacity-100 scale-100 translate-y-0'
          : 'max-h-0 opacity-0 scale-95 translate-y-4 pointer-events-none'
          } overflow-hidden w-80 mb-3`}>
          <div className="bg-white rounded-2xl shadow-2xl border border-fixmy-orange-100 overflow-hidden animate-slide-up">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 px-4 py-3 flex items-center gap-3">
              <div className="relative">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <span className="font-bold text-white text-lg">Support</span>
                <p className="text-fixmy-orange-100 text-xs">We're online now!</p>
              </div>
              <button
                onClick={() => setShowConsult(false)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white hover:text-fixmy-orange-100 transition-all duration-200 backdrop-blur-sm"
                aria-label="Close Chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 space-y-3 max-h-60 overflow-y-auto" id="fixmydb-support-chat-messages">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-fixmy-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-fixmy-orange-600 text-sm font-bold">S</span>
                </div>
                <div className="bg-fixmy-orange-50 text-fixmy-orange-800 px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-sm max-w-[85%] border border-fixmy-orange-100">
                  👋 Hi there! Need help with your database?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-fixmy-orange-600 text-white px-3 py-2 rounded-2xl rounded-br-sm shadow-sm text-sm max-w-[85%]">
                  I want a free consultation
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-fixmy-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-fixmy-orange-600 text-sm font-bold">S</span>
                </div>
                <div className="bg-fixmy-orange-50 text-fixmy-orange-800 px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-sm max-w-[85%] border border-fixmy-orange-100">
                  Perfect! I'd be happy to help you with a free consultation. Let me connect you with our team.
                </div>
              </div>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-fixmy-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-fixmy-orange-600 text-sm font-bold">S</span>
                  </div>
                  <div className="bg-fixmy-orange-50 px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-sm border border-fixmy-orange-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-fixmy-orange-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-fixmy-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-fixmy-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="p-4 border-t border-fixmy-orange-100 bg-fixmy-orange-25">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <Link to="/contact" className="block sm:flex-1">
                  <Button className="w-full bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 hover:from-fixmy-orange-700 hover:to-fixmy-orange-600 text-white px-4 py-3 rounded-xl shadow-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95">
                    Get Free Consultation
                  </Button>
                </Link>
                <button
                  onClick={() => {
                    setIsTyping(true);
                    setTimeout(() => {
                      setIsTyping(false);
                      setShowAskQuestion(false);
                      // Show support contact info as a new chat bubble
                      const chatArea = document.getElementById('fixmydb-support-chat-messages');
                      if (chatArea) {
                        const infoDiv = document.createElement('div');
                        infoDiv.className = "flex items-start gap-2 mt-2";
                        infoDiv.innerHTML = `
                          <div class=\"w-8 h-8 bg-fixmy-orange-100 rounded-full flex items-center justify-center flex-shrink-0\">
                            <span class=\"text-fixmy-orange-600 text-sm font-bold\">S</span>
                          </div>
                          <div class=\"bg-fixmy-orange-50 text-fixmy-orange-800 px-3 py-2 rounded-2xl rounded-tl-sm shadow-sm text-sm max-w-[85%] border border-fixmy-orange-100\">
                            You can reach us at:<br/>
                            <span class=\"font-semibold\">Phone:</span> <a href=\"tel:+919392528884\" class=\"underline text-fixmy-orange-700\">+91 7675028957</a><br/>
                            <span class=\"font-semibold\">Email:</span> <a href=\"mailto:support@fixmydb.com\" class=\"underline text-fixmy-orange-700\">support@fixmydb.com</a>
                          </div>
                        `;
                        chatArea.appendChild(infoDiv);
                        chatArea.scrollTop = chatArea.scrollHeight;
                      }
                    }, 2000);
                  }}
                  className="w-full sm:w-auto text-fixmy-orange-600 hover:text-fixmy-orange-700 text-sm font-medium transition-colors duration-200"
                  style={{ display: showAskQuestion ? 'block' : 'none' }}
                >
                  Ask a quick question
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Toggle Button */}
        <button
          onClick={() => setShowConsult(!showConsult)}
          className={`relative bg-gradient-to-r from-fixmy-orange-600 to-fixmy-orange-500 text-white rounded-full shadow-2xl p-4 transition-all duration-300 border-2 border-white/80 flex items-center justify-center group-hover:scale-110 ${showConsult ? 'rotate-180' : 'animate-pulse hover:animate-none'
            }`}
          aria-label={showConsult ? "Close Chat" : "Open Chat"}
        >
          {showConsult ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          )}
          {/* Notification Badge */}
          {!showConsult && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
              1
            </div>
          )}
        </button>
      </div>
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
