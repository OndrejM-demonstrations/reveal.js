(function (window, document) {
    window.theme = {
        initialize: function () {
            Reveal.addEventListener('ready', function (event) {
                // event.currentSlide, event.indexh, event.indexv
                var sections = document.querySelectorAll(".reveal .slides section.regular");
                var footer = document.querySelector(".templates .regular-footer");
                for (var i = 0; i < sections.length; i++) {
                    var footerClone = footer.cloneNode(true);
                    sections[i].appendChild(footerClone);
                }
            });
        }
    };
})(window, document);
