export class Record {
    private static instance: Record;
    private record: number = 0;
    private progress: number = 0;

    private constructor() {}
    
    public static getInstance(): Record {
        const savedRecord = localStorage.getItem('record');
        if (Record.instance) {
            return Record.instance;
        } else if (savedRecord) {
            try {
                const parsedRecord = JSON.parse(savedRecord);
                Record.instance = new Record();
                Record.instance.record = parsedRecord.record || 0;
            } catch (e) {
                Record.instance = new Record();
            }
        } else {
            Record.instance = new Record();
        }
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
    
    getProgress(): number {
        return this.progress;
    }

    resetProgress(): void {
        this.progress = 0;
    }
}