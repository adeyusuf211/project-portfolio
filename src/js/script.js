// Script for auto updating a year in footer
const getTahunCopyright = (copyright) => {
    const year = new Date().getFullYear();
    return `${copyright} &copy; ${year}`;
}

const footer     = document.querySelector('#footer h3');
const content    = `<a href="https://www.instagram.com/adeyusuf.official" target="_blank">Ade Yusuf</a>`;

footer.innerHTML = getTahunCopyright(content);
// End auto updating year in footer script

const categories = document.querySelectorAll("#category li a");

categories.forEach(category => {
  category.addEventListener('click', function() {
    for(let i = 0; i < categories.length; i++) {
      categories[i].classList.remove('text-gray-400');
    }
    category.classList.add('text-gray-400');
  });
});

window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('#back-to-top');
  if(this.window.pageYOffset > this.document.querySelector('#nav').offsetTop) {
    backToTop.classList.add('flex');
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.remove('flex');
    backToTop.classList.add('hidden');
  }
});
