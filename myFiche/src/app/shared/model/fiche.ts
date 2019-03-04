import { ProgramFile } from "./program-file";
import { FicheData } from "./fiche-data";
import { BoughtFicheSchema } from "./bought-fiche-schema"

export class Fiche extends ProgramFile {

    constructor(){
        super();
        this.type = "Fiche";
    }

    public twoSided:boolean;
    public ficheData:FicheData[];
    public usedSchema:BoughtFicheSchema;

}
