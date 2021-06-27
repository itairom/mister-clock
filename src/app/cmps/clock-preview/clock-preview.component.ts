import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clock } from 'src/app/models/clock';
import { ClockListComponent } from '../clock-list/clock-list.component';

@Component({
  selector: 'clock-preview',
  templateUrl: './clock-preview.component.html',
  styleUrls: ['./clock-preview.component.scss']
})
export class ClockPreviewComponent implements OnInit {
  @Input() clock: Clock //| null = null
  @Output() removed = new EventEmitter<string>()

  time: number ;
  intervalId

  constructor() {
  }
  ngOnInit(): void {
    this.time = Date.now() + this.clock.timeDiffer * (60 * 1000 * 60)
    this.intervalId = setInterval(this.updateTime, 1000)
  }

  removeClock(itemId: string) {
    this.removed.emit(itemId)
  }

  updateTime = () => {
    this.time = Date.now() + this.clock.timeDiffer * (60 * 1000 * 60)
  }

  ngOnnDestroy() {
    this.intervalId = clearInterval()
  }

}
