const OVERLAP = 400;

export function getTranslationValue(naturalTops, i, scrollY) {
    const targetTop = naturalTops[0] + i * OVERLAP;
    const totalDistanceToTravel = naturalTops[i] - targetTop;
    const scrollStart = naturalTops[i] - window.innerHeight;
    const calculatedProgress = (scrollY - scrollStart) / totalDistanceToTravel;
    const cappedProgress = Math.min(1, Math.max(0, calculatedProgress));
    const translation = `translateY(${-totalDistanceToTravel * cappedProgress}px)`;
    return { translation, progress: cappedProgress };
}
