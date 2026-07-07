/**
 * Main UI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
});

function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && !e.target.closest('.navbar')) {
      navMenu.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Set active link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item a');
  
  navLinks.forEach(link => {
    // Basic logic to check active state
    if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href'))) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    } else if (currentPath === '/' || currentPath.endsWith('index.html')) {
       if(link.getAttribute('href') === 'index.html') {
          link.classList.add('active');
       }
    }
  });
}

// Utility untuk format tanggal (contoh: 15 Agustus 2026)
function formatDate(dateString) {
  return dateString; // Saat ini menggunakan string statis dari mock data
}

// Render Loading
function renderLoading(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>Memuat data...</p>
      </div>
    `;
  }
}

// Render Error
function renderError(containerId, message = "Data gagal dimuat. Silakan coba beberapa saat lagi.") {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
      <div class="error-message">
        <i class="fas fa-exclamation-triangle"></i> ${message}
      </div>
    `;
  }
}

// Reusable render components
function renderNewsCard(news) {
  return `
    <article class="card">
      <img src="${news.thumbnail_url}" alt="${news.judul}" class="card-img" loading="lazy">
      <div class="card-content">
        <div class="card-meta">
          <i class="far fa-calendar-alt"></i> ${news.tanggal}
        </div>
        <h3 class="card-title">
          <a href="berita-detail.html?id=${news.id}">${news.judul}</a>
        </h3>
        <p class="card-text">${news.ringkasan}</p>
        <a href="berita-detail.html?id=${news.id}" class="btn btn-outline" style="align-self: flex-start;">Baca Selengkapnya</a>
      </div>
    </article>
  `;
}

function renderGalleryItem(item) {
  return `
    <div class="gallery-item">
      <img src="${item.image_url}" alt="${item.judul}" loading="lazy">
      <div class="gallery-overlay">
        <h3 class="gallery-title">${item.judul}</h3>
      </div>
    </div>
  `;
}

function renderOfficialCard(official) {
  return `
    <div class="team-card">
      <img src="${official.foto_url}" alt="${official.nama}" class="team-img" loading="lazy">
      <h3 class="team-name">${official.nama}</h3>
      <p class="team-role">${official.jabatan}</p>
    </div>
  `;
}

function renderDocumentItem(doc) {
  return `
    <div class="doc-item">
      <div class="doc-info">
        <i class="fas fa-file-pdf doc-icon"></i>
        <div>
          <h3 class="doc-title">${doc.nama}</h3>
          <p class="doc-meta">Kategori: ${doc.kategori}</p>
        </div>
      </div>
      <a href="${doc.file_url}" class="btn btn-outline" target="_blank">
        <i class="fas fa-download"></i> Unduh
      </a>
    </div>
  `;
}
