jQuery(function() {
  matchMobileShopByMenu();
  jQuery('.mobile-nav-trigger').click(function() {
    jQuery('.mobile-nav-container').toggleClass('slide-active');
    jQuery('body').toggleClass('no-scroll');
  });

  jQuery('.mobile-drilldown-content shopby-dropdown-select-make');

  jQuery(document).on('change', '.mobile-drilldown-content select', function() {
    var name = jQuery(this).attr('name');
    jQuery('#shopby-drill-mobile select').prop('disabled', true);
    jQuery('#master-shopby-dropdown').find('select[name="'+ name +'"]').val(jQuery(this).val()).trigger('change');
    setTimeout(matchMobileShopByMenu, 200);
  });

  function setAndPollSelectOption($mobileElement, $desktopElement) {
    var pollTimeout = null;
  }

  function matchMobileShopByMenu() {
    var pollTimeout = null;

    pollTimeout = setInterval(function() {
      var $firstOptions = jQuery('#master-shopby-dropdown').find('select[name="section1s"]');
      var $secondOptions = jQuery('#master-shopby-dropdown').find('select[name="section2s"]');
      var $thirdOptions = jQuery('#master-shopby-dropdown').find('select[name="section3bs"]');
      var stopTimeout = true;

      if ($firstOptions.length && $firstOptions.children('option').length) {
        jQuery('#shopby-drill-mobile select[name="section1s"]')
        .html($firstOptions.clone().unwrap().html())
        .val($firstOptions.val())
        .prop('disabled', false);
      } else {
        stopTimeout = false;
      }

      if ($secondOptions.length && $secondOptions.children('option').length) {
        jQuery('#shopby-drill-mobile select[name="section2s"]')
        .html($secondOptions.clone().unwrap().html())
        .val($secondOptions.val())
        .prop('disabled', false);
      } else {
        stopTimeout = false;
      }

      if ($thirdOptions.length && $thirdOptions.children('option').length) {
        jQuery('#shopby-drill-mobile select[name="section3bs"]')
        .html($thirdOptions.clone().unwrap().html())
        .val($thirdOptions.val())
        .prop('disabled', false);
      } else {
        stopTimeout = false;
      }

      if (stopTimeout) {
        clearInterval(pollTimeout);
      }
    }, 200);
  }
});
