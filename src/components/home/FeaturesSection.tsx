import { motion } from 'framer-motion';
import { Mic, Headphones, Zap, Shield, BadgeCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Mic className="h-6 w-6 text-accent" />,
    title: 'Custom Voice Cloning',
    description: 'Train the AI with your voice in just minutes for a perfect, natural-sounding replica that captures your unique speech patterns.'
  },
  {
    icon: <Headphones className="h-6 w-6 text-accent" />,
    title: 'Real-Time Call Handling',
    description: 'Let the AI take HR calls for you, dynamically responding to questions while maintaining your professional demeanor.'
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: 'Interview Preparation',
    description: 'Practice with simulated HR interviews tailored to your industry, with detailed feedback to improve your responses.'
  },
  {
    icon: <Shield className="h-6 w-6 text-accent" />,
    title: 'Privacy Protection',
    description: 'Your voice data is encrypted and never shared, with automatic deletion options and complete control over your digital voice.'
  },
  {
    icon: <BadgeCheck className="h-6 w-6 text-accent" />,
    title: 'Personality Matching',
    description: 'The AI adapts to your communication style, humor, and professional tone for authentic interactions that feel genuinely you.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-accent" />,
    title: 'Anxiety Reduction',
    description: 'Eliminate interview stress while building confidence through guided practice sessions and gradual desensitization.'
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glass inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium mb-6">
            <span className="h-3 w-3 rounded-full bg-accent"></span>
            Core Features
          </div>
          <h2 className="h2 mb-6">
            Advanced Features for <span className="text-gradient">Fearless Communication</span>
          </h2>
          <p className="text-muted-foreground">
            Our AI voice assistant technology helps students overcome phone anxiety with a suite
            of powerful features designed to make HR interactions smooth and stress-free.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="card group hover:border-primary/50 transition-colors"
              variants={itemVariants}
            >
              <div className="h-12 w-12 rounded-lg glass flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;