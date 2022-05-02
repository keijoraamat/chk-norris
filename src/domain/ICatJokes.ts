import { ICategory } from "./ICategory";
import { IJoke } from "./IJoke";

export interface ICatJokes{
    cat: string;
    jokes?: IJoke[];
}