import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Import AI logo images
import chatgptLogo from '../assets/chatgpt.png'
import claudeLogo from '../assets/claude.png'
import geminiLogo from '../assets/gemini.png'
import perplexityLogo from '../assets/perplexity.png'

// Import project cover images
import cover1 from '../assets/cover1.png'
import cover2 from '../assets/cover2.png'
import cover3 from '../assets/cover3.png'
import cover4 from '../assets/cover4.png'
import cover5 from '../assets/cover5.png'

// Import focus area icons
import apiIcon from '../assets/api.png'
import featuresIcon from '../assets/features.png'
import dashboardIcon from '../assets/dashboard.png'
import engineeringIcon from '../assets/engineering.png'
import scalableIcon from '../assets/scalable.png'

// Inline SVG cover for Virello.studio (no external image file needed)
const virelloCoverSVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="600" height="340">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0f"/>
      <stop offset="100%" stop-color="#12121e"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6c63ff"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
    <linearGradient id="card1g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e"/>
      <stop offset="100%" stop-color="#16213e"/>
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="340" fill="url(#bg)"/>

  <!-- Ambient glow blobs -->
  <circle cx="120" cy="80" r="90" fill="#6c63ff" opacity="0.08" filter="url(#blur)"/>
  <circle cx="480" cy="260" r="80" fill="#a78bfa" opacity="0.1" filter="url(#blur)"/>

  <!-- Grid dots -->
  <g opacity="0.06">
    ${Array.from({length: 12}, (_, row) =>
      Array.from({length: 20}, (_, col) =>
        `<circle cx="${col * 32 + 8}" cy="${row * 32 + 8}" r="1.2" fill="#ffffff"/>`
      ).join('')
    ).join('')}
  </g>

  <!-- Brand name top left -->
  <text x="28" y="42" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#ffffff" opacity="0.9" letter-spacing="2">Virello.Studio</text>
  <rect x="28" y="48" width="90" height="1.5" fill="url(#glow)" rx="1"/>

  <!-- Hero text -->
  <text x="28" y="100" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#ffffff" letter-spacing="-0.5">AI-Powered</text>
  <text x="28" y="132" font-family="Georgia, serif" font-size="26" font-weight="700" fill="url(#glow)" letter-spacing="-0.5">Digital Agency</text>
  <text x="28" y="160" font-family="Arial, sans-serif" font-size="11" fill="#888" letter-spacing="1">Chatbot • Leads • Automation</text>

  <!-- Chat UI card -->
  <rect x="240" y="28" width="340" height="290" rx="16" fill="url(#card1g)" stroke="#2a2a4a" stroke-width="1"/>

  <!-- Chat header -->
  <rect x="240" y="28" width="340" height="48" rx="16" fill="#1a1a35"/>
  <rect x="240" y="60" width="340" height="16" fill="#1a1a35"/>
  <circle cx="268" cy="52" r="12" fill="url(#glow)"/>
  <!-- AI icon in circle -->
  <text x="263" y="57" font-family="Arial" font-size="12" fill="white">✦</text>
  <text x="290" y="55" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="#ffffff">Virello AI</text>
  <text x="290" y="69" font-family="Arial, sans-serif" font-size="9" fill="#6c63ff">● Online</text>
  <!-- dots top right -->
  <circle cx="540" cy="52" r="3" fill="#444"/>
  <circle cx="552" cy="52" r="3" fill="#444"/>
  <circle cx="564" cy="52" r="3" fill="#444"/>

  <!-- Chat messages -->
  <!-- Bot message 1 -->
  <rect x="256" y="90" width="200" height="36" rx="10" fill="#252545"/>
  <text x="266" y="107" font-family="Arial, sans-serif" font-size="9.5" fill="#ccccee">Hi! How can I help you</text>
  <text x="266" y="120" font-family="Arial, sans-serif" font-size="9.5" fill="#ccccee">today? 👋</text>

  <!-- User message -->
  <rect x="360" y="138" width="200" height="36" rx="10" fill="url(#glow)"/>
  <text x="370" y="155" font-family="Arial, sans-serif" font-size="9.5" fill="#ffffff">Tell me about your</text>
  <text x="370" y="168" font-family="Arial, sans-serif" font-size="9.5" fill="#ffffff">services</text>

  <!-- Bot message 2 -->
  <rect x="256" y="186" width="230" height="50" rx="10" fill="#252545"/>
  <text x="266" y="203" font-family="Arial, sans-serif" font-size="9.5" fill="#ccccee">We build AI chatbots that</text>
  <text x="266" y="216" font-family="Arial, sans-serif" font-size="9.5" fill="#ccccee">automate support, capture</text>
  <text x="266" y="229" font-family="Arial, sans-serif" font-size="9.5" fill="#ccccee">leads &amp; boost engagement.</text>

  <!-- Typing indicator -->
  <rect x="256" y="248" width="64" height="26" rx="13" fill="#1e1e3a"/>
  <circle cx="272" cy="261" r="3.5" fill="#6c63ff" opacity="0.9"/>
  <circle cx="284" cy="261" r="3.5" fill="#6c63ff" opacity="0.6"/>
  <circle cx="296" cy="261" r="3.5" fill="#6c63ff" opacity="0.3"/>

  <!-- Input bar -->
  <rect x="256" y="286" width="300" height="24" rx="12" fill="#1a1a2e" stroke="#333355" stroke-width="1"/>
  <text x="270" y="302" font-family="Arial, sans-serif" font-size="9" fill="#555">Type a message...</text>
  <rect x="535" y="289" width="18" height="18" rx="9" fill="url(#glow)"/>
  <text x="540" y="301" font-family="Arial, sans-serif" font-size="10" fill="white">↑</text>

  <!-- Bottom tag -->
  <rect x="28" y="198" width="120" height="28" rx="14" fill="#1a1a2e" stroke="#2a2a4a" stroke-width="1"/>
  <text x="44" y="216" font-family="Arial, sans-serif" font-size="9.5" fill="#6c63ff">✦ AI Chatbot</text>

  <rect x="28" y="234" width="148" height="28" rx="14" fill="#1a1a2e" stroke="#2a2a4a" stroke-width="1"/>
  <text x="44" y="252" font-family="Arial, sans-serif" font-size="9.5" fill="#a78bfa">⚡ Lead Capture</text>

  <rect x="28" y="270" width="160" height="28" rx="14" fill="#1a1a2e" stroke="#2a2a4a" stroke-width="1"/>
  <text x="44" y="288" font-family="Arial, sans-serif" font-size="9.5" fill="#888">● 24/7 Automation</text>
</svg>
`)}`

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const projects = [
    {
      title: "BetterRank.ai",
      description: "An AI-powered platform for ranking and analytics with advanced features and modern UI/UX design.",
      url: "https://betterrank.ai/",
      tags: ["AI Platform", "Analytics"],
      year: "2025",
      coverImage: cover1
    },
    {
      title: "TheraPracticePro.ai",
      description: "A comprehensive therapy practice management platform with AI integration and user authentication features.",
      url: "https://therapracticepro.ai/signup",
      tags: ["Healthcare", "Management"],
      year: "2025",
      coverImage: cover2
    },
    {
      title: "Live Match Zone",
      description: "A dynamic sports website featuring live match updates, scores, and real-time sports information.",
      url: "https://sports-website-mu.vercel.app/",
      tags: ["Sports", "Real-time"],
      year: "2025",
      coverImage: cover3
    },
    {
      title: "Ignite",
      description: "A modern web platform with elegant design, interactive features, and seamless user experience.",
      url: "https://ignitebyembodied.com/",
      tags: ["AI Platform", "Interactive"],
      year: "2025",
      coverImage: cover5
    },
    {
      title: "Little Games",
      description: "An interactive gaming platform featuring fun mini-games with engaging gameplay and modern design.",
      url: "https://little-games-kappa.vercel.app/",
      tags: ["Gaming", "Entertainment"],
      year: "2025",
      coverImage: cover4
    },
    {
      title: "Virello.Studio",
      description: "A modern digital agency website with an integrated AI-powered chatbot that automates customer support, captures qualified leads, and boosts engagement.",
      url: "https://virello-ai-chatbot-frontend.vercel.app/",
      tags: ["AI Chatbot", "Digital Agency"],
      year: "2025",
      coverImage: virelloCoverSVG
    }
  ];

  const aiLogos = [
    { name: 'ChatGPT', image: chatgptLogo },
    { name: 'Gemini', image: geminiLogo },
    { name: 'Claude', image: claudeLogo },
    { name: 'Perplexity', image: perplexityLogo },
  ];

  const focusAreas = [
    { 
      icon: apiIcon, 
      title: "AI API Integration",
      text: "LLMs, vision, speech models" 
    },
    { 
      icon: featuresIcon, 
      title: "Real-time AI Features",
      text: "Inside web applications" 
    },
    { 
      icon: dashboardIcon, 
      title: "Intelligent Dashboards",
      text: "Data-driven interfaces" 
    },
    { 
      icon: engineeringIcon, 
      title: "Prompt Engineering",
      text: "AI workflow design" 
    },
    { 
      icon: scalableIcon, 
      title: "Scalable Backends",
      text: "For AI-powered systems" 
    }
  ];

  const duplicatedCards = [...focusAreas, ...focusAreas, ...focusAreas];

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide >= focusAreas.length) {
      const timeout = setTimeout(() => {
        setCurrentSlide(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, focusAreas.length]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Helper to render a project card (avoids duplication)
  const renderProjectCard = (project, index) => (
    <motion.div
      key={index}
      variants={scaleIn}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => window.open(project.url, "_blank")}
      style={{
        position: "relative",
        cursor: "pointer"
      }}
    >
      <div style={{
        width: "100%",
        height: "220px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        marginBottom: "1rem",
        overflow: "hidden",
        border: "1px solid #e5e5e5",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        transform: hoveredIndex === index ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hoveredIndex === index ? "0 20px 40px rgba(0,0,0,0.1)" : "0 5px 15px rgba(0,0,0,0.05)",
        position: "relative"
      }}>
        {hoveredIndex === index && (
          <div style={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "50%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
            transform: "skewX(-20deg)",
            animation: "shine 0.8s ease-in-out",
            zIndex: 2,
            pointerEvents: "none"
          }} />
        )}
        {project.coverImage ? (
          <img 
            src={project.coverImage}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
            opacity: 0.3
          }}>
            🖼️
          </div>
        )}
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "0.5rem"
      }}>
        <h3 style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "#000",
          margin: 0,
          letterSpacing: "-0.5px",
          transition: "color 0.3s ease"
        }}>
          {project.title}
        </h3>
        <span style={{
          fontSize: "0.85rem",
          color: "#999",
          fontWeight: "400"
        }}>
          {project.year}
        </span>
      </div>

      <div style={{
        display: "flex",
        gap: "0.5rem",
        marginBottom: "0.75rem",
        flexWrap: "wrap"
      }}>
        {project.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.75rem",
              padding: "0.3rem 0.7rem",
              backgroundColor: hoveredIndex === index ? "#000" : "#f5f5f5",
              color: hoveredIndex === index ? "#fff" : "#666",
              borderRadius: "4px",
              fontWeight: "500",
              transition: "all 0.3s ease"
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <p style={{
        fontSize: "0.85rem",
        color: "#666",
        lineHeight: "1.5",
        margin: 0,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }}>
        {project.description}
      </p>

      {hoveredIndex === index && (
        <div style={{
          position: "absolute",
          top: "100px",
          right: "15px",
          width: "45px",
          height: "45px",
          backgroundColor: "#000",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.1rem",
          animation: "fadeInUp 0.3s ease-out"
        }}>
          →
        </div>
      )}
    </motion.div>
  );

  return (
    <section 
      id="projects"
      style={{
        position: "relative",
        minHeight: "auto",
        padding: isMobile ? "3rem 1rem" : isTablet ? "4rem 2rem" : "5rem 8%",
        backgroundColor: "#ffffff",
        overflow: "hidden"
      }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatLeft {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-20px) translateX(-15px);
            }
          }

          @keyframes floatRight {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-20px) translateX(15px);
            }
          }

          @keyframes floatCenter {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-25px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.15;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes shine {
            0% {
              left: -100%;
            }
            100% {
              left: 200%;
            }
          }
        `}
      </style>

      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1
      }}>
        {/* AI-Powered Web Solutions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginBottom: "5rem",
            position: "relative",
            paddingTop: "8rem"
          }}
        >
          
          {/* Floating AI Icons */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4rem",
              maxWidth: "900px",
              margin: "0 auto",
              pointerEvents: "none"
            }}
          >
            {aiLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                style={{
                  width: "60px",
                  height: "60px",
                  opacity: 0.2,
                  animation: `${index % 2 === 0 ? 'floatLeft' : 'floatRight'} ${6 + index * 0.5}s ease-in-out ${index * 0.5}s infinite, pulse 4s ease-in-out infinite`,
                  filter: "grayscale(100%)",
                  transition: "all 0.3s ease"
                }}
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <div style={{
            textAlign: "center",
            position: "relative",
            zIndex: 1
          }}>
            {/* Main Heading */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              style={{
                marginBottom: "3rem"
              }}
            >
              <h2 style={{
                fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "3rem",
                fontWeight: "700",
                color: "#000",
                margin: "0 0 1rem 0",
                lineHeight: "1.1",
                letterSpacing: "-2px"
              }}>
                AI-Powered Web Solutions
              </h2>
              <p style={{
                fontSize: "1.1rem",
                color: "#666",
                lineHeight: "1.8",
                margin: "0 auto",
                maxWidth: "700px"
              }}>
                I build intelligent, scalable web applications that combine modern frontend engineering with powerful AI capabilities. My focus is on turning traditional web products into smart, adaptive, and automation-driven experiences.
              </p>
            </motion.div>

            {/* Focus Areas Cards - Carousel */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              style={{
                position: "relative",
                maxWidth: "1200px",
                margin: "0 auto"
              }}
            >
              <div style={{
                overflow: "hidden",
                position: "relative"
              }}>
                <div style={{
                  display: "flex",
                  transition: currentSlide === focusAreas.length || currentSlide === 0 
                    ? "none" 
                    : "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: `translateX(-${(currentSlide + focusAreas.length) * (isMobile ? 100 : 100 / 3)}%)`
                }}>
                  {duplicatedCards.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        minWidth: isMobile ? "100%" : "33.333%",
                        padding: isMobile ? "0 5px" : "0 10px"
                      }}
                    >
                      <div
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{
                          position: "relative",
                          padding: "2rem 1.5rem",
                          backgroundColor: "#ffffff",
                          borderRadius: "12px",
                          border: "2px solid #000",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          cursor: "default",
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                          overflow: "hidden",
                          textAlign: "center",
                          height: "100%"
                        }}
                      >
                        {hoveredCard === index && (
                          <div style={{
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "50%",
                            height: "100%",
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                            transform: "skewX(-20deg)",
                            animation: "shine 0.8s ease-in-out",
                            zIndex: 2,
                            pointerEvents: "none"
                          }} />
                        )}

                        <div style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
                          opacity: 1,
                          transition: "opacity 0.4s ease",
                          zIndex: 0
                        }} />

                        <div style={{ position: "relative", zIndex: 1 }}>
                          <div style={{
                            width: "60px",
                            height: "60px",
                            margin: "0 auto 1.25rem",
                            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: hoveredCard === index ? "scale(1.1) rotate(5deg)" : "scale(1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}>
                            <img 
                              src={item.icon} 
                              alt={item.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                              }}
                            />
                          </div>

                          <h3 style={{
                            fontSize: "1.2rem",
                            fontWeight: "700",
                            color: "#000",
                            margin: "0 0 0.75rem 0",
                            letterSpacing: "-0.5px"
                          }}>
                            {item.title}
                          </h3>

                          <p style={{
                            fontSize: "0.95rem",
                            color: "#666",
                            lineHeight: "1.6",
                            margin: 0
                          }}>
                            {item.text}
                          </p>
                        </div>

                        <div style={{
                          position: "absolute",
                          top: "-2px",
                          right: "-2px",
                          width: "45px",
                          height: "45px",
                          background: "#000",
                          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                          transition: "background 0.4s ease"
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  left: isMobile ? "10px" : "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: isMobile ? "40px" : "45px",
                  height: isMobile ? "40px" : "45px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  right: isMobile ? "10px" : "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: isMobile ? "40px" : "45px",
                  height: isMobile ? "40px" : "45px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
              >
                →
              </button>

              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "2rem"
              }}>
                {focusAreas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: (currentSlide % focusAreas.length) === index ? "30px" : "10px",
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: (currentSlide % focusAreas.length) === index ? "#000" : "#e0e0e0",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div> 

          {/* Bottom Divider */}
          <div style={{
            marginTop: "5rem",
            height: "1px",
            background: "linear-gradient(to right, transparent, #e0e0e0, transparent)"
          }} />
        </motion.div>

        {/* Portfolio Header */}
        <motion.div 
          id="portfolio-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textAlign: "center",
            marginBottom: "4rem"
          }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            padding: "0.5rem 1rem",
          }}>
            <div style={{
              width: "60px",
              height: "2px",
              backgroundColor: "#000"
            }} />
            <span style={{
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#000",
              fontSize: "2.5rem",
              fontWeight: "bold",
              position: "relative",
              paddingBottom: "1rem"
            }}>
              Portfolio
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
            </span>
          </div>

          <div style={{ marginBottom: "2rem" }}></div>
          
          <h2 style={{
            fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "3rem",
            fontWeight: "300",
            color: "#000",
            margin: "0 0 1rem 0",
            lineHeight: "1.2",
            letterSpacing: "-1px"
          }}>
            Explore a curated selection of<br/>
            my recent MERN Stack projects
          </h2>
        </motion.div>

        {/* First Row - 3 Projects */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? "1.5rem" : "2rem",
            marginBottom: "2rem"
          }}
        >
          {projects.slice(0, 3).map((project, index) => renderProjectCard(project, index))}
        </motion.div>

        {/* Second Row - 3 Projects (centered via grid offset on desktop) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? "1.5rem" : "2rem",
            marginTop: "6rem",
            // On desktop, center 3 cards across 3 columns naturally
            maxWidth: !isMobile && !isTablet ? "calc(100% - 0px)" : "100%"
          }}
        >
          {projects.slice(3, 6).map((project, index) => renderProjectCard(project, index + 3))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects