import { useState } from "react";
import { FiUser, FiMail, FiMessageCircle, FiSend } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const sendMessage = () => {
    // Simple validation
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // Simulate successful message send
    setTimeout(() => {
      setStatus("Message received! Email sending will be implemented later.");
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #f0e8ff 100%)" }}
    >
      <div className="container">
        <h2 className="text-center fs-2 fw-bold mb-5 text-dark">Contact Me</h2>

        <div className="card contact-card shadow-lg rounded-4 mx-auto p-4" style={{ maxWidth: "600px" }}>
          <form>
            {/* Name */}
            <div className="mb-3 input-wrapper">
              <FiUser className="input-icon" />
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <small className="text-muted">Enter your full name</small>
            </div>

            {/* Email */}
            <div className="mb-3 input-wrapper">
              <FiMail className="input-icon" />
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <small className="text-muted">We'll never share your email.</small>
            </div>

            {/* Message */}
            <div className="mb-3 input-wrapper">
              <FiMessageCircle className="input-icon" />
              <textarea
                className="form-control"
                rows="6"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <small className="text-muted">Write your message here</small>
            </div>

            {/* Send Button */}
            <button
              type="button"
              className="btn send-btn w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={sendMessage}
            >
              Send Message <FiSend />
            </button>

            {/* Status */}
            {status && <p className="mt-3 text-center text-secondary">{status}</p>}
          </form>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .contact-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(200, 180, 255, 0.3);
          transition: all 0.3s ease-in-out;
        }
        .contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0px 12px 25px rgba(143, 64, 255, 0.15);
        }
        .input-wrapper {
          position: relative;
        }
        .input-icon {
          position: absolute;
          top: 30%;
          left: 12px;
          transform: translateY(-50%);
          color: #7b5aff;
          font-size: 1.2rem;
        }
        input.form-control,
        textarea.form-control {
          padding-left: 40px;
          border-radius: 12px;
          border: 1px solid #d3c0ff;
          background: #faf6ff;
          transition: all 0.3s ease-in-out;
        }
        input.form-control:focus,
        textarea.form-control:focus {
          border-color: #7b5aff;
          box-shadow: 0 0 8px rgba(123, 90, 255, 0.25);
          outline: none;
        }
        small.text-muted {
          display: block;
          margin-top: 4px;
          font-size: 0.75rem;
        }
        .send-btn {
          background: #7b5aff;
          color: #fff;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease-in-out;
        }
        .send-btn:hover {
          background: #6433cc;
          transform: scale(1.02);
        }
        @media (max-width: 576px) {
          .contact-card {
            padding: 20px;
          }
          .input-icon {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}