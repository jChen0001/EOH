const stickySections = [...document.querySelectorAll('.sticky')]


window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySections.length; i++){
        transform(stickySections[i])
    }
})

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section')
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 260 ? 260 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}




const counterAnimation = document.querySelectorAll('#counter');
const txtAnimation1 = document.querySelectorAll('.iIntro');
const txtAnimation2 = document.querySelectorAll('.iIntro2');
const imgAnimation1 = document.querySelectorAll('.img1');

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
            entry.target.classList.add('animateTxt1');
        }
    });
});

const observerThree = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('animateTxt2');
        }
    });
});

const observerFour = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('imgAnimation');
        }
    });
});

counterAnimation.forEach((el) => observerOne.observe(el));
txtAnimation1.forEach((el) => observerTwo.observe(el));
txtAnimation2.forEach((el) => observerThree.observe(el));
imgAnimation1.forEach((el) => observerFour.observe(el));
