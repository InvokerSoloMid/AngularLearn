import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {
  @Input() color = 'default black';
  @Output() outputColor = new EventEmitter<string>();
  wtf = 'hz';
  message = "default";
  constructor() {}

  ngOnInit() {
  }

  justEvent() {
    this.wtf += '!';
    this.outputColor.emit(this.wtf);
    this.message = 'eventInvoked';
  }


}
