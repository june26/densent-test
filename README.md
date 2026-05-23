# nextjs-desent

A Next.js + Tailwind CSS copy of the existing project UI.

## Design & Development Process

The initial UI/UX was generated using Readdy.ai, which provided a fast starting point for the overall layout and visual direction. The generated project was originally built with React + Vite, then adapted and rebuilt into Next.js using GitHub Copilot inside VS Code to better fit the project requirements and deployment workflow.

This approach significantly sped up development while still allowing room for customization and iteration during the implementation process.

The original concept I had in mind was actually more ambitious:
- semi-realistic workspace environments
- multiple selectable room backgrounds
- fully interactive 3D live previews

The goal was to make users feel like they were genuinely building a real workspace and give them a clearer visualization of their setup before renting it.

However, due to time and asset limitations — especially around generating consistent 3D assets with AI tools — I decided to use layered 2D assets instead, combined with smooth transitions and interactions powered by Framer Motion.

To make the experience feel more dynamic and interactive, users are also able to drag and reposition objects freely inside the workspace preview.


## Animation & Interaction

This project uses Framer Motion to create smooth and interactive UI transitions throughout the workspace builder experience.

Animations are used to make the configurator feel more alive and visually engaging — from furniture switching, drag interactions, hover effects, item appearance transitions, to subtle motion feedback when customizing the workspace.

Instead of feeling like a static product catalog, the goal was to create a more immersive and playful experience where users can visually build their ideal workspace in real time.

## Setup

```bash
cd /Users/june/Documents/workspaces/desent-test/nextjs-desent
npm install
npm run dev
```

Open `http://localhost:3000` after the dev server starts.
