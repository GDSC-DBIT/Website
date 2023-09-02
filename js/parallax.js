import Parallax from "parallax-js";


export function addParallax() {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        clipRelativeInput: true
    });
}