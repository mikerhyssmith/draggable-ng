import { Component } from '@angular/core';
import { DraggableOptions } from '../../../src/model/draggable-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options = new DraggableOptions();

  constructor() {}
}
