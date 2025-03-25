// نمایش مودال جستجوی تصویر
function showImageSearch() {
    document.getElementById('imageSearchModal').style.display = 'block';
}

// جستجوی تصویر
async function searchImage() {
    const searchTerm = document.getElementById('imageSearchInput').value;
    if (!searchTerm) return;

    const resultsDiv = document.getElementById('imageResults');
    const loading = document.getElementById('searchLoading');

    // نمایش لودینگ
    resultsDiv.innerHTML = '';
    loading.style.display = 'block';

    try {
        // اینجا می‌توانید از API های مختلف برای جستجوی تصویر استفاده کنید
        // مثال با استفاده از Unsplash API
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=YOUR_UNSPLASH_API_KEY`);
        const data = await response.json();

        // نمایش نتایج
        resultsDiv.innerHTML = data.results.map(image => `
            <div class="image-result">
                <img src="${image.urls.small}" alt="${image.alt_description}">
            </div>
        `).join('');
    } catch (error) {
        resultsDiv.innerHTML = '<p>خطا در جستجوی تصاویر</p>';
    }

    // مخفی کردن لودینگ
    loading.style.display = 'none';
}

// بستن مودال
document.querySelector('.image-search-modal .close').addEventListener('click', () => {
    document.getElementById('imageSearchModal').style.display = 'none';
});

// بستن مودال با کلیک خارج از آن
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('imageSearchModal')) {
        document.getElementById('imageSearchModal').style.display = 'none';
    }
});