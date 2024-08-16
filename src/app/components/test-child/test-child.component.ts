import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'edu-test-child',
  standalone: true,
  imports: [],
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent {
//1. @Input too communicate from Parent to Child(property binding and @input helps child accept data from parent )

@Input('productname') name:string = "";

//2. @Output pushes an event with details to Parent so Prent can use those details
  //in event binding
@Output() productClicked = new EventEmitter<string>();

onProductClick(prodName:string){
    console.log(prodName+' was clicked');
    this.productClicked.emit(prodName+' was clicked');
}
}
