
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const progress = document.getElementById('progress');
    const progressBar = document.getElementById('progressBar');

    function togglePlay() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const pct = (audio.currentTime / audio.duration) * 100;
            progress.style.width = pct + '%';
        }
    });

    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        if (audio.duration) {
            audio.currentTime = (clickX / width) * audio.duration;
        }
    });
    function changeSlide() {
            // Находим обе картинки
            const images = document.querySelectorAll('.slider-img');
            
            // Переключаем класс active у обеих картинок
            images[0].classList.toggle('active');
            images[1].classList.toggle('active');
        }

        let currentSlide = 0; // 0 — первая картинка, 1 — вторая
    const totalSlides = 2; // Всего картинок

    function changeSlide(direction) {
        const track = document.getElementById('character-track');
        
        // Изменяем индекс в зависимости от направления (-1 или +1)
        currentSlide += direction;
        
        // Если ушли левее первой картинки — переключаем на последнюю
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        // Если ушли правее последней картинки — возвращаемся к первой
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        
        // Сдвигаем ленту на нужный процент (для 2 картинок это 0% или 50%)
        track.style.transform = `translateX(-${currentSlide * 50}%)`;

    }