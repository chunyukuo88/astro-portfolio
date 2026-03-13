const OVERLAP = 400;

export function getTranslationValue(naturalTops, i, scrollY) {
    const targetTop = naturalTops[0] + i * OVERLAP;
    const totalDistanceToTravel = getDistanceToTravel(naturalTops, i, targetTop);
    const scrollStart = naturalTops[i] - window.innerHeight;
    const calculatedProgress = (scrollY - scrollStart) / totalDistanceToTravel;
    const cappedProgress = Math.min(1, Math.max(0, calculatedProgress));
    const translation = getTranslation(i, totalDistanceToTravel, cappedProgress);
    return { translation, progress: cappedProgress };
}

function getDistanceToTravel(naturalTops, i, targetTop){
    let distanceOffset = 0;
    switch (i) {
        case 2: { distanceOffset = 100; break; }
        case 3: { distanceOffset = 200; break; }
        case 4: { distanceOffset = 300; break; }
        default: break;
    }
    return naturalTops[i] - targetTop - distanceOffset;
}

function getTranslation(i, totalDistanceToTravel, cappedProgress) {
    const offset = getTranslationOffset(i);
    const translation = (-totalDistanceToTravel * cappedProgress) - offset;
    return `translateY(${translation}px)`;
}

function getTranslationOffset(i) {
    switch (i) {
        case 1: return 0;
        case 2: return 100;
        case 3: return 200;
        case 4: return 300;
        default: return 0;
    }
}