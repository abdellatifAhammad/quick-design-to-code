/*
 * Project Name: Roto-transitions Concept
 * Version: 1.0 
 * Author: Abdellatif Ahammad 
 * Author URI: 
 * Description:
*/

var currentImage = 1;
var totalImages = 4;


function clear_previous() {
    for (let i = 1; i < totalImages; i++) {
        for (let j = 1; j < totalImages + 1; j++) {
            var image = document.getElementById(`s${i}-img${j}`);
            image.classList.remove('zoomed-in', 'disappear-out');
        }
    }
}


function switch_images(btn) {
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
    
}
