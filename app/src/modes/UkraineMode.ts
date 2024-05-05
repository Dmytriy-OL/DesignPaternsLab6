import { IMode } from "./IMode";

export class UkraineMode implements IMode {
    generateTask(
        taskTitleWord: HTMLElement,
        answerOptions: HTMLElement[],
        englishWords: string[],
        ukraineWords: string[],
        wordsIndices: number[],
        wordsOrder: number[],
    ) {
        taskTitleWord.textContent = ukraineWords[wordsIndices[0]];
        for (let index = 0; index < 4; index++) {
            answerOptions[wordsOrder[index]].textContent = englishWords[wordsIndices[index]];            
        }
    }

    checkTask(
        taskTitleWord: HTMLElement,
        answerOptions: HTMLElement[],
        englishWords: string[],
        ukraineWords: string[],
        wordsIndices: number[],
        wordsOrder: number[],
    ) {

    }
}