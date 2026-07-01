# Aditya Portfolio — PRD

## Original problem statement
Build a premium developer portfolio for Aditya positioned as **"Software Engineer × Business Analyst × Agile Practitioner"** targeting FAANG-level recruiters, US/UK product companies and freelance clients.

## Personas
- FAANG / product-company hiring managers & recruiters
- Freelance clients (SMBs looking for Java/Spring Boot + BA hybrid)
- HR / talent partners screening fresher-with-BA-edge candidates

## Core requirements (static)
- Hero with typing animation + code-card credibility panel
- About with strength / differentiator / long-term goal
- Technical Skills with animated numeric skill bars (grouped)
- Business Analyst Skills grouped chips (Agile, BRD/FRD/SRS, UML, Jira etc.)
- Services grid for freelance framing
- Projects (8) with filter + rich modal (Problem/Solution/Value/Stack/Features/Future/Agile)
- Case Studies deep-dive for 2 featured projects
- Agile Lifecycle horizontal steps
- Achievements animated counters (data from /api/profile/stats)
- Education timeline
- Certifications (12)
- Testimonials (representative)
- FAQ accordion
- Contact form (persists to MongoDB) + multi-channel (email, phone, WhatsApp, LinkedIn)
- SEO metadata + Schema.org Person
- Dark navy + electric blue theme, glassmorphism, mouse glow, scroll progress

## Implemented (2026-06-30)
- Backend FastAPI: /api/, /api/contact (POST/GET), /api/profile/stats, /api/status
- MongoDB collection contact_messages persisted with UTC timestamps
- Full 13-section React frontend with framer-free CSS animations, IntersectionObserver reveals, custom typing effect, mouse glow, scroll progress
- 12 certifications, 8 projects (3 real + 5 conceptual), representative testimonials
- SEO title/description/OG/Twitter/Structured Data
- Data-testid coverage on all interactive elements
- Testing agent: 7/7 backend endpoints + all critical frontend flows pass

## Iteration (2026-07-01)
- Removed "Pratihast" — Hero now shows just "Aditya."
- Removed LeetCode + GitHub links from Contact, Footer, structured data
- Expanded certifications from 3 → 12 and updated Hero + backend stats counter

## Prioritized backlog
- P1: Real photograph for hero portrait (currently unused, resume image reused for Download Resume button)
- P1: Blog / notes section for FAANG-track thought leadership
- P2: Case-study standalone pages (long-form) at /case/:id
- P2: Light-mode toggle
- P2: Analytics + view-count for projects
- P2: Real Google Analytics/Plausible integration for SEO ranking

## Deferred
- Three.js / Particles background (perf-heavy, skipped by design)
- Blogs section MVP
- Testimonials from real clients (currently marked "representative")
