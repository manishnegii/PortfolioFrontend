# Portfolio - React Vite

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast development server and build tool
- ⚛️ **React 18** - Latest React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Client-side routing
- 🎯 **Responsive Design** - Mobile-first design approach
- 🎪 **Marquee Animation** - Smooth scrolling text
- 📮 **Contact Form** - Integrated contact functionality
- 🎭 **Custom Styling** - Olive and cream color scheme

## Project Structure

```
src/
├── sections/
│       ├── About.jsx        # About section
│       ├── Contact.jsx      # Contact section with form
│       ├── Cover.jsx        # Landing/hero section
│       ├── Introduction.jsx # Introduction section
│       ├── Marquee.jsx      # Skills marquee
│       ├── Projects.jsx     # Projects showcase
│       └── Shared.jsx       # Shared components (SectionFrame, TopBar, Logo)
├── App.jsx                  # Main App component
├── App.css                  # App styles
├── index.css               # Global styles with Tailwind
├── main.jsx                # React entry point
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
VITE_BACKEND_URL=http://localhost:8000
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Lucide React** - Icons
- **Sonner** - Toast notifications
- **Axios** - HTTP client

## Components

### Shared Components
- **SectionFrame** - Wrapper for sections with theme support
- **TopBar** - Navigation bar with scroll button
- **JDLogo** - Customizable JD logo

### Sections
- **Cover** - Hero/landing section
- **Introduction** - Introduction with image
- **Marquee** - Animated skills list
- **About** - About section with skills
- **Projects** - Project showcase grid
- **Contact** - Contact form

## Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
    --olive: #7A8B4F;
    --olive-dark: #5e6b3b;
    --olive-deep: #3e4628;
    --cream: #F3F1D8;
    --cream-soft: #EEEBC9;
    --ink: #2A2F1A;
}
```

### Content
Update text, images, and links directly in component files.

## License

This project is open source and available under the MIT License.
