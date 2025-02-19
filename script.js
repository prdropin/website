let currentImageIndex = 0;
const images = [
    "images/Canopy Play Area.jpg",
    "images/child playing outside.jpg",
    "images/circle time desk.jpg",
    "images/circle time pay area.jpg",
    "images/Entrance into Parent Resources.jpg",
    // Add other image paths here...
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = images[index];
    document.getElementById("lightbox-modal").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox-modal").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = images[currentImageIndex];
}
