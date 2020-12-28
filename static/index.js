document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.getElementById('nav-bar');
    resizeElements();

    /*
    function to fill whole window
    */
    function setContainerHeight(){
        let windowHeight = window.innerHeight;
        if (windowHeight < 450){
            windowHeight = 450; // smallest height elements will resize for
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
        let cutoutContainer = document.getElementById('cutout-container');

        let [, , containerHeight] = setContainerHeight();
        try{
            cutoutContainer.style.height = containerHeight + "px";
        }catch (err){
            console.log('Not on home page.');
        }
    }

    window.addEventListener('resize', resizeElements);
});