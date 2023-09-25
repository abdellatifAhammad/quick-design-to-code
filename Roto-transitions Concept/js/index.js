/*
 * Project Name: Roto-transitions Concept
 * Version: 1.0 
 * Author: Abdellatif Ahammad 
 * Author URI: 
 * Description:
*/

var currentImage = 1;
var totalImages = 2;



function switch_images() {
    for (let index = 1; index < 4; index++) {
        var nextImage  = currentImage+1;
        if (currentImage==totalImages){
            nextImage = 1;
        }
        var slice = document.getElementById(`slice-${index}`);
        var img1 = document.getElementById(`s${index}-img${currentImage}`);
        var img2 = document.getElementById(`s${index}-img${nextImage}`);
        slice.style.animationPlayState = 'running';
        img1.classList.add('disappear-out');
        img2.classList.add('zoomed-in');
    }
}