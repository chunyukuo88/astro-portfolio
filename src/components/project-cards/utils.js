const OVERLAP = 400;

export function getTranslationValue(naturalTops, i, scrollY) {
    const targetTop = naturalTops[0] + i * OVERLAP;
    const totalDistanceToTravel = naturalTops[i] - targetTop;
    const scrollStart = naturalTops[i] - window.innerHeight;
    const progress = Math.min(1, Math.max(0, (scrollY - scrollStart) / totalDistanceToTravel));
    const translation = `translateY(${-totalDistanceToTravel * progress}px)`;
    return { translation, progress };
}
