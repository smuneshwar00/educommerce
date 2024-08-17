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
export class AppComponent {
}
