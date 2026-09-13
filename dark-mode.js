const darkModeToggle = document.getElementById("dark-mode-toggle");

if (darkModeToggle) {

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀";
            localStorage.setItem("darkMode", "enabled");
        } else {
            darkModeToggle.textContent = "☾";
            localStorage.setItem("darkMode", "disabled");
        }
    });

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀";
    }
}