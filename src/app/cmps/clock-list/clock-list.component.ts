import { Component, Input, OnInit, Output } from '@angular/core';
import { Clock } from 'src/app/models/clock';
import {EventEmitter} from '@angular/core';
import { State } from 'src/app/store/store';
import { Store } from '@ngrx/store';
import {RemoveClock} from '../../store/actions/clock.action';


@Component({
  selector: 'clock-list',
  templateUrl: './clock-list.component.html',
  styleUrls: ['./clock-list.component.scss']
})
export class ClockListComponent implements OnInit {
  // @Output() removed = new EventEmitter<string>()

  @Input() clocks: Clock[] | null = []
  constructor( private store: Store<State>) { }

  ngOnInit(): void {
    
  }

  removeClock(clockId :string) {
    this.store.dispatch(new RemoveClock(clockId));
  }

}
