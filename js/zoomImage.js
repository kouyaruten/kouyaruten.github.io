window.onload = function() {
    var imgs = document.getElementsByClassName("img");
    var window = document.getElementById("window");
    var enlargeimg = document.getElementById("enlargeimg");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function() {
            var src = this.src;
            initWindowWithIMGAndShow(src);
        };
        var initWindowWithIMGAndShow = function(src) {
            enlargeimg.src = src;
            window.classList.add("window-show");
            $("nav").hide();
        };
    }
    window.addEventListener(
        "click",
        function() {
            window.classList.remove("window-show");
            $("nav").show();
        },
        false
    );
};