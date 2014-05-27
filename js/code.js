function getPage() {
  var hash = location.hash.slice(1);
  if (!hash) hash = 'home';
  if (hash === 'home') location.hash = '';
  $('.content').load('eportfolio/pages/' + hash + '.html', function () {
    var buttons = $('.header li');
    var a = buttons.find('a[href="#' + hash + '"]').parent().parent();
    if (a.hasClass('dropdown-menu')) a.addClass('active');
    else buttons.removeClass('active').find('a[href="#' + hash + '"]').parent().addClass('active');
  });
}

getPage();
$(window).on('hashchange', getPage);