export { onScroll, onToTopBtn };

const toTopBtn = document.querySelector('.to-top-btn');

window.addEventListener('scroll', onScroll);
toTopBtn.addEventListener('click', onToTopBtn);

function onScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        toTopBtn.classList.add('to-top-btn--visible');
    }
    if (scrolled < coords) {
        toTopBtn.classList.remove('to-top-btn--visible');
    } 
}

function onToTopBtn() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}