const content = window.FRWD_CONTENT;
const site = content.site;
document.title = site.title;
document.querySelector("[data-nav-about]").textContent = site.nav.about;
document.querySelector("[data-nav-work]").textContent = site.nav.work;
document.querySelector("[data-nav-contact]").textContent = site.nav.contact;
const hero = document.querySelector("[data-hero-image"]);
hero.src = site.heroImage; hero.alt = site.heroImageAlt;
document.querySelector("[data-about-label]").textContent = site.about.label;
document.querySelector("[data-about-title]").textContent = site.about.title;
document.querySelector("[data-about-body]").textContent = site.about.body;
document.querySelector("[data-contact-title]").textContent = site.contact.title;
const email = document.querySelector("[data-contact-email"]);
email.href = "mailto:" + site.contact.email; email.textContent = site.contact.email;
document.querySelector("[data-about-gallery]").innerHTML = site.about.gallery.map(function (photo) { return '<figure class="about-photo' + (photo.position ? ' about-photo--portrait' : '') + '"><img src="' + photo.src + '" alt="' + photo.alt + '"' + (photo.position ? ' style="object-position:' + photo.position + '"' : '') + ' /></figure>'; }).join("");
function media(item) {
  const frame = item.frame === "phone" ? " media-cell--phone" : "";
  if (item.type === "video") return item.src ? '<div class="media-cell media-cell--video' + frame + '"><video src="' + item.src + '" controls playsinline></video></div>' : '<div class="media-cell media-cell--video-empty' + frame + '"><span>' + (item.label || "Put Video Here") + "</span></div>";
  return item.src ? '<div class="media-cell media-cell--image"><img src="' + item.src + '" alt="' + (item.alt || "") + '" loading="lazy" /></div>' : '<div class="media-cell media-cell--image-empty"><span>' + (item.alt || "Add Photo") + "</span></div>";
}
document.querySelector("[data-work-sections]").innerHTML = content.workSections.map(function (section) {
  const intro = section.intro ? '<div class="case-intro">' + section.intro.map(function (text) { return "<p>" + text + "</p>"; }).join("") + "</div>" : "";
  const mediaClass = section.title.toLowerCase().replace(/\s+/g, "-");
  const outro = section.outro ? '<p class="case-outro">' + section.outro + "</p>" : "";
  const quotes = section.quotes ? '<div class="case-quotes">' + section.quotes.map(function (quote) { return "<p>" + quote + "</p>"; }).join("") + "</div>" : "";
  return '<section class="case-study"><p class="case-kicker">' + section.kicker + '</p><h2 class="case-title">' + section.title + "</h2>" + intro + '<div class="media-grid media-grid--' + mediaClass + '">' + section.media.map(media).join("") + "</div>" + outro + quotes + "</section>";
}).join("");
document.querySelector("[data-favs]").innerHTML = '<p class="case-kicker">' + content.favs.kicker + '</p><h2 class="case-title">' + content.favs.title + '</h2><div class="favs-grid">' + content.favs.items.map(function (item) { const image = item.image ? '<img src="' + item.image + '" alt="' + item.title + '" />' : '<div class="media-cell media-cell--image-empty"><span>Add Photo</span></div>'; return '<div class="favs-item">' + image + '<div class="favs-copy"><strong>' + item.title + "</strong><p>" + item.body + "</p></div></div>"; }).join("") + "</div>";
const icons = { instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>', linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3.5 9.5h3v11h-3v-11zM9.5 9.5h2.9v1.5h.04c.4-.76 1.4-1.56 2.9-1.56 3.1 0 3.66 2.04 3.66 4.7v6.36h-3v-5.64c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.74h-3v-11z"/></svg>' };
document.querySelector("[data-social-links]").innerHTML = site.social.map(function (item) { return '<a class="social-icon" href="' + item.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + item.label + '">' + icons[item.platform] + "</a>"; }).join("");
