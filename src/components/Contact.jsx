import { motion } from "framer-motion";
import { useState } from "react";
import { contact } from "../data/resume";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE"); // IDLE, SUBMITTING, SUCCESS, ERROR
  const [showQuickForm, setShowQuickForm] = useState(false);

  // Dynamically resolve Formspree endpoint from Vercel environment variables (ID or URL)
  const getFormEndpoint = () => {
    const raw =
      import.meta.env.VITE_FORMSPREE_ID ||
      import.meta.env.FORMSPREE_ID ||
      import.meta.env.VITE_FORMSPREE_URL ||
      import.meta.env.FORMSPREE_URL ||
      import.meta.env.VITE_FORMSPREE_KEY ||
      import.meta.env.FORMSPREE_KEY ||
      import.meta.env.VITE_FORMSPREE_ENDPOINT ||
      import.meta.env.FORMSPREE_ENDPOINT;

    if (raw && typeof raw === "string" && raw.trim() !== "") {
      const val = raw.trim();
      if (val.startsWith("http://") || val.startsWith("https://")) {
        return val;
      }
      return `https://formspree.io/f/${val}`;
    }

    // Fallback to direct FormSubmit AJAX endpoint if no env var is set
    return "https://formsubmit.co/ajax/sanketdev521@gmail.com";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("SUBMITTING");

    try {
      const endpoint = getFormEndpoint();

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `⚡ New Portfolio Message from ${formData.name}`,
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.ok || data.success === "true" || data.success === true) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission failed:", data);
        setStatus("ERROR");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Let's Build Your Product
      </motion.h2>

      <motion.p
        className="contact-desc"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {contact.contactDesc}
      </motion.p>

      <motion.div
        className="contact-box sketch-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* CONTACT INFO */}
        <p style={{ margin: "5px 0", fontSize: "1.05rem" }}>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contact.email}`} style={{ color: "var(--blue)", textDecoration: "underline" }}>
            {contact.email}
          </a>
        </p>
        <p style={{ margin: "5px 0", fontSize: "1.05rem" }}>
          <strong>Location:</strong> {contact.location}
        </p>

        {/* QUICK CONTACT LINKS */}
        <div className="contact-links" style={{ margin: "18px 0" }}>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: "bold" }}
          >
            💬 WhatsApp
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: "bold" }}
          >
            💻 GitHub
          </a>
        </div>

        {/* INTAKE FUNNEL FORM GATEWAY (PRIMARY CTA) */}
        <div
          className="intake-card sketch-box"
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "var(--yellow)",
            border: "2px solid black",
            textAlign: "left",
          }}
        >
          <h3 style={{ margin: "0 0 10px", fontSize: "1.3rem", color: "#111" }}>
            📋 Project Intake & Scoping Form
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px", color: "#333" }}>
            To ensure I come fully prepared with a tailored tech stack approach, clear pricing framework,
            and a realistic timeline estimate for our introductory sync, please take 5 minutes to outline
            your requirements in my interactive project scoping form.
          </p>

          <motion.a
            href={contact.intakeForm}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, rotate: -0.5 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              cursor: "pointer",
              width: "100%",
              padding: "14px 20px",
              fontSize: "1.15rem",
              fontWeight: "bold",
              background: "var(--blue)",
              color: "white",
              border: "2px solid black",
              boxShadow: "3px 3px 0 black",
              boxSizing: "border-box",
            }}
          >
            Launch Project Intake Form &nbsp;→
          </motion.a>
        </div>

        {/* ALTERNATIVE DIRECT MESSAGE TOGGLE */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            type="button"
            onClick={() => setShowQuickForm(!showQuickForm)}
            style={{
              background: "none",
              border: "none",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "0.95rem",
              color: "#555",
              fontFamily: "inherit",
            }}
          >
            {showQuickForm ? "Hide Quick Direct Message Form" : "Or send a quick message directly on this page ✉️"}
          </button>

          {showQuickForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              style={{ marginTop: "15px" }}
            >
              {status === "SUCCESS" ? (
                <div style={{ padding: "16px", background: "#d4edda", border: "2px solid #155724", color: "#155724", fontWeight: "bold", borderRadius: "6px" }}>
                  🎉 Thank you! Your message has been sent to sanketdev521@gmail.com. I'll get back to you shortly!
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <textarea
                    placeholder="Quick question or message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />

                  {status === "ERROR" && (
                    <div style={{ color: "red", fontSize: "0.9rem", margin: "6px 0" }}>
                      ⚠️ Oops! There was an issue sending your message. Please email sanketdev521@gmail.com directly or try again.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "SUBMITTING"}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ marginTop: "10px", width: "100%", opacity: status === "SUBMITTING" ? 0.7 : 1 }}
                  >
                    {status === "SUBMITTING" ? "Sending to Email..." : "Send Quick Message ✉️"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}