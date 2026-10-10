window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1200);

    init3DTiltEffectOnImages();
    initEventListeners();
});

function init3DTiltEffectOnImages() {
    const images = document.querySelectorAll('.tilt-img');

    images.forEach((img) => {
        img.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

function initEventListeners() {
    document.getElementById('nav-home').addEventListener('click', () => {
        location.href = '#home';
    });
    document.getElementById('nav-fleet').addEventListener('click', () => {
        location.href = '#fleet';
    });
    document.getElementById('nav-customizer').addEventListener('click', () => {
        location.href = '#customizer';
    });
    document.getElementById('nav-experience').addEventListener('click', () => {
        location.href = '#experience';
    });
    document.getElementById('nav-contact').addEventListener('click', () => {
        location.href = '#contact';
    });

    const btnOpenModalHeader = document.getElementById('btn-open-modal-header');
    const testDriveCard = document.getElementById('testDriveCard');

    btnOpenModalHeader.addEventListener('click', () => {
        alert('Test Drive bron qilish bo\'limi ochildi!');
        if (testDriveCard.style.visibility === 'visible') {
            testDriveCard.style.visibility = 'hidden';
        } else {
            testDriveCard.style.visibility = 'visible';
            testDriveCard.scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.getElementById('btn-hero-explore').addEventListener('click', () => {
        alert('Fleet bo\'limiga o\'tilmoqda!');
        location.href = '#fleet';
    });

    document.getElementById('btn-hero-reserve').addEventListener('click', () => {
        alert('Tajriba tanlandi!');
    });

    const carActionButtons = document.querySelectorAll('.btn-car-action');
    carActionButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            alert('Avtomobil rezervatsiya qilindi!');
        });
    });

    document.getElementById('btn-subscribe').addEventListener('click', () => {
        alert('Yangiliklarga muvaffaqiyatli obuna bo\'ldingiz!');
    });

    const reservationForm = document.getElementById('reservationForm');
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('userName').value;
        alert(`Rahmat ${name}! Ma'lumotlaringiz qabul qilindi.`);
        testDriveCard.style.visibility = 'hidden';
    });
}