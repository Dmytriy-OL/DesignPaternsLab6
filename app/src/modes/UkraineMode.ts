import { TaskCheckerElements } from "../types/TaskCheckerElements";
import { TaskGeneratorElements } from "../types/TaskGeneratorElements";
import { IMode } from "./IMode";

export class UkraineMode implements IMode {
    generateTask(tge: TaskGeneratorElements) {
        tge.taskTitleWord.textContent = tge.ukraineWords[tge.wordsIndices[0]];
        for (let index = 0; index < 4; index++) {
            tge.answerOptions[tge.wordsOrder[index]].textContent = tge.englishWords[tge.wordsIndices[index]];            
        }
    }

    checkTask(tce: TaskCheckerElements): boolean {
        let rightWordIndex = tce.wordsIndices[0];
        if (tce.answer === tce.englishWords[rightWordIndex]) {
            return true;
        }
        return false;
    }

    giveHint(hintTitle: HTMLElement, wordsIndices: number[], englishWords: string[], ukraineWords: string[]): void {
        hintTitle.textContent = `Word starts with an ${englishWords[wordsIndices[0]][0]}`;
    }
}