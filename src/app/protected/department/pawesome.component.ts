import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-pawesome',
  templateUrl: './pawesome.component.html',
  styleUrls: ['./pawesome.component.scss']
})
export class PawesomeComponent implements DynamicComponent {

  constructor() { }

  ngOnInit(): void {
  }
}
