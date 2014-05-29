function getPage() {
  var hash = location.hash.slice(1);
  if (!hash) hash = 'home';
  if (hash === 'home') location.hash = '';
}

getPage();
$(window).on('hashchange', getPage);