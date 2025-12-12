import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const About = () => {
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
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
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

  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        minHeight: "auto",
        padding: isMobile ? "3rem 1rem" : isTablet ? "4rem 2rem" : "5rem 10%",
        backgroundColor: "#f8f9fa",
        zIndex: 1
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        {/* About Me */}
        <div>
          <motion.h2 
            variants={fadeInUp}
            style={{
              fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem",
              color: "#333",
              fontFamily: "sans-serif",
              paddingBottom: "1rem",
              position: "relative"
            }}
          >
            About Me
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
          
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
            flexWrap: "wrap"
          }}>
            {/* Left side - Paragraph */}
            <motion.div 
              variants={fadeInLeft}
              style={{ flex: isMobile ? "1 1 100%" : "1 1 400px", width: isMobile ? "100%" : "auto" }}
            >
              <p style={{
                fontSize: isMobile ? "0.95rem" : "1.1rem",
                lineHeight: "1.8",
                color: "#555",
                fontFamily: "sans-serif",
                textIndent: isMobile ? "0" : "2rem",
                textAlign: isMobile ? "left" : "justify"
              }}>
              With a background in Computer Science and a passion for full-stack and AI-driven development, I build products that put users first. I thrive on understanding customer challenges and turning them into efficient, scalable software solutions. Whether designing databases, building APIs, or crafting intuitive interfaces, I approach every project with a commitment to solving real customer problems and delivering results that matter.
              </p>
            </motion.div>

            {/* Right side - Stats */}
            <motion.div 
              variants={staggerContainer}
              style={{
                flex: isMobile ? "1 1 100%" : "1 1 300px",
                width: isMobile ? "100%" : "auto",
                display: "flex",
                gap: isMobile ? "1.5rem" : "2rem",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                padding: isMobile ? "2rem 1.5rem" : "2.5rem 2rem",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)",
                flexWrap: isMobile ? "wrap" : "nowrap"
              }}
            >
              <motion.div 
                variants={scaleIn}
                style={{ textAlign: "center" }}
              >
                <h3 style={{
                  fontSize: isMobile ? "2rem" : "2.5rem",
                  fontWeight: "bold",
                  color: "#000000",
                  marginBottom: "0.5rem",
                  fontFamily: "sans-serif"
                }}>2</h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "#555555",
                  fontFamily: "sans-serif"
                }}>Years Experience</p>
              </motion.div>

              <motion.div 
                variants={scaleIn}
                style={{ textAlign: "center" }}
              >
                <h3 style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#000000",
                  marginBottom: "0.5rem",
                  fontFamily: "sans-serif"
                }}>12+</h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "#555555",
                  fontFamily: "sans-serif"
                }}>Project Done</p>
              </motion.div>

              <motion.div 
                variants={scaleIn}
                style={{ textAlign: "center" }}
              >
                <h3 style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#000000",
                  marginBottom: "0.5rem",
                  fontFamily: "sans-serif"
                }}>5+</h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "#555555",
                  fontFamily: "sans-serif"
                }}>Happy Client</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <motion.div 
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{
            fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#333",
            fontFamily: "sans-serif"
          }}>
            Education
          </h2>
          <motion.div 
            variants={fadeInRight}
            style={{
              borderLeft: "4px solid #000000",
              paddingLeft: "2rem",
              position: "relative"
            }}
          >
            <div style={{
              position: "absolute",
              left: "-10px",
              top: "0",
              width: "16px",
              height: "16px",
              backgroundColor: "#000000",
              borderRadius: "50%"
            }}></div>
            <h3 style={{
              fontSize: isMobile ? "1.4rem" : isTablet ? "1.6rem" : "1.8rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#000000",
              fontFamily: "sans-serif"
            }}>
              Bachelor of Computer Science
            </h3>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "#666",
              marginBottom: "1.5rem",
              fontFamily: "sans-serif",
              fontWeight: "500",
              fontStyle: "italic"
            }}>
              Government College University, Faisalabad
            </p>
            <p style={{
              fontSize: isMobile ? "0.9rem" : "1rem",
              color: "#555",
              lineHeight: "1.8",
              fontFamily: "sans-serif"
            }}>
              Web & Android Development • Data Structures & Algorithms • Database Systems
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About