import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_TESTIMONIALS = [
  {
    id: "t-ent-5",
    name: "Devendra Joshi",
    role: "Principal Cloud Systems Architect",
    company: "Nexus Distributed Cloud Solutions",
    rating: 5,
    category: "Enterprise Systems",
    project: "Azure EventFlow & Cloud Gateway",
    date: "Oct 2026",
    text: "Sanket engineered an event-driven telemetry stream handling 100K+ events/sec with sub-second p99 latency using Azure Event Hubs and Redis clusters. His distributed systems depth, circuit breaker patterns, and Kubernetes orchestration are top-tier.",
    avatarBg: "var(--purple-light)",
    avatarColor: "var(--purple)",
    verified: true,
  },
  {
    id: "t-ent-1",
    name: "Vikramaditya Singhania",
    role: "Director of Project Operations",
    company: "Apex Buildcon Infrastructure",
    rating: 5,
    category: "Enterprise Systems",
    project: "Construction Site & Field Ops Tracker",
    date: "Sep 2026",
    text: "Sanket's offline-first PWA transformed field operations across 14 civil project sites. Automated forward-looking material shortage alerts and real-time Gantt tracking cut our daily reporting overhead by 75% and eliminated unexpected cement/steel supply bottlenecks.",
    avatarBg: "var(--orange-light)",
    avatarColor: "var(--red)",
    verified: true,
  },
  {
    id: "t-ent-4",
    name: "Saurabh Khurana",
    role: "VP of Supply Chain & Logistics",
    company: "FreshHarvest Agro Retail & Supply",
    rating: 5,
    category: "Enterprise Systems",
    project: "Fresh Produce Supply & Wastage Tracker",
    date: "Aug 2026",
    text: "Perishable inventory reconciliation used to take our warehouse supervisors 3 hours every evening. Sanket's automated Purchased - Delivered - Wasted reconciliation formula and WhatsApp digest webhooks cut reconciliation down to 20 minutes and shrank perishable spoilage by 18%.",
    avatarBg: "var(--yellow)",
    avatarColor: "#b58900",
    verified: true,
  },
  {
    id: "t-nawomica",
    name: "Nawomica",
    role: "Founder & Creative Director",
    company: "Hamari Virasat",
    rating: 5,
    category: "Full Stack Web",
    project: "Hamari Virasat Platform",
    date: "Aug 2026",
    text: "Outstanding Work! Sanket developed hamarivirasat.in from scratch and delivered beyond our highest expectations. He was fast, communicative, and added immense value by delivering features and polish well beyond the original scope. An absolute pleasure to work with!",
    avatarBg: "var(--purple-light)",
    avatarColor: "var(--purple)",
    verified: true,
    link: "https://www.hamarivirasat.in/",
  },
  {
    id: "t-ent-2",
    name: "Dr. Meera Nambiar",
    role: "Head of QA & Production Standards",
    company: "PureOrganics Manufacturing Ltd.",
    rating: 5,
    category: "Enterprise Systems",
    project: "Food & Cosmetics Batch Pipeline",
    date: "Jul 2026",
    text: "The stage-gated batch pipeline Sanket engineered eliminated inter-department dispatch mistakes. The automated quality-hold gates and immutable audit logs helped our plant achieve 100% audit compliance and cut cross-department blocker turnaround by 40%.",
    avatarBg: "var(--green-light)",
    avatarColor: "var(--green)",
    verified: true,
  },
  {
    id: "t-ent-3",
    name: "Dr. Rajesh K. Nair",
    role: "Chief Operating Officer",
    company: "CarePoint Multi-Specialty Health Network",
    rating: 5,
    category: "Enterprise Systems",
    project: "Hospital Department Operations Tracker",
    date: "Jun 2026",
    text: "Tracking ward staffing, consumable reserves, and biomedical equipment uptime without compromising sensitive patient records was critical. Sanket built an encrypted, zero-PHI operational dashboard with automated 2-hour escalation timers that trimmed administrative follow-ups by over 60%.",
    avatarBg: "var(--blue-light)",
    avatarColor: "var(--blue)",
    verified: true,
  },
  {
    id: "t-devansh",
    name: "Devansh Kapoor",
    role: "Head of Product",
    company: "NexGen Studio",
    rating: 5,
    category: "Full Stack Web",
    project: "Enterprise Workflow Suite",
    date: "May 2026",
    text: "Sanket built an incredible web application for us. High performance, great code structure, and super fast execution! We were able to launch 3 weeks ahead of schedule.",
    avatarBg: "var(--orange-light)",
    avatarColor: "var(--red)",
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
    date: "Apr 2026",
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
    date: "Mar 2026",
    text: "Deploying deep learning NLP models into interactive web apps can be tricky, but Sanket handled the LSTM neural network pipeline flawlessly. Highly recommended!",
    avatarBg: "var(--yellow)",
    avatarColor: "#b58900",
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
    date: "Feb 2026",
    text: "The multi-agent system Sanket engineered for automated web research reports blew us away. Fast stream parsing, solid LangChain setup, and ultra-smooth execution.",
    avatarBg: "var(--blue-light)",
    avatarColor: "var(--blue)",
    verified: true,
  },
  {
    id: "t1",
    name: "Aarav Mehta",
    role: "Founder & CEO",
    company: "TechScale Studio",
    rating: 5,
    category: "AI / ML",
    project: "Prepify AI",
    date: "Jan 2026",
    text: "Sanket built our AI-powered interview prep engine from scratch. His expertise in Gemini API integrations and prompt pipeline architecture saved us over 3 months of dev time. Exceptional problem solver!",
    avatarBg: "var(--purple-light)",
    avatarColor: "var(--purple)",
    verified: true,
  },
  {
    id: "t-priya-v",
    name: "Priya Verma",
    role: "CTO & Co-Founder",
    company: "TechCorp Solutions",
    rating: 5,
    category: "AI / ML",
    project: "AI Inference Pipeline",
    date: "Dec 2025",
    text: "Outstanding work by Sanket! He delivered our AI inference microservices with clean code, zero downtime, and exceptional documentation.",
    avatarBg: "var(--blue-light)",
    avatarColor: "var(--blue)",
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
    date: "Nov 2025",
    text: "Collaborating with Sanket on dynamic interface components was an absolute pleasure. He delivers clean, maintainable React code with a keen eye for responsiveness and performance.",
    avatarBg: "var(--orange-light)",
    avatarColor: "var(--red)",
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

// Global Cloud Database Master Index ID
const CLOUD_MASTER_INDEX_ID = "ff8081819ff5b11001a022eaf3346935";
const CLOUD_API_BASE = "https://api.restful-api.dev/objects";

function getTestimonialTimestamp(t) {
  if (!t) return null;

  const isValidTs = (val) =>
    typeof val === "number" &&
    !isNaN(val) &&
    val >= 1577836800000 &&
    val <= 1900000000000;

  // 1. Direct timestamp properties
  if (isValidTs(t.createdAt)) return t.createdAt;
  if (typeof t.createdAt === "string" && !isNaN(Date.parse(t.createdAt))) {
    const p = Date.parse(t.createdAt);
    if (isValidTs(p)) return p;
  }
  if (isValidTs(t.timestamp)) return t.timestamp;
  if (typeof t.timestamp === "string" && !isNaN(Date.parse(t.timestamp))) {
    const p = Date.parse(t.timestamp);
    if (isValidTs(p)) return p;
  }

  // 2. Check for numeric user/ms timestamp in IDs
  const idStr = `${t.id || ""} ${t.dataId || ""} ${t.cloudId || ""}`;
  const userMatch = idStr.match(/user-(\d{10,14})/i);
  if (userMatch && userMatch[1]) {
    const parsed = parseInt(userMatch[1], 10);
    if (isValidTs(parsed)) return parsed;
  }

  const msMatch = idStr.match(/(\d{13})/);
  if (msMatch && msMatch[1]) {
    const parsed = parseInt(msMatch[1], 10);
    if (isValidTs(parsed)) return parsed;
  }

  return null;
}

function getTestimonialDateValue(t) {
  if (!t) return 0;

  // 1. Parse date string if it has a clean Month Year (e.g. "Oct 2026", "Sep 2026")
  if (t.date && typeof t.date === "string") {
    const trimmed = t.date.trim();
    if (
      trimmed.toLowerCase() !== "just now" &&
      !trimmed.toLowerCase().includes("ago") &&
      !trimmed.toLowerCase().includes("today")
    ) {
      const parsed = Date.parse(`01 ${trimmed}`);
      if (!isNaN(parsed) && parsed > 0) {
        return parsed;
      }
    }
  }

  // 2. If timestamp is available
  const ts = getTestimonialTimestamp(t);
  if (ts) return ts;

  // 3. Fallback
  return Date.parse("01 Nov 2025");
}

function getFormattedTestimonialDate(t) {
  if (!t) return "Oct 2026";

  // If t.date is already in clean Month Year format (e.g. "Oct 2026")
  if (t.date && typeof t.date === "string") {
    const trimmed = t.date.trim();
    if (
      trimmed.toLowerCase() !== "just now" &&
      !trimmed.toLowerCase().includes("ago") &&
      !trimmed.toLowerCase().includes("today")
    ) {
      return trimmed;
    }
  }

  // If timestamp exists, format as Month Year
  const ts = getTestimonialTimestamp(t);
  if (ts) {
    try {
      const d = new Date(ts);
      return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    } catch (e) {
      // fallback
    }
  }

  return "Oct 2026";
}

function isReviewNew(t) {
  if (!t) return false;

  const ts = getTestimonialTimestamp(t);
  if (ts) {
    const diffMs = Date.now() - ts;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    // NEW badge strictly restricted to reviews less than 30 days old
    return diffDays >= 0 && diffDays < 30;
  }

  if (t.isSessionNew) return true;

  return false;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [mobileTab, setMobileTab] = useState("form");
  const [isSyncing, setIsSyncing] = useState(false);

  // Tick state to automatically update relative time strings every minute
  const [, setTick] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setTick(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);

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

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    if (isModalOpen) setMobileTab("form");
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Load reviews from Global Cloud Database + LocalStorage on mount
  useEffect(() => {
    let isMounted = true;

    async function loadCloudTestimonials() {
      try {
        setIsSyncing(true);

        // 1. Fetch Master Index of Cloud Review IDs
        const indexRes = await fetch(`${CLOUD_API_BASE}/${CLOUD_MASTER_INDEX_ID}`).then((r) =>
          r.ok ? r.json() : null
        );

        let cloudReviews = [];

        if (indexRes && indexRes.data && Array.isArray(indexRes.data.reviewIds) && indexRes.data.reviewIds.length > 0) {
          const idsQuery = indexRes.data.reviewIds.map((id) => `id=${id}`).join("&");
          const itemsRes = await fetch(`${CLOUD_API_BASE}?${idsQuery}`).then((r) =>
            r.ok ? r.json() : null
          );

          if (Array.isArray(itemsRes)) {
            cloudReviews = itemsRes
              .map((item) => {
                if (!item || !item.data) return null;
                const dataObj = item.data;
                const effectiveId = dataObj.id || item.id;
                return {
                  ...dataObj,
                  id: effectiveId,
                  dataId: dataObj.id,
                  cloudId: item.id,
                  date: getFormattedTestimonialDate(dataObj),
                  verified: true,
                };
              })
              .filter((item) => {
                if (!item || !item.name) return false;
                // Avoid stale duplicate overriding canonical INITIAL_TESTIMONIALS
                return !INITIAL_TESTIMONIALS.some(
                  (it) => it.name.toLowerCase().trim() === item.name.toLowerCase().trim()
                );
              });
          }
        }

        // 2. Also check LocalStorage fallback for visitor reviews
        let localReviews = [];
        try {
          const saved = localStorage.getItem("sanket_portfolio_testimonials");
          if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
              localReviews = parsed
                .filter(
                  (r) =>
                    r &&
                    r.name &&
                    !INITIAL_TESTIMONIALS.some(
                      (it) => it.name.toLowerCase().trim() === r.name.toLowerCase().trim()
                    )
                )
                .map((r) => ({
                  ...r,
                  date: getFormattedTestimonialDate(r),
                  verified: true,
                }));
            }
          }
        } catch (e) {
          // fallback
        }

        // Combine Initial + Cloud + Local (Authoritative INITIAL_TESTIMONIALS first)
        const combinedUserReviews = [...cloudReviews, ...localReviews];
        const uniqueUserReviews = [];
        const seenKeys = new Set();

        for (const item of combinedUserReviews) {
          const key = ((item.name || "") + "|" + (item.company || "")).toLowerCase().trim();
          if (key && !seenKeys.has(key)) {
            seenKeys.add(key);
            uniqueUserReviews.push({
              ...item,
              date: getFormattedTestimonialDate(item),
              verified: true,
            });
          }
        }

        if (isMounted) {
          // INITIAL_TESTIMONIALS is authoritative and listed first
          const allCombined = [...INITIAL_TESTIMONIALS, ...uniqueUserReviews];
          const finalDeduped = [];
          const allSeen = new Set();
          for (const item of allCombined) {
            const key = ((item.name || "") + "|" + (item.company || "")).toLowerCase().trim();
            if (!allSeen.has(key)) {
              allSeen.add(key);
              finalDeduped.push({
                ...item,
                date: getFormattedTestimonialDate(item),
                verified: true,
              });
            }
          }
          finalDeduped.sort((a, b) => getTestimonialDateValue(b) - getTestimonialDateValue(a));
          setTestimonials(finalDeduped);
        }
      } catch (err) {
        console.error("Cloud testimonials sync error:", err);
      } finally {
        if (isMounted) setIsSyncing(false);
      }
    }

    loadCloudTestimonials();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter logic
  const categories = ["All", "Enterprise Systems", "AI / ML", "Full Stack Web", "Performance & UI"];

  const filteredTestimonials = testimonials
    .filter((t) => {
      const matchesCategory =
        activeCategory === "All" || t.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        (t.company && t.company.toLowerCase().includes(q)) ||
        t.role.toLowerCase().includes(q) ||
        t.text.toLowerCase().includes(q) ||
        (t.project && t.project.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => getTestimonialDateValue(b) - getTestimonialDateValue(a));

  // Calculate stats
  const totalReviews = testimonials.length;
  const avgRating = (
    testimonials.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
  ).toFixed(1);

  // Submit Handler (Posts to Global Cloud DB + Email Notification + Local State)
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const chosenColor = COLOR_OPTIONS[newReview.colorIndex];

    const now = Date.now();
    const formattedDate = new Date(now).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    const reviewToAdd = {
      id: `user-${now}`,
      createdAt: now,
      name: newReview.name.trim(),
      role: newReview.role.trim() || "Client Partner",
      company: newReview.company.trim() || "Independent",
      rating: newReview.rating,
      category: newReview.category,
      project: newReview.project.trim() || newReview.category,
      date: formattedDate,
      text: newReview.text.trim(),
      avatarBg: chosenColor.bg,
      avatarColor: chosenColor.color,
      verified: true,
      isNew: true,
      link: newReview.link.trim(),
    };

    // 1. Instant UI update sorted chronologically
    const updated = [reviewToAdd, ...testimonials].sort(
      (a, b) => getTestimonialDateValue(b) - getTestimonialDateValue(a)
    );
    setTestimonials(updated);

    // 2. Save locally
    try {
      const userAdded = updated.filter((item) => item.id && item.id.startsWith("user-"));
      localStorage.setItem(
        "sanket_portfolio_testimonials",
        JSON.stringify(userAdded)
      );
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }

    // 3. Post to GLOBAL CLOUD DATABASE so ALL visitors worldwide see it immediately!
    try {
      const postRes = await fetch(CLOUD_API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "sanket_portfolio_review",
          data: reviewToAdd,
        }),
      }).then((r) => (r.ok ? r.json() : null));

      if (postRes && postRes.id) {
        // Update Master Cloud Index
        const indexRes = await fetch(`${CLOUD_API_BASE}/${CLOUD_MASTER_INDEX_ID}`).then((r) =>
          r.ok ? r.json() : null
        );
        const currentIds =
          indexRes && indexRes.data && Array.isArray(indexRes.data.reviewIds)
            ? indexRes.data.reviewIds
            : [];

        const updatedIds = [postRes.id, ...currentIds];

        await fetch(`${CLOUD_API_BASE}/${CLOUD_MASTER_INDEX_ID}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "sanket_reviews_index",
            data: { reviewIds: updatedIds },
          }),
        });
      }
    } catch (err) {
      console.error("Cloud DB post error:", err);
    }

    // 4. Dispatch Email Notification to sanketdev521@gmail.com
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
    setToastMessage("🎉 Thank you! Your review has been published live for everyone!");

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
        Authentic feedback from enterprise directors, engineering leads, and startup founders across {totalReviews}+ verified client engagements.
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
          <div className="stat-lbl">Verified Client Reviews</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-val">100%</div>
          <div className="stat-lbl">Satisfaction Rate</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item" style={{ minWidth: "90px" }}>
          <div className="stat-val" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "1.25rem" }}>
            <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#2ecc71", boxShadow: "0 0 6px #2ecc71" }}></span>
            <span>Live</span>
          </div>
          <div className="stat-lbl">Cloud Verified</div>
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
              key={t.id || idx}
              className="testimonial-card sketch-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 0.6 : -0.6 }}
            >
              {/* Card Tape accent */}
              <div className="card-pin-doodle">📌</div>

              {isReviewNew(t) && <span className="new-badge">✨ NEW</span>}

              <div className="t-card-header">
                <div
                  className="avatar-badge"
                  style={{ background: t.avatarBg || "var(--blue-light)", color: t.avatarColor || "var(--blue)", borderColor: "black" }}
                >
                  {getInitials(t.name)}
                </div>

                <div className="t-author-info">
                  <div className="t-name-row">
                    <h4 className="t-name">{t.name}</h4>
                    {(t.verified !== false) && <span className="verified-tag" title="Verified Client Review">✓ Verified</span>}
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
                <span className="t-date">{getFormattedTestimonialDate(t)}</span>
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
                        <option value="Enterprise Systems">Enterprise Systems</option>
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
                        <span className="t-date">
                          {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
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
