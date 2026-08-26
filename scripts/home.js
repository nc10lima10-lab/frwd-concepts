document.querySelectorAll("[data-video-upload]").forEach((slot) => {
  slot.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (!file) return;
      const video = document.createElement("video");
      video.className = slot.className;
      video.controls = true;
      video.src = URL.createObjectURL(file);
      video.setAttribute("aria-label", "Selected video preview");
      slot.replaceWith(video);
    });
    input.click();
  });
});
