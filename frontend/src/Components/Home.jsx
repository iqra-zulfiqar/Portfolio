import React from 'react'
import iqraImage from '../assets/iqra1.jpg'
import fallbackImage from '../assets/main.jpg'
import cvFile from '../assets/cv.pdf'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'
import { motion } from "framer-motion";


const Home = () => {
    const skills = [
    {
      name: "HTML",
      icon: "🌐"
    },
    {
      name: "CSS",
      icon: "🎨"
    },
    {
      name: "JavaScript",
      icon: "⚡"
    },
    {
      name: "React.js",
      icon: "⚛️"
    },
    {
      name: "Tailwind CSS",
      icon: "💨"
    },
    {
      name: "Node.js",
      icon: "💚"
    },
    {
      name: "Express.js",
      icon: "🚂"
    },
    {
      name: "MongoDB",
      icon: "🍃"
    },
    {
      name: "Firebase",
      icon: "🔥"
    },
       {
      name: "AI Tools",
      icon: "🤖"
    },
    {
      name: "Git & GitHub",
      icon: "🔀"
    },
    {
      name: "Postman",
      icon: "📮"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 0,
        zIndex: 1,
        backgroundImage: `url(${fallbackImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <video
          src="/video/background.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
            pointerEvents: "none"
          }}
        ></video>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "white"
          }}
        >
          <motion.h1 
            variants={fadeInUp}
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              margin: 0,
              marginBottom: "0.5rem",
              fontFamily: "sans-serif"
            }}
          >
            <span style={{ color: "white" }}>Hi, I'm </span>
            <span style={{ color: "white" }}>Iqra Zulfiqar</span>
          </motion.h1>
          <motion.h2 
            variants={fadeInUp}
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              margin: 0,
              marginBottom: "1.8rem",
              fontFamily: "sans-serif",
              color: "white"
            }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center"
            }}
          >
            <button
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                color: "#ffffff",
                backgroundColor: "transparent",
                border: "2px solid #ffffff",
                borderRadius: "50px",
                cursor: "pointer",
                fontFamily: "sans-serif",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
              }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Hire Me
            </button>
            <button
              style={{
                padding: "0.75rem 1.2rem",
                fontSize: "1rem",
                fontWeight: "600",
                color: "#ffffff",
                backgroundColor: "transparent",
                border: "2px solid #ffffff",
                borderRadius: "50px",
                cursor: "pointer",
                fontFamily: "sans-serif",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
              }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = cvFile;
                link.download = 'Iqra_Zulfiqar_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>
        
        <motion.img 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={iqraImage} 
          alt="Iqra" 
          style={{
            maxWidth: "40%",
            height: "auto",
            objectFit: "contain",
            position: "relative",
            zIndex: 1
          }}
        />
      </div>
      
      <About />

      {/* Skills Section */}
      <motion.section 
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        style={{
          position: "relative",
          minHeight: "auto",
          padding: "2rem 10%",
          backgroundColor: "#ffffff",
          zIndex: 1
        }}
      >
        {/* Title */}
        <motion.div 
          variants={fadeInUp}
          style={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#000000",
            fontFamily: "sans-serif",
            marginBottom: "1rem",
            letterSpacing: "2px",
            position: "relative",
            paddingBottom: "1rem"
          }}>
            MY SKILLS
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
          </h2>
          
          <div style={{ marginBottom: "2rem" }}></div>
        </motion.div>

        {/* Skills Grid - 6 per row */}
        <motion.div 
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1.2rem 0.8rem",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              style={{
                padding: "0.3rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Icon Circle */}
              <div style={{
                width: "55px",
                height: "55px",
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 0.5rem",
                fontSize: "1.5rem",
                border: "2px solid #000000",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}>
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 style={{
                fontSize: "0.85rem",
                fontWeight: "bold",
                color: "#000000",
                marginBottom: "0",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        style={{
          position: "relative",
          minHeight: "100vh",
          padding: "5rem 10%",
          backgroundColor: "#ffffff",
          zIndex: 1
        }}
      >
        <motion.h2 
          variants={fadeInUp}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#333",
            fontFamily: "sans-serif",
            textAlign: "center",
            position: "relative",
            paddingBottom: "1rem"
          }}
        >
          Experience
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
        
        <div style={{ marginBottom: "2rem" }}></div>
        
        <motion.h2 
          variants={fadeInUp}
          style={{
            fontSize: "2.5rem",
            fontWeight: "300",
            marginBottom: "4rem",
            color: "#1a1a1a",
            fontFamily: "'Georgia', serif",
            textAlign: "center",
            letterSpacing: "0.5px"
          }}
        >
          My path in creating digital solutions.
        </motion.h2>
        
        <div style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {/* MERN Stack Developer */}
          <motion.div 
            variants={fadeInUp}
            style={{
              display: "flex",
              marginBottom: "3rem",
              gap: "3rem",
              position: "relative"
            }}
          >
            <div style={{
              minWidth: "120px",
              paddingTop: "0.25rem",
              position: "relative",
              display: "flex",
              justifyContent: "center"
            }}>
              <div style={{ position: "relative" }}>
                <p style={{
                  fontSize: "1rem",
                  color: "#333",
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: "600"
                }}>
                  2025
                </p>
                {/* Vertical line */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "30px",
                  bottom: "-48px",
                  width: "2px",
                  backgroundColor: "#ddd",
                  transform: "translateX(-50%)"
                }}></div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#1a1a1a",
                fontFamily: "'Arial', sans-serif"
              }}>
                MERN Stack Developer at Site Native
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "#666",
                lineHeight: "1.8",
                fontFamily: "'Arial', sans-serif",
                marginBottom: "1rem",
                textAlign: "justify"
              }}>
                At Site Native, I delivered 6+ full-stack projects with 98% client satisfaction. I built scalable SaaS products with AI integrations, improving workflow efficiency by 40%. I developed responsive applications using React, Node.js, Express.js, and MongoDB, increasing user engagement by 25%. I ensured 99% cross-device compatibility with thorough testing, reducing post-launch issues by 15%.
              </p>
            </div>
          </motion.div>

          {/* Assistant Manager Processing */}
          <motion.div 
            variants={fadeInUp}
            style={{
              display: "flex",
              marginBottom: "3rem",
              gap: "3rem",
              position: "relative"
            }}
          >
            <div style={{
              minWidth: "120px",
              paddingTop: "0.25rem",
              position: "relative",
              display: "flex",
              justifyContent: "center"
            }}>
              <div style={{ position: "relative" }}>
                <p style={{
                  fontSize: "1rem",
                  color: "#333",
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: "600"
                }}>
                  2023 - 2024
                </p>
                {/* Vertical line */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "30px",
                  bottom: "-48px",
                  width: "2px",
                  backgroundColor: "#ddd",
                  transform: "translateX(-50%)"
                }}></div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#1a1a1a",
                fontFamily: "'Arial', sans-serif"
              }}>
                Assistant Manager – Processing at Aims Technologies
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "#666",
                lineHeight: "1.8",
                fontFamily: "'Arial', sans-serif",
                marginBottom: "1rem",
                textAlign: "justify"
              }}>
                As an Assistant Manager at Aims Technologies Pvt. Ltd, I maintained 98% client satisfaction and strengthened retention through effective communication. I analyzed sales data to guide strategy, contributing to 15% revenue growth. I built strong supplier partnerships, ensuring 100% on-time delivery, and improved operational efficiency by 20% through streamlined processes. I collaborated across teams to help increase the customer base by 10%.
              </p>
            </div>
          </motion.div>

          {/* Web Development Trainee */}
          <motion.div 
            variants={fadeInUp}
            style={{
              display: "flex",
              marginBottom: "3rem",
              gap: "3rem",
              position: "relative"
            }}
          >
            <div style={{
              minWidth: "120px",
              paddingTop: "0.25rem",
              position: "relative",
              display: "flex",
              justifyContent: "center"
            }}>
              <p style={{
                fontSize: "1rem",
                color: "#333",
                fontFamily: "'Arial', sans-serif",
                fontWeight: "600"
              }}>
                2021 - 2022
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: "#1a1a1a",
                fontFamily: "'Arial', sans-serif"
              }}>
                Web Development Trainee at StepUp IT Solutions
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "#666",
                lineHeight: "1.8",
                fontFamily: "'Arial', sans-serif",
                marginBottom: "1rem",
                textAlign: "justify"
              }}>
                At StepUp IT Solutions, I developed a responsive web application that increased client engagement by 25%. I built user-friendly interfaces using HTML, CSS, JavaScript, and React.js, reducing feedback loops by 30%. I worked in a team of 4 developers to deliver milestones on schedule and conducted testing and debugging to achieve 99% cross-device compatibility, reducing technical issues by 15%.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Services />

      <Projects />

      <Contact />

<motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "3rem 10% 1.5rem",
        zIndex: 1
      }}
    >
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        marginBottom: "2rem"
      }}>
        {/* Brand/Name */}
        <motion.div variants={fadeInUp}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            fontFamily: "Georgia, serif",
            textShadow: "2px 2px 4px rgba(255,255,255,0.3)"
          }}>
            Iqra Zulfiqar
          </h3>
          <p style={{
            fontSize: "0.9rem",
            color: "#cccccc",
            lineHeight: "1.6",
            fontFamily: "sans-serif"
          }}>
            Full Stack Web Developer passionate about creating innovative digital solutions.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp}>
          <h4 style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "1rem",
            fontFamily: "sans-serif",
            textAlign: "center"
          }}>
            Quick Links
          </h4>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            textAlign: "center"
          }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#home" style={{
                color: "#cccccc",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "sans-serif",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#cccccc"}>
                Home
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#about" style={{
                color: "#cccccc",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "sans-serif",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#cccccc"}>
                About
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#services" style={{
                color: "#cccccc",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "sans-serif",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#cccccc"}>
                Services
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#projects" style={{
                color: "#cccccc",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "sans-serif",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#cccccc"}>
                Projects
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#contact" style={{
                color: "#cccccc",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "sans-serif",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#cccccc"}>
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp}>
          <h4 style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "1rem",
            fontFamily: "sans-serif"
          }}>
            Contact
          </h4>
          <p style={{
            fontSize: "0.9rem",
            color: "#cccccc",
            lineHeight: "1.8",
            fontFamily: "sans-serif",
            marginBottom: "0.5rem"
          }}>
            Email: iqra07zulfiqar@gmail.com
          </p>
          <p style={{
            fontSize: "0.9rem",
            color: "#cccccc",
            lineHeight: "1.8",
            fontFamily: "sans-serif"
          }}>
            Location: Faisalabad, Pakistan
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          variants={fadeInUp}
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h4 style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "1rem",
            fontFamily: "sans-serif",
            textAlign: "center"
          }}>
            Follow Me
          </h4>
          <motion.div 
            variants={staggerContainer}
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center"
            }}
          >
            {/* GitHub */}
            <motion.a 
              variants={scaleIn}
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com/iqra-zulfiqar" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                border: "2px solid #ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.querySelector("svg").style.fill = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.querySelector("svg").style.fill = "#ffffff";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style={{ transition: "fill 0.3s ease" }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              variants={scaleIn}
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://www.linkedin.com/in/iqrazulfiqar/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                border: "2px solid #ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.querySelector("svg").style.fill = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.querySelector("svg").style.fill = "#ffffff";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style={{ transition: "fill 0.3s ease" }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a 
              variants={scaleIn}
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://www.instagram.com/iqraahere_._/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                border: "2px solid #ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.querySelector("svg").style.fill = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.querySelector("svg").style.fill = "#ffffff";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style={{ transition: "fill 0.3s ease" }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div 
        variants={fadeInUp}
        style={{
          borderTop: "1px solid #333",
          paddingTop: "1.5rem",
          textAlign: "center"
        }}
      >
        <p style={{
          fontSize: "0.85rem",
          color: "#999999",
          fontFamily: "sans-serif",
          margin: 0
        }}>
          © {new Date().getFullYear()} Iqra Zulfiqar. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>

    </div>
  )
}

export default Home