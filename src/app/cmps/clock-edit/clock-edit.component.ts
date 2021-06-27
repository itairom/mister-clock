import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, pluck, startWith, tap } from 'rxjs/operators';
import { Clock } from 'src/app/models/clock';
import { storageService } from 'src/app/services/async-storage.service';
import { SaveClock } from '../../store/actions/clock.action';
import { Store } from '@ngrx/store';
import { State } from '../../store/store';



@Component({
  selector: 'clock-edit',
  templateUrl: './clock-edit.component.html',
  styleUrls: ['./clock-edit.component.scss']
})
export class ClockEditComponent implements OnInit {

  constructor(private store: Store<State>) {
    this.clcok$ = this.store.select('clockState').pipe(pluck('clock'))
    this.clocks$ = this.store.select('clockState').pipe(pluck('clocks'))
  }

  clock = { country: '' }
  clcok$: Observable<Clock | null>;
  clocks$: Observable<Clock[] | null>;
  selectedClock: Clock
  myControl = new FormControl();
  options: string[] = ['China', 'Peru', 'Russia', 'Thailand', 'Israel', 'France', 'Tunisia', 'Brazil', 'France', 'Argentina', 'Germany'
  ];
  filteredOptions: Observable<string[]>;
  @Output() saved = new EventEmitter();



  ngOnInit() {
    this.setFilter()

  }

  setFilter() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      tap(() => { }),
      startWith(''),
      map(value => this._filter(value))
    );
  }

  async saveClock() {
    const clock = await storageService.getByCountry('clocks_db', this.clock.country)
    
    this.store.dispatch(new SaveClock(clock));

    this.saved.emit();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
