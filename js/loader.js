window.addEventListener('load', function () {
    const loaderInner = document.querySelector('.loader_inner');
    const loader = document.querySelector('.loader');

        // Плавное скрытие .loader_inner
        loaderInner.style.opacity = '0';

        // После окончания анимации (примерно 300 мс), скрываем весь preloader
        setTimeout(() => {
            loader.style.transition = 'opacity 0.6s ease';
            loader.style.opacity = '0';

        // Полностью убираем элемент из DOM через 600 мс
        this.setTimeout(() => {
            loader.style.display = 'none';
        }, 600);
    }, 400);
});