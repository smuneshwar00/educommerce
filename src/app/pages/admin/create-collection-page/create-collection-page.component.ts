import { Component } from '@angular/core';
import { CreateCollectionComponent } from "../../../components/forms/create-collection/create-collection.component";
import { CreateCollectionTemplatePageComponent } from "../create-collection-template-page/create-collection-template-page.component";

@Component({
  selector: 'edu-create-collection-page',
  standalone: true,
  imports: [CreateCollectionTemplatePageComponent],
  templateUrl: './create-collection-page.component.html',
  styleUrl: './create-collection-page.component.css'
})
export class CreateCollectionPageComponent {

}
