import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import solutionsIcon from '../assets/solutions.png';
import collaborateIcon from '../assets/collaborate.png';
import resultsIcon from '../assets/results.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/contacts', formData);
      
      if (response.status === 201) {
        toast.success("🎉 Message sent successfully! I'll get back to you soon.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const defaultBorder = "2px solid rgba(0,0,0,0.4)";

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          minHeight: "auto",
          padding: isMobile ? "3rem 1rem" : isTablet ? "3.5rem 2rem" : "4rem 10%",
          backgroundColor: "#ffffff",
          zIndex: 1,
          overflow: "hidden"
        }}
      >
        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            variants={fadeInUp}
            style={{
              maxWidth: "700px",
              margin: "0 auto 2rem auto",
              textAlign: "center",
              position: "relative",
              zIndex: 2
            }}
          >
            <h2 style={{
              fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              color: "#333",
              fontFamily: "sans-serif",
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              justifyContent: "center",
              flexWrap: isMobile ? "wrap" : "nowrap"
            }}>
              <Award 
                size={36} 
                color="#000"
                style={{
                  animation: "iconPulse 2s ease-in-out infinite"
                }}
              />
              Benefits
            </h2>

               <h4 style={{
            fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "3rem",
            fontWeight: "300",
            color: "#000",
            margin: "2px 0 1rem 0",
            lineHeight: "1.2",
            letterSpacing: "-1px"
          }}>
            Share your ideas, and you'll<br />reap all these benefits
          </h4>

          </motion.div>

          <motion.div 
            variants={staggerContainer}
            style={{
              maxWidth: "700px",
              margin: "0 auto 4rem auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              position: "relative",
              zIndex: 2
            }}
          >
            <motion.div 
              variants={slideInLeft}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "12px",
              padding: isMobile ? "1.2rem" : "1.5rem",
              display: "flex",
              gap: isMobile ? "1rem" : "1.2rem",
              alignItems: "flex-start",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              marginLeft: "0"
            }}
            >
              <div style={{ width: "40px", height: "40px", marginTop: "0.2rem" }}>
                <img src={solutionsIcon} alt="Solutions" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#000",
                  fontFamily: "sans-serif"
                }}>Tailored Solutions</h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "rgba(0,0,0,0.6)",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                  margin: 0
                }}>
                  Every project is unique, and so are my designs. I tailor each interface to meet your specific goals and audience needs.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInLeft}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "12px",
                padding: "1.5rem",
                display: "flex",
                gap: "1.2rem",
                alignItems: "flex-start",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              marginLeft: isMobile ? "0" : "4rem"
            }}
            >
              <div style={{ width: "40px", height: "40px", marginTop: "0.2rem" }}>
                <img src={collaborateIcon} alt="Collaborate" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#000",
                  fontFamily: "sans-serif"
                }}>Collaborative Approach</h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "rgba(0,0,0,0.6)",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                  margin: 0
                }}>
                  I believe the best results come from close collaboration. Your input is invaluable at every stage of the design process.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInLeft}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "12px",
                padding: "1.5rem",
                display: "flex",
                gap: "1.2rem",
                alignItems: "flex-start",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              marginLeft: isMobile ? "0" : "8rem"
            }}
            >
              <div style={{ width: "40px", height: "40px", marginTop: "0.2rem" }}>
                <img src={resultsIcon} alt="Results" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#000",
                  fontFamily: "sans-serif"
                }}>Proven Results</h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "rgba(0,0,0,0.6)",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                  margin: 0
                }}>
                  My designs don't just look good they deliver measurable results, from increased engagement to higher conversion rates.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            id="contact-heading"
            variants={fadeInUp}
            style={{
              fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#333",
              fontFamily: "sans-serif",
              textAlign: "center",
              position: "relative",
              zIndex: 2,
              paddingBottom: "1rem"
            }}
          >
            Contact
            <span style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "150px",
              height: "4px",
              background: "linear-gradient(90deg, #000000 0%, #ffffff 50%, #000000 100%)",
              borderRadius: "2px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}></span>
          </motion.h2>

          <div style={{ marginBottom: "3rem" }}></div>
          
          <div style={{
            position: "absolute",
            top: "50%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            animation: "float 20s infinite ease-in-out",
            zIndex: 1
          }}></div>
          
          <div style={{
            position: "absolute",
            bottom: "-30%",
            left: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            animation: "float 15s infinite ease-in-out reverse",
            zIndex: 1
          }}></div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(30px, -30px) rotate(120deg); }
              66% { transform: translate(-20px, 20px) rotate(240deg); }
            }
            
            @keyframes iconPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.15); }
            }
          `}</style>
          
          <motion.div 
            variants={fadeInUp}
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              position: "relative",
              zIndex: 2
            }}
          >
            <h2 style={{
              fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.8rem",
              fontWeight: "700",
              marginBottom: "0.8rem",
              color: "#000000",
              fontFamily: "sans-serif",
              textAlign: "center",
              letterSpacing: "-1px"
            }}>
              Let's Work Together
            </h2>
            
            <p style={{
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "1rem",
              marginBottom: "2.5rem",
              fontFamily: "sans-serif"
            }}>
              Have a project in mind? Drop me a message.
            </p>

            <form onSubmit={handleSubmit}>
              <motion.div 
                variants={staggerContainer}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem"
                }}
              >
                <motion.div 
                  variants={scaleIn}
                  style={{ 
                    display: "grid", 
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
                    gap: "1.2rem"
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      fontSize: "0.95rem",
                      border: focusedField === 'name' ? "2px solid #000" : defaultBorder,
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                      color: "#000",
                      fontFamily: "sans-serif",
                      boxSizing: "border-box",
                      outline: "none",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      fontSize: "0.95rem",
                      border: focusedField === 'email' ? "2px solid #000" : defaultBorder,
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                      color: "#000",
                      fontFamily: "sans-serif",
                      boxSizing: "border-box",
                      outline: "none",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </motion.div>

                <motion.div variants={scaleIn}>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      fontSize: "0.95rem",
                      border: focusedField === 'subject' ? "2px solid #000" : defaultBorder,
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                      color: "#000",
                      fontFamily: "sans-serif",
                      boxSizing: "border-box",
                      outline: "none",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </motion.div>

                <motion.div variants={scaleIn}>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      fontSize: "0.95rem",
                      border: focusedField === 'message' ? "2px solid #000" : defaultBorder,
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                      color: "#000",
                      fontFamily: "sans-serif",
                      resize: "vertical",
                      boxSizing: "border-box",
                      outline: "none",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.6 : 1
                    }}
                  />
                </motion.div>

                <motion.div 
                  variants={scaleIn}
                  style={{
                    textAlign: "center",
                    marginTop: "0.5rem"
                  }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: "0.9rem 2.5rem",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#ffffff",
                      backgroundColor: isSubmitting ? "#666" : "#000000",
                      border: `2px solid ${isSubmitting ? "#666" : "#000000"}`,
                      borderRadius: "6px",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      fontFamily: "sans-serif",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#fff";
                        e.currentTarget.style.color = "#000";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#000";
                        e.currentTarget.style.color = "#fff";
                      }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Contact;