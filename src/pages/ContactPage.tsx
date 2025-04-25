import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, MessageSquare, Send } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - VoiceProxy';
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="glass inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium mb-6">
            <span className="h-3 w-3 rounded-full bg-accent"></span>
            Get In Touch
          </div>
          <h1 className="h1 mb-6">
            We'd Love to <span className="text-gradient">Hear From You</span>
          </h1>
          <p className="text-muted-foreground">
            Have questions about VoiceProxy or need assistance? Our team is here to help.
            Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h3 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="textarea"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h2 className="h3 mb-6">Contact Information</h2>
            
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="card flex items-start gap-4">
                <div className="h-12 w-12 rounded-full glass flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground mb-1">For general inquiries:</p>
                  <a href="mailto:hello@voiceproxy.ai" className="text-primary hover:underline">
                    hello@voiceproxy.ai
                  </a>
                  <p className="text-muted-foreground mt-2 mb-1">For support:</p>
                  <a href="mailto:support@voiceproxy.ai" className="text-primary hover:underline">
                    support@voiceproxy.ai
                  </a>
                </div>
              </div>
              
              <div className="card flex items-start gap-4">
                <div className="h-12 w-12 rounded-full glass flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-1">Main office:</p>
                  <a href="tel:+18005551234" className="text-primary hover:underline">
                    +1 (800) 555-1234
                  </a>
                  <p className="text-muted-foreground mt-2 mb-1">Support line:</p>
                  <a href="tel:+18005551235" className="text-primary hover:underline">
                    +1 (800) 555-1235
                  </a>
                </div>
              </div>
              
              <div className="card flex items-start gap-4">
                <div className="h-12 w-12 rounded-full glass flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    350 Innovation Drive<br />
                    Suite 100<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="card flex items-start gap-4">
                <div className="h-12 w-12 rounded-full glass flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM PST<br />
                    <span className="font-medium">Saturday:</span> 10:00 AM - 3:00 PM PST<br />
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card mt-auto">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                Live Chat
              </h3>
              <p className="text-muted-foreground mb-4">
                Need immediate assistance? Our support team is available for live chat during business hours.
              </p>
              <button className="btn-outline w-full">
                Start Live Chat
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <h2 className="h3 text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How accurate is the voice cloning?",
                answer: "Our voice cloning technology achieves over 95% accuracy in replicating your natural speech patterns, tone, and cadence. Most people cannot distinguish between the AI voice and the original."
              },
              {
                question: "How long does it take to train my voice profile?",
                answer: "The initial training process takes just 5-10 minutes of reading sample text. The AI continues to improve with each use, reaching optimal performance after about 1-2 hours of total voice data."
              },
              {
                question: "Is my voice data secure?",
                answer: "Absolutely. We use end-to-end encryption for all voice data, and your voice profile is stored in a secure, isolated environment. You can delete your voice data at any time."
              },
              {
                question: "Can I use VoiceProxy for other types of calls?",
                answer: "While VoiceProxy is optimized for HR and interview calls, many users successfully use it for networking calls, appointment scheduling, and other professional communications."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;