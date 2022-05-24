import { bindable } from "aurelia";
import { ICategory } from "../domain/ICategory";
import { AppState } from "../state/AppState";

export class Catheader{
    @bindable
    public category: ICategory;
    cats: string[];
    /**
     *
     */
    constructor(appState: AppState) {
    
        this.cats = appState.cats;
        
    }
}