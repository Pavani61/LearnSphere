document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".text-form");
    const submitBtn = form ? form.querySelector("button") : null;
    const resultSection = document.querySelector(".result-section");

    // Handle Form Submit
    if (form && submitBtn) {
        form.addEventListener("submit", function () {

            submitBtn.disabled = true;
            submitBtn.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Generating...';

        });
    }

    // Smooth Scroll to Result
    if (resultSection) {
        resultSection.scrollIntoView({ behavior: "smooth" });
    }

});


// Copy Explanation Function
function copyExplanation() {

    const resultBox = document.getElementById("explanationResult");

    if (!resultBox) return;

    const text = resultBox.innerText;

    navigator.clipboard.writeText(text)
        .then(function () {
            showToast("Explanation copied!");
        })
        .catch(function () {
            showToast("Failed to copy.");
        });
}


// Toast Notification
function showToast(message) {

    let toast = document.createElement("div");
    toast.className = "explanation-toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}
