import { TaskCheckerElements } from '../types/TaskCheckerElements';
import { TaskGeneratorElements } from './../types/TaskGeneratorElements';
import { IMode } from "./IMode";

export class EnglishMode implements IMode {
    generateTask(tge: TaskGeneratorElements) {
        tge.taskTitleWord.textContent = tge.englishWords[tge.wordsIndices[0]];
        for (let index = 0; index < 4; index++) {
            tge.answerOptions[tge.wordsOrder[index]].textContent = tge.ukraineWords[tge.wordsIndices[index]];            
        }
    }

    checkTask(tce: TaskCheckerElements): boolean {
        let rightWordIndex = tce.wordsIndices[0];
        if (tce.answer === tce.ukraineWords[rightWordIndex]) {
            return true;
        }
        return false;
    }

    giveHint(hintTitle: HTMLElement, wordsIndices: number[], englishWords: string[], ukraineWords: string[]): void {
        hintTitle.textContent = `Word starts with an ${ukraineWords[wordsIndices[0]][0]}`;
    }
}