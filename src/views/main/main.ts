import { IJoke } from "../../domain/IJoke";
import { AppState } from "../../state/AppState";

export class Main{
    jokes: IJoke[] = [];
    constructor(private appState: AppState) {
        this.jokes = appState.jokes;
    }
}