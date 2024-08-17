import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'edu-create-collection-template-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-collection-template-page.component.html',
  styleUrl: './create-collection-template-page.component.css'
})
export class CreateCollectionTemplatePageComponent {

  formData = {
    name : "Tech",
    heading: "Electronics",
    image: "http://placeholderimage.com"
  }

  addCollection(form: any) {
    console.log(form, this.formData);
  }
}
