document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".code-section form");
    const submitBtn = form ? form.querySelector("button") : null;
    const resultSection = document.querySelector(".result-section");

    // Handle form submission
    if (form && submitBtn) {
        form.addEventListener("submit", function () {

            submitBtn.disabled = true;
            submitBtn.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Generating Code...';

        });
    }

    // Smooth scroll to result if code exists
    if (resultSection) {
        resultSection.scrollIntoView({ behavior: "smooth" });
    }

});


// Copy Code Function
function copyCode() {

    const codeBlock = document.getElementById("codeBlock");

    if (!codeBlock) return;

    const codeText = codeBlock.innerText;

    navigator.clipboard.writeText(codeText)
        .then(function () {
            showCopyMessage("Code copied to clipboard!");
        })
        .catch(function () {
            showCopyMessage("Failed to copy code.");
        });
}


// Small toast message
function showCopyMessage(message) {

    let toast = document.createElement("div");
    toast.className = "copy-toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}
