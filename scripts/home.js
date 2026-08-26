const { site } = window.FRWD_CONTENT;
document.title = site.title;
document.querySelector("[data-nav-about]").textContent = site.nav.about;
document.querySelector("[data-nav-work]").textContent = site.nav.work;
document.querySelector("[data-nav-contact]").textContent = site.nav.contact;
const heroImage = document.querySelector("[data-hero-image]");
heroImage.src = site.heroImage;
heroImage.alt = site.heroImageAlt;
document.querySelector("[data-about-label]").textContent = site.about.label;
document.querySelector("[data-about-title]").innerHTML = site.about.title.replaceAll(" x ", " x<br />");
document.querySelector("[data-about-body]").textContent = site.about.body;
document.querySelector("[data-contact-title]").textContent = site.contact.title;
const contactLink = document.querySelector("[data-contact-email]");
contactLink.href = `mailto:${site.contact.email}`;
contactLink.textContent = site.contact.email;
const socialIcon = (name) => ({ linkedin: "in", instagram: "◎", tiktok: "♪" }[name] || "↗");
document.querySelector("[data-socials]").innerHTML = site.socials.map(({ name, url }) => `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Visit Nicole's ${name}">${socialIcon(name)}</a>`).join("");

document.querySelectorAll("[data-video-upload]").forEach((slot) => {
  slot.addEventListener("click", () => {
    const picker = document.createElement("input");
    picker.type = "file";
    picker.accept = "video/*";
    picker.addEventListener("change", () => {
      const file = picker.files?.[0];
      if (!file) return;
      const video = document.createElement("video");
      video.className = "video-slot video-slot--active";
      video.controls = true;
      video.src = URL.createObjectURL(file);
      video.setAttribute("aria-label", "Uploaded video preview");
      slot.replaceWith(video);
    });
    picker.click();
  });
});
