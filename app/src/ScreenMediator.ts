import { TaskMaker } from './taskClasses/TaskMaker';
import { Record } from "./Record";
import { Mode } from './modes/Mode';

export class ScreenMediator {
    private wordsIndices: number[] = [];
    private taskMaker: TaskMaker = new TaskMaker(this.taskTitleWord, this.answerOptions, this.englishWords, this.ukraineWords);
    private mode: Mode = new Mode(this.languageModeButton);
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
        this.taskMaker.setMode(this.mode.mode);
        this.taskMaker.generateTask();
    }

    setMode(): void {
        this.mode.changeMode();
        this.generateTask();
    }
}