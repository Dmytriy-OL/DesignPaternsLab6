import { TaskGeneratorElements } from "../types/TaskGeneratorElements";

export interface IMode {
    generateTask(tge: TaskGeneratorElements): void;
    checkTask(tge: TaskGeneratorElements): void;
}