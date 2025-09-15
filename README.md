# Netflix-Themed Personal Website

A modern, responsive personal website built with React JSX, featuring a Netflix-inspired design perfect for showcasing your portfolio as an intern or aspiring developer.

## 🌟 Features

- **Netflix-Inspired Design**: Dark theme with red accents and smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling and hover effects
- **Multiple Pages**:
  - **Home**: Hero section with animated background and featured content
  - **Experiences**: Timeline view of education, work experience, and projects
  - **Skills & Projects**: Interactive skills showcase and project portfolio
  - **Contact**: Professional contact form with social links

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the files locally, navigate to the project directory
   cd personal_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The website will be available at `http://localhost:3000`
   - The page will automatically open in your default browser

## 📁 Project Structure

```
personal_website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Experiences.jsx
│   │   ├── Experiences.css
│   │   ├── SkillsProjects.jsx
│   │   ├── SkillsProjects.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Contact Information** (`src/pages/Contact.jsx`):
   - Email, phone, location
   - Social media links
   - Availability status

2. **Personal Details** (`src/pages/Home.jsx`):
   - Hero section content
   - About section text
   - Achievement statistics

3. **Experience & Education** (`src/pages/Experiences.jsx`):
   - Education history
   - Work experience
   - Project details

4. **Skills & Projects** (`src/pages/SkillsProjects.jsx`):
   - Technical skills with proficiency levels
   - Project portfolio
   - GitHub and demo links

### Styling
- Modify colors in CSS files to match your preferences
- Update the Netflix red (`#e50914`) to your brand color
- Adjust fonts, spacing, and animations as needed

### Images & Icons
- Replace emoji icons with actual images if desired
- Add your profile picture to the hero section
- Include project screenshots

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with animations and gradients
- **Responsive Design**: Mobile-first approach

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Perfect for Interns

This website template is specifically designed for:
- **Computer Science Students**
- **Aspiring Developers**
- **Internship Applicants**
- **Freelance Developers**
- **Recent Graduates**

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the website, feel free to reach out!

---

**Happy Coding! 🚀**
