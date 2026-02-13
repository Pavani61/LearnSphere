document.addEventListener("DOMContentLoaded", function () {

    const darkToggle = document.getElementById("darkMode");
    const notifyToggle = document.getElementById("notifications");
    const resetBtn = document.getElementById("resetSettings");

    // Load saved settings
    loadSettings();

    // Dark Mode Toggle
    if (darkToggle) {
        darkToggle.addEventListener("change", function () {
            if (this.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // Notification Toggle
    if (notifyToggle) {
        notifyToggle.addEventListener("change", function () {
            localStorage.setItem("notifications", this.checked ? "enabled" : "disabled");
        });
    }

    // Reset Settings
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            localStorage.clear();
            document.body.classList.remove("dark-mode");

            if (darkToggle) darkToggle.checked = false;
            if (notifyToggle) notifyToggle.checked = false;

            showToast("Settings reset successfully!");
        });
    }

    function loadSettings() {

        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
            if (darkToggle) darkToggle.checked = true;
        }

        if (localStorage.getItem("notifications") === "enabled") {
            if (notifyToggle) notifyToggle.checked = true;
        }
    }

    function showToast(message) {
        let toast = document.createElement("div");
        toast.className = "settings-toast";
        toast.innerText = message;

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 100);

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

});
