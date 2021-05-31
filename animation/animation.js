jQuery(function () {
  // ここで文字を<span></span>で囲む
  $('.typ')
    .children()
    .addBack()
    .contents()
    .each(function () {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    });

  // マウス処理
  $('.typ').hover(
    function () {
      // カーソルが当たった時の処理;
      //   $('.typ').css({ opacity: 1 });
      //   for (var i = 0; i <= $('.typ').children().length; i++) {
      //     $('.typ')
      //       .children('span:eq(' + i + ')')
      //       .delay(50 * i)
      //       .animate({ opacity: 1 }, 3000);
      //   }
      $('.typ')
        .children()
        .addBack()
        .contents()
        .each(function () {
          $(this).replaceWith(
            $(this).text().replace(/(\S)/g, '<span>$1</span>')
          );
        }),
        $('.typ').text('日本語');
    },
    function () {
      // カーソルが離れた時の処理
      $('.typ').text('English'),
        $('.typ')
          .children()
          .addBack()
          .contents()
          .each(function () {
            $(this).replaceWith(
              $(this).text().replace(/(\S)/g, '<span>$1</span>')
            );
          });
    }
  );
});
