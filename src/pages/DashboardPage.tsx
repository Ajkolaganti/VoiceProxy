import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCircle, Mic2, Settings, FileText, Phone, ExternalLink } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const DashboardPage = () => {
  const { user } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("(470) 229-2065"); // Default number
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Dashboard - VoiceProxy';
    
    // Fetch phone number from database if user is logged in
    const fetchPhoneNumber = async () => {
      if (!user) return;
      
      try {
        // Try to get the phone number from a settings document
        const settingsDoc = await getDoc(doc(db, 'settings', 'phoneNumber'));
        
        if (settingsDoc.exists() && settingsDoc.data().number) {
          setPhoneNumber(settingsDoc.data().number);
        }
      } catch (error) {
        console.error("Error fetching phone number:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPhoneNumber();
  }, [user]);

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                <UserCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome, {user?.displayName}</h1>
                <p className="text-muted-foreground">Manage your voice assistant and interview settings</p>
              </div>
            </div>
            
            {/* Phone Number Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-xl border border-accent/30 mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">Your VoiceProxy Number</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Share this number with HR representatives or use it for interview practice. When someone calls this number, 
                your AI voice assistant will answer in your voice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-background/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-xl font-medium">{phoneNumber}</span>
                </div>
                <div className="flex gap-3">
                  <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn-outline text-sm py-2">
                    Call Now
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(phoneNumber);
                      // You could add a toast notification here
                    }}
                    className="btn-primary text-sm py-2"
                  >
                    Copy Number
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Rest of the dashboard content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/voice-training" className="card hover:border-primary transition-colors p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mic2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Voice Training</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Record voice samples to train your AI assistant to sound exactly like you.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    {/* You could add progress info here */}
                    Get Started
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
              
              <Link to="/interview-assistant" className="card hover:border-primary transition-colors p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Interview Assistant</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Configure your professional profile and interview preferences.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Configure
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
              
              <Link to="/profile" className="card hover:border-primary transition-colors p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Profile Settings</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Update your personal information and account preferences.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    Manage
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;