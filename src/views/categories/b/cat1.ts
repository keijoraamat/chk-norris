import { bindable, IHttpClient } from "aurelia";
import { IJoke } from "../../../domain/IJoke";
import { IPuns } from "../../../domain/IPuns";
import { AppState } from "../../../state/AppState";

export class Cat1{
    
    jokes: IJoke[] = [];
    cate: string = "";
    
    constructor(private appState: AppState, @IHttpClient private http: IHttpClient) {
        this.cate = appState.cats[1];
        this.getFiveJokes();
    }

    async getRandomJokeAwait(category: string): Promise<void>{
        try{
                let result = await this.http.get('https://api.chucknorris.io/jokes/random?category='+ category);
                let json = await result.json();
                let joke = {
                    id: json.id,
                    value: json.value
                };
                this.jokes.push(joke);
                this.appState.addJoke(joke);
        } catch (error){

        }
    }

    getFiveJokes(){
        var i = 1;
        var num = 5;
        while (i <= num) {
            this.getRandomJokeAwait(this.cate)
            ++i;
        }
    }
}