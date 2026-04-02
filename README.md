# Next.js Template

This repository is intended to be used as a reusable Next.js template for new projects. The actual Next.js app lives in `my-app/`.

## What Is Included

- Next.js App Router setup in `app/`
- Shared folder structure for `components/`, `lib/`, `hooks/`, `services/`, `utils/`, `types/`, `constants/`, `styles/`, `assets/`, and `config/`
- shadcn/ui bootstrap config in `components.json`
- `framer-motion` for animations
- Generated shadcn helper utilities in `lib/utils.ts`
- A starter shadcn button in `components/ui/button.tsx`

## What `.gitkeep` Means

`.gitkeep` is just a placeholder file. Git does not track empty folders, so these files are used to keep the template folder structure in the repository even before you add real code.

You can delete a `.gitkeep` file once the folder contains actual project files.

## Folder Layout

- `app` for routes, layouts, and app-level entrypoints
- `components/ui` for reusable UI primitives
- `components/layout` for headers, nav, shells, and page scaffolding
- `components/shared` for cross-feature components
- `lib/api` for API clients and data fetching helpers
- `lib/auth` for auth helpers and session logic
- `lib/db` for database clients and queries
- `hooks` for custom React hooks
- `services` for feature-level service wrappers
- `utils` for generic utility functions
- `types` for shared TypeScript types
- `constants` for app-wide constants
- `styles` for extra CSS and design tokens
- `assets` for local source assets
- `config` for environment and runtime configuration
- `public/images` and `public/icons` for static assets

## How To Use This Template

1. Create a new project from this repository or clone it into a fresh workspace.
2. Run `npm install` if your clone does not already have dependencies installed.
3. Update `package.json` project metadata such as the name, version, and scripts if needed.
4. Replace the starter homepage and layout with your project-specific UI inside `app/`.
5. Add new shared UI under `components/ui` and feature-specific composition under `components/layout` or `components/shared`.
6. Put reusable business logic in `lib/`, `services/`, and `utils/` instead of scattering it across pages.
7. Add types in `types/` and constants in `constants/` as the project grows.
8. Remove any `.gitkeep` placeholders only after a folder has real files.

## UI Stack

The template already includes shadcn/ui setup. To add more components, use the shadcn CLI from inside `my-app/`, for example:

```bash
npx shadcn@latest add card dialog dropdown-menu
```

Use `framer-motion` for transitions and animated UI patterns when a screen needs motion.

## Run

```bash
npm run dev
```

## Notes

The default Create Next App starter content has been removed from the app shell and homepage. This repository is now set up to serve as a template baseline rather than a finished app.
