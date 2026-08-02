# FRWD Concepts Portfolio

FRWD Concepts is a **static website**: plain HTML, CSS, and JavaScript. It does
not use Next.js, React, or a build framework. Vercel can host it directly as a
static site.

## Deploy To Vercel

### Option 1: Vercel Dashboard

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Leave the framework preset as **Other** or **Static**.
5. Build command: `npm run build`
6. Output directory: leave blank / default project root.
7. Deploy.

### Option 2: Vercel CLI

```bash
npm run build
vercel deploy
```

For production:

```bash
vercel deploy --prod
```

## Vercel Compatibility

- `vercel.json` configures static hosting behavior.
- `/projects/project.html?project=oatly` works everywhere, including local preview.
- Clean deployed URLs like `/projects/oatly` are supported by Vercel rewrites.
- Assets live in `assets/` and use relative paths that work after deployment.
- `npm run build` performs syntax checks; there is no generated build folder.

## Edit Portfolio Content

Edit this file for portfolio content:

```text
data/content.js
```

It controls:

- Homepage text
- Navigation labels
- Contact email
- Project titles
- Project descriptions
- Project thumbnail images
- Optional project links
- Project categories
- Project tags
- Work Sample / case study details
- Main project media

## Add A New Project

Add one object to the `projects` array in `data/content.js`.

Minimum structure:

```js
{
  slug: "new-project",
  title: "New Project",
  description: "Short hover description.",
  image: "assets/thumb-new-project.svg",
  categories: ["Category"],
  tags: ["Tag One", "Tag Two"],
  caseStudy: {
    insight: "The consumer or brand insight.",
    opportunity: "The creative opportunity.",
    hook: "The campaign hook.",
    results: "Expected results or strategic outcome.",
  },
}
```

The homepage Work grid creates the card automatically. The reusable Work Sample
page pulls the matching content from `data/content.js`.

Project URL formats:

```text
projects/project.html?project=new-project
/projects/new-project
```

The second clean URL works after deployment on Vercel.

## Project Media

By default, a project uses its `image` field as the main Work Sample media.

For an embedded TikTok, YouTube, or similar short-form video:

```js
media: {
  type: "embed",
  src: "https://www.tiktok.com/embed/VIDEO_ID",
  title: "TikTok concept video",
}
```

For a local video file:

```js
media: {
  type: "video",
  src: "assets/my-video.mp4",
  poster: "assets/my-poster.jpg",
  mimeType: "video/mp4",
}
```

For a custom image:

```js
media: {
  type: "image",
  src: "assets/my-project-image.jpg",
  alt: "Project artwork description",
}
```

## File Map

- `data/content.js`: editable portfolio content and project data
- `index.html`: homepage layout hooks
- `projects/project.html`: reusable Work Sample template
- `scripts/home.js`: renders homepage content from `data/content.js`
- `scripts/project.js`: renders a project from `data/content.js`
- `styles.css`: visual design and responsive layout
- `assets/`: images, thumbnails, and future video/poster files
- `vercel.json`: Vercel static hosting config
- `package.json`: local scripts and production checks

## Local Preview

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:4174
```

## Production Check

```bash
npm run build
```

This checks JavaScript syntax before deploying.
