🛒 Grocery Store Frontend

A responsive grocery shopping frontend application built using React + TypeScript, styled with Tailwind CSS, and powered by Zustand for global state management.

This project demonstrates clean component architecture, scalable state handling, and mobile-first responsive UI design based on a provided Figma layout.

🔗 Live Demo

👉 (Add Vercel URL here after deployment)

📦 Tech Stack

React (Vite)

TypeScript

Tailwind CSS

Zustand (Global State Management)

React Router DOM

Vercel (Deployment)

📁 Project Folder Structure
src/
├── assets/              # Static assets (icons, images if any)
│
├── components/          # Reusable UI components
│   ├── ProductCard.tsx  # Individual product card component
│   ├── Button.tsx       # Reusable button component
│   └── Input.tsx        # Reusable input field
│
├── pages/               # Route-level pages
│   ├── home/
│   │   └── Home.tsx     # Home page with product listing
│   │
│   ├── cart/
│   │   └── Cart.tsx     # Cart page with checkout summary
│   │
│   └── order/
│       ├── OrderSuccess.tsx
│       └── OrderFailure.tsx
│
├── stores/              # Zustand global state stores
│   └── cartStore.ts     # Cart state and actions
│
├── types/               # TypeScript shared types
│   └── product.ts       # Product interface
│
├── router/              # App routing configuration
│   └── router.tsx
│
├── App.tsx              # App root
├── main.tsx             # Entry point
└── index.css            # Tailwind base styles

🧠 Architecture Overview
1. Component-Based Architecture

UI is broken down into small reusable components

Pages consume components, not the other way around

Promotes separation of concerns

2. State Management with Zustand

Global cart state handled via a single store

Eliminates prop drilling

Simple, scalable, and readable compared to Redux

useCartStore → addToCart, removeFromCart, increaseQty, decreaseQty

3. Single Source of Truth

Cart data lives only in Zustand

Pages derive totals using computed values

No duplicated or local cart state

4. Mobile-First Responsive Design

Tailwind utility classes

Grid-based desktop layouts

Sticky checkout summary on large screens

🧪 Features Implemented

Product listing

Add/remove items from cart

Quantity increment/decrement

Cart summary with totals

Checkout flow

Order success & failure screens

Responsive (mobile + desktop)

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/grocery-frontend.git
cd grocery-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


The app will be available at:

http://localhost:5173

🏗 Build for Production
npm run build


Preview production build:

npm run preview

🚀 Deployment (GitHub + Vercel)
1️⃣ Push Code to GitHub
git add .
git commit -m "Initial frontend submission"
git push origin main

2️⃣ Deploy on Vercel

Go to 👉 https://vercel.com

Click New Project

Import your GitHub repository

Framework preset: Vite

Click Deploy

✅ No environment variables required

3️⃣ Vercel Configuration (Auto)

Vercel automatically detects:

npm install

npm run build

dist/ output

No manual config needed.

🧩 Future Improvements

Backend API integration

Authentication & user accounts

Persistent cart (localStorage)

Payment gateway integration

Category filtering & search

Separate Zustand stores for auth/products

📌 Notes

Figma design was used as reference

CSS values were adapted for responsiveness

Layout prioritizes usability and clean UI over pixel perfection

👤 Author

Anirudh
Frontend Developer
React • TypeScript • UI Architecture