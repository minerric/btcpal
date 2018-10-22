export function smoothScroll(id) {

    const target = document.querySelector(id);

    target.scrollIntoView({
        alignToTop: true,
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    });

    window.history.pushState(null, null, id);


}
