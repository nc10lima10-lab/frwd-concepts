const content = window.FRWD_CONTENT;
const params = new URLSearchParams(window.location.search);
const pathSlug = window.location.pathname.split("/").filter(Boolean).at(-1);
const slug = params.get("project") || (pathSlug !== "project.html" ? pathSlug : "");
const project = content.projects.find((item) => item.slug === slug) || content.projects[0];
const assetPath = (path) => (path.startsWith("http") ? path : `../${path}`);

document.title = `${project.title} · ${content.site.title}`;

document.querySelector("[data-brand]").textContent = project.title;
document.querySelector("[data-tagline]").textContent = project.description;
document.querySelector("[data-categories]").textContent = project.categories.join(" · ");

const media = project.media || { type: "image", src: project.image };
const mediaContainer = document.querySelector("[data-media]");

if (media.type === "embed") {
  mediaContainer.innerHTML = `
    <iframe
      src="${media.src}"
      title="${media.title || `${project.title} video`}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;
} else if (media.type === "video") {
  mediaContainer.innerHTML = `
    <video controls playsinline poster="${media.poster ? assetPath(media.poster) : ""}">
      <source src="${assetPath(media.src)}" type="${media.mimeType || "video/mp4"}" />
    </video>
  `;
} else if (media.type === "tiktok") {
  mediaContainer.innerHTML = media.embed;
  const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
} else {
  mediaContainer.innerHTML = `
    <img src="${assetPath(media.src)}" alt="${media.alt || `${project.title} concept artwork`}" />
  `;
}

document.querySelector("[data-insight]").textContent = project.caseStudy.insight;
document.querySelector("[data-opportunity]").textContent = project.caseStudy.opportunity;
document.querySelector("[data-hook]").textContent = project.caseStudy.hook;
document.querySelector("[data-results]").textContent = project.caseStudy.results;
