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

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "Little Games",
      description: "An interactive gaming platform featuring fun mini-games with engaging gameplay and modern design.",
      url: "https://little-games-kappa.vercel.app/",
      tags: ["Gaming", "Entertainment"],
      year: "2025",
      coverImage: cover4
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
      icon: "🔌", 
      title: "AI API Integration",
      text: "LLMs, vision, speech models" 
    },
    { 
      icon: "⚡", 
      title: "Real-time AI Features",
      text: "Inside web applications" 
    },
    { 
      icon: "📊", 
      title: "Intelligent Dashboards",
      text: "Data-driven interfaces" 
    },
    { 
      icon: "🎯", 
      title: "Prompt Engineering",
      text: "AI workflow design" 
    },
    { 
      icon: "🚀", 
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
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" style={{
      position: "relative",
      minHeight: "100vh",
      padding: "5rem 8%",
      backgroundColor: "#ffffff",
      overflow: "hidden"
    }}>
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          style={{
            marginBottom: "5rem",
            position: "relative",
            paddingTop: "8rem"
          }}
        >
          
          {/* Floating AI Icons - Clean Layout Above Section */}
          <motion.div 
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
              variants={fadeInUp}
              style={{
                marginBottom: "3rem"
              }}
            >
              <h2 style={{
                fontSize: "3rem",
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
                  transform: `translateX(-${(currentSlide + focusAreas.length) * (100 / 3)}%)`
                }}>
                  {duplicatedCards.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        minWidth: "33.333%",
                        padding: "0 10px"
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
                            fontSize: "3rem",
                            marginBottom: "1.25rem",
                            transform: "scale(1.1) rotate(5deg)",
                            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            display: "inline-block"
                          }}>
                            {item.icon}
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
                  left: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "45px",
                  height: "45px",
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
                  right: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "45px",
                  height: "45px",
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
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
            fontSize: "3rem",
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
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginBottom: "2rem"
          }}
        >
          {projects.slice(0, 3).map((project, index) => (
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
                boxShadow: hoveredIndex === index ? "0 20px 40px rgba(0,0,0,0.1)" : "0 5px 15px rgba(0,0,0,0.05)"
              }}>
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
          ))}
        </motion.div>

        {/* Second Row - 2 Centered Projects */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2rem"
          }}
        >
          {projects.slice(3, 5).map((project, index) => (
            <motion.div
              key={index + 3}
              variants={scaleIn}
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => window.open(project.url, "_blank")}
              style={{
                position: "relative",
                cursor: "pointer",
                width: "calc(33.333% - 1.33rem)"
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
                transform: hoveredIndex === index + 3 ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hoveredIndex === index + 3 ? "0 20px 40px rgba(0,0,0,0.1)" : "0 5px 15px rgba(0,0,0,0.05)"
              }}>
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
                      backgroundColor: hoveredIndex === index + 3 ? "#000" : "#f5f5f5",
                      color: hoveredIndex === index + 3 ? "#fff" : "#666",
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

              {hoveredIndex === index + 3 && (
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
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects