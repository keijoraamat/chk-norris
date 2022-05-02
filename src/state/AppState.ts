import { IHttpClient } from "aurelia";
import { ICategory } from "../domain/ICategory";
import { ICatJokes } from "../domain/ICatJokes";
import { IJoke } from "../domain/IJoke";
import { IPuns } from "../domain/IPuns";

export class AppState{
    public categories: ICategory[] = [];
    public puns: IPuns[] = [];
    public catjokes: ICatJokes[] = []

    constructor(@IHttpClient private http: IHttpClient){

        this.loadCategoriesAsyncAwait();
        //this.getFiveRandomJokeAwait('fashion')
    }


    async loadCategoriesAsyncAwait(): Promise<void>{
        try {
            let result = await this.http.get('https://api.chucknorris.io/jokes/categories');
            let json = await result.json();
            this.categories.push({
                cat: json[2]
            });
            this.categories.push({
                cat: json[7]
            });
            this.categories.push({
                cat: json[9]
            })
            //this.getFiveRandomJokeAwait(this.categories[0].cat);
        } catch (error){
            console.log(error);
        }
    }

    async getFiveRandomJokeAwait(category: string): Promise<void>{
        try{
            var jokes: IJoke[] = [];
            var laughs: IPuns;
            for (let index = 0; index < 5; index++) {
                console.log("ITS: ", index);
                let result = await this.http.get('https://api.chucknorris.io/jokes/random?category='+ category);
                let json = await result.json();
                console.log(json);
                laughs[json.id] = json.value;
            }
/*             let result = await this.http.get('https://api.chucknorris.io/jokes/random?category='+ category);
            let json = await result.json();
            console.log(json.value) */
            console.log(laughs);
        } catch (error){

        }
    }
}