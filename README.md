# Personal Website

A modern, elegant personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section with introduction and quick links
- **About Page**: Personal information, background, and skills
- **Portfolio Page**: Showcase of projects and work
- **Blog Page**: Blog posts listing with excerpts
- **Books Page**: Book recommendations and reviews
- **Contact Page**: Contact form and social media links

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- Update personal information in each page component
- Replace placeholder content with your own
- Customize colors in `tailwind.config.ts`
- Add your social media links in `components/Footer.tsx` and `app/contact/page.tsx`
- Update the site name in `components/Navigation.tsx` and `app/layout.tsx`

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio page
│   ├── blog/              # Blog pages
│   ├── books/             # Books page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   └── Footer.tsx         # Footer component
├── styles/                # Global styles
│   └── globals.css        # Tailwind imports and custom styles
└── public/                # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

# personal-website2
