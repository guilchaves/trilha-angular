import { ShoppingListService } from './shopping-list.service'
import { TestBed } from '@angular/core/testing'
import { Ingredient } from '../models/ingredient.model'

describe('ShoppingListService', () => {
  let shoppingListService: ShoppingListService,
    ingredient: Ingredient,
    ingredients: Ingredient[]

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ShoppingListService] })
    shoppingListService = TestBed.inject(ShoppingListService)
  })

  it('should retrieve all ingredients', () => {
    let result = shoppingListService.getIngredients()

    expect(result).toBeTruthy()
    expect(result.length).toBe(2)
  })

  it('should retrieve one ingredient', () => {
    let result = shoppingListService.getIngredient(1)
    expect(result).toBeTruthy()
    expect(result.name).toEqual('Shoyu')
  })

  it('should add one ingredient', () => {
    ingredient = { name: 'Name', amount: 3 }
    shoppingListService.addIngredient(ingredient)

    let newIng = shoppingListService.getIngredient(2)
    expect(newIng).toBeTruthy()
    expect(newIng.name).toEqual('Name')
    expect(newIng.amount).toBe(3)
  })

  it('should add ingredients', () => {
    ingredients = [
      { name: 'First Ing', amount: 2 },
      { name: 'Second Ing', amount: 1 },
    ]
    shoppingListService.addIngredients(ingredients)

    let firstIng = shoppingListService.getIngredient(2)
    expect(firstIng).toBeTruthy()
    expect(firstIng.name).toEqual('First Ing')
    expect(firstIng.amount).toBe(2)

    let secondIng = shoppingListService.getIngredient(3)
    expect(secondIng).toBeTruthy()
    expect(secondIng.name).toEqual('Second Ing')
    expect(secondIng.amount).toBe(1)
  })

  it('should update an Ingredient', () => {
    ingredients = shoppingListService.getIngredients()
    expect(ingredients).toBeTruthy()

    ingredient = { name: 'Updated Ing', amount: 4 }
    shoppingListService.updateIngredient(1, ingredient)

    let result = shoppingListService.getIngredient(1)

    expect(result).toBeTruthy()
    expect(result.name).toEqual('Updated Ing')
    expect(result.amount).toBe(4)
  })

  it('should delete one Ingredient', () => {
    shoppingListService.deleteIngredient(1)
    ingredients = shoppingListService.getIngredients()

    expect(ingredients).toBeTruthy()
    expect(ingredients.length).toBe(1)
  })
})
