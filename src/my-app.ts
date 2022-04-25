import { route } from "aurelia";
import { AppState } from "./state/AppState";


@route({
  routes: [
    {
      id: 'main',
      path: '',
      component: import('./views/main/main'),
      title: 'Start',
    },
    {
      id: 'cat0',
      path: "/categories/0",
      component: import('./views/categories/category'),
      title: 'Person Edit',
    },
    {
      id: 'cat1',
      path: '/categories/1',
      component: import('./views/categories/category'),
      title: 'Cat1',
    },
    {
      id: 'cat2',
      path: '/categories/2',
      component: import('./views/categories/category'),
      title: 'cat2',
    },
  ]
})
export class MyApp {
  /**
   *
   */
  constructor(private appState: AppState) {
   console.log("MyApp costr")
    
  }
}
