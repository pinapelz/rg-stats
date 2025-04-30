"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = calculate;
exports.inverse = inverse;
const math_1 = require("../util/math");
const throw_if_1 = require("../util/throw-if");
/**
 * Calculates WACCAs rate for a score.
 *
 * @param score - The score to calculate the rate for.
 * @param internalChartLevel - The internal decimal level of the chart the score was achieved on.
 */
function calculate(score, internalChartLevel) {
    (0, throw_if_1.ThrowIf)(score > 1000000, "Score cannot be greater than 1million.", { score });
    throw_if_1.ThrowIf.negative(score, "Score cannot be negative.", { score });
    throw_if_1.ThrowIf.negative(internalChartLevel, "Chart level cannot be negative.", {
        level: internalChartLevel,
    });
    let scoreCoef = 1;
    // Yes, this is really how it works.
    if (score >= 990000) {
        scoreCoef = 4;
    }
    else if (score >= 980000) {
        scoreCoef = 3.75;
    }
    else if (score >= 970000) {
        scoreCoef = 3.5;
    }
    else if (score >= 960000) {
        scoreCoef = 3.25;
    }
    else if (score >= 950000) {
        scoreCoef = 3;
    }
    else if (score >= 940000) {
        scoreCoef = 2.75;
    }
    else if (score >= 920000) {
        scoreCoef = 2.5;
    }
    else if (score >= 900000) {
        scoreCoef = 2;
    }
    else if (score >= 850000) {
        scoreCoef = 1.5;
    }
    return (0, math_1.RoundToNDP)(scoreCoef * internalChartLevel, 3);
}
/**
 * Given a WACCA rate and a chart level, return the minimum score necessary to get
 * that rate.
 *
 * @param rate - The rate to inverse
 * @param internalChartLevel - The internal decimal level of the chart the rate was on.
 */
function inverse(rate, internalChartLevel) {
    throw_if_1.ThrowIf.negative(internalChartLevel, "Chart level cannot be negative.", {
        level: internalChartLevel,
    });
    // I know it seems arbitrary to round this to 4dp, but the issue is that
    // obviously correct things like 36.6/12.2 end up as 3.0000[...]4, which
    // causes this alg to fail.
    const scoreCoef = (0, math_1.RoundToNDP)(rate / internalChartLevel, 4);
    (0, throw_if_1.ThrowIf)(scoreCoef > 4, `A rate of ${rate} is not possible on a chart of level ${internalChartLevel}.`, {
        rate,
        level: internalChartLevel,
    });
    if (scoreCoef > 3.75) {
        return 990000;
    }
    else if (scoreCoef > 3.5) {
        return 980000;
    }
    else if (scoreCoef > 3.25) {
        return 970000;
    }
    else if (scoreCoef > 3) {
        return 960000;
    }
    else if (scoreCoef > 2.75) {
        return 950000;
    }
    else if (scoreCoef > 2.5) {
        return 940000;
    }
    else if (scoreCoef > 2) {
        return 920000;
    }
    else if (scoreCoef > 1.5) {
        return 900000;
    }
    else if (scoreCoef > 1) {
        return 850000;
    }
    return 0;
}
//# sourceMappingURL=wacca-rate.js.map