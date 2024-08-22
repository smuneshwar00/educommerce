import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CapitalisePipe } from '../../pipes/capitalise.pipe';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { CustomIfDirective } from '../../directives/custom-if.directive';

@Component({
  selector: 'edu-productspage',
  standalone: true,
  imports: [HighlightDirective, CapitalisePipe, TruncatePipe, CustomIfDirective],
  templateUrl: './productspage.component.html',
  styleUrl: './productspage.component.css'
})
export class ProductspageComponent {

  heading = "technology and innovation"
}
