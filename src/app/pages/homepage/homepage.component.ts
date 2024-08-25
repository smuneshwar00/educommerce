import { Component, inject, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collections.service';
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";
import { CollectionsComponent } from "../../components/collections/collections.component";
import { CreateCollectionComponent } from "../../components/forms/create-collection/create-collection.component";
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from '../../components/register-user/register-user.component';
import { LoginUserComponent } from "../../components/login-user/login-user.component";

@Component({
  selector: 'edu-homepage',
  standalone: true,
  imports: [HeroBannerComponent, CollectionsComponent, CreateCollectionComponent, CommonModule, RegisterUserComponent, LoginUserComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

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
