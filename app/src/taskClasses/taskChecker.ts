import { EnglishMode } from "../modes/EnglishMode";
import { IMode } from "../modes/IMode";

export class TaskChecker {
    private mode: IMode = new EnglishMode();

    constructor(
        private taskTitleWord: HTMLElement,
        private answerOptions: HTMLElement[],
        private englishWords: string[],
        private ukraineWords: string[],
    ) {}
    
    checkTask(wordsIndices: number[], answer: string): boolean {
        return this.mode.checkTask({
            englishWords: this.englishWords,
            ukraineWords: this.ukraineWords,
            wordsIndices,
            answer,
        });
    }

    setMode(mode: IMode): void {
        this.mode = mode;
    }
}