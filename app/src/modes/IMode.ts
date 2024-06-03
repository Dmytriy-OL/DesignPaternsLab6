import { TaskCheckerElements } from "../types/TaskCheckerElements";
import { TaskGeneratorElements } from "../types/TaskGeneratorElements";

export interface IMode {
    generateTask(tge: TaskGeneratorElements): void;
    checkTask(tce: TaskCheckerElements): boolean;
    giveHint(hintTitle: HTMLElement, wordsIndices: number[], englishWords: string[], ukraineWords: string[]): void;
}