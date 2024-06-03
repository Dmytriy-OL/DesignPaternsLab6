import { ScreenMediator } from "./ScreenMediator";
import { ScreenMediatorBuilder } from "./ScreenMediatorBuilder";
import { englishWords, languageModeButton, mainHintTitle, mainTitleWord, progressBar, recordBar, taskAnswerButtons, ukraineWords } from "../main";

export class ScreenMediatorDirector {
    constructor() {}

    createdefaultScreen(): ScreenMediator {
        return new ScreenMediatorBuilder()
        .withTaskTitleWord(mainTitleWord)
        .withHintTitle(mainHintTitle)
        .withAnswerOptions(taskAnswerButtons)
        .withEnglishWords(englishWords)
        .withUkraineWords(ukraineWords)
        .withLanguageModeButton(languageModeButton)
        .withProgressBar(progressBar)
        .withRecordBar(recordBar)
        .build();
    }
}
