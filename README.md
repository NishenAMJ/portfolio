# Janith Nishen - Portfolio

A responsive Next.js implementation of the five supplied Figma screens, with compact top navigation and simplified content.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Screens

- `/` — Home, with interactive profile and skills code tabs.
- `/about` — Biography, education, and skills (`#skills`).
- `/projects` — Project showcase with category filters.
- `/experience` — Experience timeline and contact form (`#contact`).
- `/admin` — Local content manager for projects, availability, profile, skills, and résumé.

## Content and contact

The content manager uses browser local storage. Changes persist in the same browser and sync between tabs; they are not published to a server or shared with other visitors. This is a local editing prototype, without authentication or a database.

The Figma source uses a placeholder email and provides no résumé asset. Add a real email and upload a PDF (up to 2 MB) in the content manager to enable email preparation and résumé downloads. The contact form opens the visitor's email app; it does not claim to send email. Without a configured address, it copies the message for LinkedIn.

Project links open the GitHub profile supplied in Figma. Individual repository and live-demo URLs were not supplied. Portfolio text comes from the design and should be reviewed before publication.

## Validation

```sh
npm run lint
npm run build
```

Source design: https://www.figma.com/design/iQwDeqjEivSdWLMvG1nN1Z/Untitled?node-id=0-1

## Source organization

- `src/app/` contains the route entry points and root layout.
- `src/components/home/`, `about/`, `projects/`, and `experience/` contain each screen and its related components.
- `src/components/admin/` contains the content manager and separate project, profile, skills, and resume editors.
- `src/components/layout/` contains the header and footer.
- `src/components/ui/` contains shared tags, window dots, and the resume link.
- `src/context/portfolio-provider.tsx` owns profile state, local storage, and cross-tab updates.
- `src/data/` contains the initial portfolio content and skill categories.
- `src/types/portfolio.ts` defines the shared profile and project types.

To debug a screen, start with its `*-screen.tsx` file. To debug an admin form, open its individual editor component. Shared storage behavior lives in the provider.
