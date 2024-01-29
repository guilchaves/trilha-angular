import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id: number

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  /**
   * The commented out approach is just for demo purposes, it works the same but
   * is not as simple as the first one
   */
  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute })
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute })
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'], { relativeTo: this.activatedRoute })
  }
}
