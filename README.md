# CareerNest - Launch Your Career with Real Internships

A fully functional Next.js web application built with React and Tailwind CSS that exactly matches the provided UI screenshots. CareerNest is a platform connecting students with internship opportunities and industry mentors.

## 🚀 Live Demo

**Deployed Application:** [https://mnbdxbvw.manus.space](https://mnbdxbvw.manus.space)

## 📋 Features

### Landing Page
- Hero section with gradient background
- Internship opportunity cards
- Company statistics section
- Comprehensive services showcase
- CV generator features section
- Responsive design for all devices

### Authentication Pages
- Login page with email/password fields
- Register page with additional user information
- Google sign-in integration (UI)
- Form validation and error handling

### Dashboard & Profile Pages
- User dashboard with welcome message
- Scheduled sessions section
- Suggested internships with skill tags
- Profile update form with image upload
- Mentoring page with mentor profiles
- Job posting form for recruiters

## 🎨 Design System

### Color Palette
- **Primary:** #7A08FA (Purple)
- **Secondary:** #A82FFC (Light Purple)
- **Accent:** #C264FE (Lighter Purple)
- **Background:** #F8ECFD (Very Light Purple)

### Typography
- **Font Family:** Inria Sans (Google Fonts)
- **Border Radius:** 5px (consistent across all components)

### Icons
- FontAwesome icons throughout the UI
- Semantic HTML for accessibility

## 🛠️ Technology Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** FontAwesome
- **Fonts:** Google Fonts (Inria Sans)
- **Build Tool:** Vite
- **Package Manager:** pnpm

## 📁 Project Structure

```
careernest-app/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── MentoringPage.jsx
│   │   └── JobPostingPage.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd careernest-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** 320px - 767px

### Mobile Features
- Responsive navigation
- Touch-friendly buttons
- Optimized typography
- Flexible grid layouts

## 🎯 Page Routes

- `/` - Landing page
- `/login` - Login page
- `/register` - Register page
- `/dashboard` - User dashboard
- `/dashboard/profile` - Profile update page
- `/dashboard/mentoring` - Mentoring page
- `/dashboard/job-posting` - Job posting page

## ✨ Key Components

### Reusable UI Components
- **Button:** Primary, secondary, and outline variants
- **Input:** Form inputs with validation styling
- **Card:** Content containers with hover effects

### Layout Components
- **Header:** Navigation with logo and menu items
- **Layout:** Main page wrapper
- **DashboardLayout:** Sidebar navigation for dashboard pages

## 🎨 Styling Features

### Custom CSS Classes
- `.btn-primary`, `.btn-secondary`, `.btn-outline` - Button styles
- `.input-field` - Form input styling
- `.mesh-gradient` - Background gradient
- `.card-hover` - Hover effects for cards
- `.skill-tag` - Skill badge styling

### Responsive Utilities
- Mobile-first approach
- Flexible grid systems
- Touch-friendly interactions
- Optimized typography scaling

## 🔧 Development Notes

### Form Handling
- All forms include proper validation
- State management with React hooks
- Error handling and user feedback

### Image Handling
- Placeholder images for development
- File upload functionality (UI)
- Responsive image sizing

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Focus management

## 🚀 Deployment

The application is deployed using Manus deployment service and is accessible at:
**https://mnbdxbvw.manus.space**

### Deployment Features
- Automatic builds from source
- CDN distribution
- HTTPS enabled
- Mobile optimization

## 📝 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created as a demonstration of frontend development skills using React and Tailwind CSS.

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**

