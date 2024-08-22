import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatchValidatorDirective } from '../../../validators/match.validator';

@Component({
  selector: 'edu-create-collection-template-page',
  standalone: true,
  imports: [FormsModule, CommonModule, MatchValidatorDirective],
  templateUrl: './create-collection-template-page.component.html',
  styleUrl: './create-collection-template-page.component.css'
})
export class CreateCollectionTemplatePageComponent {

  formData = {
    name : "",
    heading: "",
    image: "",
    password: "",
    confirmPassword: ""
  }

  addCollection(form: any) {
    console.log(form, this.formData);
  }
}
