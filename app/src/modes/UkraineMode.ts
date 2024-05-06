import { TaskGeneratorElements } from "../types/TaskGeneratorElements";
import { IMode } from "./IMode";

export class UkraineMode implements IMode {
    generateTask(tge: TaskGeneratorElements) {
        tge.taskTitleWord.textContent = tge.ukraineWords[tge.wordsIndices[0]];
        for (let index = 0; index < 4; index++) {
            tge.answerOptions[tge.wordsOrder[index]].textContent = tge.englishWords[tge.wordsIndices[index]];            
        }
    }

    checkTask(tge: TaskGeneratorElements) {

    }
}