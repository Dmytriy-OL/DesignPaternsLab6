import { Mode } from "./modes/Mode";

export class Hint {
    private hintCount = 0;
    private hints = 0;

    constructor(
        private taskHintTitle: HTMLElement,
        private mode: Mode,
    ) {}
    
    increaseHintCount(): void {
        if (++this.hintCount === 3) {
            this.hints = 1;
            this.resetHintCount();
        }
    }

    resetHintCount(): void {
        this.hintCount = 0;
    }

    hasHint(): boolean {
        if (this.hints != 0) {
            return true;
        }
        return false;
    }

    useHint(hintTitle: HTMLElement, wordsIndices: number[], englishWords: string[], ukraineWords: string[]) {
        this.hints = 0;
        this.mode.giveHint(hintTitle, wordsIndices, englishWords, ukraineWords);
    }
}