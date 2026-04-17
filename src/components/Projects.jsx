import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Swal from "sweetalert2";

// LOCAL STATIC DATA (No PHP Needed)
const projectData = [
  {
    name: "SeaMart",
    description:
      "A Laravel-powered fish market e-commerce platform featuring product management, categories, customer orders, and a fully customized admin dashboard.",
    image: "/projects/seamart.png",
    link: "#",
  },
  {
    name: "Japan Surplus",
    description:
      "A furniture e-commerce shop built with ASP .NET C# MVC and APIs, supporting dynamic product browsing, shopping cart, and clean, responsive UI.",
    image: "/projects/japan.png",
    link: "#",
  },
  {
    name: "DocQueue",
    description:
      "A modern web-based document request and queuing system built with pure PHP, Tailwind CSS, and Alpine.js, supporting dynamic request browsing, live queue tracking, online submissions, and a clean, responsive UI",
    image: "/projects/image.png",
    link: "https://csuqms.page.gd/",
  },
  {
    name: "RiceGuard",
    description:
      "An IoT-enabled rice crop detection and alarm system built with Arduino, pure PHP web server, and YOLO for image detection logic, supporting real-time monitoring, pest & disease detection, and instant alert notifications.",
    image: "/projects/riceguard.png",
    link: "https://csuriceguard.page.gd/",
  },
  {
    name: "CSU-OSMIS",
    description:
      "An Online Scholarship Management System for CSU students, developed in native PHP, handling student applications, approvals, and reporting efficiently.",
    image: "/projects/osmis.png",
    link: "https://csuosmis.infinityfree.me/",
  },
  {
    name: "RESPONDE",
    description:
      "Realtime Emergency System for Prompt, Operation, Notification, Dispatch, and Evaluation (RESPONDE). Arduino-integrated incident reporting platform with Laravel backend for unified response management.",
    image: "/projects/responde.png",
    link: "https://csuresponde.free.nf/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background: "whitesmoke",
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center fs-2 fw-bold mb-5 text-dark"
        >
          Projects
        </motion.h2>

        <div className="row g-4">
          {projectData.map((proj, index) => (
            <motion.div
              key={index}
              className="col-sm-12 col-md-12 col-lg-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-card shadow rounded-4 overflow-hidden h-100">
                {/* IMAGE */}
                <div
                  className="project-img-wrapper border border-light"
                  style={{
                    backgroundImage: `url(${proj.image})`,
                  }}
                ></div>

                {/* DETAILS */}
                <div className="card-body p-4">
                  <h3 className="fs-5 fw-bold text-dark mb-2">{proj.name}</h3>
                  <p className="text-secondary small mb-3">
                    {proj.description}
                  </p>

                  <a
                    href={proj.link !== "#" ? proj.link : undefined}
                    target={proj.link !== "#" ? "_blank" : undefined}
                    onClick={(e) => {
                      if (proj.link === "#") {
                        e.preventDefault();
                        Swal.fire({
                          icon: "info",
                          title: "Under Maintenance",
                          text: "This project website is currently under maintenance.",
                          confirmButtonColor: "#6f42c1",
                        });
                      }
                    }}
                    className="project-link fw-semibold cursor-pointer"
                  >
                    Visit Project <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: #ffffff;
          border: 1px solid #e9edf3;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
        }

        .project-img-wrapper {
          width: 100%;
          height: 230px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .project-link {
          color: #0d6efd;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .project-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 576px) {
          .project-img-wrapper {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
}
