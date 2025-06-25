/** VIDEO POPUP WIDGET  **/
document.addEventListener("DOMContentLoaded", function() {
    var trigger = document.querySelector(".sng-video-popup-trigger");
    var popup = document.getElementById("sng-video-popup");
    var videoContainer = document.getElementById("sng-video-popup-container");
    var closeBtn = document.createElement("div");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("sng-video-popup-close");
    popup.appendChild(closeBtn);

    trigger.addEventListener("click", function(e) {
        e.preventDefault();
        var screenWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        var desktopVideoUrl = this.getAttribute("data-video-url");
        var mobileVideoUrl = this.getAttribute("data-mobile-video-url");

        var videoUrl =
            screenWidth <= 768 && mobileVideoUrl ?
            mobileVideoUrl :
            desktopVideoUrl;

        if (videoUrl.includes("/shorts/")) {
            videoUrl = videoUrl.replace("/shorts/", "/embed/");
        } else {
            videoUrl = videoUrl.replace("watch?v=", "embed/");
        }
        var embedUrl = videoUrl + "?autoplay=1&mute=0";
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", embedUrl);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
            "allow",
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute("allowfullscreen", "true");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        videoContainer.innerHTML = "";
        videoContainer.appendChild(iframe);
        popup.style.display = "flex";
        overlay.classList.add("active");
    });

    function closePopup() {
        popup.style.display = "none";
        videoContainer.innerHTML = "";
        overlay.classList.remove("active");
    }

    trigger.addEventListener("click", function(e) {
        e.preventDefault();
        // openPopup();
    });

    closeBtn.addEventListener("click", function() {
        closePopup();
    });

    overlay.addEventListener("click", function() {
        closePopup();
    });
});