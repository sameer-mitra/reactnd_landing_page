/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navItems = [];
let navbarHeight = 0;
const backToTopBtn = document.querySelector('#back-to-top');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;
  if (scrollPosition > headerHeight) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }

    // Also set the section to active while scrolling.
    //let bActiveSet = false;
    //resetActiveState();

    //navItems.forEach(({elementSection, elementNavLink, elementNavItem}) => {
    //    if (!bActiveSet && elementSection.top >= scrollPosition) {            
    //        elementSection.classList.add('active-section');
    //        elementNavItem.classList.add('active-nav');
    //        bActiveSet = true;
    //    }
    //});
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (section of sections) {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = section.querySelector('h2').textContent;
        navItem.classList.add('nav-item');
        navLink.classList.add('nav-link');
        navLink.href = "#" + section.id;
        navItem.id = "nav-" + section.id;
        navItem.appendChild(navLink);
        navbar.appendChild(navItem);

        const navItemTemp = {
            elementNavLink: navLink,
            elementNavItem: navItem,
            elementSection: section
          };
      
          navItems.push(navItemTemp);
    }
    navbarHeight = document.getElementById('top').offsetHeight;
}

buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
navbar.addEventListener('click', (event) => {
    event.preventDefault();
    resetActiveState();

    navItems.forEach(({elementSection, elementNavLink, elementNavItem}) => {
        if (elementNavLink === event.target) {
            elementSection.scrollIntoView({behavior: 'smooth'});
            elementSection.classList.add('active-section');
            elementNavItem.classList.add('active-nav');
        }
    });
});

function resetActiveState(){
    navItems.forEach(({elementSection, elementNavLink, elementNavItem}) => {        
        elementSection.classList.remove('active-section'); 
        elementNavItem.classList.remove('active-nav');      
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

