import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { ClockServiceService } from '../services/clock-service.service';
import { LOADED_CLOCKS, LOAD_CLOCKS, SAVE_CLOCK, ADDED_CLOCK, REMOVE_CLOCK, REMOVED_CLOCK, ClockAction } from './actions/clock.action';

@Injectable()
export class AppEffects {


  loadClocks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_CLOCKS),
      switchMap((action) =>
        this.clockServiceService.query().pipe(
          map((clocks) => ({
            type: LOADED_CLOCKS,
            clocks,
          })),
          catchError((error) => {
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      )
    );
  });

  removeClock$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(REMOVE_CLOCK),
      switchMap((action) =>
        this.clockServiceService.remove(action.clockId).pipe(
          map((clockId) => ({
            type: REMOVED_CLOCK,
            clockId: action.clockId,
          })),
          catchError((error) => {
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      ),
    );
  })

  saveClock$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SAVE_CLOCK),
      switchMap((action) =>
        this.clockServiceService.save(action.clock).pipe(
          map((savedClock) => ({
            type: ADDED_CLOCK,
            clock: savedClock,
          })),
          catchError((error) => {
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })

        )
      )
    );
  })

  constructor(
    private actions$: Actions<ClockAction>,
    private clockServiceService: ClockServiceService
  ) { }
}
