// to detect whether user is a keyboard user so I can remove the ugly blue focus ring for everyone else
function handleFirstTab(e) {
  if (e.keyCode === 9) { // the tab key
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);