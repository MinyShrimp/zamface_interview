import * as path from "path";
import * as fs from "fs";
import { solution } from "../index";

describe('작당모의 - index', () => {
    it('solution', () => {
        const inputPath = path.join(__dirname, '..', '..', 'question', 'input.txt');
        expect(fs.existsSync(inputPath)).toBe(true);

        const result = `1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n0000000000`;
        expect(solution()).toBe(result);
    })
});