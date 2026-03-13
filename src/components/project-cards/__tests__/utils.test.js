import { beforeEach, describe, expect, it } from 'vitest';
import { getTranslationValue } from "../utils.js";

beforeEach(() => {
    Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 768,
    });
});

describe("getTranslationValue()", () => {
    describe("WHEN: the user has not scrolled at all", () => {
        it('THEN: there should be no significant movement progress', () => {
            const naturalTops = [
                208.78125,
                709.78125,
                1209.78125,
                1709.78125,
                2209.78125
            ];
            const i = 0;
            const scrollY = 0;
            const result = getTranslationValue(naturalTops, i, scrollY);

            const expectedResult = {
                progress: 1,
                translation: "translateY(0px)",
            };
            expect(result).toEqual(expectedResult);
        });
    });
});
