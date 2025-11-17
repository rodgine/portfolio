import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";

export default function References() {
  const refs = [
    {
      name: "Verdict L. Gonzales",
      role: "CSU-Gonzaga / Professor 1",
      phone: "+69 917-567-6566",
      email: "verdict.gonzales@gmail.com",
    },
    {
      name: "Twinford Cris O. Compa",
      role: "YML / Dashboard Developer",
      phone: "+69 926-187-8782",
      email: "twinford.compa@ymlinnovation.com.au",
    },
    {
      name: "Rhodel R. Mamalio",
      role: "CSU-Gonzaga / IT Instructor",
      phone: "+69 995-442-1203",
      email: "rhodel.mamalio@carsu.edu.ph",
    },
  ];

  return (
    <section id="references" className="py-5 bg-light">
      <div className="container">
        
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center fs-2 fw-bold mb-4"
          style={{ color: "black" }}
        >
          References
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {refs.map((ref, i) => (
            <motion.div
              key={i}
              className="col-lg-4 col-md-6 col-sm-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="card shadow rounded-4 border-0 h-100 p-4">
                <h5 className="fw-bold mb-1" style={{ color: "#1a1a1a" }}>
                  {ref.name}
                </h5>
                <p className="text-secondary mb-3">{ref.role}</p>

                <p className="mb-1 fw-semibold small">
                  <FiPhone className="me-2" style={{ color: "#6f42c1" }} />
                  {ref.phone}
                </p>

                <p className="fw-semibold small" style={{ fontSize: "12px" }}>
                  <FiMail className="me-2" style={{ color: "#6f42c1"}} />
                  {ref.email}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
