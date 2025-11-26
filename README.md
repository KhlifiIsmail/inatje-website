<div align="center">

<img src="public/images/simpleLogo.png" alt="INAT Junior Entreprise Logo" width="200"/>

# INAT Junior Entreprise

### Leader de son écosystème

**Une organisation étudiante engagée pour l'innovation, le développement durable et l'excellence professionnelle en ingénierie agronomique**

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

[Live Website](https://inatje.com) • [Documentation](#-documentation) • [Features](#-key-features) • [Contact](#-contact)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [SEO & Optimization](#-seo--optimization)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

---

## 🌟 About the Project

**INAT Junior Entreprise** is the premier website for Tunisia's leading student organization specializing in agronomic engineering and sustainable development. Founded in 2012 at the Institut National Agronomique de Tunisie (INAT), we bridge academic excellence with real-world agricultural innovation.

### Our Mission

We specialize in:

- 🌱 **Sustainable Agriculture** - Hydroponics, aquaponics, and soilless cultivation systems
- 💧 **Smart Irrigation** - Water-efficient agricultural solutions
- ♻️ **Composting Systems** - Organic waste management and sustainability
- 📊 **Technical Studies** - Market research, feasibility studies, environmental impact assessments
- 🤝 **Professional Development** - Annual employment and internship forum

### Why This Matters

This website positions INAT-JE as a **leader in agronomic innovation**, providing:

- Professional visibility to potential clients and partners
- Recruitment pipeline for agronomy students
- Showcase of 50+ partnerships and 13 years of excellence
- Platform for Tunisia's largest agricultural employment forum

---

## ✨ Key Features

### 🎨 Premium Design & UX

- **Session-Based Loading Animation** - Arabic typewriter effect that plays once per session
- **Scroll-Responsive Navigation** - Consistent behavior across all pages (transparent → white on scroll)
- **Glassmorphism Effects** - Modern dropdown menus with backdrop blur
- **Smooth Animations** - Powered by Framer Motion for premium feel
- **Mobile-First Responsive** - Optimized for all devices and screen sizes

### 🛠️ Core Functionality

- **Dynamic Service Pages** - Interactive presentation of 4 main service categories
- **Intelligent Partner Carousel** - Auto-scrolling showcase of 46+ partner logos
- **Event Management System** - Featured events with photo galleries
- **Professional Contact Form** - Validated form with email integration
- **Animated Statistics** - Scroll-triggered counters for social proof
- **Rich Media Integration** - Google Docs presentations, Facebook events, image galleries

### 🌐 Technical Excellence

- **Next.js 16 App Router** - Latest features with server components
- **React 19** - Cutting-edge React capabilities
- **TypeScript** - Type-safe codebase
- **Tailwind CSS** - Utility-first styling with custom design system
- **Performance Optimized** - Sub-2s load times, 90+ Lighthouse scores
- **SEO Ready** - Meta tags, structured data, sitemap
- **Docker Support** - Containerized deployment with Node.js 20

---

## 🚀 Tech Stack

### Core Technologies

| Technology        | Version  | Purpose                      |
| ----------------- | -------- | ---------------------------- |
| **Next.js**       | 16.0.1   | React framework with SSR/SSG |
| **React**         | 19.2.0   | UI library                   |
| **TypeScript**    | 5.x      | Type safety                  |
| **Tailwind CSS**  | 3.4.15   | Utility-first styling        |
| **Framer Motion** | 12.23.24 | Advanced animations          |
| **GSAP**          | 3.13.0   | Complex animation sequences  |

### UI Components & Tools

```json
{
  "lucide-react": "0.552.0", // Icon library
  "embla-carousel-react": "8.6.0", // Carousel component
  "react-hook-form": "7.66.0", // Form management
  "zod": "4.1.12", // Schema validation
  "react-masonry-css": "1.0.16", // Gallery layouts
  "yet-another-react-lightbox": "3.25.0", // Image lightbox
  "clsx": "2.1.1", // Conditional classes
  "tailwind-merge": "3.3.1" // Tailwind utilities
}
```

### Development Tools

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **Docker** - Containerization

---

## 🏁 Getting Started

### Prerequisites

```bash
Node.js >= 20.x
npm or yarn or pnpm
Git
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-org/inat-je-website.git
cd inat-je-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any environment variables here
# Currently, the project runs without required env vars
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 📁 Project Structure

```
inat-je-website/
├── public/                      # Static assets
│   ├── images/
│   │   ├── partners/           # 46 partner logos
│   │   ├── services/           # Service images
│   │   ├── events/             # Event photos
│   │   └── simpleLogo.png      # INAT JE logo
│   └── fonts/                  # Custom fonts (if any)
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Root layout
│   │   ├── qui-sommes-nous/    # About page
│   │   ├── services/           # Services section
│   │   │   ├── page.tsx
│   │   │   ├── comite-etudes/
│   │   │   ├── developpement-commercial/
│   │   │   └── comite-marketing/
│   │   ├── partenaires/        # Partners page
│   │   ├── evenements/         # Events page
│   │   └── contact/            # Contact page
│   │
│   ├── components/             # React components
│   │   ├── sections/           # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── ui/                 # UI components
│   │   │   ├── Button.tsx
│   │   │   └── ...
│   │   └── gallery/            # Gallery components
│   │
│   ├── lib/                    # Utilities
│   │   └── utils.ts            # Helper functions
│   │
│   └── styles/                 # Global styles
│       └── globals.css
│
├── .dockerignore
├── Dockerfile                  # Docker configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md
```

---

## 💻 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Key Development Notes

1. **Loading Screen** - Session-based, only shows once per browser session
2. **Navigation Behavior** - ALL pages start transparent/dark, become white on scroll
3. **Partner Logos** - 46 logos in `/public/images/partners/`
4. **Service Presentations** - Links to Google Docs for detailed content
5. **Event Gallery** - Dynamic photo grid with lightbox functionality

### Design System

**Colors:**

- Primary: Golden Yellow (`#daa520`)
- Secondary: Brand Green (`#2d5016`)
- Text: Black/Dark Gray
- Background: White/Light Gray

**Typography:**

- Headings: Bold, modern sans-serif
- Body: Clean, readable sans-serif
- Arabic support: RTL-compatible fonts

---

## 🚢 Deployment

### Docker Deployment (Recommended)

The project includes a production-ready Dockerfile and is configured for Coolify deployment.

```bash
# Build Docker image
docker build -t inat-je-website .

# Run container
docker run -p 3000:3000 inat-je-website
```

### Coolify Configuration

The project uses `nixpacks.toml` for Node.js 20 configuration:

```toml
[phases.setup]
nixPkgs = ['nodejs-20_x']
```

### Vercel Deployment (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import repository in Vercel
3. Configure build settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy!

### Environment Variables for Production

```env
NEXT_PUBLIC_SITE_URL=https://inatje.com
NODE_ENV=production
```

---

## ⚡ Performance

### Current Metrics

- **Page Load Time:** < 2 seconds
- **Lighthouse Score:** 90+ across all metrics
- **Mobile Performance:** Optimized
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic via Next.js

### Performance Features

✅ Server-side rendering (SSR)  
✅ Static site generation (SSG) where applicable  
✅ Image lazy loading  
✅ Route prefetching  
✅ Optimized bundle size  
✅ Efficient caching strategies

---

## 🔍 SEO & Optimization

### SEO Implementation

- **Meta Tags** - Comprehensive meta tags on all pages
- **Structured Data** - Organization, LocalBusiness, Event schemas
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine directives
- **Social Media** - Open Graph tags for sharing
- **Canonical URLs** - Proper URL canonicalization

### Target Keywords

- INAT Junior Entreprise
- Junior Entreprise Tunisie
- Ingénierie agronomique Tunisie
- Hydroponie Tunisie
- Études agricoles
- Forum emploi agronomie

---

## 📚 Documentation

### Additional Resources

- [Strategy Document](./strategy.md) - Complete project strategy
- [Component Documentation](#) - Coming soon
- [API Documentation](#) - Coming soon
- [Design System](#) - Coming soon

### Content Management

#### Updating Partner Logos

1. Add logo to `/public/images/partners/`
2. Update `partnerLogos` array in `/src/app/partenaires/page.tsx`

#### Adding Events

1. Update event data in `/src/app/evenements/page.tsx`
2. Add event photos to `/public/images/events/`
3. Update gallery component with new image paths

#### Modifying Services

1. Navigate to respective service page in `/src/app/services/`
2. Update service data arrays
3. Add/update images in `/public/images/services/`

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'feat: add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Commit Convention

We use conventional commits:

```
feat: new feature
fix: bug fix
docs: documentation update
style: formatting, missing semicolons, etc.
refactor: code restructuring
test: adding tests
chore: maintenance tasks
```

---

## 📧 Contact

**INAT Junior Entreprise**

- 📧 Email: contact1.inatje@gmail.com
- 📱 Phone: +216 99 197 400
- 📍 Address: Institut National Agronomique de Tunisie (INAT), 43 Avenue Charles Nicolle, 1082 Tunis, Tunisia
- 🌐 Website: [inatje.com](https://inatje.com)

**Social Media:**

- [Facebook](https://facebook.com/inatje)
- [Instagram](https://instagram.com/inatje)
- [LinkedIn](https://linkedin.com/company/inatje)

---

## 📄 License

This project is proprietary and confidential. All rights reserved by INAT Junior Entreprise.

© 2012-2025 INAT Junior Entreprise. Tous droits réservés.

---

## 🙏 Acknowledgments

- **INAT** - Institut National Agronomique de Tunisie
- **JET** - Confédération Tunisienne des Junior-Entreprises
- **All Partners** - 50+ organizations supporting our mission
- **Development Team** - For bringing this vision to life
- **Student Members** - Past and present, making INAT-JE exceptional

---

<div align="center">

### Built with ❤️ by INAT Junior Entreprise

**Leader de son écosystème**

[⬆ Back to Top](#inat-junior-entreprise)

</div>
