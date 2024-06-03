import { ScreenMediator } from "./ScreenMediator";

export class ScreenMediatorBuilder {
    private taskTitleWord?: HTMLElement;
    private taskHintTitle?: HTMLElement;
    private answerOptions?: HTMLElement[];
    private englishWords?: string[];
    private ukraineWords?: string[];
    private languageModeButton?: HTMLElement;
    private recordBar?: HTMLElement;
    private progressBar?: HTMLElement;

    withTaskTitleWord(taskTitleWord: HTMLElement): ScreenMediatorBuilder {
        this.taskTitleWord = taskTitleWord;
        return this;
    }

    withHintTitle(mainHintTitle: HTMLElement): ScreenMediatorBuilder {
        this.taskHintTitle = mainHintTitle;
        return this;
    }

    withAnswerOptions(answerOptions: HTMLElement[]): ScreenMediatorBuilder {
        this.answerOptions = answerOptions;
        return this;
    }

    withEnglishWords(englishWords: string[]): ScreenMediatorBuilder {
        this.englishWords = englishWords;
        return this;
    }

    withUkraineWords(ukraineWords: string[]): ScreenMediatorBuilder {
        this.ukraineWords = ukraineWords;
        return this;
    }

    withLanguageModeButton(languageModeButton: HTMLElement): ScreenMediatorBuilder {
        this.languageModeButton = languageModeButton;
        return this;
    }

    withRecordBar(recordBar: HTMLElement): ScreenMediatorBuilder {
        this.recordBar = recordBar;
        return this;
    }

    withProgressBar(progressBar: HTMLElement): ScreenMediatorBuilder {
        this.progressBar = progressBar;
        return this;
    }

    build(): ScreenMediator {
        if (!this.taskTitleWord || !this.answerOptions || !this.languageModeButton ||
            !this.recordBar || !this.progressBar) {
            throw new Error("Incomplete parameters to build ScreenMediator.");
        }

        return new ScreenMediator(
            this.taskTitleWord,
            this.taskHintTitle!,
            this.answerOptions,
            this.englishWords || [],
            this.ukraineWords || [],
            this.languageModeButton,
            this.recordBar,
            this.progressBar
        );
    }
}
