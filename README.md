# 🚀 Nishant Pandey — Personal Portfolio

> A modern, responsive portfolio website built with React.js + Vite, showcasing my skills, projects, certifications, and professional experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-0ea5e9?style=for-the-badge)](https://github.com/nishantpandey)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/nishant-pandey425/)
[![GitHub](https://img.shields.io/badge/GitHub-nishantpandey-333?style=for-the-badge&logo=github)](https://github.com/nishantpandey)

---

## 👨‍💻 About

**Nishant Pandey** — Software Engineer | Full Stack Developer

I am a passionate Software Engineer with hands-on expertise in developing end-to-end web applications. With a strong foundation in Java, React.js, Node.js, and Python, I specialize in building scalable web applications and optimizing database architectures. I thrive in agile environments where continuous learning and problem-solving drive meaningful impact.

---

## ✨ Features

- 🎨 **Modern Dark UI** — Cyan/Sky gradient theme with glassmorphism
- 🖊️ **Typewriter Effect** — Animated role titles
- 📱 **Fully Responsive** — Mobile-first design
- ⏳ **Custom Split Timeline** — Dedicated scrollable timelines for Education & Experience with dynamically calculated duration badges
- 📧 **Working Contact Form** — EmailJS integration
- 📄 **Downloadable Resume** — Direct PDF download
- 🎞️ **Smooth Animations** — AOS + Framer Motion + CSS transitions
- 🔍 **SEO Optimized** — Full meta tags, Open Graph, Twitter cards
- 🔗 **Social Links** — LinkedIn & GitHub integration
- 🏗️ **Project Showcase** — Uniform cards with direct GitHub repository links
- 🏆 **Certificates Section** — Symmetrical, beautiful gallery of certificates
- 💡 **Tech Stack Visualization** — Dynamic icon grid rendering devicons

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React.js 18, Vite, Tailwind CSS |
| **Backend/DB (Skills)** | Java, Node.js, Python, Express, MongoDB, SQL |
| **Animations** | Framer Motion, AOS, CSS Transitions |
| **UI Components** | Material UI, Lucide React |
| **Contact** | EmailJS |
| **Routing** | React Router DOM v6 |
| **Deployment** | Vercel / Netlify |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Background.jsx      # Animated background
│   ├── CardProject.jsx     # Project card component
│   ├── Timeline.jsx        # Split Education & Experience timeline
│   ├── Certificate.jsx     # Certificate card with modal
│   ├── SocialLinks.jsx     # LinkedIn & GitHub links
│   ├── TechStackIcon.jsx   # Tech stack icon grid
│   └── ProjectDetail.jsx   # Individual project detail page
├── Pages/
│   ├── Home.jsx            # Hero section
│   ├── About.jsx           # About + stats section
│   ├── Portofolio.jsx      # Projects, Certs, Tech Stack tabs
│   ├── Contact.jsx         # Contact form (EmailJS)
│   └── WelcomeScreen.jsx   # Loading/intro screen
├── data/
│   └── projects.js         # Centralized data for projects & certificates
├── App.jsx
├── main.jsx
└── index.css
public/
├── nishant-profile.jpeg    # Professional profile photo
├── Nishant_Pandey.pdf      # Downloadable CV
├── certificates/           # Directory containing certification images
└── project-*.png           # Various project preview images
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- npm v9+

### 1. Clone the Repository
```bash
git clone https://github.com/nishantpandey/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

#### EmailJS Setup (Free)
1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. **Add Email Service** → Connect your Gmail → Copy the **Service ID**
3. **Create Template** → Use these variables in your template:
   ```
   From: {{from_name}} ({{from_email}})
   Message: {{message}}
   ```
   Copy the **Template ID**
4. **Account → API Keys** → Copy your **Public Key**
5. Paste all three values into your `.env` file

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder to Vercel
```
Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys.

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to netlify.com/drop
```

> **Important:** Add your `.env` variables in the platform's environment settings (Vercel: Project Settings → Environment Variables).

---

## 📬 Contact

**Nishant Pandey**
- 💼 LinkedIn: [linkedin.com/in/nishant-pandey425](https://linkedin.com/in/nishant-pandey425/)
- 🐙 GitHub: [github.com/nishantpandey](https://github.com/nishantpandey)

<p align="center">Made with ❤️ by <strong>Nishant Pandey</strong></p>
#
