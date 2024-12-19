import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function () {
    const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            lerp: 0.01,
            duration: 2.5,
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            normalizeWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        },
    });

    const lenis = locomotiveScroll.lenisInstance;

    const content = document.querySelector(".content");
    const items = Array.from(content.children);

    const totalHeight = () => content.offsetHeight;

    const repeatItems = (parentEl, total = 0) => {
        const items = [...parentEl.children];
        for (let i = 0; i <= total - 1; ++i) {
            var cln = items[i].cloneNode(true);
            parentEl.appendChild(cln);
        }

        locomotiveScroll.addScrollElements(parentEl);
    };

    // Detect when user scrolls near the bottom
    const checkScroll = () => {
        const scrollTop = lenis.scroll; // Get current scroll position
        const viewportHeight = window.innerHeight;
        const remainingHeight = totalHeight() - (scrollTop + viewportHeight);

        if (remainingHeight < 200) {
            // Trigger when near the bottom
            repeatItems(content, items.length);
        }

        requestAnimationFrame(checkScroll); // Keep checking scroll position
    };

    // Start monitoring scroll
    requestAnimationFrame(checkScroll);
}
