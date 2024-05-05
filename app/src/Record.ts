export class Record {
    private static instance: Record;
    private record: number = 0;
    private progress: number = 0;

    private constructor(
        private recordBar: HTMLElement, 
        private progressBar: HTMLElement
    ) {}
    
    public static getInstance(recordBar: HTMLElement, progressBar: HTMLElement): Record {
        const isRecord = localStorage.getItem('record');
        if (!isRecord) {
            const record = new Record(recordBar, progressBar);
            localStorage.setItem('record', JSON.stringify(record));
            return record;
        }
        Record.instance = JSON.parse('record');
        return Record.instance;
    }

    setRecord(record: number): void {
        this.record = record;
        localStorage.setItem('record', JSON.stringify(this));
    }

    getRecord(): number {
        return this.record;
    }

    increaseProgress(): number {
        return ++this.progress;
    }

    resetProgress(): void {
        this.progress = 0;
    }
}