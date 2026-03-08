// Disable right-click context menu (extra safety)
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable copy keyboard shortcuts (Ctrl+C, Cmd+C)
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
    event.preventDefault();
  }
});

// Disable dragging elements
document.addEventListener('dragstart', event => event.preventDefault());
