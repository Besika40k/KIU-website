# Next.js University Demo

A semi-static demo website for a university, built with **Next.js 15, TypeScript, Tailwind CSS**, and **Framer Motion**.  
The project demonstrates a modern, responsive website with dynamic pages and multi-language support (English/Georgian).

---

## Purpose

- Showcase a university website structure for demo purposes.
- Multi-language support (EN/GE) on all pages.
- Dynamic pages for **news** and **faculties**.
- Responsive design optimized for desktop and mobile.
- Smooth page transition animations using Framer Motion.

---

## Tech Stack

- **Frontend Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language Management:** React Context API
- **Deployment-ready:** Can be hosted on Vercel or similar platforms

---

## Folder Structure

app/ # Main application pages <br />
news/ # News listing & dynamic news pages \n
[id]/ # Dynamic news detail pages
schools/ # Faculties listing & dynamic pages
components/ # Header, Footer, PageWrapper
context/ # Language context (EN/GE switching)
i18n/ # Language JSON files
globals.css # Global styles (Tailwind + custom)

---

## **Getting Started**

### Clone the repository and run the project

```bash
git clone https://github.com/<your-username>/nextjs-university-demo.git
cd nextjs-university-demo


npm install

npm run dev -- --turbo

```

Open http://localhost:3000 in your browser to see the website.
