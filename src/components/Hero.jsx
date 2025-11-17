import { motion } from "framer-motion";

export default function Hero() {
  const logos = [
    { src: "/logos/cfpj.png", alt: "High School" },
    { src: "/logos/csu.png", alt: "College" },
    { src: "/logos/ddssi2.png", alt: "OJT" },
    { src: "/logos/afmsi.png", alt: "Work" },
  ];

  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT SECTION */}
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">

            {/* Horizontal logos */}
            <motion.div
              className="hero-logos-horizontal d-flex justify-content-start gap-3 mb-3 flex-wrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {logos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-img"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-subtitle"
            >
              WEB DEVELOPER • RESEARCHER • TECH SUPPORT
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Hello, my name is <br />
              <span className="highlight">Rodgine Mallari</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              A passionate developer creating modern systems, intuitive interfaces,
              and useful automation tools. I combine creativity, research, and 
              hands-on experience to build reliable solutions.
            </motion.p>

            <div className="mt-4 d-flex flex-wrap gap-3">
              <motion.a
                href="/Mallari_Rodgine_CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="btn hero-btn-primary"
              >
                Download CV
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="btn hero-btn-outline"
              >
                Projects
              </motion.a>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="col-lg-6 col-12 text-center position-relative mt-4 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="hero-image-wrapper"
            >
              <div className="glass-frame"></div>
              <div className="gradient-ring"></div>
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="hero-image-card"></div>

              <motion.img
                src="cv_photo3.png"
                alt="Profile"
                className="hero-image"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
