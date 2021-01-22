const nav = document.querySelector('#main');
const stickAt = nav.offsetTop;

function stickyNav(e) {
    const timeToStick = window.pageYOffset >= stickAt;
    if(timeToStick) {
        nav.style.position = "fixed";
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        nav.style.position = "relative";
        nav.style.color = "white";
        nav.style.backgroundColor = "black";

        document.body.style.paddingTop = 0;
    }

    console.log(`${stickAt} > ${timeToStick}?`)
}

window.addEventListener('scroll', stickyNav);

// Always better to add styles in CSS using a class, rahter than using JS to add these. The exception is when adding padding to offset the menu position change on the body.