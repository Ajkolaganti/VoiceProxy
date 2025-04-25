import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Phone, Bot, User, CheckCheck } from 'lucide-react';

const steps = [
  {
    icon: <Mic className="h-6 w-6 text-accent" />,
    title: "Voice Training",
    description: "Record a few minutes of your speech to train the AI with your unique voice patterns and cadence."
  },
  {
    icon: <Bot className="h-6 w-6 text-accent" />,
    title: "Personality Setup",
    description: "Answer a series of questions so the AI can learn your communication style and professional demeanor."
  },
  {
    icon: <Phone className="h-6 w-6 text-accent" />,
    title: "Call Handling",
    description: "When an HR call comes in, the AI answers using your voice and handles the conversation naturally."
  },
  {
    icon: <User className="h-6 w-6 text-accent" />,
    title: "Review & Adjust",
    description: "Listen to call recordings and provide feedback to continuously improve the AI's performance."
  },
  {
    icon: <CheckCheck className="h-6 w-6 text-accent" />,
    title: "Progress Tracking",
    description: "Monitor your improvement as you gradually take over more calls with newfound confidence."
  }
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="section relative">
      {/* Background blur */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glass inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium mb-6">
            <span className="h-3 w-3 rounded-full bg-accent"></span>
            Simple Process
          </div>
          <h2 className="h2 mb-6">
            How <span className="text-gradient">VoiceProxy</span> Works
          </h2>
          <p className="text-muted-foreground">
            A seamless experience from setup to your first call. Our AI voice assistant
            technology is designed to be intuitive and effective from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex gap-4 p-4 rounded-lg cursor-pointer transition-all ${
                    activeStep === index 
                      ? 'glass border border-primary/50' 
                      : 'hover:bg-secondary/20'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ x: 5 }}
                  animate={{ opacity: activeStep === index ? 1 : 0.7 }}
                >
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${
                    activeStep === index ? 'bg-primary text-white' : 'glass'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-xl border border-white/10 h-[500px] relative overflow-hidden">
            {/* Visualization based on active step */}
            {activeStep === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <div className="h-24 w-24 rounded-full bg-primary glow flex items-center justify-center mb-4 mx-auto">
                    <Mic className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Voice Training</h3>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full max-w-md mx-auto"
                >
                  <div className="w-full h-12 glass rounded-lg mb-3 flex items-center px-4">
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                      <div className="bg-accent h-full w-3/4"></div>
                    </div>
                    <span className="ml-4 text-sm">75%</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Please read the following passage to train your voice profile..."
                  </p>
                  <button className="btn-primary w-full">
                    Continue Recording
                  </button>
                </motion.div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-primary glow flex items-center justify-center mb-4 mx-auto">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personality Setup</h3>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full"
                >
                  <div className="glass rounded-lg p-4 mb-4">
                    <p className="text-sm mb-2 text-muted-foreground">How would you describe your communication style?</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['Formal', 'Casual', 'Professional', 'Friendly', 'Direct', 'Detailed'].map((style) => (
                        <button 
                          key={style}
                          className={`py-2 px-3 rounded-md text-sm ${
                            style === 'Professional' || style === 'Friendly'
                              ? 'bg-primary text-white'
                              : 'glass hover:bg-secondary/50'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="glass rounded-lg p-4 mb-4">
                    <p className="text-sm mb-2 text-muted-foreground">Select your industry:</p>
                    <select className="input py-2 mb-2">
                      <option>Software Development</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                    </select>
                  </div>
                  <button className="btn-primary w-full">
                    Save Personality Profile
                  </button>
                </motion.div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="h-full flex flex-col items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md"
                >
                  <div className="glass rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                          <Phone className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">Incoming Call</h4>
                          <p className="text-sm text-muted-foreground">HR Department - Tech Co</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-red-500" />
                        </button>
                        <button className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-green-500" />
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">AI Voice Assistant Activated</p>
                      <div className="flex items-center justify-center">
                        <div className="h-3 w-3 bg-accent rounded-full mr-2 animate-pulse"></div>
                        <p className="text-sm">Answering call using your voice...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-xl p-4 mb-6 border border-accent/30">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-accent" />
                      Try it yourself!
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Call <span className="font-medium">(470) 229-2065</span> and speak as an HR representative to experience our AI voice assistant in action.
                    </p>
                    <a href="tel:14702292065" className="btn-outline w-full text-sm">
                      Call (470) 229-2065
                    </a>
                  </div>
                  
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-medium mb-2">Live Transcript</h4>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                        <div className="glass p-3 rounded-lg text-sm">
                          Hello, I'm calling about the software engineer position at Tech Co. Is this [Your Name]?
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="glass p-3 rounded-lg text-sm bg-primary/20">
                          Yes, this is [Your Name]. Thank you for reaching out about the software engineer position. I'm very interested in this opportunity.
                        </div>
                        <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                          <Mic className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h3 className="text-xl font-bold mb-4 text-center">Review & Feedback</h3>
                  <div className="glass rounded-xl p-4 mb-4">
                    <h4 className="font-medium mb-2">Recent Call - Tech Co HR (23 mins ago)</h4>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        <button className="h-8 w-8 rounded-full glass flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </button>
                        <div className="w-48 h-2 bg-secondary/50 rounded-full self-center">
                          <div className="bg-accent h-full w-1/3 rounded-full"></div>
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">2:34 / 8:12</span>
                      </div>
                      <button className="text-xs bg-secondary px-2 py-1 rounded">Download</button>
                    </div>
                  </div>
                  
                  <div className="glass rounded-xl p-4 mb-4">
                    <h4 className="font-medium mb-3">Rate AI Performance</h4>
                    <div className="mb-3">
                      <p className="text-sm mb-2">Voice Naturalness</p>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill={star <= 4 ? "currentColor" : "none"} 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            className={star <= 4 ? "text-accent" : "text-muted-foreground"}
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm mb-2">Response Accuracy</p>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill={star <= 5 ? "currentColor" : "none"} 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            className={star <= 5 ? "text-accent" : "text-muted-foreground"}
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm mb-2">Feedback</p>
                      <textarea className="textarea text-sm" rows={3} placeholder="Share your thoughts on the AI's performance..."></textarea>
                    </div>
                    <button className="btn-primary w-full">Submit Feedback</button>
                  </div>
                </motion.div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h3 className="text-xl font-bold mb-4 text-center">Progress Tracking</h3>
                  <div className="glass rounded-xl p-4 mb-4">
                    <h4 className="font-medium mb-4">Your Journey</h4>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Confidence Growth</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary/50 rounded-full">
                        <div className="bg-accent h-full rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Personally Handled Calls</span>
                        <span className="text-sm font-medium">5/12</span>
                      </div>
                      <div className="w-full h-2 bg-secondary/50 rounded-full">
                        <div className="bg-primary h-full rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Interview Success Rate</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary/50 rounded-full">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-medium mb-3">Upcoming Milestones</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full glass flex items-center justify-center flex-shrink-0">
                          <CheckCheck className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Handle first technical interview</h5>
                          <p className="text-xs text-muted-foreground">Expected in 2 weeks</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full glass flex items-center justify-center flex-shrink-0">
                          <CheckCheck className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Reduce AI assistance to 30%</h5>
                          <p className="text-xs text-muted-foreground">Current: 58% - On track!</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full glass flex items-center justify-center flex-shrink-0">
                          <CheckCheck className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Complete 10 successful interviews</h5>
                          <p className="text-xs text-muted-foreground">Progress: 5/10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;