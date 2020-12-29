document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.getElementById('nav-bar');
    const body = document.body;
    resizeElements();

    /*
    function to fill whole window
    */
    function setContainerHeight(){
        let bodyStyle = getComputedStyle(body);
        let windowHeight = window.innerHeight;
        if (windowHeight < 450){
            windowHeight = 450; // smallest height elements will resize for
        }
        let navHeight = navbar.clientHeight;
        let container = document.querySelector('.container');
        let verticalBodySpace = parseInt(bodyStyle.getPropertyValue('padding-top').match(/\d+/)) + parseInt(bodyStyle.getPropertyValue('padding-bottom').match(/\d+/)) + parseInt(bodyStyle.getPropertyValue('margin-top').match(/\d+/)) + parseInt(bodyStyle.getPropertyValue('margin-bottom').match(/\d+/));
        //body.style.paddingTop + body.style.paddingBottom + body.style.marginTop + body.style.marginBottom;
        console.log(verticalBodySpace);

        let containerHeight = windowHeight - (navHeight + verticalBodySpace);
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