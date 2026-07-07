/**
 * API.js
 * Berisi fungsi-fungsi untuk berinteraksi dengan backend (Google Apps Script).
 * Saat ini menggunakan MOCK DATA (Data Dummy) untuk keperluan prototype.
 */

// Delay simulasi untuk MOCK API
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchAPI(endpoint) {

  if (CONFIG.USE_MOCK) {

    await delay(800);

    switch (endpoint) {
      case 'profile':
        return MOCK_DATA.profile;

      case 'news':
        return MOCK_DATA.news;

      case 'gallery':
        return MOCK_DATA.gallery;

      case 'officials':
        return MOCK_DATA.officials;

      case 'documents':
        return MOCK_DATA.documents;

      case 'statistics':
        return MOCK_DATA.profile.statistik;

      default:
        throw new Error("Endpoint tidak ditemukan");
    }

  }

  const baseUrl = CONFIG.API_URL.endsWith("/")
    ? CONFIG.API_URL.slice(0, -1)
    : CONFIG.API_URL;

  const response = await fetch(`${baseUrl}?endpoint=${encodeURIComponent(endpoint)}`, { redirect: 'follow' });

  if (!response.ok) {
    throw new Error("Gagal mengambil data");
  }

  const json = await response.json();

  if (!json.success) {
    throw new Error(json.message || "API Error");
  }

  return json.data;

}

// Export functions untuk digunakan di file main
const api = {
  getProfile: () => fetchAPI('profile'),
  getNews: () => fetchAPI('news'),
  getGallery: () => fetchAPI('gallery'),
  getOfficials: () => fetchAPI('official'),
  getDocuments: () => fetchAPI('documents'),
  getSettings: () => fetchAPI('settings'),
  getStatistics: () => fetchAPI('statistics'),

  // Fungsi khusus untuk mendapatkan detail 1 berita berdasarkan ID
  getNewsDetail: async (id) => {
    const newsList = await api.getNews();
    const article = newsList.find(n => n.id == id);
    
    if (!article) {
      throw new Error("Berita tidak ditemukan");
    }
    
    return article;
  }
};
