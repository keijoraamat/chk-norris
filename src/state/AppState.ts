import { IHttpClient } from "aurelia";
import { ICategory } from "../domain/ICategory";
import { ICatJokes } from "../domain/ICatJokes";
import { IJoke } from "../domain/IJoke";
import { IPuns } from "../domain/IPuns";

export class AppState{
    public cats: string[] = [];

    constructor(@IHttpClient private http: IHttpClient){

        this.loadCategoriesAsyncAwait();
        console.log(this.cats);

    }

    attached() {
        console.log("attached");
    }

    async loadCategoriesAsyncAwait(): Promise<void>{
        try {
            let result = await this.http.get('https://api.chucknorris.io/jokes/categories');
            let json = await result.json();
            let categoriesAmount = Object.keys(json).length;
            this.cats.push(
                json[this.randomInt(categoriesAmount)]
            );
            this.cats.push(
                json[this.randomInt(categoriesAmount)]
            );
            this.cats.push(
                json[this.randomInt(categoriesAmount)]
            );
        } catch (error){
            console.log(error);
        }
    }

    randomInt(max: number): number {
        let randint = 
        Math.floor(Math.random() * (max - 1));
        console.log("Random int is " + randint);
        return randint;
      }
}