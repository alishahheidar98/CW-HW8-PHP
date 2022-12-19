//***** Submit thing in CW-HW7
function myFunction() {
    let doc;
    const result = confirm("Are you sure about your information?\n (Check that all fields are filled!)");
    if (result === true) {
        doc = "thanks for your collaboration!";
    } else {
        doc = "Canceled!";
    }
    alert(doc);
}
//*************

// Mobile menu (I will get to this later... it's not related to computer workshop HW7!!!!!!!!!!)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');



// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    // adds 'highlights' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
        element.classList.remove('highlight')
    }

}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)