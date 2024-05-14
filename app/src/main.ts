import { ScreenMediatorDirector } from "./ScreeenMediatorDirector";
import { ScreenMediator } from "./ScreenMediator";
import { ScreenMediatorBuilder } from "./ScreenMediatorBuilder";

export const recordBar = document.querySelector('.record-indicator span') as HTMLElement;
export const progressBar = document.querySelector('.progress-indicator span') as HTMLElement;

export const mainTitleWord = document.querySelector('.main__title span') as HTMLElement;
export const taskAnswerButtonsNodeList = document.querySelectorAll('.task-block__answer');
export const taskAnswerButtons: HTMLElement[] = Array.from(taskAnswerButtonsNodeList) as HTMLElement[];
export const languageModeButton = document.querySelector('.chenge-language-mode-block__element') as HTMLElement;

export let englishWordsDivs = document.querySelectorAll('.english-word'), englishWords: string[] = [];
export let ukraineWordsDivs = document.querySelectorAll('.ukraine-word'), ukraineWords: string[] = [];

if (englishWordsDivs !== null && ukraineWordsDivs !== null) {
    englishWords = Array.from(englishWordsDivs).map(word => word.textContent ?? '');
    ukraineWords = Array.from(ukraineWordsDivs).map(word => word.textContent ?? '');
}

const screen: ScreenMediator = new ScreenMediatorDirector().createdefaultScreen()

screen.generateTask();

languageModeButton.addEventListener('click', () => {
    if (languageModeButton.textContent === 'English') {
        languageModeButton.textContent = 'Ukraine';
    } else {
        languageModeButton.textContent = 'English';
    }
    screen.setMode();
});

taskAnswerButtons.forEach(button => {
    button.addEventListener('click', () => {
        screen.checkTask(button.textContent ?? '');
    });
});