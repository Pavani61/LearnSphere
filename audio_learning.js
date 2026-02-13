document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".audio-form");
    const submitBtn = form ? form.querySelector("button") : null;

    if (!form || !submitBtn) return;

    form.addEventListener("submit", function () {

        // Disable button to prevent multiple submissions
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

    });

    // Auto-play generated audio if available
    const audioElement = document.querySelector("audio");

    if (audioElement) {
        audioElement.play().catch(function () {
            console.log("Autoplay prevented by browser.");
        });
    }

});
