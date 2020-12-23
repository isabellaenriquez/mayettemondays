document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.getElementById('nav-bar');
    resizeElements();

    function resizeElements(){
        let windowHeight = window.innerHeight;
        let navHeight = navbar.clientHeight + 10;
        let cutoutContainer = document.getElementById('cutout-container');
        let container = document.querySelector('.container');

        let restOfWindow = windowHeight - navHeight;

        console.log('new height: ' + restOfWindow);

        container.style.height = restOfWindow + "px";
        cutoutContainer.style.height = restOfWindow + "px";
    }

    document.addEventListener('resize', resizeElements());
});