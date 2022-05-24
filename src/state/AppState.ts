import { IHttpClient } from "aurelia";
import { IJoke } from "../domain/IJoke";

export class AppState{
    public cats: string[] = [];
    public jokes: IJoke[] = [];

    constructor(@IHttpClient private http: IHttpClient){

        this.loadCategoriesAsyncAwait();

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
        let randint = Math.floor(Math.random() * (max - 1));
        //console.log("Random int is " + randint);
        return randint;
      }

    addJoke(joke: IJoke): void{
        let isPresent = true;
        for (let index = 0; index < this.jokes.length; index++) {
            const element = this.jokes[index];
            if (element.id === joke.id) {
                isPresent = false;
            }
            
        }
        if (isPresent){
            this.jokes.push(joke);
        }
    }
}