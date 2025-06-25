jQuery(document).ready(function($) {
    // Add active class on button click
    jQuery("#free-quote-header").on("click", function() {
        jQuery("#zipCheckerWrapper, #overlay").addClass("active");
    });

    // Handle clicks on other buttons targeting th#e modal
    jQuery("[data-modal-target='#zipCheckerWrapper']").on("click", function() {
        jQuery("#zipCheckerWrapper, #overlay").addClass("active");
    });

    // Remove active class on click outside
    jQuery(document).on("click", function(e) {
        if (!jQuery(e.target).closest("#zipCheckerWrapper").length &&
            !jQuery(e.target).is("#free-quote-header") &&
            !jQuery(e.target).closest("[data-modal-target='#zipCheckerWrapper']")
            .length
        ) {
            jQuery("#zipCheckerWrapper, #overlay").removeClass("active");
        }
    });
});