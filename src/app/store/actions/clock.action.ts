import { Action } from '@ngrx/store';
import { Clock } from 'src/app/models/clock';

export const LOAD_CLOCKS = '[clock]s load'
export const SET_LOADING = '[clock]s loading'
export const LOADED_CLOCKS = '[clock]s loaded'
export const SAVE_CLOCK = '[clock]s saved'
export const ADDED_CLOCK = '[clock]s added'
export const REMOVE_CLOCK = '[clock]s remove'
export const REMOVED_CLOCK = '[clock]s removed'
export const SET_ERROR = '[clock]s error';



export type ClockAction = LoadClocks

export class LoadClocks implements Action {
    readonly type = LOAD_CLOCKS;
    constructor(public filterBy: string = '') { }
}
export class LoadingClocks implements Action {
    readonly type = SET_LOADING;
    constructor(public isLoading: boolean = true) { }
}

export class SaveClock implements Action {
    readonly type = SAVE_CLOCK;
    constructor(public clock: Clock) { }
}

export class AddedClock implements Action {
    readonly type = ADDED_CLOCK;
    constructor(public clock: Clock) { }
}

export class RemoveClock implements Action {
    readonly type = REMOVE_CLOCK;
    constructor(public clockId: string) { }
  }

export class LoadedClocks implements Action {
    readonly type = LOADED_CLOCKS;
    constructor(public items: Clock[] = []) { }
}

export class ItemError implements Action {
    readonly type = SET_ERROR;
    constructor(public error: string) {}
  }