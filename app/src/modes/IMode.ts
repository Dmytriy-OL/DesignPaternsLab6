export interface IMode {
    generateTask(
        taskTitleWord: HTMLElement,
        answerOptions: HTMLElement[],
        englishWords: string[],
        ukraineWords: string[],
        wordsIndices: number[],
        wordsOrder: number[],
    ): void;
        checkTask(
        taskTitleWord: HTMLElement,
        answerOptions: HTMLElement[],
        englishWords: string[],
        ukraineWords: string[],
        wordsIndices: number[],
        wordsOrder: number[],
    ): void;
}