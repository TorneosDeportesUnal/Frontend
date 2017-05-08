import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() text: string;

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cerrarPopUp() {
    this.close.emit(false);
  }

}
