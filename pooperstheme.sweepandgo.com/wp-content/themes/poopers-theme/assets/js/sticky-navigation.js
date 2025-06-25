document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header.site-header");

    if (!header) {
        console.error("Header element not found!");
        return;
    }

    const headerPlaceholder = document.createElement("div");
    let isSticky = false;
    let scrollThreshold = window.innerHeight * 0.3;
    let ticking = false;

    // Set placeholder height equal to header
    const updatePlaceholderHeight = () => {
        headerPlaceholder.style.height = `${header.offsetHeight}px`;
    };

    const updateStickyHeader = () => {
        const pageHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;

        scrollThreshold = viewportHeight * 0.3;

        if (pageHeight <= viewportHeight + 50) {
            if (isSticky) {
                header.classList.remove("sticky");
                if (headerPlaceholder.parentNode) {
                    headerPlaceholder.remove();
                }
                isSticky = false;
            }
            return;
        }

        if (window.pageYOffset > scrollThreshold) {
            if (!isSticky) {
                header.classList.add("sticky");
                updatePlaceholderHeight();
                header.parentNode.insertBefore(headerPlaceholder, header);
                isSticky = true;
            }
        } else {
            if (isSticky) {
                header.classList.remove("sticky");
                if (headerPlaceholder.parentNode) {
                    headerPlaceholder.remove();
                }
                isSticky = false;
            }
        }

        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateStickyHeader);
            ticking = true;
        }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", () => {
        updatePlaceholderHeight();
        updateStickyHeader();
    });

    updateStickyHeader(); // initial call
});