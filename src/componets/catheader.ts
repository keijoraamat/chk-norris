import { bindable } from "aurelia";
import { ICategory } from "../domain/ICategory";

export class Catheader{
    @bindable
    public category: ICategory;
}