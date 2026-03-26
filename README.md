# Neeraj Mukta Portfolio

Astro portfolio scaffold configured for Cloudflare Workers.

## Local development

```sh
npm install
npm run dev
```

## Build and preview with Workers runtime

```sh
npm run build
npm run preview
```

## Deploy

```sh
wrangler login
npm run deploy
```

## Notes

- Astro adapter: `@astrojs/cloudflare`
- Runtime target: Cloudflare Workers
- Worker config: `wrangler.jsonc`

## Project structure

```text
src/
├── components/
│   ├── home/
│   │   └── HomeContent.astro
│   └── layout/
│       ├── BackgroundEffects.astro
│       ├── Footer.astro
│       ├── Navbar.astro
│       └── PageEnhancements.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## SEO inheritance and overrides

`BaseLayout.astro` ships with default SEO for title, description, canonical, Open Graph, Twitter, robots, theme-color, and JSON-LD.

Each page can override any SEO field by passing props to `BaseLayout`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
	title="Custom Page Title"
	description="Custom description"
	canonical="https://example.com/custom"
	image="/images/og-custom.jpg"
	noindex={false}
>
	<h1>Page content</h1>
</BaseLayout>
```
