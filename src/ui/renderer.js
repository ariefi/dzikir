/* =========================
   RENDER DOA LIST
========================= */
export function renderDoaList(data) {
    const container = document.getElementById('doaContainer');

    container.innerHTML = '';

    // EMPTY STATE
    if (!data || data.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📖</div>
                <h2>Konten belum tersedia</h2>
                <p>InsyaAllah dzikir akan segera ditambahkan.</p>
            </div>
        `;
        return;
    }

    data.forEach(doa => {
        const card = document.createElement('div');
        card.className = 'doa';

        card.innerHTML = `
            <div class="judul">${doa.urutan}. ${doa.judul}</div>
            <div class="arabic">${doa.arabic}</div>
            <div class="arti">${doa.arti}</div>
            ${doa.catatan ? `<div class="catatan">${doa.catatan}</div>` : ''}
        `;

        container.appendChild(card);
    });
}