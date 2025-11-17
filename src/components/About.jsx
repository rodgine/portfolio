import { motion } from "framer-motion";
import { FaCode, FaFlask, FaHeadset, FaRobot } from "react-icons/fa";

export default function About() {

  // --- Converted PHP data → React data ---
  const aboutData = {
    name: "Rodgine Mallari",
    title: "Web Developer, Researcher, Tech Support",
    description:
      "I create interactive web systems, dynamic dashboards, automation tools in C#, modern React frontends, and more.",
    highlights: [
      { title: "High School", image: "https://via.placeholder.com/300x200?text=High+School" },
      { title: "College", image: "https://via.placeholder.com/300x200?text=College" },
      { title: "OJT", image: "https://via.placeholder.com/300x200?text=OJT" },
      { title: "Work", image: "https://via.placeholder.com/300x200?text=Work+Company" },
    ],
  };

  // Your existing highlight icons
  const highlights = [
    { icon: <FaCode className="text-violet-600" />, title: "Passionate Developer", detail: "Creating modern, intuitive systems" },
    { icon: <FaFlask className="text-violet-600" />, title: "Researcher", detail: "Problem-solving and process improvement" },
    { icon: <FaHeadset className="text-violet-600" />, title: "Tech Support", detail: "Supporting users & systems" },
    { icon: <FaRobot className="text-violet-600" />, title: "Automation Enthusiast", detail: "Building time-saving tools" },
  ];

  return (
    <section id="about" className="py-5 px-3 bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="card border-0 shadow-lg p-5 rounded-4 bg-white"
        >
          <div className="row">
            {/* LEFT TEXT SECTION */}
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="fs-2 fw-bold mb-4 text-dark"
              >
                About Me
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-secondary mb-3 text-justify"
              >
                I am an IT graduate specialized in web development. I have been providing freelancing services since my
                second year in college and spent my OJT at Digital Doors Software Solutions Inc. as a Quality Assurance
                Tester and Programmer/Developer. I have also received recognition for my research, including "Best
                Presenter for Technological Research 2025 - Campus Wide" and "Best Technological Research 2025 - Campus
                Wide."
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-secondary mb-0 text-justify"
              >
                In addition, I have experience in tech support and surveillance through my work at Alpha Fortune
                Management Solutions Inc. My diverse background allows me to combine development, research, support,
                and analytical skills to deliver effective and innovative solutions across multiple domains.
              </motion.p>
            </div>

            {/* RIGHT HIGHLIGHTS CARDS SECTION */}
            <div className="col-lg-6 col-sm-12">
              <div className="row g-3 mt-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="col-12 col-md-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="card border border-light shadow p-3 rounded-4 h-100 text-center">
                      <div className="fs-3 mb-2" style={{ color: "#6f42c1" }}>{item.icon}</div>
                      <h5 className="fw-bold text-dark mb-1">{item.title}</h5>
                      <p className="text-secondary fs-7">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}