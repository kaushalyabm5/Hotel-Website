import Lenis from "lenis";

let lenis = null;

export const initLenis = () => {
  if (lenis) return lenis; // prevent multiple instances

  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};

export const destroyLenis = () => {
  if (!lenis) return;
  lenis.destroy();
  lenis = null;
};