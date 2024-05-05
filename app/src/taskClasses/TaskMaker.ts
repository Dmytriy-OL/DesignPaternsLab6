export class TaskMaker {
    constructor(
        private taskTitleWord: HTMLElement,
        private answerOptions: HTMLElement[],
        private englishWords: string[],
        private ukraineWords: string[],
    ) {}

    generateWordsInices(bellow: number): number[] {
        const wordsIndices: number[] = [];
        for (let i = 0; i < 4; i++) {
            const index = Math.round(Math.random() * bellow) % bellow;
            if (!wordsIndices.includes(index)) {
                wordsIndices.push(index);
            }
        }
        return wordsIndices;
    }
}