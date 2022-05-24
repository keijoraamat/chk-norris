import { IHttpClient } from "aurelia";
import { IJoke } from "../../../domain/IJoke";
import { AppState } from "../../../state/AppState";

export class Cat0{
    
    jokes: IJoke[] = [];
    cate: string = "";
    
    constructor(private appState: AppState, @IHttpClient private http: IHttpClient) {
        console.log("Categories constructor");
        console.log("cat is: " + appState.cats[0])
        
        this.cate = appState.cats[0];
        this.getFiveJokes();
    }

    async getRandomJokeAwait(category: string): Promise<void>{
        try{
                let result = await this.http.get('https://api.chucknorris.io/jokes/random?category='+ category);
                let json = await result.json();
                console.log(json);
                this.jokes.push({
                    id: json.id,
                    value: json.value
                })
        } catch (error){
            console.log(error);
        }
    }

    getFiveJokes(){
        var i = 1;
        var num = 5;
        while (i <= num) {
            this.getRandomJokeAwait(this.cate);
            ++i;
        }
    }
}