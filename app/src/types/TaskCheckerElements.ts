import { TaskGeneratorElements } from "./TaskGeneratorElements";

export type TaskCheckerElements = Omit<
    TaskGeneratorElements, 
    'taskTitleWord' | 'answerOptions' | 'wordsOrder'
> & {answer: string};