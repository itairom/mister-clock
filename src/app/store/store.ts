import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as clockModule from './reducers/clock.reducer';

import { environment } from '../../environments/environment';

export interface State {
  clockState: clockModule.ClockState
}

export const reducers: ActionReducerMap<State> = {
  clockState: clockModule.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
