/* ============================================================
   Site content — edit THIS file to update the whole site.
   Works on file:// and via a server (no build step).
   ============================================================ */
window.SITE_DATA = {
  "meta": {
    "name": "Humoyun Mahmudjonov",
    "handle": "qomusiy",
    "role": "Python & Web Developer",
    "location": "Tashkent, Uzbekistan",
    "email": "hasanovd366@gmail.com",
    "tagline": "I build backends that don't fall over, and the web that sits on top of them.",
    "available": true,
    "availableText": "Available for freelance & full-time",
    "resumeUrl": "#",
    "intro": [
      "I'm Humoyun — a developer who likes turning fuzzy ideas into systems that quietly do their job. Most of my time goes into Python on the backend (APIs, automation, data) and the JavaScript that brings it to life in the browser.",
      "The handle qomusiy comes from the Uzbek word for an encyclopedist — someone who tries to understand a little of everything and connect the dots. That's the way I approach engineering: learn the whole stack, sweat the details, ship things that last."
    ]
  },
  "socials": [
    {
      "label": "GitHub",
      "url": "https://github.com/qomusiy",
      "handle": "@qomusiy"
    },
    {
      "label": "Telegram",
      "url": "https://t.me/qomusiy",
      "handle": "@qomusiy"
    },
    {
      "label": "LinkedIn",
      "url": "#",
      "handle": "Humoyun Mahmudjonov"
    },
    {
      "label": "Email",
      "url": "mailto:hasanovd366@gmail.com",
      "handle": "hasanovd366@gmail.com"
    }
  ],
  "stats": [
    {
      "value": "5+",
      "label": "Years writing code"
    },
    {
      "value": "30+",
      "label": "Projects shipped"
    },
    {
      "value": "12",
      "label": "Open-source repos"
    },
    {
      "value": "∞",
      "label": "Cups of tea"
    }
  ],
  "stack": [
    {
      "group": "Languages",
      "items": [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Bash",
        "HTML",
        "CSS"
      ]
    },
    {
      "group": "Backend",
      "items": [
        "Django",
        "FastAPI",
        "Flask",
        "Django REST",
        "Celery",
        "WebSockets",
        "GraphQL"
      ]
    },
    {
      "group": "Frontend",
      "items": [
        "React",
        "Next.js",
        "Vue",
        "Tailwind CSS",
        "Vite",
        "Alpine.js"
      ]
    },
    {
      "group": "Data & Infra",
      "items": [
        "PostgreSQL",
        "Redis",
        "Docker",
        "Nginx",
        "Linux",
        "Pandas",
        "Playwright"
      ]
    },
    {
      "group": "Tools",
      "items": [
        "Git",
        "GitHub Actions",
        "Postman",
        "Figma",
        "pytest",
        "Sentry"
      ]
    }
  ],
  "services": [
    {
      "title": "Backend & APIs",
      "body": "Robust REST and GraphQL APIs in Django or FastAPI — auth, payments, background jobs, and the boring reliability work that keeps them up at 3am."
    },
    {
      "title": "Full-stack web apps",
      "body": "From a blank repo to a deployed product: data model, server, frontend, CI/CD, and the database that ties it together."
    },
    {
      "title": "Automation & scraping",
      "body": "Bots, scrapers, and pipelines that move data around so humans don't have to — Telegram bots, ETL jobs, scheduled tasks."
    },
    {
      "title": "Performance & rescue",
      "body": "Inherited a slow or crashing codebase? I profile, refactor, add tests, and bring it back to a place you can build on."
    }
  ],
  "projects": [
    {
      "title": "Qomusiy",
      "year": "2025",
      "category": "Personal knowledge engine",
      "description": "A self-hosted knowledge base and CMS that turns scattered notes, bookmarks, and snippets into a searchable, linked graph. Full-text search, tagging, and a clean reading view.",
      "tags": [
        "FastAPI",
        "PostgreSQL",
        "React",
        "Full-text search"
      ],
      "url": "#",
      "repo": "#",
      "featured": true
    },
    {
      "title": "InkAPI",
      "year": "2025",
      "category": "Headless content API",
      "description": "A headless CMS API powering several small sites, with role-based access, image processing, and a typed SDK generated from the OpenAPI schema.",
      "tags": [
        "FastAPI",
        "Redis",
        "Docker",
        "OpenAPI"
      ],
      "url": "#",
      "repo": "#",
      "featured": true
    },
    {
      "title": "Ledgerly",
      "year": "2024",
      "category": "SaaS — finance",
      "description": "A multi-tenant invoicing and expense-tracking app for freelancers. Recurring invoices, Stripe billing, PDF generation, and per-workspace analytics.",
      "tags": [
        "Django",
        "Celery",
        "Stripe",
        "PostgreSQL"
      ],
      "url": "#",
      "repo": "#",
      "featured": true
    },
    {
      "title": "Tezkor Bot",
      "year": "2024",
      "category": "Telegram automation",
      "description": "A Telegram bot serving 8k+ users with inline search, reminders, and a small admin dashboard. Built around an async queue so it never blocks.",
      "tags": [
        "Python",
        "aiogram",
        "Redis",
        "Webhooks"
      ],
      "url": "#",
      "repo": "#",
      "featured": false
    },
    {
      "title": "Scrapehouse",
      "year": "2023",
      "category": "Data pipeline",
      "description": "A configurable scraping framework with browser automation, retry logic, and a scheduler. Outputs clean datasets to Postgres and S3.",
      "tags": [
        "Playwright",
        "Pandas",
        "Celery",
        "S3"
      ],
      "url": "#",
      "repo": "#",
      "featured": false
    },
    {
      "title": "Portfolio CMS",
      "year": "2023",
      "category": "Open source",
      "description": "A lightweight, data-driven portfolio template (the ancestor of this very site) that renders entirely from a single JSON file. No build step required.",
      "tags": [
        "Vanilla JS",
        "HTML",
        "CSS",
        "JSON"
      ],
      "url": "#",
      "repo": "#",
      "featured": false
    }
  ],
  "experience": [
    {
      "role": "Freelance Full-Stack Developer",
      "company": "Self-employed",
      "period": "2023 — Present",
      "description": "Building and maintaining web apps and APIs for clients across e-commerce, edtech, and fintech. End-to-end: discovery, architecture, delivery, and support."
    },
    {
      "role": "Backend Developer",
      "company": "A startup (NDA)",
      "period": "2022 — 2023",
      "description": "Owned core Django services for a high-traffic marketplace — payments, search, and the notification system. Cut p95 API latency by ~40% through query and caching work."
    },
    {
      "role": "Junior Web Developer",
      "company": "Local agency",
      "period": "2021 — 2022",
      "description": "Shipped a dozen client sites and internal tools, learned to read other people's code, and discovered that the database is almost always the bottleneck."
    }
  ],
  "writing": [
    {
      "title": "Why I render my whole site from one JSON file",
      "date": "May 2025",
      "summary": "A small argument for boring, data-driven frontends — and the trade-offs against a real framework.",
      "url": "#"
    },
    {
      "title": "FastAPI vs Django in 2025: a practical take",
      "date": "Mar 2025",
      "summary": "When I reach for each, and why 'it depends' is actually a useful answer once you know what it depends on.",
      "url": "#"
    },
    {
      "title": "The query you didn't know was N+1",
      "date": "Jan 2025",
      "summary": "A field guide to spotting and killing the most common performance bug in ORM-backed apps.",
      "url": "#"
    }
  ]
};
