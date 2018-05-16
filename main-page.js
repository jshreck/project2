$(function() {
    if ($('#sidecontent3').length) {
        var el = $('#sidecontent3');
        var stickyTop = $('#sidecontent3').offset().top;
        var stickyHeight = $('#sidecontent3').height();
        $(window).scroll(function() {
            var limit = $('#footer-wrapper').offset().top - stickyHeight - 20;
            var windowTop = $(window).scrollTop();
            if (stickyTop < windowTop) {
                el.css({
                    position: 'fixed',
                    top: 20
                });
            } else {
                el.css('position', 'static');
            }
            if (limit < windowTop) {
                var diff = limit - windowTop;
                el.css({
                    top: diff
                });
            }
        });
    }
});

// Back to top button
(function() {
    $(document).ready(function() {
        return $(window).scroll(function() {
            return $(window).scrollTop() > 600 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
        }), $("#back-to-top").click(function() {
            return $("html,body").animate({
                scrollTop: "0"
            })
        })
    })
}).call(this);