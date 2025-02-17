let slideIndex = [1, 1,];
let slideId = ["slide01", "slide02"]
let dotId = ["dot1", "dot2"]
showSlides(1, 0);
showSlides(1, 1);


function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlides(n, no) {
    showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(dotId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    x[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no]-1].className += " active1";
}