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
let sound = null;
let audioUnlocked = false;

// Đảm bảo chỉ unlock audio context sau lần tương tác đầu tiên
function unlockAudio() {
    if (!audioUnlocked) {
        // Tạo audio element lần đầu
        sound = new Audio('0613.mp3');
        sound.loop = true;
        audioUnlocked = true;
    }
}

function playSound() {
    if (!audioUnlocked) unlockAudio();
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}

function stopSound() {
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
    }
}

// Lắng nghe click đầu tiên để unlock audio (fix chặn autoplay)
window.addEventListener('mousedown', () => {
    unlockAudio();
    bgGif.style.display = 'block';
    playSound();
});

window.addEventListener('mouseup', () => {
    bgGif.style.display = 'none';
    stopSound();
});

window.addEventListener('mouseleave', () => {
    bgGif.style.display = 'none';
    stopSound();
});

window.addEventListener('blur', () => {
    bgGif.style.display = 'none';
    stopSound();
});
