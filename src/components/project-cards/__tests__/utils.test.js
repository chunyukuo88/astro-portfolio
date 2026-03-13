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
    describe("WHEN: the user has scrolled halfway through card 1's travel distance", () => {
        it("THEN: progress should be ~0.5 and translation should reflect that", () => {
            const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
            const i = 1;
            const scrollY = -7.71875;
            const result = getTranslationValue(naturalTops, i, scrollY);
            expect(result.progress).toBeCloseTo(0.5);
            expect(result.translation).toBe(`translateY(${(-101 * 0.5) - 0}px)`);
        });
    });

    describe("WHEN: the user has scrolled past card 1's full travel distance", () => {
        it("THEN: progress should be capped at 1", () => {
            const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
            const i = 1;
            const scrollY = 9999;
            const result = getTranslationValue(naturalTops, i, scrollY);
            expect(result.progress).toBe(1);
            expect(result.translation).toBe("translateY(-101px)");
        });
    });

    describe("WHEN: the user has not yet reached card 1's scroll start", () => {
        it("THEN: progress should be capped at 0 and translation should be 0", () => {
            const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
            const i = 1;
            const scrollY = -200;
            const result = getTranslationValue(naturalTops, i, scrollY);
            expect(result.progress).toBe(0);
            expect(result.translation).toBe("translateY(0px)");
        });
    });

    describe("WHEN: i=2 (third card)", () => {
        describe("AND: the user has scrolled past its full travel distance", () => {
            it("THEN: progress is 1 and translation accounts for distanceOffset=100 and translationOffset=100", () => {
                const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
                const i = 2;
                const scrollY = 9999;
                const result = getTranslationValue(naturalTops, i, scrollY);
                expect(result.progress).toBe(1);
                expect(result.translation).toBe("translateY(-201px)");
            });
        });

        describe("AND: the user has not yet reached card 2's scroll start", () => {
            it("THEN: progress is 0 and translation accounts for translationOffset only", () => {
                const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
                const i = 2;
                const scrollY = 0;
                const result = getTranslationValue(naturalTops, i, scrollY);
                expect(result.progress).toBe(0);
                // translation = (-101 * 0) - 100 = -100
                expect(result.translation).toBe("translateY(-100px)");
            });
        });
    });

    describe("WHEN: i=3 (fourth card)", () => {
        describe("AND: the user has scrolled past its full travel distance", () => {
            it("THEN: progress is 1 and translation accounts for distanceOffset=200 and translationOffset=200", () => {
                const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
                const i = 3;
                const scrollY = 9999;
                const result = getTranslationValue(naturalTops, i, scrollY);
                expect(result.progress).toBe(1);
                expect(result.translation).toBe("translateY(-301px)");
            });
        });

        describe("AND: the user has not yet reached card 3's scroll start", () => {
            it("THEN: progress is 0 and translation is the negative translationOffset", () => {
                const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
                const i = 3;
                const scrollY = 0;
                const result = getTranslationValue(naturalTops, i, scrollY);
                expect(result.progress).toBe(0);
                expect(result.translation).toBe("translateY(-200px)");
            });
        });
    });

    describe("WHEN: i=4 (fifth card)", () => {
        describe("AND: the user has scrolled past its full travel distance", () => {
            it("THEN: progress is 1 and translation accounts for distanceOffset=300 and translationOffset=300", () => {
                const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
                const i = 4;
                const scrollY = 9999;
                const result = getTranslationValue(naturalTops, i, scrollY);
                expect(result.progress).toBe(1);
                expect(result.translation).toBe("translateY(-401px)");
            });
        });

        describe("AND: the user has not yet reached card 4's scroll start", () => {
            it("THEN: progress is 0 and translation is the negative translationOffset", () => {
                const naturalTops = [208.78125, 709.78125, 1209.78125, 1709.78125, 2209.78125];
                const i = 4;
                const scrollY = 0;
                const result = getTranslationValue(naturalTops, i, scrollY);
                expect(result.progress).toBe(0);
                expect(result.translation).toBe("translateY(-300px)");
            });
        });
    });
});
