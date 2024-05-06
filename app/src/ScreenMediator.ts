import { TaskMaker } from './taskClasses/TaskMaker';
import { Record } from "./Record";
import { Mode } from './modes/Mode';
import { TaskChecker } from './taskClasses/taskChecker';

export class ScreenMediator {
    private wordsIndices: number[] = [];
    private taskMaker: TaskMaker = new TaskMaker(this.taskTitleWord, this.answerOptions, this.englishWords, this.ukraineWords);
    private taskChecker: TaskChecker = new TaskChecker(this.taskTitleWord, this.answerOptions, this.englishWords, this.ukraineWords);
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

    checkRecords(): void {
        if (this.record.getProgress() > this.record.getRecord()) {
            this.record.setRecord(this.record.getProgress());
        }
        this.record.resetProgress();
        this.showRecordIndicators();
    }

    generateTask() {
        this.showRecordIndicators();
        this.taskMaker.setMode(this.mode.mode);
        this.taskChecker.setMode(this.mode.mode);
        this.wordsIndices = this.taskMaker.generateTask();
    }
    
    toggleClass(clasName: string): void {
        this.answerOptions.forEach(button => {
            button.classList.toggle(clasName);
        });
    }

    showAnswer(className: string): void {
        this.toggleClass(className);
        setTimeout(() => {
            this.toggleClass(className);
        }, 500);
    }
    checkTask(answer: string): void {
        if (this.taskChecker.checkTask(this.wordsIndices, answer)) {
            this.showAnswer('right-answer');
            this.record.increaseProgress();
            setTimeout(this.generateTask.bind(this), 500);
            return;
        }
        this.checkRecords();
        this.showAnswer('wrong-answer');
    }

    setMode(): void {
        this.checkRecords();
        this.mode.changeMode();
        this.generateTask();
    }
}