function getPage() {
  var hash = location.hash.slice(1);
  if (!hash) hash = 'home';
  if (hash === 'home') location.hash = '';
  $('.content').load('/pages/' + hash + '.html', function () {
    $('.header li').removeClass('active').find('a[href="#' + hash + '"]').parent().addClass('active');
  });
}

getPage();
$(window).on('hashchange', getPage);