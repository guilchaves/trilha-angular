import { Injectable } from '@angular/core'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { WeatherService } from 'src/app/shared/services/weather.service'

import * as fromHomeActions from './home.actions'

@Injectable()
export class HomeEffects {
  loadCurrentWeather$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromHomeActions.loadCurrentWeather),
        mergeMap(({ query }) => this.weatherService.getCitWeatherByQuery(query)),
        catchError((err, caught$) => {
          this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed())
          return caught$
        }),
        map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess({ entity }))
      ),
    { useEffectsErrorHandler: true }
  )

  constructor(
    private actions$: Actions,
    private store: Store,
    private weatherService: WeatherService
  ) {}
}
