import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'

import { Recipe } from 'src/app/features/recipes/models/recipe.model'
import { RecipeService } from 'src/app/features/recipes/services/recipe.service'

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes()
    this.http
      .put(
        'https://ng-recipe-book-e5639-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(resp => {
        console.log(resp)
      })
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-recipe-book-e5639-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            }
          })
        }),
        tap(recipes => this.recipeService.setRecipes(recipes))
      )
  }
}
