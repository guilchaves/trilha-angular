import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'
import { Ingredient } from '../../models/ingredient.model'
import { ShoppingListService } from '../../services/shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  /**
   * @ViewChild is an alternative to pass data from a child component to it's parent
   * To use this approach the following properties needs to be created before ingredientAdded:
   *
   * @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef
   * @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef
   */
  //@Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor(private shoppingListService: ShoppingListService) {}
  @ViewChild('f') slForm: NgForm
  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  /**
   * This method would not receive any params if the @ViewChild approach was used.
   *
   * @param name The value from nameInput property
   * @param amount The value from amountInput property
   */
  onSubmit(form: NgForm): void {
    //  const name = this.nameInputRef.nativeElement.value
    //  const amount = this.amountInputRef.nativeElement.value
    //this.shoppingListService.addIngredient(new Ingredient(name, amount))
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editMode = false
    form.reset()
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }

  onClear() {
    this.slForm.reset()
    this.editMode = false
  }
}
