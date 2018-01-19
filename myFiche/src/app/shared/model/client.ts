import { User } from './user';
import { Catalog } from './catalog';
import { BoughtFicheSchema } from './bought-fiche-schema'

export class Client extends User {

    public userRootCatalog:Catalog;
    public boughtFicheSchema:BoughtFicheSchema[];

}
