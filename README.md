# [Astro](https://astro.build) Blog Template

[![Screenshot](screenshot.png)](https://astro-blog-template.netlify.app/)

## 👉 Check out the ✨ [Live Demo](https://astro-blog-template.netlify.app/) ✨

## 👩‍🚀 Getting Started

### Locally

```
npm init astro -- --template Charca/astro-blog-template
```

### On StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/charca/astro-blog-template)

## ✨ Features:

- ✅ Astro 4.0
- ✅ Dark Mode
- ✅ Full Markdown support
- ✅ SEO-friendly setup with canonical URLs and OpenGraph data
- ✅ RSS 2.0 generation
- ✅ Sitemap.xml generation
- ✅ Visitor Analytics (Google Analytics, Umami, Plausible)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Tour.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3030`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 📊 Visitor Analytics

This template includes built-in support for multiple analytics providers:

1. **Google Analytics**:
   - Create a property in Google Analytics
   - Add your GA4 Measurement ID to `.env` as `PUBLIC_GA_ID`
   - Pass the ID to your layout: `gaId={import.meta.env.PUBLIC_GA_ID}`

2. **Umami Analytics** (Privacy-focused):
   - Self-host Umami or use a service
   - Add `PUBLIC_UMAMI_WEBSITE_ID` and `PUBLIC_UMAMI_SRC` to `.env`
   - Pass to your layout: `umamiWebsiteId={import.meta.env.PUBLIC_UMAMI_WEBSITE_ID}` and `umamiSrc={import.meta.env.PUBLIC_UMAMI_SRC}`

3. **Plausible Analytics** (Privacy-friendly):
   - Sign up for Plausible or self-host
   - Add `PUBLIC_PLAUSIBLE_DOMAIN` and `PUBLIC_PLAUSIBLE_SRC` to `.env`
   - Pass to your layout: `plausibleDomain={import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN}` and `plausibleSrc={import.meta.env.PUBLIC_PLAUSIBLE_SRC}`

Example in a page:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const title = 'My Page';
const description = 'My page description';
const permalink = 'https://example.com/my-page';
---

<BaseLayout
  title={title}
  description={description}
  permalink={permalink}
  gaId={import.meta.env.PUBLIC_GA_ID}
  umamiWebsiteId={import.meta.env.PUBLIC_UMAMI_WEBSITE_ID}
  umamiSrc={import.meta.env.PUBLIC_UMAMI_SRC}
  plausibleDomain={import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN}
  plausibleSrc={import.meta.env.PUBLIC_PLAUSIBLE_SRC}
>
  <!-- Your content here -->
</BaseLayout>
```

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).
