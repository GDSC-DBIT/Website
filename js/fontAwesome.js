import '@fortawesome/fontawesome-free/css/all.css'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faStar, faBars, faChevronUp, faUser, faLightbulb, faRocket, faUserLock, faGlobe, faMobile, faCloud, faLaptop, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export function addIcons() {
    library.add(
        faUser, faLightbulb, faRocket,//for what we do section
        faChevronUp,//for scroll to top button
        faStar, faBars,//for team cards
        faUserLock, faGlobe, faMobile, faCloud, faLaptop,//for what we do section
        faPhone,
        faGithub,
        faInstagram,
        faLinkedin
    );

    // Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();
}