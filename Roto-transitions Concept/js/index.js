/*
 * Project Name: Roto-transitions Concept
 * Version: 1.0 
 * Author: Abdellatif Ahammad 
 * Author Github: https://github.com/abdellatifAhammad
 * Description: Roto-transitions Concept
*/

const SLICES_NUMBER = 3;
const TOTAL_IMAGES = 5;
var currentImage = 1;
var btnClicks = 0;

function clear_previous() {
    for (let i = 1; i < SLICES_NUMBER + 1; i++) {
        for (let j = 1; j < TOTAL_IMAGES + 1; j++) {
            var image = document.getElementById(`s${i}-img${j}`);
            image.classList.remove('zoomed-in', 'disappear-out');
        }
    }
}


function switch_images() {
    btn = document.getElementsByClassName("switch-btn")[0];
    btn.classList.add("switch-btn-circle");

    // sliced pictures animation
    setTimeout(() => {
        if (currentImage < TOTAL_IMAGES) {
            if (currentImage == TOTAL_IMAGES - 1) {
                for (let index = 1; index < SLICES_NUMBER + 1; index++) {
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
                for (let index = 1; index < SLICES_NUMBER + 1; index++) {
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


    // text animation
    setTimeout(() => {
        let first_spans = document.querySelectorAll("div.text-spin-animation-wrapper > span");
        let last_spans = document.querySelectorAll("div.text-cube-spin-animation-wrapper > span");
        let window_width = window.innerWidth;
        if (window_width > 768) {
            if (btnClicks < TOTAL_IMAGES - 2) {
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
        } else {
            if (btnClicks < TOTAL_IMAGES - 2) {
                first_spans.forEach((span, index) => {
                    span.style.transform = `translateY(-${(1.5 * (btnClicks + 1))}em)`;
                });
                last_spans.forEach((span, index) => {
                    span.style.transform = `translateY(${(1.5 * (btnClicks + 1))}em)`;
                });
                btnClicks++;
            } else {
                btnClicks = 0;
                first_spans.forEach((span, index) => {
                    span.style.transform = `translateY(-${(1.5 * (btnClicks))}em)`;
                });
                last_spans.forEach((span, index) => {
                    span.style.transform = `translateY(${(1.5 * (btnClicks))}em)`;
                });
            }
        }
        btn.style.rotate = `${360 * (btnClicks + 1)}deg`;
    }, 500);

}
