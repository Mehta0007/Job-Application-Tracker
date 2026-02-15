# 💼 Job Application Tracker

A full-stack web application designed to help users manage and organize their job search using Kanban-style boards.

This project focuses on real-world application architecture, authentication flows, database modeling, and production deployment rather than demo-only features.

---

## 🚀 Live Application

👉 https://job-application-tracker-2ebj.vercel.app

---

## 🧠 Overview

Job Application Tracker allows users to:

- Create an account and securely authenticate
- Access a private dashboard
- Organize job applications into columns
- Track application progress visually
- Manage job search data in a structured way

Each user operates in an isolated environment with their own boards, columns, and job records.

---

## ✨ Key Features

✔ Secure email/password authentication  
✔ Session-based access control  
✔ User-scoped dashboards  
✔ Kanban board workflow  
✔ Drag-and-drop job management  
✔ MongoDB relational modeling  
✔ Responsive UI  

---

## 🏗️ Tech Stack

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- dnd-kit (Drag & Drop)

**Backend**
- Next.js Server Components
- Better Auth
- MongoDB Atlas
- Mongoose

**Deployment**
- Vercel

---

## 🧩 Architecture Highlights

- Server-side data fetching for dashboard rendering
- Separation of DB models and UI types
- Reusable domain models
- Middleware-based route control
- Optimistic UI updates via hooks
- Session synchronization across client/server

---

## 🔐 Authentication Flow

Authentication is implemented using Better Auth with MongoDB adapter:

- Email/password login
- Secure session cookies
- Protected routes
- Auth-aware UI rendering

---

## 🗄️ Data Model

Core entities:

- Board → Container for workflow
- Column → Stages within board
- JobApplication → Individual job records

Relationships:

User → Board → Columns → JobApplications

Order fields are used instead of array indexes to guarantee deterministic UI state.

---

## ⚠️ Challenges & Learnings

This project required solving real issues typically hidden in tutorials:

- MongoDB Atlas authentication errors
- SSL / network access problems
- Environment variable mismatches
- Server vs Client component boundaries
- Hydration errors
- Auth state desynchronization
- Vercel production configuration

---

## 🧪 Local Development

Clone repository:

```bash
git clone https://github.com/your-username/job-application-tracker.git
cd job-application-tracker
```

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```env
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

Run dev server:

```bash
npm run dev
```

---

## 📌 Project Status

Actively evolving.

Planned improvements:

- Advanced board operations
- Filtering & search
- Analytics & insights
- Performance optimizations

---

## 👨‍💻 Author

Ankit  
Software Engineer in Progress

---

## 📄 License

This project is for learning and portfolio purposes.
