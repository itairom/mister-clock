import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/store';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Clock } from 'src/app/models/clock';
import { LoadClocks, LoadingClocks, RemoveClock } from '../../store/actions/clock.action';


@Component({
  selector: 'clock-app',
  templateUrl: './clock-app.component.html',
  styleUrls: ['./clock-app.component.scss']

})
export class ClockAppComponent implements OnInit {

  clocks$: Observable<Clock[]>
  clock$: Observable<Clock | null>;
  filterBy: string = '';

  constructor(
    private store: Store<State>) {
    this.clocks$ = this.store.select('clockState').pipe(pluck('clocks'))
    this.clock$ = this.store.select('clockState').pipe(pluck('clock'))
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadClocks(this.filterBy));
  }
}
