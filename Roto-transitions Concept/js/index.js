/*
 * Project Name: Roto-transitions Concept
 * Version: 1.0 
 * Author: Abdellatif Ahammad 
 * Author URI: 
 * Description:
*/

var currentImage = 1;
var totalImages = 4;
var btnClicks = 0;


function clear_previous() {
    for (let i = 1; i < totalImages; i++) {
        for (let j = 1; j < totalImages + 1; j++) {
            var image = document.getElementById(`s${i}-img${j}`);
            image.classList.remove('zoomed-in', 'disappear-out');
        }
    }
}


function switch_images() {
    btn = document.getElementsByClassName("switch-btn")[0];
    btn.classList.add("switch-btn-circle");
    setTimeout(() => {
        if (currentImage < totalImages) {
            if (currentImage == totalImages - 1) {
                for (let index = 1; index < totalImages; index++) {
                    var prev_image = document.getElementById(`s${index}-img${currentImage}`);
                    var next_image = document.getElementById(`s${index}-img${currentImage + 1}`);
                    prev_image.classList.remove('disappear-out');
                    next_image.classList.remove('zoomed-in');
                    prev_image.classList.add('disappear-out');
                    next_image.classList.add('zoomed-in');
                }
                setTimeout(() => {
                    clear_previous();
                    currentImage = 1;
                }, 1300);
            } else {
                for (let index = 1; index < totalImages; index++) {
                    var prev_image = document.getElementById(`s${index}-img${currentImage}`);
                    var next_image = document.getElementById(`s${index}-img${currentImage + 1}`);
                    prev_image.classList.remove('disappear-out');
                    next_image.classList.remove('zoomed-in');
                    prev_image.classList.add('disappear-out');
                    next_image.classList.add('zoomed-in');
                }
                currentImage++;
            }
        }
        btn.classList.remove("switch-btn-circle");
    }, 500);

    setTimeout(() => {
        let first_spans = document.querySelectorAll("div.text-spin-animation-wrapper > span");
        let last_spans = document.querySelectorAll("div.text-cube-spin-animation-wrapper > span");
        if (btnClicks < totalImages - 2) {
            first_spans.forEach((span, index) => {
                span.style.transform = `translateY(-${(1.75 * (btnClicks + 1))}em)`;
            });
            last_spans.forEach((span, index) => {
                span.style.transform = `translateY(${(1.5 * (btnClicks + 1))}em)`;
            });
            btnClicks++;
        } else {
            btnClicks = 0;
            first_spans.forEach((span, index) => {
                span.style.transform = `translateY(-${(1.75 * (btnClicks))}em)`;
            });
            last_spans.forEach((span, index) => {
                span.style.transform = `translateY(${(1.5 * (btnClicks))}em)`;
            });
        }
    }, 500);
}
