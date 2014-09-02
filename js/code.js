function getPage() {
  var hash = location.hash.slice(1);
  if (!hash) hash = 'home';
  if (hash === 'home') location.hash = '';
}

getPage();
$(window).on('hashchange', getPage);

$('#github').hover(function () {
  this.src = this.src.replace('GitHub-Mark-Light', 'Github-Mark');
}, function () {
  this.src = this.src.replace('GitHub-Mark', 'Github-Mark-Light');
});
