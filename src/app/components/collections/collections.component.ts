import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CollectionsService, ICollection } from '../../services/collections.service';

@Component({
  selector: 'edu-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

  collectionList : ICollection[] = []; 

  constructor(private _collectionsService: CollectionsService) {
    this.collectionList = this._collectionsService.collections;
  }
}
