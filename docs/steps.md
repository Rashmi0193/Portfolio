1) Created a Vite + React project
Command: npm create vite@latest ... --template react
What it did:
Created a ready-to-run React project with a clean folder structure.
Gave us the dev server (npm run dev) that reloads instantly when you save files.
Why Vite?
It’s fast and modern.
Perfect for a portfolio: quick builds, easy deploy.


2) Started the dev server
Command: npm run dev
What it did:
Runs a local server at http://localhost:5173/
Watches your files; when you edit code, it refreshes your browser automatically.
Why this matters:
You get fast feedback. Coding without fast feedback is pain.

3) Installed Tailwind CSS
Command: npm install -D tailwindcss postcss autoprefixer
What it did:
Added Tailwind (utility-first CSS) + the build tools Tailwind needs.
postcss processes CSS
autoprefixer adds browser compatibility prefixes automatically
Why Tailwind?
Clean spacing, typography, cards — Tailwind is perfect for portfolios.

4) Generated Tailwind config files
Command: npx tailwindcss init -p
What it did:
Created:
tailwind.config.js → tells Tailwind where to look for class names
postcss.config.js → connects Tailwind into the CSS processing pipeline
Why it matters:
Tailwind only generates CSS for the classes you actually use.
It needs to scan your React files to know what to generate.

5) Put resume in /public
When we link to /Rashmi-Purandare-Resume.pdf, the browser expects that file to exist.
Why /public?
Anything in public/ is served directly at the root URL.
So public/Rashmi-Purandare-Resume.pdf becomes:
http://localhost:5173/Rashmi-Purandare-Resume.pdf