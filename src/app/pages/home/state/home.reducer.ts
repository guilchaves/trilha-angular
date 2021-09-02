import { createReducer, Action } from '@ngrx/store'

export interface HomeState {
  text: string
}
export const homeInitialState: HomeState = {
  text: 'Sao Paulo',
}

const reducer = createReducer(homeInitialState)

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action)
}
