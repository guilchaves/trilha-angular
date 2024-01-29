import { TestBed } from '@angular/core/testing'
import { Subject } from 'rxjs'
import { Ingredient } from '../../shopping-list/models/ingredient.model'
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service'
import { Recipe } from '../models/recipe.model'
import { RecipeService } from './recipe.service'

describe('RecipeService', () => {
  let recipeService: RecipeService,
    recipe: Recipe,
    recipes: Recipe[],
    recipesChanged: Subject<Recipe[]>,
    shoppingListSpy: any,
    ingredients: Ingredient[]

  beforeEach(() => {
    shoppingListSpy = jasmine.createSpyObj('ShoppingListService', ['addIngredients'])

    TestBed.configureTestingModule({
      providers: [
        RecipeService,
        { provide: ShoppingListService, useValue: shoppingListSpy },
      ],
    })

    recipeService = TestBed.inject(RecipeService)

    recipes = [
      {
        name: 'One',
        description: 'Fake recipe 1',
        imagePath: '',
        ingredients: [],
      },
      {
        name: 'Two',
        description: 'Fake recipe 2',
        imagePath: '',
        ingredients: [],
      },
      {
        name: 'Three',
        description: 'Fake recipe 3',
        imagePath: '',
        ingredients: [],
      },
    ]

    //chamando um método antes de testar?
    recipeService.setRecipes(recipes)
  })

  //repensar
  it('should create a list of Recipes', () => {
    //recipeService.setRecipes(recipes)
    expect(recipeService.setRecipes).toBeTruthy()
  })

  it('should get a list of Recipes', () => {
    let response = recipeService.getRecipes()
    expect(response.length).toBe(3)
  })

  it('should get one Recipe', () => {
    let response = recipeService.getRecipe(1)
    expect(response.name).toEqual('Two')
    expect(response.description).toEqual('Fake recipe 2')
  })

  it('should add ingredients to shopping list', () => {
    recipeService.addIngredientsToShoppingList([])
    expect(shoppingListSpy.addIngredients).toHaveBeenCalledTimes(1)
  })

  it('should add a Recipe to the list of Recipes', () => {
    let mockRecipe = new Recipe('Mock recipe', 'A mocked recipe', '', [])
    recipeService.addRecipe(mockRecipe)

    expect(recipes.length).toBe(4)
  })

  it('should update a Recipe from the list of Recipes', () => {
    let newRecipe = new Recipe('Mock recipe', 'A mocked recipe', 'img', [])
    recipeService.updateRecipe(1, newRecipe)
    expect(recipes[1].name).toEqual('Mock recipe')
    expect(recipes[1].description).toEqual('A mocked recipe')
    expect(recipes[1].imagePath).toEqual('img')
  })

  it('should delete a Recipe from the list of Recipes', () => {
    recipeService.deleteRecipe(1)
    expect(recipes.length).toBe(2)
    expect(recipes[1].name).toEqual('Three')
  })
})
