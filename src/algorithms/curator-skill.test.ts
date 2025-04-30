import t from "tap";
import { TestCase } from "../test-utils/test-case";
import { calculate, inverse } from "./curator-skill";

const testCases = [
	[980_740, 16, 1569],
	[975_531, 16, 1560],
	[971_879, 16, 1555],
	[968_195, 16, 1549],
	[964_310, 16, 1542],
	[959_301, 16, 1534],
	[950_871, 16, 1521],
	[998_269, 15, 1497],
	[996_327, 15, 1494],
	[995_580, 15, 1493],
	[995_690, 15, 1493],
	[994_676, 15, 1492],
	[992_261, 15, 1488],
	[992_304, 15, 1488],
	[992_365, 15, 1488],
	[992_162, 15, 1488],
	[991_697, 15, 1487],
	[991_488, 15, 1487],
	[990_949, 15, 1486],
	[990_748, 15, 1486],
];

t.test("MUSECA Curator Skill Tests", (t) => {
	function MakeTestCase(score: number, level: number, skill: number): TestCase {
		return (t) =>
			t.equal(
				// note: score doesn't actually matter, it's just there to check
				// that your score isn't < 700k.
				calculate(score, level),
				skill,
				`A score of ${score} on a level ${level} chart should be worth ${skill} skill.`
			);
	}

	for (const testCase of testCases) {
		MakeTestCase(testCase[0], testCase[1], testCase[2])(t);
	}

	t.end();
});

t.test("MUSECA Inverse Curator Skill Tests", (t) => {
	function MakeTestCase(score: number, level: number, skill: number): TestCase {
		return (t) =>
			t.equal(
				// note: score doesn't actually matter, it's just there to check
				// that your score isn't < 700k.
				inverse(skill, level),
				score,
				`A skill of ${skill} on a level ${level} chart should need ${score} score.`
			);
	}

	// due to skill being floored, we can't just invert our test cases
	// because technically, those curator skill values can be achieved with less
	// score in most scenarios.
	const inverseTestCases = [
		[980_625, 16, 1569],
		[975_000, 16, 1560],
		[971_875, 16, 1555],
		[968_125, 16, 1549],
		[963_750, 16, 1542],
		[958_750, 16, 1534],
		[950_625, 16, 1521],
		[998_000, 15, 1497],
		[996_000, 15, 1494],
		[995_334, 15, 1493],
		[994_667, 15, 1492],
		[992_000, 15, 1488],
		[991_334, 15, 1487],
		[990_667, 15, 1486],
	];

	for (const testCase of inverseTestCases) {
		MakeTestCase(testCase[0], testCase[1], testCase[2])(t);
	}

	t.end();
});
