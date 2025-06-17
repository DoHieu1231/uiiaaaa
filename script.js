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
let sound;

// Đảm bảo audio được tạo sau khi có tương tác người dùng (yêu cầu của trình duyệt)
function playSound() {
    if (!sound) {
        sound = new Audio('0613.mp3');
        sound.loop = true;
    }
    sound.currentTime = 0;
    sound.play().catch(() => {});
}

function stopSound() {
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
    }
}

window.addEventListener('mousedown', () => {
    bgGif.style.display = 'block';
    playSound();
});

window.addEventListener('mouseup', () => {
    bgGif.style.display = 'none';
    stopSound();
});

window.addEventListener('blur', () => {
    bgGif.style.display = 'none';
    stopSound();
});
