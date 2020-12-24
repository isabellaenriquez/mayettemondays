document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.getElementById('nav-bar');
    resizeElements();

    /*
    function to fill whole window
    */
    function setContainerHeight(){
        let windowHeight = window.innerHeight;
        if (windowHeight < 350){
            windowHeight = 350; // smallest height elements will resize for
        }
        let navHeight = navbar.clientHeight;
        let container = document.querySelector('.container');

        let containerHeight = windowHeight - navHeight;
        container.style.height = containerHeight + "px";

        return [windowHeight, navHeight, containerHeight];
    }
    /*
    resize index elements based on window size
    */
    function resizeElements(){
        /*let windowHeight = window.innerHeight;
        if (windowHeight < 350){
            windowHeight = 350; // smallest height elements will resize for
        }
        let navHeight = navbar.clientHeight;
        let container = document.querySelector('.container');*/
        let cutoutContainer = document.getElementById('cutout-container');
        let welcomeText = document.getElementById('home-text');

        //let restOfWindow = windowHeight - navHeight;
        let [, navHeight, containerHeight] = setContainerHeight();
        let welcomeY = containerHeight /2 - navHeight*2;

        //console.log('new Y: ' + welcomeY); // debugging purposes

        welcomeText.style.marginTop = welcomeY + "px";
        //container.style.height = restOfWindow + "px";
        cutoutContainer.style.height = restOfWindow + "px";
    }

    window.addEventListener('resize', resizeElements);
});