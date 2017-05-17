jQuery(window).load(function(e) {
	if(jQuery(window).width() <= 767 ) {
		jQuery('#welcome-msg').appendTo('#mob-welcome-msg');
	}
    if(jQuery(window).width() <= 1023 ) {
		jQuery('#links-list').appendTo('#mob-links');
		jQuery('#Prices_items ul').appendTo('#mob-byprice');
	}
	if(jQuery(window).width() >= 768){
		
		jQuery('#TS_section').appendTo('#sidebar-TS');
		jQuery('#NR_section').prependTo('#sidebar-NS');
		jQuery('#Prices_section').prependTo('#sidebar-BP');
	}
	
	if(jQuery(window).width() <= 767 ) {
		jQuery('#cat-list').appendTo('#mob-cats');
		jQuery('#NR_items').appendTo('#mob-newreleases');
		jQuery('#TS_items').appendTo('#mob-topsellers');
	} 
});

jQuery(document).ready(function(e) {
	jQuery('.footer-widget-heading').click(function() {
		if(jQuery(window).width() <= 767 ) {
			jQuery(this).toggleClass('open');
			jQuery(this).siblings('ul').slideToggle(300);
		}
	});
	jQuery('#mob-Search').click(function() {
		jQuery('#m-search-area').show(0);
	});
	jQuery('#mob-search-close > i').click(function() {
		jQuery('#m-search-area').hide(0);
	});
	jQuery('#Brands_items').click(function() {
		jQuery('#Brands-List').slideToggle();
	});
	
	mobileMenu();
});

resizeMainContent();
//beadsrfun harrys
jQuery(function () {
	resizeMainContent();
});
/* On the window resize event. */
jQuery(window).resize(function () {
    resizeMainContent();
});
/* On the window load event. */
jQuery(window).load(function () {
    resizeMainContent();      
});
/* On the device orientation change event. */
jQuery(window).bind('orientationchange', function (event) {
        resizeMainContent();
});


var mouse_is_inside = false;

function mobileMenu() {
	jQuery('#mob-menu').hover(function(){
		mouse_is_inside=true;
	}, function(){
		mouse_is_inside=false;
	});
	jQuery(document).mouseup(function(){
		if(!mouse_is_inside) jQuery('#mob-menu').removeClass('open');
		if(!mouse_is_inside) jQuery('.hidden-mobile-bg').hide();
	});
	
	jQuery('.mob-menu-trigger').click(function(e) {
		jQuery('#mob-menu').toggleClass('open');
		if(jQuery('#mob-menu').hasClass('open')) {
			jQuery('.hidden-mobile-bg').show();
		}
		else {
			jQuery('.hidden-mobile-bg').hide();
		}
	});
	jQuery('#mob-menu-close i').click(function(e) {
		jQuery('#mob-menu').removeClass('open');
		jQuery('.hidden-mobile-bg').hide();
	});
}


function resizeMainContent() {
    /* Site content section resizing depending on Left Bar or Right Bar is enabled. */
    var sw = jQuery('#mainContainer').width();
    var mcElem = jQuery('#midContent');
    var lbElem = jQuery('#leftContent');
    var rbElem = jQuery('#rightContent');
    var homeElem = jQuery('section#home');
    var listingElem = jQuery('section#listing0');
    var viewcartElem = jQuery('section#viewCart');
    var checkoutElem = jQuery('section#checkoutSinglePage');
    var blogElem = jQuery('section#blog');
    var lb = (lbElem.length > 0 && lbElem.css("display") != 'none' && lbElem.height() > 15) ? lbElem.outerWidth(true) : 0;
    var rb = (rbElem.length > 0 && rbElem.css("display") != 'none' && rbElem.height() > 15) ? rbElem.outerWidth(true) : 0;
    var mw = sw - (lb + rb);
    
    if (lbElem.length == 0 || rbElem.length == 0) {
        if (lbElem.length == 0 && rbElem.length == 0) {
            jQuery('#midContent').css('width', '100%');
        }
        else {
            jQuery('#midContent').css('width', mw + 'px');
        }
    }
    else {
        jQuery('#midContent').css('width', '100%');
    }

    if ((lbElem.css('display') == 'none' && rbElem.css('display') == 'none')) {
        jQuery('#midContent').css('width', '100%');
    }
    else {
        if ((lbElem.css('display') == 'block' || rbElem.css('display') == 'block')) {
            jQuery('#midContent').css('width', mw + 'px');
        }
    }
}

// edit: hide submenu if no subs present
jQuery('ul.subMenu').each(function () {
    if (jQuery(this).has("li").length == 0) {
        jQuery(this).hide();
    }
});

// edit: hide submenu if no subs present
jQuery('ul.subMenu').each(function () {
    if (jQuery(this).has("li").length == 0) {
        jQuery(this).hide();
    }
});

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

(function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    window.classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

})(window);

/* IE Fix for the use of attribute ='placeholder' */
if (!jQuery.support.placeholder) {
    var active = document.activeElement;

    jQuery(':text').focus(function () {
        if (jQuery(this).attr('placeholder') != '' && jQuery(this).val() == jQuery(this).attr('placeholder')) {
            jQuery(this).val('').removeClass('hasPlaceholder');
        }
    }).blur(function () {
        if (jQuery(this).attr('placeholder') != '' && (jQuery(this).val() == '' || jQuery(this).val() == jQuery(this).attr('placeholder'))) {
            jQuery(this).val(jQuery(this).attr('placeholder')).addClass('hasPlaceholder');
        }
    });
    jQuery(':text').blur();

    jQuery(active).focus();
}

/* Equal heights on product dispays. */
var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;

if (jQuery('.product-item .name').length > 0) {

    jQuery('.product-item .name').each(function () {

        $el = jQuery(this);
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {

            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }

            rowDivs.length = 0;
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);

        } else {

            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }

        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }

    });
}

/* Mini-Cart grammar fix. */
var noItems = jQuery('#noItems').text();

if (noItems > 1 || noItems == 0) {
    jQuery('#noItemsText').text('Items');
}
else {
    jQuery('#noItemsText').text('Item');
}


/* Initiates <select> for Sub-Category & Blog menus at a specified width. */
/*if (jQuery(window).width() <= 767) {

    jQuery('#subcategoriesBlock .sub-categories-format').each(function () {
        var list = jQuery(this),
        select = jQuery(document.createElement('select')).insertBefore(jQuery(this).hide());

        jQuery('ul > li a', this).each(function () {
            var target = jQuery(this).attr('target'),
            option = jQuery(document.createElement('option'))
             .appendTo(select)
             .val(this.href)
             .html(jQuery(this).html())
             .click(function () {
             });
        });
        list.remove();
    });

    jQuery('#blog .blogNav ul, #modManufacturer ul').each(function () {
        var list = jQuery(this),
        select = jQuery(document.createElement('select')).insertBefore(jQuery(this).hide());

        jQuery('>li a', this).each(function () {
            var target = jQuery(this).attr('target'),
            option = jQuery(document.createElement('option'))
             .appendTo(select)
             .val(this.href)
             .html(jQuery(this).html())
             .click(function () {
             });
        });
        list.remove();
    });

    jQuery('#blog .blogNav select:eq(0)').prepend('<option> --- Select Category ---</option>');
    jQuery('#blog .blogNav select:eq(1)').prepend('<option> --- Select Recent Posts ---</option>');
    jQuery('#blog .blogNav select:eq(2)').prepend('<option> --- Select Archives ---</option>');

    jQuery('#subcategoriesBlock select').prepend('<option> --- Select Sub-Category ---</option>');

    jQuery('#modManufacturer select:eq(0)').prepend('<option> --- Select A Manufacturer ---</option>');

    jQuery('#blog .blogNav select, #subcategoriesBlock select, #modManufacturer select').change(function () {
        window.location.href = jQuery(this).val();
    });
}*/