jQuery(document).ready(function() {
    jQuery(".mobile-navigation-trigger").click(function() {
        jQuery(".mobile-navigation-container").addClass("active");
    });
    jQuery(".mobile-navigation-close").click(function() {
        jQuery(".mobile-navigation-container").removeClass("active");
    });
});