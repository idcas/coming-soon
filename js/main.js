jQuery(document).on('ready', function ($) {
    "use strict";


    /*--------------------------
        PUSH CONTENT OPEN COLOSE
    ---------------------------*/

    var $content = $('.right-details-content');
    $('.info-button').on('click', function () {
        $content.addClass('content-open');
        return false;
    });
    $('.push-content-close').on('click', function () {
        $content.removeClass('content-open');
    });

    var $contentContact = $('.left-contact-content');
    $('.contact-button').on('click', function () {
        $contentContact.addClass('content-open');
        return false;
    });
    $('.push-content-close').on('click', function () {
        $contentContact.removeClass('content-open');
    });
    $content.css({
        'overflow-x': 'hidden',
        'overflow-y': 'scroll'
    });
    $contentContact.css({
        'overflow-x': 'hidden',
        'overflow-y': 'scroll'
    });


    /*--------------------------
        SMOOTH SCROLL
    ----------------------------*/
    $(".right-details-content , .left-contact-content").niceScroll({
        cursorwidth: "0px"
    });


    /*-------------------------------
        COWNDOWN TIMER
    --------------------------------*/
    $('.clock-countdown').downCount({
        date: $('.site-config').attr('data-date'),
        offset: +10
    }, function () {
        //callback here if finished
        //alert('YES, done!');
    });


    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    /*$('#mc-form').ajaxChimp({
        url: 'http://devitfamily.us14.list-manage.com/subscribe/post?u=a77a312486b6e42518623c58a&amp;id=8e9f692d44', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscriber-form input, .subscriber-form button').hide();
            }
        }
    });*/
    const notificame = document.querySelector('.plus-btn');
    const form = document.querySelector('#mc-form');
    const label = form.querySelector('label');
    const input = form.querySelector('input');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');

    const isEmailValid = function(email) {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    notificame.addEventListener('click', () => {
      label.textContent = '';
        if(input.value === ''){
          label.textContent = 'Debes completar el campo';
          return;
        } else if  (! isEmailValid(input.value)) {
          label.textContent = 'Debes ingresar un correo electrónico válido';
          return;
        }

        Email.send({
            /*Host : "smtp.idcas.edu.do",
            Username : "cpineda@idcas.edu.do",
            Password : "C@v(uVa8",*/
            SecureToken: '7059cc5a-eddf-4a3d-96f8-aca0bc03ab13',
            To : "cpineda@idcas.edu.do",
            From : "cpineda@idcas.edu.do",
            Subject : "Listado de Emails",
            Body : "Hola Como estás? me gustaría que me notificame cuando la página este lista <br> <strong>mi correo electrónico es</strong>: "
                + input.value
        }).then(
          message => {
            input.value = '';
            modal.style.display = 'block';
          }
        );

        window.addEventListener('click', () => {
          modal.style.display = 'none';
        });

        close.addEventListener('click', () => {
          modal.style.display = 'none';
        });

    });


    /*------------------------------
        GALLEY POPUP
    -------------------------------*/
    $('.single-gallery a').magnificPopup({
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        gallery: {
            enabled: true
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);
});
