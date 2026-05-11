# 🐞 AI Bug Analyzer

https://ai-bug-analyzer-1w9i-git-main-toufik353s-projects.vercel.app/

A modern AI-powered bug tracking and analytics platform built with **Next.js 16**, **TypeScript**, **MongoDB**, **JWT Authentication**, and **Groq AI**.

Designed with a production-style SaaS UI and real-world engineering workflows in mind, the platform allows users to analyze bugs using AI, manage reports securely, and visualize issue analytics through an interactive dashboard.

---

# ✨ Features

## 🔐 Authentication & Authorization

* JWT-based authentication
* Secure HTTP-only cookie sessions
* Protected routes
* User-specific bug access
* Authorization checks for update/delete operations

---

## 🤖 AI-Powered Bug Analysis

Analyze bug reports using Groq AI to automatically generate:

* Bug severity
* Category detection
* AI-generated summaries
* Suggested fixes
* Technical insights

---

## 🛠️ Bug Management

* Create bug reports
* Edit title, description, and severity
* Delete bugs with modern confirmation modal
* Search bugs instantly
* Filter by severity

---

## 📊 Analytics Dashboard

Interactive analytics built using Recharts:

* Severity distribution
* Visual reporting insights
* Clean dashboard experience

---

## 🎨 Modern SaaS UI

Inspired by modern products like:

* Linear
* Notion
* Jira
* Vercel Dashboard

Features include:

* Dark premium UI
* Responsive layout
* Smooth hover interactions
* Empty states
* Professional modal system
* Sidebar navigation
* Lucide icons

---

# 🧱 Tech Stack

| Technology      | Purpose            |
| --------------- | ------------------ |
| Next.js 16      | Frontend + Backend |
| TypeScript      | Type Safety        |
| Tailwind CSS    | Styling            |
| MongoDB         | Database           |
| Mongoose        | ODM                |
| JWT             | Authentication     |
| Groq API        | AI Analysis        |
| Recharts        | Analytics          |
| React Hot Toast | Notifications      |
| Lucide React    | Icons              |

---

# 📁 Folder Structure

```bash
app/
 ├── api/
 │    ├── auth/
 │    ├── bugs/
 │    └── ai/
 │
 ├── dashboard/
 │    └── analytics/
 │
components/
lib/
models/
public/
```

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-bug-analyzer.git
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create:

```bash
.env.local
```

Add:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🔐 Security Features

* Protected API routes
* JWT verification middleware
* User-based authorization
* HTTP-only authentication cookies
* Secure CRUD access control

---

# 📈 Future Improvements

* Team collaboration
* Comments system
* Activity timeline
* File/image uploads
* Real-time updates
* Role-based permissions
* AI bug prioritization
* Export reports as PDF

---

# 📸 Screenshots

## Login Page
<img width="1917" height="1095" alt="image" src="https://github.com/user-attachments/assets/7bbc1ded-f1cf-4f11-a8c8-753ae77ea7b7" />


---

## Dashboard
<img width="1896" height="1075" alt="image" src="https://github.com/user-attachments/assets/80d517fc-58ac-47db-874a-d0db28b94b5f" />



---

## Analytics

<img width="1917" height="1090" alt="image" src="https://github.com/user-attachments/assets/1586b4db-c92a-460d-8ac4-0c116fde6a2d" />

---

# 🧠 Learning Outcomes

This project demonstrates:

* Fullstack architecture with Next.js App Router
* Authentication & Authorization
* REST API development
* MongoDB schema modeling
* AI integration workflows
* Production-grade UI/UX
* State management patterns
* Secure backend handling

---

# 👨‍💻 Author

**Toufik Desai**

Frontend / Fullstack Developer

* React
* Next.js
* TypeScript
* MongoDB
* Tailwind CSS

---

# 📄 License

This project is licensed under the MIT License.
