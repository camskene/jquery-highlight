/*
 * jQuery Highlight Plugin
 * Author: @camskene
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    $.fn.highlight = function ( options ) {

        options = $.extend( {}, $.fn.highlight.options, options );

        return this.each(function () {

            $(this).css({
                color: options.color,
                backgroundColor: options.backgroundColor
            });
            // CSS could also be set as:
            // this.style.color = options.color;
            // this.style.backgroundColor = options.backgroundColor;

        });
    };

    $.fn.highlight.options = {
        color: '#fff',
        backgroundColor: '#f00'
    };
    
})( jQuery, window, document );

// Usage
// Defaults:
// $("a").highlight();

// Options:
// $("p").highlight({
//     backgroundColor: 'yellow',
//     color: 'blue'
// })
// Global overide:
// $.fn.highlight.backgroundColor = 'rgba(255,255,0,0.5)'
