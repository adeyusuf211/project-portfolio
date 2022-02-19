// Script for sticky navbar
const nav   = document.getElementById('my-nav');

window.addEventListener('scroll', function() {
    setTimeout(() => {
        nav.classList.toggle('fixed', scrollY > 500);
    }, 500);
});

// Script for auto updating a year in footer
const getTahunCopyright = (copyright) => {
    const year = new Date().getFullYear();
    return `${copyright} &copy; ${year}`;
}

const footerCopy = document.querySelector('.footer-copy h4');
const content    = `<a href="https://www.instagram.com/adeyusuf.official" target="_blank">Ade Yusuf</a>`;

footerCopy.innerHTML = getTahunCopyright(content);
// End auto updating year in footer script

// script for smooth scrolling
const links = document.querySelectorAll(".nav-list ul li a");

links.forEach(link => {
    link.addEventListener('click', clickHandler);
});

function clickHandler(e) {
  e.preventDefault();
  const href        = this.getAttribute("href");
  const offsetTop   = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// end smooth scrolling script