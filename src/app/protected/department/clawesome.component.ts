import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-clawesome',
  templateUrl: './clawesome.component.html',
  styleUrls: ['./clawesome.component.scss']
})
export class ClawesomeComponent implements DynamicComponent {

  constructor() { }

}
