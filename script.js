    function toggleMenu() {
        const dropdown = document.querySelector('.dropdown-menu');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeButton = document.querySelector(".close-button");

    document.querySelectorAll(".product-item").forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").src;
            const title = this.querySelector("p").innerText;
            const description = this.querySelector("p:nth-child(3)").innerText;

            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});