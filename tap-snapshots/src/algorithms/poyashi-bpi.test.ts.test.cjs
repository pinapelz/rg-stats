/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if KAVG == WR 1`] = `
Invalid input, BPI is undefined for the case where Kaiden Average equals the World Record. kaidenAverage=120, worldRecord=120.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if KAVG > WR 1`] = `
Invalid input, Kaiden Average was greater than WR. kaidenAverage=125, worldRecord=120.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if KAVG is not an integer. 1`] = `
Invalid input, Kaiden Average was not an integer. kaidenAverage=15.5.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if Kaiden Average is negative. 1`] = `
Invalid input, Kaiden Average was negative or zero. kaidenAverage=-1.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if MAX is negative. 1`] = `
Invalid input, Kaiden Average was greater than MAX. kaidenAverage=100, max=-1.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if MAX is not an integer. 1`] = `
Invalid input, MAX was not an integer. max=15.5.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if WR > MAX 1`] = `
Invalid input, World Record was greater than MAX. worldRecord=130, max=120.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if WR is negative. 1`] = `
Invalid input, Kaiden Average was greater than WR. kaidenAverage=100, worldRecord=-1.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if WR is not an integer. 1`] = `
Invalid input, World Record was not an integer. worldRecord=15.5.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if your score > MAX 1`] = `
Invalid input, Provided EX was greater than MAX. yourEx=130, max=120.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if your score is negative. 1`] = `
Invalid input, Provided EX was negative. yourEx=-1.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP BPI Validation Tests > Should throw if your score is not an integer. 1`] = `
Invalid input, Provided EX was not an integer. yourEx=15.5.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > BPI less than -15 should throw an error. 1`] = `
Invalid input, BPI must be greater than or equal to -15. bpi=-16.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if KAVG == WR 1`] = `
Invalid input, BPI is undefined for the case where Kaiden Average equals the World Record. kaidenAverage=120, worldRecord=120.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if KAVG > WR 1`] = `
Invalid input, Kaiden Average was greater than WR. kaidenAverage=125, worldRecord=120.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if KAVG is not an integer. 1`] = `
Invalid input, Kaiden Average was not an integer. kaidenAverage=15.5.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if Kaiden Average is 0. 1`] = `
Invalid input, Kaiden Average was negative or zero. kaidenAverage=0.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if Kaiden Average is negative. 1`] = `
Invalid input, Kaiden Average was negative or zero. kaidenAverage=-1.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if MAX is 0. 1`] = `
Invalid input, Kaiden Average was greater than MAX. kaidenAverage=100, max=0.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if MAX is negative. 1`] = `
Invalid input, Kaiden Average was greater than MAX. kaidenAverage=100, max=-1.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if MAX is not an integer. 1`] = `
Invalid input, MAX was not an integer. max=15.5.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if WR > MAX 1`] = `
Invalid input, World Record was greater than MAX. worldRecord=130, max=120.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if WR is 0. 1`] = `
Invalid input, Kaiden Average was greater than WR. kaidenAverage=100, worldRecord=0.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if WR is negative. 1`] = `
Invalid input, Kaiden Average was greater than WR. kaidenAverage=100, worldRecord=-1.
`

exports[`src/algorithms/poyashi-bpi.test.ts TAP InverseBPI Validation Tests > Should throw if WR is not an integer. 1`] = `
Invalid input, World Record was not an integer. worldRecord=15.5.
`
