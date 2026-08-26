const content = window.FRWD_CONTENT;
const { site, projects } = content;

document.title = site.title;

document.querySelector("[data-nav-about]").textContent = site.nav.about;
document.querySelector("[data-nav-work]").textContent = site.nav.work;
document.querySelector("[data-nav-contact]").textContent = site.nav.contact;

const heroImage = document.querySelector("[data-hero-image]");
heroImage.src = site.heroImage;
heroImage.alt = site.heroImageAlt;

document.querySelector("[data-work-title]").textContent = site.work.title;
document.querySelector("[data-work-eyebrow]").textContent = projects.length
  ? `${projects.length} ${site.work.eyebrow}`
  : "";
document.querySelector("[data-about-label]").textContent = site.about.label;
document.querySelector("[data-about-title]").textContent = site.about.title;
document.querySelector("[data-about-body]").textContent = site.about.body;
document.querySelector("[data-contact-title]").textContent = site.contact.title;

const contactLink = document.querySelector("[data-contact-email]");
contactLink.href = `mailto:${site.contact.email}`;
contactLink.textContent = site.contact.email;

document.querySelector("[data-concepts]").innerHTML = projects
  .map((project, index) => {
    const number = String(index + 1).padStart(2, "0");
    const link = project.link || `projects/project.html?project=${project.slug}`;

    return `
      <a class="concept-card" href="${link}" style="--image-position: ${project.imagePosition || "center"}">
        <img src="${project.image}" alt="${project.title} concept thumbnail" />
        <span class="concept-overlay">
          <span>${number}</span>
          <strong>${project.title}</strong>
          <em>${project.description}</em>
        </span>
      </a>
    `;
  })
  .join("");
