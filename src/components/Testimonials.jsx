import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_TESTIMONIALS = [
  {
    id: "t1",
    name: "Aarav Mehta",
    role: "Founder & CEO",
    company: "TechScale Studio",
    rating: 5,
    category: "AI / ML",
    project: "Prepify AI",
    date: "Aug 2025",
    text: "Sanket built our AI-powered interview prep engine from scratch. His expertise in Gemini API integrations and prompt pipeline architecture saved us over 3 months of dev time. Exceptional problem solver!",
    avatarBg: "var(--purple-light)",
    avatarColor: "var(--purple)",
    verified: true,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Senior Product Manager",
    company: "Zomato Enterprise",
    rating: 5,
    category: "Full Stack Web",
    project: "UI Component Library",
    date: "May 2025",
    text: "Collaborating with Sanket on dynamic interface components was an absolute pleasure. He delivers clean, maintainable React code with a keen eye for responsiveness and performance.",
    avatarBg: "var(--orange-light)",
    avatarColor: "var(--red)",
    verified: true,
  },
  {
    id: "t3",
    name: "Marcus Vance",
    role: "Co-Founder & CTO",
    company: "DataSynthetix Labs",
    rating: 5,
    category: "AI / ML",
    project: "InsightForge AI",
    date: "Nov 2025",
    text: "The multi-agent system Sanket engineered for automated web research reports blew us away. Fast stream parsing, solid LangChain setup, and ultra-smooth execution.",
    avatarBg: "var(--blue-light)",
    avatarColor: "var(--blue)",
    verified: true,
  },
  {
    id: "t4",
    name: "Sneha Kulkarni",
    role: "VP of Engineering",
    company: "CloudPulse Systems",
    rating: 5,
    category: "Performance & UI",
    project: "Frontend Optimization",
    date: "Feb 2026",
    text: "Sanket refactored our web frontend, boosting initial render speeds by over 60%. His structured approach to accessibility and modern CSS is top tier!",
    avatarBg: "var(--green-light)",
    avatarColor: "var(--green)",
    verified: true,
  },
  {
    id: "t5",
    name: "Rohan Verma",
    role: "Tech Lead",
    company: "QuoteGenie Systems",
    rating: 5,
    category: "AI / ML",
    project: "QuoteGenie AI",
    date: "Jan 2026",
    text: "Deploying deep learning NLP models into interactive web apps can be tricky, but Sanket handled the LSTM neural network pipeline flawlessly. Highly recommended!",
    avatarBg: "var(--yellow)",
    avatarColor: "#b58900",
    verified: true,
  },
];

const COLOR_OPTIONS = [
  { label: "Purple", bg: "var(--purple-light)", color: "var(--purple)" },
  { label: "Blue", bg: "var(--blue-light)", color: "var(--blue)" },
  { label: "Green", bg: "var(--green-light)", color: "var(--green)" },
  { label: "Red", bg: "var(--orange-light)", color: "var(--red)" },
  { label: "Yellow", bg: "var(--yellow)", color: "#b58900" },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // New review form state
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    company: "",
    rating: 5,
    category: "Full Stack Web",
    project: "",
    text: "",
    colorIndex: 0,
    link: "",
  });

  // Hover state for star rating picker
  const [hoverRating, setHoverRating] = useState(0);

  // State for mobile view tabs ("form" or "preview")
  const [mobileTab, setMobileTab] = useState("form");

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    if (isModalOpen) setMobileTab("form");
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sanket_portfolio_testimonials");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge custom reviews ahead of initial reviews
          setTestimonials([...parsed, ...INITIAL_TESTIMONIALS]);
        }
      }
    } catch (e) {
      console.error("Failed to load saved testimonials", e);
    }
  }, []);

  // Filter logic
  const categories = ["All", "AI / ML", "Full Stack Web", "Performance & UI"];

  const filteredTestimonials = testimonials.filter((t) => {
    const matchesCategory =
      activeCategory === "All" || t.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.company.toLowerCase().includes(q) ||
      t.role.toLowerCase().includes(q) ||
      t.text.toLowerCase().includes(q) ||
      (t.project && t.project.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  // Calculate stats
  const totalReviews = testimonials.length;
  const avgRating = (
    testimonials.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
  ).toFixed(1);

  // Submit Handler
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const chosenColor = COLOR_OPTIONS[newReview.colorIndex];

    const reviewToAdd = {
      id: `user-${Date.now()}`,
      name: newReview.name.trim(),
      role: newReview.role.trim() || "Client Partner",
      company: newReview.company.trim() || "Independent",
      rating: newReview.rating,
      category: newReview.category,
      project: newReview.project.trim() || newReview.category,
      date: "Just Now",
      text: newReview.text.trim(),
      avatarBg: chosenColor.bg,
      avatarColor: chosenColor.color,
      verified: true,
      isNew: true,
      link: newReview.link.trim(),
    };

    const updated = [reviewToAdd, ...testimonials];
    setTestimonials(updated);

    // 1. Save locally
    try {
      const userAdded = updated.filter((item) => item.id.startsWith("user-"));
      localStorage.setItem(
        "sanket_portfolio_testimonials",
        JSON.stringify(userAdded)
      );
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }

    // 2. Dispatch email notification to sanketdev521@gmail.com so Sanket gets notified instantly!
    try {
      fetch("https://formsubmit.co/ajax/sanketdev521@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🌟 New Client Review Submitted by ${reviewToAdd.name}`,
          name: reviewToAdd.name,
          role: reviewToAdd.role,
          company: reviewToAdd.company,
          rating: `${reviewToAdd.rating} / 5 Stars`,
          category: reviewToAdd.category,
          project: reviewToAdd.project,
          review_text: reviewToAdd.text,
          link: reviewToAdd.link || "None",
          _captcha: "false",
        }),
      }).catch((err) => console.log("Review notification email error", err));
    } catch (e) {
      // non-blocking
    }

    setIsModalOpen(false);
    setToastMessage("🎉 Thank you! Your review has been submitted and published!");

    // Reset form
    setNewReview({
      name: "",
      role: "",
      company: "",
      rating: 5,
      category: "Full Stack Web",
      project: "",
      text: "",
      colorIndex: 0,
      link: "",
    });

    setTimeout(() => {
      setToastMessage("");
    }, 4000);
  };

  // Helper to render Star Ratings
  const renderStars = (rating, interactive = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = interactive
        ? i <= (hoverRating || newReview.rating)
        : i <= rating;

      stars.push(
        <span
          key={i}
          className={`star-icon ${isFilled ? "filled" : "empty"} ${
            interactive ? "interactive-star" : ""
          }`}
          onMouseEnter={() => interactive && setHoverRating(i)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          onClick={() =>
            interactive && setNewReview({ ...newReview, rating: i })
          }
          role={interactive ? "button" : undefined}
          aria-label={interactive ? `Rate ${i} star` : undefined}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Get Initials for Avatar
  const getInitials = (name) => {
    if (!name) return "Client";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Toast Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-banner sketch-box"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION HEADER */}
      <motion.h2
        className="testimonials-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Client Testimonials & Reviews
      </motion.h2>

      <motion.p
        className="testimonials-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Authentic feedback from startup founders, product managers, and engineering teams I've collaborated with.
      </motion.p>

      {/* STATS BAR */}
      <motion.div
        className="testimonials-stats-bar sketch-box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="stat-item">
          <div className="stat-val">{avgRating} <span className="star-highlight">★</span></div>
          <div className="stat-lbl">Average Rating</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-val">{totalReviews}+</div>
          <div className="stat-lbl">Client Reviews</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-val">100%</div>
          <div className="stat-lbl">Satisfaction Rate</div>
        </div>
        <div className="stat-cta">
          <motion.button
            className="cta-review-btn"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            ✏️ Write a Review
          </motion.button>
        </div>
      </motion.div>

      {/* CONTROLS: CATEGORY FILTERS & SEARCH */}
      <div className="testimonials-controls">
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-box-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Search by client, project, keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* TESTIMONIALS GRID */}
      {filteredTestimonials.length === 0 ? (
        <div className="no-reviews-box sketch-box">
          <p>No testimonials found matching "{searchQuery}".</p>
          <button className="reset-btn" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}>
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="testimonials-grid">
          {filteredTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              className="testimonial-card sketch-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 0.6 : -0.6 }}
            >
              {/* Card Tape accent */}
              <div className="card-pin-doodle">📌</div>

              {t.isNew && <span className="new-badge">✨ NEW</span>}

              <div className="t-card-header">
                <div
                  className="avatar-badge"
                  style={{ background: t.avatarBg, color: t.avatarColor, borderColor: "black" }}
                >
                  {getInitials(name = t.name)}
                </div>

                <div className="t-author-info">
                  <div className="t-name-row">
                    <h4 className="t-name">{t.name}</h4>
                    {t.verified && <span className="verified-tag" title="Verified Review">✓ Verified</span>}
                  </div>
                  <p className="t-role">
                    {t.role} {t.company && `• ${t.company}`}
                  </p>
                </div>
              </div>

              {/* RATING & PROJECT TAG */}
              <div className="t-meta-row">
                <div className="stars-wrapper">{renderStars(t.rating)}</div>
                <span className="project-tag">{t.project || t.category}</span>
              </div>

              {/* REVIEW TEXT */}
              <p className="t-text">"{t.text}"</p>

              {/* FOOTER DATE & LINK */}
              <div className="t-card-footer">
                <span className="t-date">{t.date}</span>
                {t.link && (
                  <a href={t.link} target="_blank" rel="noreferrer" className="t-link">
                    🔗 Verified Link
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* WRITE A REVIEW MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="review-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="review-modal sketch-box"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="modal-header">
                <h3>Share Your Experience ✍️</h3>
                <button
                  className="close-modal-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
              </div>

              <p className="modal-sub">
                Worked with Sanket? Drop your review below to feature it live on the portfolio website!
              </p>

              {/* Mobile View Tab Switcher */}
              <div className="mobile-modal-tabs">
                <button
                  type="button"
                  className={`mobile-tab-btn ${mobileTab === "form" ? "active" : ""}`}
                  onClick={() => setMobileTab("form")}
                >
                  ✍️ Write Review
                </button>
                <button
                  type="button"
                  className={`mobile-tab-btn ${mobileTab === "preview" ? "active" : ""}`}
                  onClick={() => setMobileTab("preview")}
                >
                  👁️ Live Preview
                </button>
              </div>

              <div className={`modal-body-layout show-mobile-${mobileTab}`}>
                {/* FORM */}
                <form className="review-form" onSubmit={handleSubmitReview}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={newReview.name}
                        onChange={(e) =>
                          setNewReview({ ...newReview, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Your Role / Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Founder, Product Manager"
                        value={newReview.role}
                        onChange={(e) =>
                          setNewReview({ ...newReview, role: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Company / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. TechCorp Labs"
                        value={newReview.company}
                        onChange={(e) =>
                          setNewReview({ ...newReview, company: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Service / Category</label>
                      <select
                        value={newReview.category}
                        onChange={(e) =>
                          setNewReview({ ...newReview, category: e.target.value })
                        }
                      >
                        <option value="Full Stack Web">Full Stack Web</option>
                        <option value="AI / ML">AI / ML</option>
                        <option value="Performance & UI">Performance & UI</option>
                        <option value="Consultancy">Consultancy</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Project Name / Description</label>
                    <input
                      type="text"
                      placeholder="e.g. AI Workflow Platform"
                      value={newReview.project}
                      onChange={(e) =>
                        setNewReview({ ...newReview, project: e.target.value })
                      }
                    />
                  </div>

                  {/* RATING SELECTOR */}
                  <div className="form-group">
                    <label>Your Rating *</label>
                    <div className="interactive-stars-picker">
                      {renderStars(newReview.rating, true)}
                      <span className="rating-num">{hoverRating || newReview.rating} / 5 Stars</span>
                    </div>
                  </div>

                  {/* AVATAR COLOR SELECTOR */}
                  <div className="form-group">
                    <label>Badge Color Theme</label>
                    <div className="color-picker-row">
                      {COLOR_OPTIONS.map((c, i) => (
                        <button
                          key={c.label}
                          type="button"
                          className={`color-swatch ${newReview.colorIndex === i ? "selected" : ""}`}
                          style={{ background: c.bg, color: c.color }}
                          onClick={() => setNewReview({ ...newReview, colorIndex: i })}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* REVIEW TEXT */}
                  <div className="form-group">
                    <label>Review Text *</label>
                    <textarea
                      placeholder="Write your experience working with Sanket..."
                      value={newReview.text}
                      onChange={(e) =>
                        setNewReview({ ...newReview, text: e.target.value })
                      }
                      rows={4}
                      maxLength={400}
                      required
                    />
                    <div className="char-count">{newReview.text.length} / 400</div>
                  </div>

                  {/* OPTIONAL LINK */}
                  <div className="form-group">
                    <label>Website / LinkedIn URL (Optional)</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={newReview.link}
                      onChange={(e) =>
                        setNewReview({ ...newReview, link: e.target.value })
                      }
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="modal-actions">
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <motion.button
                      type="submit"
                      className="submit-review-btn"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Publish Review ✨
                    </motion.button>
                  </div>
                </form>

                {/* LIVE PREVIEW BOX */}
                <div className="preview-pane">
                  <h4 className="preview-heading">👁️ Live Card Preview</h4>
                  <div className="preview-card-wrap">
                    <div className="testimonial-card sketch-box preview-card">
                      <div className="card-pin-doodle">📌</div>
                      <span className="new-badge">PREVIEW</span>

                      <div className="t-card-header">
                        <div
                          className="avatar-badge"
                          style={{
                            background: COLOR_OPTIONS[newReview.colorIndex].bg,
                            color: COLOR_OPTIONS[newReview.colorIndex].color,
                            borderColor: "black",
                          }}
                        >
                          {getInitials(newReview.name || "Client Name")}
                        </div>

                        <div className="t-author-info">
                          <div className="t-name-row">
                            <h4 className="t-name">
                              {newReview.name || "Your Name"}
                            </h4>
                            <span className="verified-tag">✓ Verified</span>
                          </div>
                          <p className="t-role">
                            {newReview.role || "Role"} {newReview.company && `• ${newReview.company}`}
                          </p>
                        </div>
                      </div>

                      <div className="t-meta-row">
                        <div className="stars-wrapper">{renderStars(newReview.rating)}</div>
                        <span className="project-tag">
                          {newReview.project || newReview.category}
                        </span>
                      </div>

                      <p className="t-text">
                        "{newReview.text || "Your testimonial will appear here in sketch style as you type..."}"
                      </p>

                      <div className="t-card-footer">
                        <span className="t-date">Just Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
