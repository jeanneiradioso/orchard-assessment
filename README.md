# Tasteology (Orchard Front end test)

Welcome! This project is a modern, responsive web application built to showcase a clean, modular approach to front-end development. The app is designed with semantic HTML and styled using Tailwind CSS, featuring smooth animations and an engaging user experience. It’s deployed on Vercel so you can check it out live.


## Live Demo

[https://orchard-assessment-eight.vercel.app/](https://orchard-assessment-eight.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (version 14 or above is recommended)
- npm (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
npm install 
```
### Run Locally

Start the development server:

```bash
npm run dev
```

Access http://localhost:5173/

### How does the content being loaded?

For this project, I created json in /public directory (assuming this is from CMS). It was being fetched and used to the components.


# Why This Tech Stack?
### React
I chose React because it let me break the UI into small, reusable components. This makes the code easier to understand, test, and maintain. Plus, React’s declarative style means the code is simpler to follow.

### Vite
Vite is my build tool of choice. It offers a super-fast development server with hot module replacement, so changes show up instantly. It also creates highly optimized builds using modern JavaScript modules, which keeps my app snappy in production.

### TypeScript
TypeScript adds static type checking to my code, catching errors early and making the development experience smoother. With TypeScript, code is more robust and easier to scale as the project grows.

### Vercel
I deployed on Vercel for its simplicity and speed. Vercel integrates directly with GitHub for seamless deployments, automatically scales your app, and delivers your content fast around the globe through its CDN.