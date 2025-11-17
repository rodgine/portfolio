import { motion } from "framer-motion";

// Import icons
import dotnetIcon from "/icons/dotnet.png";
import csharpIcon from "/icons/csharp.png";
import mauiIcon from "/icons/maui.png";
import jsIcon from "/icons/js.png";
import reactIcon from "/icons/react.png";
import tailwindIcon from "/icons/tailwind.png";
import phpIcon from "/icons/php.png";
import laravelIcon from "/icons/laravel.png";
import sqlIcon from "/icons/sql.png";
import bootstrapIcon from "/icons/bootstrap.png";
import apiIcon from "/icons/api.png";
import materializeIcon from "/icons/materialize.png";
import defaultIcon from "/icons/default.png";

export default function Skills() {
  const skills = [
    { id: 1, name: "ASP .NET", level: "Confident" },
    { id: 2, name: "C#", level: "Comfortable" },
    { id: 3, name: ".NET MAUI", level: "Learning" },
    { id: 4, name: "Javascript", level: "Learning" },
    { id: 5, name: "React.js", level: "Learning" },
    { id: 6, name: "TailwindCSS", level: "Comfortable" },
    { id: 7, name: "PHP", level: "Confident" },
    { id: 8, name: "Laravel", level: "Comfortable" },
    { id: 9, name: "SQL", level: "Comfortable" },
    { id: 10, name: "Bootstrap", level: "Comfortable" },
    { id: 11, name: "REST APIs", level: "Comfortable" },
    { id: 12, name: "Materialize", level: "Comfortable" },
  ];

  const skillIcons = {
    "ASP .NET": dotnetIcon,
    "C#": csharpIcon,
    ".NET MAUI": mauiIcon,
    Javascript: jsIcon,
    "React.js": reactIcon,
    TailwindCSS: tailwindIcon,
    PHP: phpIcon,
    Laravel: laravelIcon,
    SQL: sqlIcon,
    Bootstrap: bootstrapIcon,
    "REST APIs": apiIcon,
    Materialize: materializeIcon,
  };

  return (
    <section
      id="skills"
      className="py-5 d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #eaeef3 100%)",
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center fs-2 fw-bold mb-5 text-dark"
        >
          Technical Skills
        </motion.h2>

        <div className="row gy-4 gx-2 justify-content-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="col-6 col-md-4 col-lg-2 d-flex justify-content-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="skill-card text-center">
                <div className="icon-wrapper">
                  <img
                    src={skillIcons[skill.name] || defaultIcon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                </div>
                <h6 className="fw-semibold text-dark mt-2 mb-1">{skill.name}</h6>
                <span className="level-badge">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skill-card {
          width: 150px;
          height: 180px;
          padding: 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);
          transition: all 0.3s ease-in-out;
        }

        .icon-wrapper {
          width: 95px;
          height: 95px;
          margin: 0 auto;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid #f1f1f1;
        }

        .skill-icon {
          width: 85px;
          height: 85px;
          object-fit: contain;
        }

        @media (max-width: 576px) {
          .skill-card {
            width: 95%;
            height: 170px;
          }

          .icon-wrapper {
            width: 80px;
            height: 80px;
          }

          .skill-icon {
            width: 70px;
            height: 70px;
          }
        }

        .level-badge {
          display: inline-block;
          background: #e9eef5;
          padding: 4px 10px;
          border-radius: 10px;
          font-size: 0.75rem;
          color: #555;
          margin-top: 5px;
        }
      `}</style>
    </section>
  );
}