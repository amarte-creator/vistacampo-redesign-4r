# Vistacampo Rehabilitation Center Website

<div align="center">

![Vistacampo Logo](public/images/logo-vistacampo.png)

**A modern, multilingual website for a specialized addiction rehabilitation center**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/avilamolinaadrian-5977s-projects/v0-vistacampo-redesign)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

## 🏥 Project Overview

**Vistacampo** is a specialized addiction rehabilitation center located in Colonia Tovar, Venezuela. This project involved creating a comprehensive, multilingual website that serves as both an informational platform and a digital gateway for patients seeking recovery services.

### Client Requirements
- **Multilingual Support**: Spanish and English versions
- **Professional Design**: Clean, trustworthy, and accessible
- **SEO Optimization**: High search engine visibility
- **Performance**: Fast loading and mobile-responsive
- **Content Management**: Easy blog and news updates
- **Contact Integration**: WhatsApp and contact forms

## 🚀 Live Demo

**Production URL**: [https://vercel.com/avilamolinaadrian-5977s-projects/v0-vistacampo-redesign](https://vercel.com/avilamolinaadrian-5977s-projects/v0-vistacampo-redesign)

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Internationalization
- **Next.js i18n** - Built-in internationalization
- **Custom i18n Provider** - Seamless language switching
- **Locale-aware routing** - Automatic language detection

### Content Management
- **MDX** - Markdown with JSX components
- **Gray Matter** - Frontmatter parsing
- **Dynamic routing** - SEO-friendly URLs

### Performance & Analytics
- **Vercel Analytics** - User behavior tracking
- **Vercel Speed Insights** - Core Web Vitals monitoring
- **Next.js Image Optimization** - Automatic image optimization
- **Pexels API Integration** - Professional stock photography

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
vistacampo-redesign-4r/
├── app/                          # Next.js App Router
│   ├── [lng]/                    # Dynamic language routing
│   │   └── tratamiento/          # Treatment page
│   ├── es/                       # Spanish pages
│   │   ├── blog/                 # Blog section
│   │   ├── contacto/             # Contact page
│   │   ├── equipo/               # Team page
│   │   ├── instalaciones/        # Facilities page
│   │   └── noticias/             # News section
│   ├── en/                       # English pages
│   │   └── [same structure]      # Mirror structure
│   ├── api/                      # API routes
│   └── globals.css               # Global styles
├── components/                    # Reusable components
│   ├── ui/                       # UI component library
│   ├── header.tsx                # Navigation header
│   ├── footer.tsx                # Site footer
│   └── whatsapp-icon.tsx         # WhatsApp integration
├── lib/                          # Utility functions
│   ├── constants.ts              # App constants
│   ├── posts.ts                  # Blog post utilities
│   ├── markdown.ts               # MDX processing
│   └── pexels.ts                 # Pexels API integration
├── posts/                        # Blog content (MDX)
│   ├── es/                       # Spanish articles
│   └── en/                       # English articles
└── public/                       # Static assets
    ├── images/                   # Images and photos
    └── locales/                  # Translation files
```

## 🌐 Key Features

### Multilingual Support
- **Automatic language detection** based on URL
- **Seamless language switching** with preserved navigation
- **Localized content** for all pages and components
- **SEO-optimized** language-specific URLs

### Content Management
- **MDX-powered blog** with rich content support
- **Dynamic routing** for articles and news
- **SEO metadata** for each page and article
- **Image optimization** with Next.js Image component

### User Experience
- **Mobile-first design** with responsive layouts
- **Accessibility features** (ARIA labels, keyboard navigation)
- **Fast loading** with optimized images and code splitting
- **Professional animations** and micro-interactions

### Business Integration
- **WhatsApp integration** for immediate contact
- **Contact forms** with validation
- **Team showcase** with professional profiles
- **Facilities gallery** with high-quality images

## 🎨 Design System

### Color Palette
- **Primary**: Emerald green (#10b981) - Trust and growth
- **Secondary**: Teal (#14b8a6) - Calm and stability
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: White and light grays for contrast

### Typography
- **Font**: Inter - Modern, readable, and professional
- **Hierarchy**: Clear heading structure (H1-H6)
- **Responsive**: Scales appropriately across devices

### Components
- **Consistent spacing** using Tailwind's spacing scale
- **Rounded corners** for modern, friendly appearance
- **Shadow system** for depth and hierarchy
- **Button variants** for different actions

## 📊 Performance Metrics

- **Core Web Vitals**: Optimized for Google's ranking factors
- **Lighthouse Score**: 90+ across all categories
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Optimized for repeat visits

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/amarte-creator/vistacampo-redesign-4r.git

# Navigate to project directory
cd vistacampo-redesign-4r

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env.local` file:

```env
# Pexels API (for stock photography)
PEXELS_API_KEY=your_pexels_api_key_here

# Vercel Analytics (optional)
VERCEL_ANALYTICS_ID=your_analytics_id
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📝 Content Management

### Adding Blog Posts

1. Create MDX file in `posts/[language]/` directory
2. Add frontmatter with metadata:
   ```mdx
   ---
   title: "Article Title"
   description: "Article description"
   date: "2025-01-15"
   slug: "article-slug"
   image: "/images/article-image.jpg"
   imageAttribution: "Photo by Photographer from Pexels"
   ---
   ```

### Updating Translations

1. Edit files in `public/locales/[language]/common.json`
2. Add new keys following the existing structure
3. Update components to use translation keys

## 🚀 Deployment

The project is deployed on **Vercel** with automatic deployments from the main branch.

### Deployment Process
1. Push changes to `main` branch
2. Vercel automatically builds and deploys
3. Preview deployments for pull requests
4. Custom domain configuration available

## 📈 SEO Features

- **Structured data** for better search visibility
- **Meta tags** optimized for social sharing
- **Sitemap.xml** for search engine crawling
- **Robots.txt** for crawl control
- **Open Graph** tags for social media
- **Twitter Cards** for enhanced sharing

## 🔒 Security Features

- **Content Security Policy** headers
- **HTTPS** enforcement
- **Input validation** on forms
- **XSS protection** with React's built-in escaping
- **CSRF protection** for API routes

## 📞 Client Communication

### Project Deliverables
- ✅ **Responsive website** (desktop, tablet, mobile)
- ✅ **Multilingual support** (Spanish/English)
- ✅ **Content management system** (MDX-based)
- ✅ **SEO optimization** (meta tags, sitemap, structured data)
- ✅ **Performance optimization** (Core Web Vitals)
- ✅ **Analytics integration** (Vercel Analytics & Speed Insights)
- ✅ **Professional photography** (Pexels integration)

### Maintenance & Support
- **Documentation** provided for content updates
- **Training** on content management system
- **Ongoing support** for technical issues
- **Performance monitoring** and optimization

## 👥 Team

**Development Agency**: [Your Agency Name]
- **Lead Developer**: [Developer Name]
- **UI/UX Designer**: [Designer Name]
- **Project Manager**: [PM Name]

## 📄 License

This project is proprietary software developed for Vistacampo Rehabilitation Center. All rights reserved.

---

<div align="center">

**Built with ❤️ for Vistacampo Rehabilitation Center**

*Transforming lives through technology and design*

</div>