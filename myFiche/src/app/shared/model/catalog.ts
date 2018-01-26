import { ProgramFile } from './program-file'
export class Catalog extends ProgramFile {

    constructor(){
        super();
        this.type = "Catalog";
    }
    public files:ProgramFile[]

}
