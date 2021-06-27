import { Clock } from 'src/app/models/clock';
import { LOADED_CLOCKS, ADDED_CLOCK, REMOVED_CLOCK, SET_ERROR } from '../actions/clock.action'

export interface ClockState {
    clocks: Clock[],
    clock: null,
    isLoading: false,
    error: ''
}

const initialState: ClockState = {
    clocks: [],
    clock: null,
    isLoading: false,
    error: ''
}

export function reducer(state: ClockState = initialState, action: any): ClockState {

    switch (action.type) {
        case LOADED_CLOCKS: {
            const { clocks } = action
            return { ...state, clocks, isLoading: false, error: '' }
        }
        case ADDED_CLOCK: {
            const { clock } = action;
            const isInclude = state.clocks.filter(item => {
            })
            if (isInclude.length > 0) return

            const clocks = [...state.clocks, clock]
            return { ...state, clocks, error: '' };
        }
        case SET_ERROR: {
            const { error } = action;
            return { ...state, error, isLoading: false }
        }
        case REMOVED_CLOCK: {
            const { clockId } = action;
            const clocks = state.clocks.filter(clock => clock.id !== clockId)
            return { ...state, clocks, error: '' };
        }
        default:
            return state;
    }
}