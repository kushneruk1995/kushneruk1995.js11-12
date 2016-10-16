(function( $ ) {
  $.fn.carousel = function(options) {

    var options = $.extend({
            quantity: 6
        }, options);
  
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
    var totalWidthElement = $('.carousel-element').outerWidth(true);  
    var widthOneElement = $('.carousel-element').outerWidth();  

    var carouselHiderWidth = options.quantity*totalWidthElement-totalWidthElement+widthOneElement;
    $('.carousel-hider').width(carouselHiderWidth);
 
    var pixelsOffset = totalWidthElement;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - options.quantity) * pixelsOffset);
    var maximumOffset = 0;


    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        

    });

    return this;

  };
})(jQuery);
