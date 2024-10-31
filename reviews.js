const reviewBlocks = document.querySelectorAll('.reviews');

reviewBlocks.forEach(block => {
    const slides = block.querySelectorAll('.slide');
    let currentIndex = 0;

    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    block.querySelector('.arrowLeft').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    block.querySelector('.arrowRight').addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });


    showSlide(currentIndex);
});