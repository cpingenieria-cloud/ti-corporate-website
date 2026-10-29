:root {
  --bg: #07141f;
  --bg-soft: #0d1d2a;
  --panel: #112536;
  --panel-2: #132d3f;
  --text: #edf3f8;
  --muted: #a8bac8;
  --primary: #35c9a6;
  --primary-strong: #1d9d87;
  --accent: #6cb6ff;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 96px 0;
}

.eyebrow {
  display: inline-block;
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 18px;
}

.section-heading {
  margin-bottom: 40px;
}

.section-heading h2,
.about-content h2,
.cta-box h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  font-weight: 800;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(7, 20, 31, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #031416;
  font-size: 0.85rem;
}

.nav-links {
  display: flex;
  gap: 26px;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav-links a:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 14px 22px;
  font-weight: 700;
  transition: 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #061a1e;
  box-shadow: var(--shadow);
}

.btn-primary:hover {
  transform: translateY(-1px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  border: 1px solid var(--line);
}

.hero {
  padding: 100px 0 60px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.badge {
  display: inline-block;
  background: rgba(53, 201, 166, 0.12);
  color: var(--primary);
  border: 1px solid rgba(53, 201, 166, 0.2);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.8rem;
  margin-bottom: 18px;
  font-weight: 600;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  margin-bottom: 20px;
}

.hero-content p {
  color: var(--muted);
  font-size: 1.05rem;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  gap: 18px;
  margin: 32px 0 28px;
  flex-wrap: wrap;
}

.hero-list {
  list-style: none;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.hero-list li::before {
  content: "✓ ";
  color: var(--primary);
  font-weight: 700;
  margin-right: 8px;
}

.hero-card {
  background: linear-gradient(180deg, #102a3d, #0d1f2e);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.stat {
  padding: 24px 18px;
  border-bottom: 1px solid var(--line);
}

.stat:last-child {
  border-bottom: none;
}

.stat strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 6px;
}

.stat span {
  color: var(--muted);
}

.services {
  background: rgba(255, 255, 255, 0.01);
}

.service-grid,
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.card,
.project-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.card h3,
.project-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.card p,
.project-card p,
.about-content p,
.footer p {
  color: var(--muted);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: center;
}

.about-content p + p {
  margin-top: 16px;
}

.about-box {
  display: grid;
  gap: 18px;
}

.mini-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px;
}

.mini-card strong {
  display: block;
  font-size: 2.1rem;
  margin-bottom: 6px;
}

.mini-card span {
  color: var(--muted);
}

.cta-box {
  background: linear-gradient(135deg, rgba(53, 201, 166, 0.12), rgba(108, 182, 255, 0.08));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 40px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer {
  padding: 40px 0 80px;
  border-top: 1px solid var(--line);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 32px;
}

.footer h4 {
  margin-bottom: 14px;
}

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }

  .hero-grid,
  .about-grid,
  .service-grid,
  .project-grid,
  .footer-grid,
  .cta-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .cta-box {
    justify-content: start;
  }
}

@media (max-width: 600px) {
  .hero {
    padding-top: 80px;
  }

  .btn {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }
}
