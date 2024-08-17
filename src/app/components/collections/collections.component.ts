import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CollectionsService, ICollection } from '../../services/collections.service';

@Component({
  selector: 'edu-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

  @Input() collections: ICollection[] | null = [];
}
