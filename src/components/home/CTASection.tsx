import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="get-started" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="glass border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
          
          <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-accent font-medium">Begin Your Journey</span>
              </div>
              <h2 className="h2 mb-6">
                Transform Your <span className="text-gradient">Career Prospects</span> Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of students who've overcome phone anxiety and landed their dream jobs.
                Our AI voice assistant technology is ready to help you take that crucial first step.
              </p>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="input"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="input"
                    required
                  />
                </div>
                <div>
                  <select className="input">
                    <option value="" disabled selected>Select Your Field</option>
                    <option value="tech">Technology</option>
                    <option value="business">Business</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="design">Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary w-full group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                No credit card required. 14-day free trial.
              </p>
              <div className="glass p-6 rounded-xl border border-accent/30 mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="h-6 w-6 text-accent" />
                  <h3 className="text-lg font-semibold">Test Drive VoiceProxy Now</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Want to experience VoiceProxy in action before signing up? Call our demo line and speak as an HR representative to hear our AI assistant respond in real-time.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl font-medium">(470) 229-2065</span>
                  <a href="tel:14702292065" className="btn-outline">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="glass rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student using VoiceProxy" 
                  className="w-full h-auto object-cover aspect-[4/3] opacity-80"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      {[
                        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      ].map((src, index) => (
                        <img 
                          key={index}
                          src={src} 
                          alt="User" 
                          className="h-8 w-8 rounded-full border-2 border-secondary object-cover"
                        />
                      ))}
                      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-primary text-white text-xs border-2 border-secondary">
                        +2k
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Joined this month</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg 
                              key={star}
                              xmlns="http://www.w3.org/2000/svg" 
                              width="12" 
                              height="12" 
                              viewBox="0 0 24 24" 
                              fill="currentColor" 
                              className="text-accent"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="glass p-3 rounded-lg mb-3">
                    <div className="flex gap-2 items-center mb-2">
                      <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                      <p className="text-xs font-medium">Alex M. landed a job at Google</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      "After just 3 weeks with VoiceProxy, I aced my final interview completely on my own!"
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Updated 12 minutes ago</p>
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                      <p className="text-xs">Live updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;