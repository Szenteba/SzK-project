document.querySelectorAll(".nav-panel").forEach((panel) => {
    panel.addEventListener("toggle", () => {
        if (!panel.open) return;
        document.querySelectorAll(".nav-panel").forEach((other) => {
            if (other !== panel) other.removeAttribute("open");
        });
    });
});

document.querySelectorAll(".auth-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
});
