import { Component, OnDestroy, OnInit, ViewChild, Type } from '@angular/core';
import { DynamicDirective } from './dynamic.directive';
import { DynamicComponent } from './dynamic.component';
import { ClawesomeComponent } from './clawesome.component';
import { PawesomeComponent } from './pawesome.component';
import { SmileyComponent } from './smiley.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit, OnDestroy {  
  @ViewChild(DynamicDirective, {static: true}) private dynamicHost!: DynamicDirective;  
  private interval: number|undefined;  
  private currentIndex = 1;  
  
  private messages: { type: Type<DynamicComponent> }[] = [  
    { type: ClawesomeComponent },  
    { type: PawesomeComponent },  
    { type: SmileyComponent }  
  ];  
  
  public ngOnInit(): void {  
    this.loadComponent();  
    this.rotateMessages();  
  }  
  
  public ngOnDestroy(): void {  
    clearInterval(this.interval);  
  }  
  
  private loadComponent(): void {  
    if (this.messages.length === 0) return;  
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;  
    const message = this.messages[this.currentIndex];  
  
    const viewContainerRef = this.dynamicHost.viewContainerRef;  
    viewContainerRef.clear();  
  
    const componentRef = viewContainerRef.createComponent<DynamicComponent>(message.type);  
  }  
  
  private rotateMessages(): void {  
    this.interval = window.setInterval(() => {  
      this.loadComponent();  
    }, 10000);  
  }  
}
