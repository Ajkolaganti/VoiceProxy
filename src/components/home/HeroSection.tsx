import { motion } from 'framer-motion';
import { Mic2, Sparkles, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './HeroSection.css';

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Gradient orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="glass inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4 text-accent" />
              Revolutionizing Student-HR Interactions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h1 mb-6"
          >
            <span className="text-gradient">Your Voice</span>, Your Control,{' '}
            <span className="text-gradient">Without Fear</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8 md:mb-10"
          >
            An AI-powered voice assistant that handles HR calls in your own voice, 
            eliminating interview anxiety while maintaining your authentic presence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass p-4 rounded-lg border border-accent/30 mb-8 max-w-md"
          >
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Try it now!</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Call <span className="text-accent font-medium">(470) 229-2065</span> and speak as an HR representative 
              to experience our AI voice assistant in action.
            </p>
            <a href="tel:14702292065" className="btn-outline w-full text-sm py-2">
              Call (470) 229-2065
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
          >
            {user ? (
              <Link to="/dashboard" className="btn-primary">
                Go to Dashboard
              </Link>
            ) : (
              <Link to="/signup" className="btn-primary">
                Get Started
              </Link>
            )}
            <a href="#how-it-works" className="btn-outline group">
              Learn How It Works
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-4xl mx-auto relative"
          >
            <div className="relative glass rounded-xl overflow-hidden border border-white/10">
              {/* Sound wave animation - stylized representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-end h-24 gap-1">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-primary/80 w-1.5 rounded-full"
                      style={{
                        height: `${20 + Math.sin(i * 0.4) * 15}px`,
                        animationDelay: `${i * 0.05}s`,
                        animation: 'soundWave 1.5s ease-in-out infinite'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student using VoiceProxy for an HR call" 
                className="w-full h-auto object-cover aspect-video opacity-40"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-primary glow flex items-center justify-center mb-4">
                  <Mic2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Your AI Voice Assistant</h3>
                <p className="text-muted-foreground max-w-md">
                  Handles HR calls perfectly while keeping your natural voice and personality
                </p>
              </div>
            </div>
            
            {/* Animated keyboard keys at the bottom */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass py-3 px-6 rounded-lg flex items-center gap-3 border border-white/10">
              <div className="glass h-8 w-8 rounded flex items-center justify-center text-xs">esc</div>
              <p className="text-sm font-medium">Just press escape if you feel anxious during a call</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;