export class TaskMaker {
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
}