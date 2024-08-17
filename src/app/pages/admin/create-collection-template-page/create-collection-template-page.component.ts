import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edu-create-collection-template-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-collection-template-page.component.html',
  styleUrl: './create-collection-template-page.component.css'
})
export class CreateCollectionTemplatePageComponent {

  formData = {
    name : "",
    heading: "",
    image: ""
  }

  addCollection(form: any) {
    console.log(form, this.formData);
  }
}
