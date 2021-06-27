import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { Clock } from '../models/clock';
import { LoadingClocks } from '../store/actions/clock.action';
import { ClockState } from '../store/reducers/clock.reducer';
import { storageService } from './async-storage.service'
import { HttpClient } from '@angular/common/http';

const ENTITY = 'clock'
const CLOCKS_DB = 'clocks_db'


@Injectable({
  providedIn: 'root'
})
export class ClockServiceService {

  private _clocks$ = new BehaviorSubject([]);
  public clocks$ = this._clocks$.asObservable()

  constructor(
    private store: Store<ClockState>,
  ) {
    const clocks = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    if (!clocks || clocks.length === 0) {
      localStorage.setItem(ENTITY, JSON.stringify(this.createClocks()))
      localStorage.setItem(CLOCKS_DB, JSON.stringify(this.createClocksDb()))
    }
  }

  query(filterBy = ''): Observable<Clock[]> {
    this.store.dispatch(new LoadingClocks());
    return from(storageService.query(ENTITY) as Promise<Clock[]>)
  }

  getByName(clockName: string): Observable<Clock> {
    let clock = from(storageService.getByCountry(CLOCKS_DB, clockName) as Promise<Clock>)
    return clock
  }

  async _checkCountryExist(clock) {
    let countries = await storageService.query(ENTITY)
    const filterdCountries = countries.filter(item => item.country.includes(clock.country))
    if (filterdCountries === []) {

    }
  }

  save(clock: Clock): Observable<Clock> {
    this._checkCountryExist(clock)
    const prmSavedClock = storageService.post(ENTITY, clock)
    return from(prmSavedClock) as Observable<Clock>
  }

  remove(clockId: string): Observable<boolean> {
    return from(storageService.remove(ENTITY, clockId))
  }

  private createClocks(): Clock[] {
    return [
      { timeDiffer: -6, code: 'BR', country: 'Brazil', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: -2, code: 'TN', country: 'Tunisia', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: 0, code: 'IL', country: 'Israel', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: -1, code: 'FR', country: 'France', currTime: Date.now(), id: storageService.makeId() }
    ]
  }

  private createClocksDb(): Clock[] {
    return [
      { timeDiffer: -1, code: 'DE', country: 'Germany', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: -8, code: 'PE', country: 'Peru', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: 0, code: 'RU', country: 'Russia', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: 4, code: 'TH', country: 'Thailand', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: 5, code: 'CN', country: 'China', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: -6, code: 'BR', country: 'Brazil', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: -2, code: 'TN', country: 'Tunisia', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: 0, code: 'IL', country: 'Israel', currTime: Date.now(), id: storageService.makeId() },
      { timeDiffer: -1, code: 'FR', country: 'France', currTime: Date.now(), id: storageService.makeId() }
    ]
  }

  get emptyClock(): Clock {
    return {
      id: '',
      country: '',
      code: '',
      timeDiffer: 0,
      currTime: Date.now()
    }
  }
}

