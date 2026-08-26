# FRWD Concepts

Static portfolio site for FRWD Concepts. It is ready to deploy on Vercel without a framework or build output folder.

## Before publishing

- Update written content and social links in `data/content.js`.
- Add permanent videos to `assets/`, then replace a video slot in `index.html` with a `<video>` element and a local `<source>` path. The on-page **Put video here** buttons are useful for browser previews, but a selected file is not saved to the deployed site automatically.
- Keep asset filenames and capitalization exactly the same as their references in `index.html`.

## Run locally

```bash
npm run dev
```

Open `http://127.0.0.1:4174` in a browser.

## Verify before deployment

```bash
npm run build
```

This validates the JavaScript syntax. Vercel provides Node.js when it runs this command.

## Push to GitHub

The repository remote is already configured as `https://github.com/nc10lima10-lab/frwd-concepts.git`.

```bash
git add index.html styles.css scripts/home.js data/content.js README.md assets/vid1.MP4
git commit -m "Refresh FRWD Concepts portfolio"
git push origin main
```

## Deploy to Vercel

1. Sign in to [Vercel](https://vercel.com) and choose **Add New → Project**.
2. Import the `nc10lima10-lab/frwd-concepts` GitHub repository.
3. Leave the framework preset as **Other**.
4. Use `npm run build` as the build command, and leave the output directory blank.
5. Click **Deploy**.

Future pushes to `main` automatically create production deployments. The included `vercel.json` enables clean URLs and long-lived caching for the files in `assets/`.
