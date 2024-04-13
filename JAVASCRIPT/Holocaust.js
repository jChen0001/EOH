const hitlerImage = document.querySelectorAll('.govImage');
const counterAnimation = document.querySelectorAll('#counter');
const imageAnimation1 = document.querySelectorAll('.imgAnimation1');
const imageAnimation2 = document.querySelectorAll('.imgAnimation2');
const imageAnimation3 = document.querySelectorAll('.imgAnimation3');
// Observers
const Government = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('animateGov');
        }
    });
});
const observerOne = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('animateImg1');
        } //else {
        //     entry.target.classList.remove('animateImg1');
        // }
    });
});
const observerThree = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('animateImg2');
        } //else {
        //     entry.target.classList.remove('animateImg2');
        // }
    });
});
const observerFourth = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('animateImg3');
        } //else {
        //      entry.target.classList.remove('animateImg3');
        // }
    });
});
hitlerImage.forEach((el) => Government.observe(el));
counterAnimation.forEach((el) => observerOne.observe(el));
imageAnimation1.forEach((el) => observerTwo.observe(el));
imageAnimation2.forEach((el) => observerThree.observe(el));
imageAnimation3.forEach((el) => observerFourth.observe(el));