document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".image-form");
    const submitBtn = form ? form.querySelector("button") : null;
    const fileInput = document.getElementById("image");

    // Create preview container dynamically
    let previewContainer = document.createElement("div");
    previewContainer.className = "dynamic-preview";
    fileInput.parentNode.appendChild(previewContainer);

    // Image Preview Before Submit
    fileInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        // Validate file type
        if (!file.type.startsWith("image/")) {
            alert("Please upload a valid image file.");
            fileInput.value = "";
            previewContainer.innerHTML = "";
            return;
        }

        // Validate size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
            alert("Image must be less than 5MB.");
            fileInput.value = "";
            previewContainer.innerHTML = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            previewContainer.innerHTML = `
                <p><strong>Preview:</strong></p>
                <img src="${e.target.result}" class="preview-image" />
            `;
        };

        reader.readAsDataURL(file);

    });

    // Handle form submission
    if (form && submitBtn) {
        form.addEventListener("submit", function () {

            submitBtn.disabled = true;
            submitBtn.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Processing...';

        });
    }

    // Smooth scroll to result if exists
    const resultSection = document.querySelector(".result-section");

    if (resultSection) {
        resultSection.scrollIntoView({ behavior: "smooth" });
    }

});
