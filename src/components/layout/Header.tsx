import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Mic2, LogIn, LogOut, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../lib/firebase';

interface HeaderProps {
  showNav?: boolean;
}

const Header = ({ showNav = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const dashboardNav = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Interview Assistant', href: '/interview-assistant' },
  ];

  const activeNavigation = showNav ? navigation : dashboardNav;

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary glow">
            <Mic2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">VoiceProxy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {activeNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href || 
                (location.pathname === '/' && item.href.startsWith('/#')) 
                  ? 'text-primary' 
                  : 'text-foreground/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-4">
              {showNav && (
                <Link to="/dashboard" className="btn-outline">
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              )}
              <button onClick={handleSignOut} className="btn-primary">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="btn-outline">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Link>
              <Link to="/signup" className="btn-primary">
                Get Started
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 z-50 bg-background"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="container h-full flex flex-col">
                <div className="flex items-center justify-between py-5">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-primary glow">
                      <Mic2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold">VoiceProxy</span>
                  </Link>
                  <button 
                    className="p-2 text-foreground"
                    onClick={toggleMobileMenu}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex flex-col items-center justify-center flex-grow gap-8">
                  {activeNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-xl font-medium transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {user ? (
                    <div className="flex flex-col items-center gap-4 w-full">
                      {showNav && (
                        <Link 
                          to="/dashboard" 
                          className="btn-outline w-full text-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User className="h-4 w-4 mr-2 inline-block" />
                          Dashboard
                        </Link>
                      )}
                      <button 
                        onClick={() => {
                          handleSignOut();
                          setMobileMenuOpen(false);
                        }} 
                        className="btn-primary w-full"
                      >
                        <LogOut className="h-4 w-4 mr-2 inline-block" />
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        className="btn-outline w-full text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <LogIn className="h-4 w-4 mr-2 inline-block" />
                        Sign In
                      </Link>
                      <Link 
                        to="/signup" 
                        className="btn-primary w-full text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;