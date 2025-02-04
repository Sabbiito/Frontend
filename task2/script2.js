document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const activeHeader = document.querySelector('.accordion-header.active');

        // закриваємо відкритий елемент якшо він є
        if (activeHeader && activeHeader !== header) {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.style.maxHeight = null;
        }

        // відкриваємо та закриваємо поточний елемент
        header.classList.toggle('active');
        const content = header.nextElementSibling;
        if (header.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});
