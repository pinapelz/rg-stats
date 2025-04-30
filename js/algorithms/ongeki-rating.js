"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
exports.calculateRefresh = calculateRefresh;
exports.calculatePlatinum = calculatePlatinum;
const throw_if_1 = require("../util/throw-if");
/**
 * Calculates the rating for an O.N.G.E.K.I. score.
 * This is accurate up to bright MEMORY Act.3.
 *
 * @param technicalScore - The technical score the user got. This is a value between 0 and 1.01million.
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 */
function calculate(technicalScore, internalChartLevel) {
    (0, throw_if_1.ThrowIf)(technicalScore > 1010000, "Technical score cannot be greater than 1.01Million.", {
        technicalScore,
    });
    throw_if_1.ThrowIf.negative(technicalScore, "Technical score cannot be negative.", {
        technicalScore,
    });
    throw_if_1.ThrowIf.negative(internalChartLevel, "Chart level cannot be negative.", {
        internalChartLevel,
    });
    if (internalChartLevel === 0) {
        return 0;
    }
    let ratingValue = 0;
    const iclInt = Math.round(internalChartLevel * 100.0);
    if (technicalScore >= 1007500) {
        ratingValue = iclInt + 200;
    }
    else if (technicalScore >= 1000000) {
        ratingValue = iclInt + 150 + Math.floor((technicalScore - 1000000) / 150);
    }
    else if (technicalScore >= 970000) {
        ratingValue = iclInt + Math.floor((technicalScore - 970000) / 200);
    }
    else if (technicalScore >= 900000) {
        ratingValue = iclInt - Math.ceil((970000 - technicalScore) / 175);
    }
    else if (technicalScore >= 800000) {
        ratingValue = iclInt - 400 - Math.ceil((900000 - technicalScore) / 500);
    }
    return Math.max(ratingValue / 100.0, 0);
}
/**
 * Calculates the rating for an O.N.G.E.K.I. score.
 * This is accurate as of Re:Fresh.
 *
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 * @param technicalScore - The technical score the user got. This is a value between 0 and 1.01million.
 * @param noteLamp - The note lamp
 * @param fullBell - Whether the bell lamp is "FULL BELL"
 */
function calculateRefresh(internalChartLevel, technicalScore, noteLamp, fullBell) {
    (0, throw_if_1.ThrowIf)(technicalScore > 1010000, "Technical score cannot be greater than 1.01Million.", {
        technicalScore,
    });
    throw_if_1.ThrowIf.negative(technicalScore, "Technical score cannot be negative.", {
        technicalScore,
    });
    throw_if_1.ThrowIf.negative(internalChartLevel, "Chart level cannot be negative.", {
        internalChartLevel,
    });
    (0, throw_if_1.ThrowIf)(technicalScore === 1010000 && (!fullBell || noteLamp !== "ALL BREAK+"), "Invalid AB+", { fullBell: `${fullBell}`, noteLamp });
    (0, throw_if_1.ThrowIf)(technicalScore < 1010000 && noteLamp === "ALL BREAK+", "Invalid AB+", {
        fullBell: `${fullBell}`,
        noteLamp,
    });
    (0, throw_if_1.ThrowIf)(noteLamp === "LOSS" && fullBell, "Cannot have a LOSS FULL BELL", { noteLamp });
    if (internalChartLevel === 0) {
        return 0;
    }
    const iclInt = Math.round(internalChartLevel * 1000.0);
    let ratingValue = iclInt;
    if (technicalScore >= 1007500) {
        ratingValue += 1750 + Math.trunc((250 * (technicalScore - 1007500)) / 2500);
        // SSS+ bonus
        ratingValue = ratingValue + 300;
    }
    else if (technicalScore >= 1000000) {
        ratingValue += 1250 + Math.trunc((500 * (technicalScore - 1000000)) / 7500);
        // SSS bonus
        ratingValue = ratingValue + 200;
    }
    else if (technicalScore >= 990000) {
        ratingValue += 750 + Math.trunc((500 * (technicalScore - 990000)) / 10000);
        // SS bonus
        ratingValue = ratingValue + 100;
    }
    else if (technicalScore >= 970000) {
        ratingValue += Math.floor((750 * (technicalScore - 970000)) / 20000);
    }
    else if (technicalScore >= 900000) {
        ratingValue -= Math.ceil((4000 * (970000 - technicalScore)) / 70000);
    }
    else if (technicalScore >= 800000) {
        ratingValue -= 4000 + Math.ceil((2000 * (900000 - technicalScore)) / 100000);
    }
    else {
        return 0;
    }
    if (fullBell) {
        ratingValue += 50;
    }
    if (noteLamp === "FULL COMBO") {
        ratingValue += 100;
    }
    else if (noteLamp === "ALL BREAK") {
        ratingValue += 300;
    }
    else if (noteLamp === "ALL BREAK+") {
        ratingValue += 350;
    }
    return Math.max(ratingValue / 1000.0, 0);
}
/**
 * Calculates the star rating for an O.N.G.E.K.I. score.
 * This is accurate as of Re:Fresh.
 *
 * @param internalChartLevel - The internal chart level. This is a decimal value stored by the game internally.
 * @param stars - The number of stars, 0-6 with 6 being "rainbow 5-stars"
 */
function calculatePlatinum(internalChartLevel, stars) {
    throw_if_1.ThrowIf.negative(internalChartLevel, "Chart level cannot be negative.", {
        internalChartLevel,
    });
    (0, throw_if_1.ThrowIf)(stars < 0 || stars > 6, "Invalid number of stars", { stars });
    // Rainbow 5-stars have the same rating value as regular 5-stars
    if (stars === 6) {
        stars = 5;
    }
    return Math.floor(stars * internalChartLevel * internalChartLevel) / 1000.0;
}
//# sourceMappingURL=ongeki-rating.js.map