/* SERVICE AREA MAP WIDGET */

// DISABLE MOUSE SCROLL IN MAPS
// enable the pointer events only on click;
jQuery(".gmap-wrapper").on("click", function() {
    jQuery(".gmap-wrapper iframe").removeClass("scrolloff"); // set the pointer events true on click
});
// you want to disable pointer events when the mouse leave the canvas area;
jQuery(".gmap-wrapper").mouseleave(function() {
    jQuery(".gmap-wrapper iframe").addClass("scrolloff"); // set the pointer events to none when mouse leaves the map area
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".locations-toggle-btn");

    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            const locationList = document.querySelector(".locations-list");

            if (locationList.classList.contains("show-locations")) {
                locationList.classList.remove("show-locations");
                toggleButton.innerText = "Show All Service Areas";
            } else {
                locationList.classList.add("show-locations");
                toggleButton.innerText = "Hide All Service Areas";
            }
        });
    }
});

jQuery(document).ready(function($) {
    var totalItems = $(".sng-city-area-map ul li").length;
    if (totalItems <= 20) {
        $(".show-more").hide();
    } else {
        $(".show-more").click(function() {
            $(".sng-city-area-map ul li:nth-of-type(n+21)").toggle();
            $(this).text(
                $(this).text() === "Show More" ? "Show Less" : "Show More"
            );
        });
    }
});