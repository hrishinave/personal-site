# Hrishikesh Naveenam

Personal website built with React, TypeScript, and Vite.

## Development

- `npm install`
- `npm run dev`
- `npm run build` produces the production site in `dist`.

The site keeps the existing Vercel route configuration. This redesign does not publish automatically.

## Content

Research, projects, leadership, and skills are in `src/data/cv.json`. The home page and news are in `src/pages`. Content is based on the September 2026 CV, with BrainCharge excluded and Holler's placeholder date omitted.

The public CV is `public/Hrishikesh_Naveenam_CV.pdf`. To rebuild it after editing the content, run `python3 scripts/build_cv.py` with ReportLab installed. The original source CV is not included in the website.
