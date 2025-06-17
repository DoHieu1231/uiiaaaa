document.querySelectorAll('.artwork').forEach(artwork => {
    const img = artwork.querySelector('.art-img');
    const gif = artwork.querySelector('.art-gif');

    artwork.addEventListener('mousedown', () => {
        img.style.display = 'none';
        gif.style.display = 'block';
    });

    artwork.addEventListener('mouseup', () => {
        gif.style.display = 'none';
        img.style.display = 'block';
    });

    artwork.addEventListener('mouseleave', () => {
        gif.style.display = 'none';
        img.style.display = 'block';
    });
});

const bgGif = document.getElementById('bg-gif');
const sound = new Audio('0513.mp3');
sound.loop = true;

window.addEventListener('mousedown', () => {
    bgGif.style.display = 'block';
    sound.pause();
    sound.currentTime = 0;
    sound.play().catch(() => {});
});

window.addEventListener('mouseup', () => {
    bgGif.style.display = 'none';
    sound.pause();
    sound.currentTime = 0;
});

window.addEventListener('blur', () => {
    bgGif.style.display = 'none';
    sound.pause();
    sound.currentTime = 0;
});
