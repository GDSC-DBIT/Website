import VanillaTilt from "vanilla-tilt";

export function tiltLogic() {
    let tiltComponents = document.querySelectorAll(".card-tilt-js")
    tiltComponents.forEach(ele => {
        VanillaTilt.init(ele, {
            max: 12,
            perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
            scale: 1.05, // transform scale - 2 = 200%, 1.5 = 150%, etc..
            speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
            easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
        });
    })

}