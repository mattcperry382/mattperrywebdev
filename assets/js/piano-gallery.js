document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('.media-dialog');
  if (!dialog) return;
  const image = dialog.querySelector('.dialog-image');
  const title = dialog.querySelector('#media-dialog-title');
  const download = dialog.querySelector('.dialog-download');
  const close = () => dialog.close();

  document.querySelectorAll('.media-preview').forEach((preview) => {
    preview.addEventListener('click', () => {
      const source = preview.dataset.full;
      image.src = source;
      image.alt = preview.querySelector('img').alt;
      title.textContent = preview.dataset.title;
      download.href = preview.dataset.download;
      download.download = preview.dataset.downloadName;
      download.textContent = preview.dataset.download.endsWith('.zip') ? 'Download both business cards (ZIP)' : 'Download flyer';
      dialog.showModal();
    });
  });

  dialog.querySelector('.dialog-close').addEventListener('click', close);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); });
});
