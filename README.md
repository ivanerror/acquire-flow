# Acquire Flow

Acquire Flow is a Next.js-based web application that provides a modern dashboard interface for buyer and seller interactions. Built with React and styled using Tailwind CSS, it offers a seamless user experience with features like profile management, messaging, and match tracking.

## Features

- 🔐 User Authentication & Onboarding
- 👤 Buyer & Seller Profiles
- 💬 Messaging System
- 🤝 Match Management
- 🎨 Modern UI with Dark Mode Support
- 📱 Responsive Design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd acquire-flow
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── (auth)/          # Authentication related pages
│   ├── dashboard/       # Dashboard pages and components
│   └── layout.js        # Root layout
├── components/          # Reusable components
│   ├── ui/             # UI components
│   └── ...             # Other components
├── lib/                 # Utility functions and API
└── public/             # Static assets
```

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Lucide React](https://lucide.dev/) - Icons

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
