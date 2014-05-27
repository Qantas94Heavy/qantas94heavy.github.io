function getPage() {
  var hash = location.hash.slice(1);
  if (!hash) hash = 'home';
  if (hash === 'home') location.hash = '';
  $('.content').load('eportfolio/pages/' + hash + '.html', function () {
    var buttons = $('.header li');
    if (buttons.find('a[href="#' + hash + '"]').parent().parent().hasClass(
    buttons.removeClass('active').find('a[href="#' + hash + '"]').parent().addClass('active');
  });
}

getPage();
$(window).on('hashchange', getPage);