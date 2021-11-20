function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}

const sections = [
  selectElementByClass('home'),
  selectElementByClass('about'),
  selectElementByClass('projects')
];

const navItems = {
  home: selectElementByClass('homeNavItem'),
  about: selectElementByClass('aboutNavItem'),
  projects: selectElementByClass('projectsNavItem'),
};

// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'active' class on the navItem
      navItem.classList.add('active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove('active');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));
//changing colours when scrolling

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 13) nav.className = ''; else nav.className = 'scroll';
};



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

var currentScrollpos = window.pageYOffset;
if(prevScrollpos > currentScrollpos) {
      document.getElementById("navbar").style.top = "0";
} else {
      document.getElementById("navbar").style.top = "-100px";
}

prevScrollpos = currentScrollpos;

}

