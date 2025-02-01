document.addEventListener("DOMContentLoaded", function () {
    const contactInfo = document.getElementById("contact-info");
    const toggleBtn = document.getElementById("toggle-btn");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    toggleBtn.addEventListener("click", function () {
        if (contactInfo.classList.contains("hidden")) {
            contactInfo.classList.remove("hidden");
            toggleBtn.textContent = "Masquer les coordonnées";
        } else {
            contactInfo.classList.add("hidden");
            toggleBtn.textContent = "Afficher les coordonnées";
        }
    });

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
