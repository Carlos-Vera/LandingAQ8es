    $(function(){
        $('.menu > a').on('click', function(e){
            e.preventDefault();
            $('.menu > a, .form-container').removeClass('active');
            $(this).addClass('active');
            $($(this).attr('href')).addClass('active');
        });
        $('#choose-theme > a').on('click', function(e){
            e.preventDefault();
            var themeName = $(this).data('theme-name');
            $('.contactMe').removeClass('theme-minimal theme-modern theme-london').addClass(themeName);
            $('#choose-theme > a').removeClass('active');
            $(this).addClass('active');
        });
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
