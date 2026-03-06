# WTF Agency Proposal Presentation System - PRD

## Original Problem Statement
Create a professional React proposal presentation system for WTF Agency with dynamic client routing and JSON-driven content. Single React application with React Router for dynamic routes (/:clientId). JSON configuration for unlimited client proposals.

## User Choices
- Dark elegant theme (wine/luxury feel)
- Animations/transitions - YES
- PDF export - NO
- Landing page - NO (direct client routes)
- Demo clients: wine, honda, census (all with data)

## Architecture
- **Frontend:** React 19 + React Router + Framer Motion + Tailwind CSS
- **Data:** JSON-driven proposals in `/src/data/proposals.json`
- **Routing:** Dynamic `/:clientId` routes
- **Components:** ProposalHeader, HeroSection, PricingTable, Timeline, ContactSection, ErrorPage

## What's Been Implemented (Jan 2026)
- [x] Dynamic routing for `/wine`, `/honda`, `/census`
- [x] JSON configuration system with client-specific data
- [x] ProposalHeader with WTF branding and glass morphism
- [x] Full-screen HeroSection with parallax background
- [x] 3-tier PricingTable with hover effects and recommended badge
- [x] Expandable Timeline with scroll animations
- [x] ContactSection with CTA buttons (email integration)
- [x] 404 Error page with available proposals
- [x] Client-specific accent colors (wine: burgundy, honda: red, census: blue)
- [x] Mobile responsive design
- [x] Smooth Framer Motion animations

## User Personas
1. **Agency Account Managers** - Send proposal links to clients
2. **Prospective Clients** - View personalized proposals
3. **Agency Leadership** - Review proposal templates

## Core Requirements (Static)
1. React Router dynamic routing
2. JSON-driven content system
3. Client-specific theming
4. Professional dark theme
5. Mobile responsive
6. Error handling for invalid clients

## Prioritized Backlog

### P0 (Completed)
- Dynamic client routing
- JSON data system
- All core components
- 3 demo clients

### P1 (Future)
- PDF export functionality
- Analytics tracking
- Client proposal acceptance workflow

### P2 (Future)
- Multi-language support
- Custom domain per client
- Email notification on proposal view
- A/B testing for pricing pages

## File Structure
```
/app/frontend/src/
├── data/
│   └── proposals.json       # All client data
├── pages/
│   ├── ProposalPage.jsx     # Main proposal view
│   └── ErrorPage.jsx        # 404 handler
├── components/
│   ├── ProposalHeader.jsx   # Fixed header
│   ├── HeroSection.jsx      # Hero with background
│   ├── PricingTable.jsx     # 3-tier pricing
│   ├── Timeline.jsx         # Expandable phases
│   └── ContactSection.jsx   # CTA section
└── App.js                   # Router setup
```

## Adding New Clients
Edit `/app/frontend/src/data/proposals.json` and add a new client object with:
- id, clientName, industry, accentColor, heroImage
- hero (headline, subtitle)
- pricing array (3 tiers)
- timeline array (phases)
- contact object

## URLs
- Wine: `/wine`
- Honda: `/honda`
- Census: `/census`
- Any invalid: redirects to `/404`
