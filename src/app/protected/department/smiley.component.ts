import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.scss']
})
export class SmileyComponent implements DynamicComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
