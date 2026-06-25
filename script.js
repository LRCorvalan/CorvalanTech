document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href="#app-store"]');
  if (!link) return;
  event.preventDefault();
  alert('Add your App Store link here.');
});
