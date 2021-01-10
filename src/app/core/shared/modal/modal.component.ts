import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() closeBtnText: string = '';
  @Input() submitBtnText: string = '';

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public eventEmit(event: Event) {
    this.event.emit(event);
  }

}
