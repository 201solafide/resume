// Ambil semua elemen navigasi
const navLinks = document.querySelectorAll('nav ul li a');

// Tambahkan event listener untuk setiap link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Hapus efek background gradient dari semua section
        document.querySelectorAll('section').forEach(section => {
            section.style.background = '#1e1e1e'; // Reset ke warna hitam
        });

        // Tambahkan efek hanya pada section yang sesuai
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.style.background = 'linear-gradient(45deg, #1e1e1e, #000)';
    });
});
