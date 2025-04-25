import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "VoiceProxy helped me land my dream job at a major tech company. I used to freeze up during HR calls, but with the AI handling my initial interviews, I built enough confidence to take over completely.",
    author: "Jamie Chen",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "As someone with social anxiety, phone calls were my nightmare. VoiceProxy didn't just answer calls for me—it taught me how to handle them myself. The gradual approach really works.",
    author: "Alex Morgan",
    role: "UX Designer",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "The voice cloning is incredible—my friends couldn't tell it wasn't me! VoiceProxy handled three initial HR screenings for me during finals week when I was swamped with exams.",
    author: "Sasha Williams",
    role: "Marketing Intern",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glass inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium mb-6">
            <span className="h-3 w-3 rounded-full bg-accent"></span>
            Success Stories
          </div>
          <h2 className="h2 mb-6">
            From <span className="text-gradient">Anxiety</span> to <span className="text-gradient">Achievement</span>
          </h2>
          <p className="text-muted-foreground">
            Hear from students who transformed their interview experiences and career prospects
            with the help of our AI voice technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-20 w-20 glass opacity-10 rounded-br-full"></div>
              <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-accent/5 rounded-full blur-xl"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#get-started" className="btn-primary">
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;