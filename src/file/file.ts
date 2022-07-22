import * as fs from "fs";
import * as path from "path";

export abstract class FileSystem {
    static read(): string {
        const inputPath = path.join(__dirname, '..', '..', 'question', 'input.txt');
        return fs.readFileSync(inputPath, { encoding: 'utf-8' });
    }

    static write(
        data: string,
    ): string {
        const outputInput = path.join(__dirname, '..', '..', 'question', 'output.txt');
        fs.writeFileSync(outputInput, data);
        return data;
    }
}