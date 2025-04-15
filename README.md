# 🚀 Avion Website

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.23-black?style=for-the-badge&logo=next.js" alt="Next.js Version">
  <img src="https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript Version">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS Version">
</div>

A modern, responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS. This project showcases a complete online shopping experience with user authentication, product management, and a beautiful UI.

## 🌟 Features

- **Modern Stack**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Responsive design for all devices

- **Authentication & Security**
  - Clerk integration for user authentication
  - Secure session management
  - Protected routes

- **Content Management**
  - Sanity CMS integration
  - Dynamic content updates
  - Rich text editing capabilities

- **Performance**
  - Server-side rendering
  - Image optimization
  - Code splitting
  - Lazy loading

## 🛠️ Tech Stack

- **Frontend**
  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
  - Styled Components

- **Backend & Services**
  - Sanity CMS
  - Clerk Authentication
  - Axios for API calls

- **Development Tools**
  - ESLint
  - Prettier
  - TypeScript
  - PostCSS

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/avion-website.git
   cd avion-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_token
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run import-data` | Import Sanity data |

## 📁 Project Structure

```
my-app/
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # Reusable components
│   ├── lib/          # Utility functions
│   ├── styles/       # Global styles
│   └── types/        # TypeScript types
├── public/           # Static files
├── scripts/          # Utility scripts
└── ...
```

## 🔧 Configuration

- **Next.js**: Configured for optimal performance
- **TypeScript**: Strict mode enabled
- **Tailwind**: Custom theme configuration
- **ESLint**: Custom rules for code quality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mak Developer**
- GitHub: [@Microtechbymak26](https://github.com/Microtechbymak26)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Sanity team for the headless CMS
- Clerk team for authentication

## 📊 Project Status

[![Build Status](https://img.shields.io/github/workflow/status/yourusername/avion-website/CI?style=for-the-badge)](https://github.com/yourusername/avion-website/actions)
[![Code Coverage](https://img.shields.io/codecov/c/github/yourusername/avion-website?style=for-the-badge)](https://codecov.io/gh/yourusername/avion-website)
[![License](https://img.shields.io/github/license/yourusername/avion-website?style=for-the-badge)](https://github.com/yourusername/avion-website/blob/main/LICENSE)

## 🌐 Live Demo

Check out the live demo at: [https://avion-website-ijgw.vercel.app/](https://avion-website-ijgw.vercel.app/)

---

<div align="center">
  <sub>Built with ❤️ by Mak Developer</sub>
</div>
