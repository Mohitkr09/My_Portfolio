# Mohit Kumar — Portfolio

A responsive dark, premium React portfolio with violet accents, designed for software engineering and full-stack/AI internship applications.

## Features
- Responsive layout with mobile navigation
- About, Skills, Projects, Experience, Achievements, and Contact sections
- GitHub and LinkedIn links from the supplied resume
- Email copy button with mailto fallback
- Project cards, tech stacks, achievements, and subtle visual effects
- Accessible labels and reduced-motion support

## Run locally

Requirements: Node.js 18+


npm install
npm run dev


Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

No environment variables are required.

## Before publishing
- Check each project repository URL in `src/main.jsx`; update any repo path that differs from your actual GitHub repository.
- Add your LeetCode and CodeChef profile URLs if you want those links to point to your exact accounts.
- If you want a real portrait, replace the initials-based avatar in `src/main.jsx`.
- `public/resume.pdf` is included if the uploaded resume was available when this package was generated. You can link to it by adding a button with `href="/resume.pdf"`.

## Stack
React, Vite, CSS, Lucide React icons.
