import { TaskMaker } from './taskClasses/TaskMaker';
import { Record } from "./Record";

export class ScreenMediator {
    private wordsIndices: number[] = [];
    private taskMaker: TaskMaker = new TaskMaker(this.taskTitleWord, this.answerOptions, this.englishWords, this.ukraineWords);
    private record: Record = Record.getInstance();

    constructor(
        private taskTitleWord: HTMLElement,
        private answerOptions: HTMLElement[],
        private englishWords: string[],
        private ukraineWords: string[],
        private languageModeButton: HTMLElement,
        private recordBar: HTMLElement,
        private progressBar: HTMLElement,
    ) {}

    showRecordIndicators() {
        this.recordBar.textContent = this.record.getRecord().toString();
        this.progressBar.textContent = this.record.getProgress().toString();
    }

    generateTask() {
        this.showRecordIndicators();
    }
}