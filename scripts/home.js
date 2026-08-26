const content = window.FRWD_CONTENT;
const { site } = content;

document.title = site.title;

document.querySelector("[data-nav-about]").textContent = site.nav.about;
document.querySelector("[data-nav-work]").textContent = site.nav.work;
document.querySelector("[data-nav-contact]").textContent = site.nav.contact;

const heroImage = document.querySelector("[data-hero-image]");
heroImage.src = site.heroImage;
heroImage.alt = site.heroImageAlt;

document.querySelector("[data-about-label]").textContent = site.about.label;
const aboutTitle = document.querySelector("[data-about-title]");
aboutTitle.innerHTML = "<span>" + site.about.title.split("\n").join("</span><span>") + "</span>";
document.querySelector("[data-about-body]").textContent = site.about.body;
document.querySelector("[data-contact-title]").textContent = site.contact.title;

const contactLink = document.querySelector("[data-contact-email]");
contactLink.href = `mailto:${site.contact.email}`;
contactLink.textContent = site.contact.email;
