import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import { Upload, AlertCircle, Save, FileText, Briefcase, GraduationCap, Award, Languages, Globe2, Target } from 'lucide-react';

const InterviewAssistantPage = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    languages: '',
    currentLocation: '',
    willingToRelocate: false,
    preferredLocations: '',
    
    // Education
    education: [{
      degree: '',
      institution: '',
      year: '',
      achievements: ''
    }],
    
    // Work Experience
    experience: [{
      title: '',
      company: '',
      duration: '',
      responsibilities: '',
      achievements: ''
    }],
    
    // Skills & Expertise
    technicalSkills: '',
    softSkills: '',
    certifications: '',
    
    // Career Goals
    shortTermGoals: '',
    longTermGoals: '',
    preferredIndustries: '',
    expectedSalary: '',
    
    // Additional Information
    interests: '',
    volunteerWork: '',
    achievements: '',
    
    // Files
    resumeUrl: '',
    voiceUrl: '',
    coverLetterUrl: ''
  });

  useEffect(() => {
    document.title = 'Interview Assistant - VoiceProxy';
    loadUserData();
  }, []);

  const loadUserData = async () => {
    if (!user?.uid) return;

    try {
      const docRef = doc(db, 'interviews', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFormData(prev => ({
          ...prev,
          ...docSnap.data()
        }));
      }
    } catch (err) {
      console.error('Error loading data:', err);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'voice' | 'coverLetter') => {
    if (!e.target.files?.[0] || !user) return;

    setLoading(true);
    setError('');

    try {
      const file = e.target.files[0];
      const folder = fileType === 'voice' ? 'voice-samples' : fileType === 'resume' ? 'resumes' : 'cover-letters';
      const storageRef = ref(storage, `${folder}/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      setFormData(prev => ({
        ...prev,
        [`${fileType}Url`]: url
      }));
    } catch (err) {
      setError(`Failed to upload ${fileType}`);
    }

    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await setDoc(doc(db, 'interviews', user.uid), {
        ...formData,
        updatedAt: new Date().toISOString()
      });

      setSuccess(true);
    } catch (err) {
      setError('Failed to save interview data');
    }

    setLoading(false);
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', institution: '', year: '', achievements: '' }]
    }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { title: '', company: '', duration: '', responsibilities: '', achievements: '' }]
    }));
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <h1 className="text-2xl font-bold mb-6">Interview Assistant Setup</h1>
          <p className="text-muted-foreground mb-8">
            Complete your profile to help our AI assistant better represent you during interviews.
          </p>

          {error && (
            <div className="bg-red-500/10 text-red-500 p-4 rounded-lg flex items-center gap-2 mb-6">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-500/10 text-green-500 p-4 rounded-lg mb-6">
              Interview data saved successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-primary" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">
                    Date of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium mb-2">
                    Nationality
                  </label>
                  <input
                    id="nationality"
                    type="text"
                    value={formData.nationality}
                    onChange={(e) => setFormData(prev => ({ ...prev, nationality: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="languages" className="block text-sm font-medium mb-2">
                    Languages
                  </label>
                  <input
                    id="languages"
                    type="text"
                    value={formData.languages}
                    onChange={(e) => setFormData(prev => ({ ...prev, languages: e.target.value }))}
                    className="input"
                    placeholder="e.g., English (Native), Spanish (Fluent)"
                  />
                </div>
                <div>
                  <label htmlFor="currentLocation" className="block text-sm font-medium mb-2">
                    Current Location
                  </label>
                  <input
                    id="currentLocation"
                    type="text"
                    value={formData.currentLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentLocation: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label htmlFor="preferredLocations" className="block text-sm font-medium mb-2">
                    Preferred Work Locations
                  </label>
                  <input
                    id="preferredLocations"
                    type="text"
                    value={formData.preferredLocations}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredLocations: e.target.value }))}
                    className="input"
                    placeholder="e.g., Remote, New York, London"
                  />
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h2>
              {formData.education.map((edu, index) => (
                <div key={index} className="glass p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Degree/Program
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].degree = e.target.value;
                          setFormData(prev => ({ ...prev, education: newEducation }));
                        }}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Institution
                      </label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].institution = e.target.value;
                          setFormData(prev => ({ ...prev, education: newEducation }));
                        }}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Year
                      </label>
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].year = e.target.value;
                          setFormData(prev => ({ ...prev, education: newEducation }));
                        }}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Achievements
                      </label>
                      <input
                        type="text"
                        value={edu.achievements}
                        onChange={(e) => {
                          const newEducation = [...formData.education];
                          newEducation[index].achievements = e.target.value;
                          setFormData(prev => ({ ...prev, education: newEducation }));
                        }}
                        className="input"
                        placeholder="e.g., Dean's List, Honors"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addEducation}
                className="btn-outline w-full"
              >
                Add Education
              </button>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Work Experience
              </h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="glass p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) => {
                            const newExperience = [...formData.experience];
                            newExperience[index].title = e.target.value;
                            setFormData(prev => ({ ...prev, experience: newExperience }));
                          }}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => {
                            const newExperience = [...formData.experience];
                            newExperience[index].company = e.target.value;
                            setFormData(prev => ({ ...prev, experience: newExperience }));
                          }}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) => {
                          const newExperience = [...formData.experience];
                          newExperience[index].duration = e.target.value;
                          setFormData(prev => ({ ...prev, experience: newExperience }));
                        }}
                        className="input"
                        placeholder="e.g., Jan 2020 - Present"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Key Responsibilities
                      </label>
                      <textarea
                        value={exp.responsibilities}
                        onChange={(e) => {
                          const newExperience = [...formData.experience];
                          newExperience[index].responsibilities = e.target.value;
                          setFormData(prev => ({ ...prev, experience: newExperience }));
                        }}
                        className="textarea"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Key Achievements
                      </label>
                      <textarea
                        value={exp.achievements}
                        onChange={(e) => {
                          const newExperience = [...formData.experience];
                          newExperience[index].achievements = e.target.value;
                          setFormData(prev => ({ ...prev, experience: newExperience }));
                        }}
                        className="textarea"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addExperience}
                className="btn-outline w-full"
              >
                Add Experience
              </button>
            </section>

            {/* Skills & Expertise */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Skills & Expertise
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="technicalSkills" className="block text-sm font-medium mb-2">
                    Technical Skills
                  </label>
                  <textarea
                    id="technicalSkills"
                    value={formData.technicalSkills}
                    onChange={(e) => setFormData(prev => ({ ...prev, technicalSkills: e.target.value }))}
                    className="textarea"
                    rows={3}
                    placeholder="List your technical skills..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="softSkills" className="block text-sm font-medium mb-2">
                    Soft Skills
                  </label>
                  <textarea
                    id="softSkills"
                    value={formData.softSkills}
                    onChange={(e) => setFormData(prev => ({ ...prev, softSkills: e.target.value }))}
                    className="textarea"
                    rows={3}
                    placeholder="List your soft skills..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="certifications" className="block text-sm font-medium mb-2">
                    Certifications
                  </label>
                  <textarea
                    id="certifications"
                    value={formData.certifications}
                    onChange={(e) => setFormData(prev => ({ ...prev, certifications: e.target.value }))}
                    className="textarea"
                    rows={2}
                    placeholder="List your certifications..."
                  />
                </div>
              </div>
            </section>

            {/* Career Goals */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Career Goals
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="shortTermGoals" className="block text-sm font-medium mb-2">
                    Short-term Goals
                  </label>
                  <textarea
                    id="shortTermGoals"
                    value={formData.shortTermGoals}
                    onChange={(e) => setFormData(prev => ({ ...prev, shortTermGoals: e.target.value }))}
                    className="textarea"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="longTermGoals" className="block text-sm font-medium mb-2">
                    Long-term Goals
                  </label>
                  <textarea
                    id="longTermGoals"
                    value={formData.longTermGoals}
                    onChange={(e) => setFormData(prev => ({ ...prev, longTermGoals: e.target.value }))}
                    className="textarea"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="preferredIndustries" className="block text-sm font-medium mb-2">
                    Preferred Industries
                  </label>
                  <input
                    id="preferredIndustries"
                    type="text"
                    value={formData.preferredIndustries}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredIndustries: e.target.value }))}
                    className="input"
                    placeholder="e.g., Technology, Finance, Healthcare"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="expectedSalary" className="block text-sm font-medium mb-2">
                    Expected Salary Range
                  </label>
                  <input
                    id="expectedSalary"
                    type="text"
                    value={formData.expectedSalary}
                    onChange={(e) => setFormData(prev => ({ ...prev, expectedSalary: e.target.value }))}
                    className="input"
                    placeholder="e.g., $80,000 - $100,000"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Additional Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium mb-2">
                    Interests & Hobbies
                  </label>
                  <textarea
                    id="interests"
                    value={formData.interests}
                    onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                    className="textarea"
                    rows={2}
                  />
                </div>
                <div>
                  <label htmlFor="volunteerWork" className="block text-sm font-medium mb-2">
                    Volunteer Work
                  </label>
                  <textarea
                    id="volunteerWork"
                    value={formData.volunteerWork}
                    onChange={(e) => setFormData(prev => ({ ...prev, volunteerWork: e.target.value }))}
                    className="textarea"
                    rows={2}
                  />
                </div>
                <div>
                  <label htmlFor="achievements" className="block text-sm font-medium mb-2">
                    Notable Achievements
                  </label>
                  <textarea
                    id="achievements"
                    value={formData.achievements}
                    onChange={(e) => setFormData(prev => ({ ...prev, achievements: e.target.value }))}
                    className="textarea"
                    rows={2}
                  />
                </div>
              </div>
            </section>

            {/* File Uploads */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Documents & Voice Sample
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Resume
                  </label>
                  <div className="glass p-4 rounded-lg">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, 'resume')}
                      className="hidden"
                      id="resume"
                    />
                    <label
                      htmlFor="resume"
                      className="btn-outline w-full flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Upload className="h-5 w-5" />
                      {formData.resumeUrl ? 'Update Resume' : 'Upload Resume'}
                    </label>
                    {formData.resumeUrl && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Resume uploaded successfully
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cover Letter
                  </label>
                  <div className="glass p-4 rounded-lg">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, 'coverLetter')}
                      className="hidden"
                      id="coverLetter"
                    />
                    <label
                      htmlFor="coverLetter"
                      className="btn-outline w-full flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Upload className="h-5 w-5" />
                      {formData.coverLetterUrl ? 'Update Cover Letter' : 'Upload Cover Letter'}
                    </label>
                    {formData.coverLetterUrl && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Cover letter uploaded successfully
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Voice Sample
                  </label>
                  <div className="glass p-4 rounded-lg">
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={(e) => handleFileUpload(e, 'voice')}
                      className="hidden"
                      id="voice"
                    />
                    <label
                      htmlFor="voice"
                      className="btn-outline w-full flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Upload className="h-5 w-5" />
                      {formData.voiceUrl ? 'Update Voice Sample' : 'Upload Voice Sample'}
                    </label>
                    {formData.voiceUrl && (
                      <>
                        <p className="text-xs text-muted-foreground mt-2">
                          Voice sample uploaded successfully
                        </p>
                        <audio controls className="mt-4 w-full">
                          <source src={formData.voiceUrl} type="audio/*" />
                          Your browser does not support the audio element.
                        </audio>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  Save Interview Data
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InterviewAssistantPage;