import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Smooth rotation with consistent speed
      setRotation(prev => (prev + (0.02 * deltaTime)) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: "🖥️",
      title: "Web Development",
      description: "Build scalable full-stack web applications using modern MERN technologies."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Design responsive, user-friendly, and visually engaging interfaces."
    },
    {
      icon: "⚙️",
      title: "API Development",
      description: "Develop secure, high-performance REST APIs and backend architectures."
    },
    {
      icon: "🚀",
      title: "SaaS Products",
      description: "Create custom SaaS platforms with AI integrations and optimized workflows."
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Integrate AI features into applications to enhance automation, intelligence, and user experience."
    }
  ];

  const ServiceCard = ({ service, index, totalCards }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Calculate position in circle
    const radius = 320;
    const angleOffset = (360 / totalCards) * index;
    const currentAngle = (rotation + angleOffset) * (Math.PI / 180);
    
    const x = Math.cos(currentAngle) * radius;
    const y = Math.sin(currentAngle) * radius;

    return (
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
          width: "280px",
          willChange: "transform",
          zIndex: isHovered ? 10 : 1
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{
          backgroundColor: "#ffffff",
          padding: "1.75rem",
          borderRadius: "12px",
          boxShadow: isHovered 
            ? "0 16px 32px rgba(0, 0, 0, 0.2)" 
            : "0 4px 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #f0f0f0",
          textAlign: "center",
          cursor: "pointer",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "all 0.3s ease",
          willChange: "transform, box-shadow"
        }}>
          <div style={{
            width: "56px",
            height: "56px",
            backgroundColor: isHovered ? "#f0f0ff" : "#f8f8f8",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            margin: "0 auto 1rem",
            transition: "all 0.4s ease",
            transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)"
          }}>
            {service.icon}
          </div>
          <h3 style={{
            fontSize: "1.15rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
            color: isHovered ? "#4a5ff7" : "#1a1a1a",
            fontFamily: "sans-serif",
            transition: "color 0.3s ease"
          }}>
            {service.title}
          </h3>
          <p style={{
            fontSize: "0.875rem",
            color: "#666",
            lineHeight: "1.6",
            fontFamily: "sans-serif",
            margin: 0
          }}>
            {service.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <motion.section 
      id="services"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "5rem 10%",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      {/* Animated decorative dots pattern */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        backgroundImage: "radial-gradient(circle, #ddd 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        opacity: 0.3,
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* Circular orbit path */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "640px",
        height: "640px",
        border: "2px dashed #e0e0e0",
        borderRadius: "50%",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* Heading at the top */}
      <div style={{
        position: "absolute",
        top: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        zIndex: 5,
        width: "100%"
      }}>
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#333",
          fontFamily: "sans-serif",
          textAlign: "center",
          position: "relative",
          paddingBottom: "1rem"
        }}>
          Services
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

        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "300",
          color: "#666",
          margin: "0",
          lineHeight: "1.4",
          letterSpacing: "-0.5px",
          fontFamily: "sans-serif"
        }}>
          Creating Impact Through Expertise
        </h3>
      </div>

      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "1400px",
        height: "900px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8rem"
      }}>
        {/* Center Content - Circular */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 5,
          backgroundColor: "#fafafa",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "400",
            color: "#1a1a1a",
            fontFamily: "Georgia, serif",
            margin: 0,
            lineHeight: "1.4"
          }}>
            Service<br/>For You
          </h2>
        </div>

        {/* Revolving Service Cards */}
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            service={service} 
            index={index}
            totalCards={services.length}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Services;