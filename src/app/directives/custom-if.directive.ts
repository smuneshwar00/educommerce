import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
  standalone: true
})
export class CustomIfDirective {

  private hasView = false;
  private templateRef: TemplateRef<any> = inject(TemplateRef);
  private viewContainer: ViewContainerRef = inject(ViewContainerRef);

  @Input() set customIf(condition: boolean) {
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }


}
