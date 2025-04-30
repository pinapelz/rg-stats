"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateVF4 = calculateVF4;
exports.inverseVF4 = inverseVF4;
exports.calculateVF5 = calculateVF5;
exports.inverseVF5 = inverseVF5;
exports.calculateVF6 = calculateVF6;
exports.inverseVF6 = inverseVF6;
const misc_1 = require("../util/misc");
const throw_if_1 = require("../util/throw-if");
const VF4GradeCoefficients = {
    S: 1.0,
    "AAA+": 0.99,
    AAA: 0.98,
    "AA+": 0.97,
    AA: 0.96,
    "A+": 0.95,
    A: 0.94,
    B: 0.93,
    C: 0.92,
    D: 0.91,
};
const VF5GradeCoefficients = {
    S: 105,
    "AAA+": 102,
    AAA: 100,
    "AA+": 97,
    AA: 94,
    // everything below this point is marked with a (?)
    // in bemaniwiki, so maybe it can't be trusted?
    "A+": 91,
    A: 88,
    B: 85,
    C: 82,
    D: 80,
};
const VF5LampCoefficients = {
    "PERFECT ULTIMATE CHAIN": 110,
    "ULTIMATE CHAIN": 105,
    "MAXXIVE CLEAR": 104,
    "EXCESSIVE CLEAR": 102,
    CLEAR: 100,
    FAILED: 50,
};
/**
 * Calculate VOLFORCE as it's defined in SDVX4.
 *
 * @param score - The user's score. Between 0 and 10million.
 * @param level - The level of the chart. Between 0 and 20, but this is not enforced.
 */
function calculateVF4(score, level) {
    AssertProvidedScore(score);
    const grade = SDVXScoreToGrade(score);
    const gradeCoefficient = VF4GradeCoefficients[grade];
    return Math.floor(25 * (level + 1) * (score / 10000000) * gradeCoefficient);
}
/**
 * Given a VF4 value and a chart level, return what score is needed to get that
 * VF4.
 *
 * If the score needed is greater than 10million, this function will throw.
 **
 * @param vf4 - The VF4 to invert.
 * @param level - The level of the chart you're inverting for.
 */
function inverseVF4(vf4, level) {
    const scoreTimesGradeCoef = (10000000 * vf4) / (25 * (level + 1));
    const score = AttemptGradeCoefficientDivide(scoreTimesGradeCoef, VF4GradeCoefficients);
    (0, throw_if_1.ThrowIf)(score === null, `A VF4 of ${vf4} is not possible on a chart with level ${level}`, {
        vf4,
        level,
    });
    return score;
}
/**
 * Calculate VOLFORCE as it's defined in SDVX5.
 *
 * @param score - The user's score. Between 0 and 10million.
 * @param level - The level of the chart. Between 0 and 20, but this is not enforced.
 */
function calculateVF5(score, lamp, level) {
    AssertProvidedScore(score);
    const unroundedVF5 = CalculateWholeVF5(score, lamp, level);
    return Math.floor(unroundedVF5 / 10000) / 100;
}
/**
 * Given a VF5 value and a chart level, return what score is needed to get that
 * VF5.
 *
 * If the score needed is greater than 10million, this function will throw.
 *
 * @param vf5 - The VF5 to invert.
 * @param lamp - The lamp for this score. This is necessary to know, as lampCoefficient
 * plays a part in VF5.
 * @param level - The level of the chart you're inverting for.
 */
function inverseVF5(vf5, 
// Exclude PUC as input. It doesn't make sense as input, since the answer would
// always be 10million.
lamp, level) {
    const score = InvertUnroundedVF5(vf5, lamp, level);
    (0, throw_if_1.ThrowIf)(score === null, `A VF5 of ${vf5} is not possible on a chart with level ${level}.`, {
        vf5,
        level,
    });
    return score;
}
/**
 * Calculate VOLFORCE as it's defined in SDVX6.
 *
 * @param score - The user's score. Between 0 and 10million.
 * @param level - The level of the chart. Between 0 and 20, but this is not enforced.
 */
function calculateVF6(score, lamp, level) {
    AssertProvidedScore(score);
    const unroundedVF5 = CalculateWholeVF5(score, lamp, level);
    // VF6 is just unroundedVF5 to 3 decimal places instead of 2.
    return Math.floor(unroundedVF5 / 1000) / 1000;
}
/**
 * Given a VF6 value and a chart level, return what score is needed to get that
 * VF5.
 *
 * If the score needed is greater than 10million, this function will throw.
 **
 * @param vf6 - The VF6 to invert.
 * @param lamp - The lamp for this score. This is necessary to know, as lampCoefficient
 * plays a part in VF6. Passing "PERFECT ULTIMATE CHAIN" as a lamp is invalid, as inverting
 * it into a score makes no sense.
 * @param level - The level of the chart you're inverting for.
 */
function inverseVF6(vf6, 
// Exclude PUC as input. It doesn't make sense as input, since the answer would
// always be 10million.
lamp, level) {
    // note: this function is actually identical to inverseVF5, but with the caveat
    // that the error message is different.
    const score = InvertUnroundedVF5(vf6, lamp, level);
    (0, throw_if_1.ThrowIf)(score === null, `A VF6 of ${vf6} is not possible on a chart with level ${level}.`, {
        vf6,
        level,
    });
    // guaranteed to not be null
    return score;
}
/**
 * Calculate VF5 without performing any rounding. This is useful because VF5
 * is floored to 2 decimal places, wherease VF6 is floored to 3. This lets us
 * reuse the same algorithm.
 */
function CalculateWholeVF5(score, lamp, level) {
    const grade = SDVXScoreToGrade(score);
    const gradeCoefficient = VF5GradeCoefficients[grade];
    const lampCoefficient = VF5LampCoefficients[lamp];
    return level * 2 * (score / 10000000) * gradeCoefficient * lampCoefficient;
}
/**
 * Attempt to invert VF5 into a score.
 *
 * @returns The score if it was possible to be achieved. Else, it returns null.
 */
function InvertUnroundedVF5(vf5, lamp, level) {
    // Note: PERFECT ULTIMATE CHAIN is never passed into this function from typescript
    // as the calling functions Exclude<T> it from the lamps.
    // However, a JS caller may call it like this anyway, so we mayaswell throw.
    (0, throw_if_1.ThrowIf)(lamp === "PERFECT ULTIMATE CHAIN", "PERFECT ULTIMATE CHAIN as a lampCoefficient does not make sense for an inversion, since the answer would always be 10million.", { lamp });
    const lampCoefficient = VF5LampCoefficients[lamp];
    const scoreTimesGradeCoef = (1000000 * 10000000 * vf5) / (2 * level * lampCoefficient);
    const score = AttemptGradeCoefficientDivide(scoreTimesGradeCoef, VF5GradeCoefficients);
    return score;
}
/**
 * Convert a SDVX percent to the grade it represents.
 * @param score - The score to convert - between 0 and 10million.
 * @returns A string representing a grade.
 */
function SDVXScoreToGrade(score) {
    if (score < 7000000) {
        return "D";
    }
    else if (score < 8000000) {
        return "C";
    }
    else if (score < 8700000) {
        return "B";
    }
    else if (score < 9000000) {
        return "A";
    }
    else if (score < 9300000) {
        return "A+";
    }
    else if (score < 9500000) {
        return "AA";
    }
    else if (score < 9700000) {
        return "AA+";
    }
    else if (score < 9800000) {
        return "AAA";
    }
    else if (score < 9900000) {
        return "AAA+";
    }
    return "S";
}
/**
 * Given a SDVX grade, return the lower and upper bounds for scoring in this grade.
 * This is used to invert the gradeCoefficient function in volforce.
 *
 * Bounds are returned as lower <= k < upper.
 */
function SDVXGetGradeBoundaries(grade) {
    if (grade === "S") {
        return { lower: 9900000, upper: 10000000 };
    }
    else if (grade === "AAA+") {
        return { lower: 9800000, upper: 9900000 };
    }
    else if (grade === "AAA") {
        return { lower: 9700000, upper: 9800000 };
    }
    else if (grade === "AA+") {
        return { lower: 9500000, upper: 9700000 };
    }
    else if (grade === "AA") {
        return { lower: 9300000, upper: 9500000 };
    }
    else if (grade === "A+") {
        return { lower: 9000000, upper: 9300000 };
    }
    else if (grade === "A") {
        return { lower: 8700000, upper: 9000000 };
    }
    else if (grade === "B") {
        return { lower: 8000000, upper: 8700000 };
    }
    else if (grade === "C") {
        return { lower: 7000000, upper: 8000000 };
    }
    return { lower: 0, upper: 7000000 };
}
/**
 * Assert necessary things about a provided score.
 */
function AssertProvidedScore(score) {
    (0, throw_if_1.ThrowIf)(score > 10000000, "Score cannot be greater than 10million", { score });
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative", { score });
}
/**
 * Go through all of the gradeBoundaries for a game and use them as guesses for score
 * values.
 *
 * This means we try dividing by all the gradeCoefficients until we find one
 * where the resulting score would have the same grade as the given coefficient.
 *
 * Used for inverting VF.
 *
 * @param scoreTimesGradeCoef - The expected score multiplied by the gradeCoefficient.
 * @param coefficients - A record of SDVXGrade -> gradeCoefficient
 * @returns The score divided by the gradeCoefficient. If not possible, this returns
 * null.
 */
function AttemptGradeCoefficientDivide(scoreTimesGradeCoef, coefficients) {
    for (const [grade, gradeCoef] of (0, misc_1.GetEntriesAsArray)(coefficients).reverse()) {
        const maybeScore = scoreTimesGradeCoef / gradeCoef;
        const { lower, upper } = SDVXGetGradeBoundaries(grade);
        if (maybeScore <= lower) {
            return lower;
        }
        else if (maybeScore < upper || (maybeScore === upper && upper === 10000000)) {
            return Math.round(maybeScore);
        }
    }
    return null;
}
//# sourceMappingURL=volforce.js.map