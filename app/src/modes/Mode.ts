import { EnglishMode } from "./EnglishMode";
import { IMode } from "./IMode";
import { UkraineMode } from "./UkraineMode";

export class Mode {
    public mode: IMode = new EnglishMode();

    constructor(
        private languageModeButton: HTMLElement,
    ) {}

    changeMode(): void {
        const mode = this.languageModeButton.textContent;
        if (mode === 'English') {
            this.mode = new EnglishMode();
        } else {
            this.mode = new UkraineMode();
        }
    }
}