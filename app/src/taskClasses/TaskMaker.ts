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

    generateWordsInices(bellow: number, usedWords: number[]): number[] {
        const wordsIndices: number[] = [];
        do {
            const index = Math.round(Math.random() * bellow) % bellow;
            if (!wordsIndices.includes(index)) {
                if (wordsIndices.length >= 1) {
                    console.log('1');
                    wordsIndices.push(index);
                } else {
                    if (!usedWords.includes(index)) {
                        console.log('1');
                        wordsIndices.push(index);
                    }
                }
            }
            console.log('2');
        } while (wordsIndices.length !== 4);
        return wordsIndices;
    }
    
    generateWordsOrder(bellow: number): number[] {
        const wordsIndices: number[] = [];
        do {
            const index = Math.round(Math.random() * bellow) % bellow;
            if (!wordsIndices.includes(index)) {
                wordsIndices.push(index);
            }
        } while (wordsIndices.length !== 4);
        return wordsIndices;
    }

    generateTask(useedWords: number[]): number[] {
        const wordsIndices: number[] = this.generateWordsInices(this.englishWords.length, useedWords);
        this.mode.generateTask({
            taskTitleWord: this.taskTitleWord,
            answerOptions: this.answerOptions,
            englishWords: this.englishWords,
            ukraineWords: this.ukraineWords,
            wordsIndices,
            wordsOrder: this.generateWordsOrder(4),
        });
        return wordsIndices;
    };

    setMode(mode: IMode): void {
        this.mode = mode;
    }
}