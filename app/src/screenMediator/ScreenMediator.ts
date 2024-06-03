import { Mode } from './../modes/Mode';
import { TaskMaker } from '../taskClasses/TaskMaker';
import { Record } from "../Record";
import { TaskChecker } from '../taskClasses/taskChecker';
import { Hint } from '../Hint';

export class ScreenMediator {
    private wordsIndices: number[] = [];
    private usedWords: number[] = [];
    private taskMaker: TaskMaker = new TaskMaker(this.taskTitleWord, this.answerOptions, this.englishWords, this.ukraineWords);
    private taskChecker: TaskChecker = new TaskChecker(this.taskTitleWord, this.answerOptions, this.englishWords, this.ukraineWords);
    private mode: Mode = new Mode(this.languageModeButton);
    private record: Record = Record.getInstance();
    private hint: Hint = new Hint(this.taskHintTitle, this.mode);

    constructor(
        private taskTitleWord: HTMLElement,
        private taskHintTitle: HTMLElement,
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
        if (this.usedWords.length === this.englishWords.length) {
            this.usedWords.splice(0, this.usedWords.length);
        }
        this.wordsIndices = this.taskMaker.generateTask(this.usedWords);
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
            this.usedWords.push(this.wordsIndices[0]);
            this.hint.increaseHintCount();
            this.taskHintTitle.textContent = '';
            setTimeout(this.generateTask.bind(this), 500);
            return;
        }
        this.hint.resetHintCount();
        this.checkRecords();
        this.showAnswer('wrong-answer');
    }

    setMode(): void {
        this.checkRecords();
        this.mode.changeMode();
        this.generateTask();
    }

    getHint() {
        if (this.hint.hasHint()) {
            return this.hint.useHint(this.taskHintTitle, this.wordsIndices, this.englishWords, this.ukraineWords);
        }
        this.taskHintTitle.textContent = 'You don\'t have any hints';
    }
}