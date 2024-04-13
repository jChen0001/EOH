// let cont = document.querySelector('.container');
// let layer = document.querySelectorAll('.layer');

// window.onscroll = function(){
//     let X = window.scrollY;

//     layer[0].style.left = (X/100) + '%';
//     layer[1].style.left = (X/200) + '%';
// }


// WIP no canvas so currently doesnt work
/*
let backgroundimage = 0;

function drawbackground() {
    if (backgroundimage == 0) return;
    const canvas = document.getElementsByClassName('wrapper');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(backgroundimage, -x_pos, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundimage, canvas.width - x_pos, 0, canvas.width, canvas.height);
    x_pos = x_pos + 3;
    if (x_pos >= canvas.width) x_pos = 0;
}
/*