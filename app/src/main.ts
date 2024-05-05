import { ScreenMediator } from "./ScreenMediator";

const recordBar = document.querySelector('.record-indicator span') as HTMLElement;
const progressBar = document.querySelector('.progress-indicator span') as HTMLElement;

const mainTitleWord = document.querySelector('.main__title span') as HTMLElement;
const taskAnswerButtonsNodeList = document.querySelectorAll('.task-block__answer');
const taskAnswerButtons: HTMLElement[] = Array.from(taskAnswerButtonsNodeList) as HTMLElement[];
const languageModeButton = document.querySelector('.chenge-language-mode-block__element') as HTMLElement;

let englishWordsDivs = document.querySelectorAll('.english-word'), englishWords: string[] = [];
let ukraineWordsDivs = document.querySelectorAll('.ukraine-word'), ukraineWords: string[] = [];

if (englishWordsDivs !== null && ukraineWordsDivs !== null) {
    englishWords = Array.from(englishWordsDivs).map(word => word.textContent ?? '');
    ukraineWords = Array.from(ukraineWordsDivs).map(word => word.textContent ?? '');
}

const screen = new ScreenMediator(
    mainTitleWord, 
    taskAnswerButtons, 
    englishWords, 
    ukraineWords,
    languageModeButton,
    recordBar,
    progressBar,
);

screen.generateTask();

languageModeButton.addEventListener('click', () => {
    if (languageModeButton.textContent === 'English') {
        languageModeButton.textContent = 'Ukraine';
    } else {
        languageModeButton.textContent = 'English';
    }
    screen.setMode();
});