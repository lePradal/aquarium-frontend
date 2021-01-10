export class UploadRequest {
    public $key?: string;
    public file: File;
    public name?: string;
    public url?: string;
    public progress?: number;

    constructor(file: File) {
        this.file = file;
    }
}