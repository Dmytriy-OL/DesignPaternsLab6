export class ScreenMediator {
    private wordsIndices: number[] = [];
    
    constructor(
        private taskTitleWord: HTMLElement,
        private answerOptions: HTMLElement[],
        private englishWords: string[],
        private ukraineWords: string[],
        private languageModeButton: HTMLElement,
        private recordBar: HTMLElement,
        private progressBar: HTMLElement,
    ) {}
}