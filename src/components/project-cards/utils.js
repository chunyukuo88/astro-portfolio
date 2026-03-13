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
    if (i === 1) {
        return naturalTops[i] - targetTop;
    }
    if (i === 2) {
        return naturalTops[i] - targetTop - 100;
    }
    if (i === 3) {
        return naturalTops[i] - targetTop - 200;
    }
    if (i === 4) {
        return naturalTops[i] - targetTop - 300;
    }
}

function getTranslation(i, totalDistanceToTravel, cappedProgress) {
    const offset = getOffset(i);
    const translation = (-totalDistanceToTravel * cappedProgress) - offset;
    return `translateY(${translation}px)`;
}

function getOffset(i) {
    switch (i) {
        case 1: return 0;
        case 2: return 100;
        case 3: return 200;
        case 4: return 300;
        default: return 0;
    }
}