function getPage() {
  var hash = location.hash.slice(1);
  if (!hash) hash = 'home';
  if (hash === 'home') location.hash = '';
}

getPage();
$(window).on('hashchange', getPage);

var $github = $('#github');
var $githubImg = $github.find('img');

$github.hover(function () {
  $githubImg.attr('src', $githubImg.attr('src').replace('/GitHub-Mark-Light', '/GitHub-Mark'));
}, function () {
  $githubImg.attr('src', $githubImg.attr('src').replace('/GitHub-Mark', '/GitHub-Mark-Light'));
});
