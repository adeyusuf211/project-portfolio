// Script for sticky navbar
const nav   = document.getElementById('my-nav');
const list  = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', function() {
    setTimeout(() => {
        nav.classList.toggle('fixed', scrollY > 500);
    }, 500);
    setTimeout(() => {
        nav.classList.toggle('fixed1', scrollY > 1900);
    }, 500);
    setTimeout(() => {
        nav.classList.toggle('fixed2', scrollY > 2600);
    }, 500);
    for(let i = 0; i < list.length; i++) {
        list[i].classList.toggle('fixed', scrollY > 0);
    }
});

// const options = {
//     root: null,
//     treshold: 0,
//     rootMargin: 0
// };

// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// }, options);

// observer.observe(nav);
// End sticky navbar script

// Script for unique scrollbar
let progress    = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeignt = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeignt + "%";
}
// End unique scrollbar script


// script for smooth scrolling
const icons = document.querySelectorAll(".nav-icons a");

for (const icon of icons) {
  icon.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// end script