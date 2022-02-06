import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public tasks: string[] = [
    'Reply to email',
    'Meeting notes',
    'Respond to notes',
    'Generate system',
  ];

}
