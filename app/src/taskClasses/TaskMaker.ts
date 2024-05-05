import { EnglishMode } from "../modes/EnglishMode";
import { IMode } from "../modes/IMode";

export class TaskMaker {
    private mode: IMode = new EnglishMode();

    constructor(
        private taskTitleWord: HTMLElement,
        private answerOptions: HTMLElement[],
        private englishWords: string[],
        private ukraineWords: string[],
    ) {}

    generateWordsInices(bellow: number): number[] {
        const wordsIndices: number[] = [];
        do {
            const index = Math.round(Math.random() * bellow) % bellow;
            if (!wordsIndices.includes(index)) {
                wordsIndices.push(index);
            }
        } while (wordsIndices.length !== 4);
        return wordsIndices;
    }

    generateTask(): number[] {
        const wordsIndices: number[] = this.generateWordsInices(this.englishWords.length);
        this.mode.generateTask(
            this.taskTitleWord,
            this.answerOptions,
            this.englishWords,
            this.ukraineWords,
            wordsIndices,
            this.generateWordsInices(4),
        );
        return wordsIndices;
    };

    setMode(mode: IMode): void {
        this.mode = mode;
    }
}