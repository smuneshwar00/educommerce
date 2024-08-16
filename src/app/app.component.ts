import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TestChildComponent } from "./components/test-child/test-child.component";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";

@Component({
  selector: 'edu-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TestChildComponent, HeroBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productstatus: string = "";
}
