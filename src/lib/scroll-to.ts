import { animateScroll } from "./animateScroll";

export function scrollTo(element: HTMLElement, duration: number = 3000): void {
  const initialPosition = window.scrollY;

  if (!element) {
    return;
  }

  animateScroll({
    targetPosition: element.offsetTop,
    initialPosition,
    duration,
  });
}
