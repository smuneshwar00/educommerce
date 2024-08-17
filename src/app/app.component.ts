import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TestChildComponent } from "./components/test-child/test-child.component";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { CollectionsService } from './services/collections.service';
import { CommonModule } from '@angular/common';
import { CreateCollectionComponent } from "./components/forms/create-collection/create-collection.component";

@Component({
  selector: 'edu-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TestChildComponent, HeroBannerComponent, CollectionsComponent, CommonModule, CreateCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  productstatus: string = "";

  private _collectionService = inject(CollectionsService);
  
  $listing = this._collectionService.$listing;

  ngOnInit(): void {
    this._collectionService.getCollections();
  }

  images: string[] = [
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg',
  ];

  summerImages: string[] = [
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
  ];
}
