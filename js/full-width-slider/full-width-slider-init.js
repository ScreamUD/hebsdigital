jQuery(document).ready(function ($) {
    var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 5000,
        $SlideEasing: $Jease$.$OutQuint,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_slider1 = new $JssorSlider$("full-width-slider", jssor_1_options);

    function ScaleSlider() {
        var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        if (parentWidth) {
            //for example minHeight is 300;
            var minHeight = 540;

            var newHeight = jssor_slider1.$OriginalHeight() / jssor_slider1.$OriginalWidth() * parentWidth;

            if (newHeight < minHeight)
                jssor_slider1.$ScaleHeight(minHeight);
            else
                jssor_slider1.$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
//responsive code end
});