import { TaskCheckerElements } from "../types/TaskCheckerElements";
import { TaskGeneratorElements } from "../types/TaskGeneratorElements";

export interface IMode {
    generateTask(tge: TaskGeneratorElements): void;
    checkTask(tce: TaskCheckerElements): boolean;
}