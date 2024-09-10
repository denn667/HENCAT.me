document.addEventListener('DOMContentLoaded', () => {
    // Team Member Interaction
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('click', () => {
            alert(member.getAttribute('data-info'));
        });
    });

    // Image Gallery Slider
    let currentImageIndex = 0;
    const images = document.querySelectorAll('#gallery .gallery-container img');
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    showImage(currentImageIndex);

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }, 3000); // Change image every 3 seconds
});
