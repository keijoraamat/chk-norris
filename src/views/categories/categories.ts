import { IHttpClient } from "aurelia";
import { IJoke } from "../../domain/IJoke";
import { IPuns } from "../../domain/IPuns";
import { AppState } from "../../state/AppState";

export class Categories{
    
    jokes: IJoke[] = [];
    
    constructor(private appState: AppState, @IHttpClient private http: IHttpClient) {
        console.log("Categories constructor");
        this.getFiveJokes();

    }

    async getRandomJokeAwait(category: string): Promise<void>{
        try{
                let result = await this.http.get('https://api.chucknorris.io/jokes/random?category='+ category);
                let json = await result.json();
                console.log("type: ", json);
                this.jokes.push({
                    id: json.id,
                    value: json.value
                })
        } catch (error){

        }
    }

    getFiveJokes(){
        var i = 1;
        var num = 5;
        while (i <= num) {
            this.getRandomJokeAwait('animal')
            ++i;
        }
    }
}