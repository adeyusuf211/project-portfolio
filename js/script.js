// Script for sticky navbar
const nav   = document.getElementById('my-nav');
const list  = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 0);
    for(let i = 0; i < list.length; i++) {
        list[i].classList.toggle('fixed', scrollY > 0);
    }
});
// End sticky navbar script

// script for loader 
const load = document.querySelector('.loader');

window.addEventListener('beforeunload', function() {
    load.style.display = "grid";
});
// end loader script

// Script for unique scrollbar
let progress    = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeignt = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeignt + "%";
}
// End unique scrollbar script


// Script for tabs
const btn = document.querySelectorAll('.project-tabs .button button');
const img = document.querySelectorAll('.project-image .image-card');

btn.forEach(item => {
    item.addEventListener('click', () => {
        for(let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('active');
        }
        item.classList.add('active');

        // show image
        img.forEach(show => {
            show.style.display = 'none';
            let image = item.textContent.toLowerCase();
            if(show.getAttribute('data-att') === image || image === 'all') {
                show.style.display = "grid";
            }
        })
    });
})
// End tabs

const tombol    = document.getElementById('dark');
const tabs      = document.querySelector('.project-tabs .button');
const h3About   = document.querySelector('.about .about-text h3');
const h3Skill   = document.querySelector('.skill .skill-header h3');
const h3Tools   = document.querySelector('.tools .tools-header h3');
const h3Projek  = document.querySelector('.project .project-text h3');
const sosmed    = document.querySelectorAll('.footer-sosmed .sosmed');
const navList   = document.querySelectorAll('.nav-list a');
const sosmedA   = document.querySelectorAll('.footer-sosmed .sosmed a');
const services  = document.querySelector('.my-services .services-text h3');
const cardIcon  = document.querySelectorAll('.my-services .services-list .my-card .my-card-header svg')

tombol.addEventListener('change', function() {
    document.body.classList.toggle('dark');
    tabs.classList.toggle('dark');
    h3About.classList.toggle('dark');
    h3Skill.classList.toggle('dark');
    h3Tools.classList.toggle('dark');
    h3Projek.classList.toggle('dark');
    services.classList.toggle('dark');
    for(let i = 0; i < sosmed.length; i++) {
        sosmed[i].classList.toggle('dark');
    }
    for(let i = 0; i < sosmedA.length; i++) {
        sosmedA[i].classList.toggle('dark');
    }
    for(let i = 0; i < navList.length; i++) {
        navList[i].classList.toggle('dark');
    }
    for(let i = 0; i < cardIcon.length; i++) {
        cardIcon[i].classList.toggle('dark');
    }
});

// script for smooth scrolling
const links = document.querySelectorAll(".nav-list a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
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

// script for custom cursor
let mouse       = document.querySelector('.cursor');
const h4        = document.querySelectorAll('h4');
const h3        = document.querySelectorAll('h3');
const h2        = document.querySelectorAll('h2');
const p         = document.querySelectorAll('p');
const header    = document.querySelectorAll('.header-skill .header-skill-list');
const h3Text    = document.querySelectorAll('.project-image .image-list .image-card .image-text h3');
const h3Service = document.querySelectorAll('.my-services .services-list .my-card .my-card-body h3');


window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow');
        link.classList.add('hover-link');
    });
    link.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow');
        link.classList.remove('hover-link');
    });
});

h3.forEach(h3 => {
    h3.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow');
    });
    h3.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow');
    });
});

h4.forEach(h4 => {
    h4.addEventListener('mouseover', () => {
        mouse.classList.add('a-link-grow');
    });
    h4.addEventListener('mouseleave', () => {
        mouse.classList.remove('a-link-grow');
    });
});

h2.forEach(h2 => {
    h2.addEventListener('mouseover', () => {
        mouse.classList.add('a-link-grow');
    });
    h2.addEventListener('mouseleave', () => {
        mouse.classList.remove('a-link-grow');
    });
});

p.forEach(p => {
    p.addEventListener('mouseover', () => {
        mouse.classList.add('p-link-grow');
    });
    p.addEventListener('mouseleave', () => {
        mouse.classList.remove('p-link-grow');
    });
});

header.forEach(header => {
    header.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow');
    });
    header.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow');
    });
});

h3Text.forEach(h3Text => {
    h3Text.addEventListener('mouseover', () => {
        mouse.classList.add('a-link-grow');
    });
    h3Text.addEventListener('mouseleave', () => {
        mouse.classList.remove('a-link-grow');
    });
});

h3Service.forEach(h3Service => {
    h3Service.addEventListener('mouseover', () => {
        mouse.classList.add('a-link-grow');
    });
    h3Service.addEventListener('mouseleave', () => {
        mouse.classList.remove('a-link-grow');
    });
});
// end script