var check = false;
var overlaycheck = true;

function toggle(thi) {
    var laptop = document.getElementById("laptopMain")
    laptop.style.display = "block";
    var element = document.getElementById("laptop-screen");
    var frame = document.getElementById("frame");

    if (overlaycheck) {
        var overlay = document.getElementById("first");
        overlay.style.display = "none";
        var overlaytext = document.getElementById("overlaytext");
        overlaytext.style.display = "none";


        overlaycheck = false;

    }


    setTimeout(function() {
        if (!check) {

            element.classList.toggle("open");

            setTimeout(function() {

                frame.style.display = "block";


            }, 400);


            check = true;
        } else {
            frame.style.display = "none";
            check = false;
            element.classList.toggle("open");

        }
    }, 500);


}