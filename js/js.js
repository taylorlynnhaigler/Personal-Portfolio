  $(document).ready(function() {

        function toggleNav() {
          $('nav ul').slideToggle();
        }

        $('#menu-button').click(toggleNav);

        function windowResized() {
          var width = $(window).width();
          var menu = $('nav ul');

          if (width > 715 && menu.is(':hidden')) {
              menu.removeAttr('style');
          }
        }

        $(window).resize(windowResized);
    
      });