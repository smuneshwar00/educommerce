import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollectionTemplatePageComponent } from './create-collection-template-page.component';

describe('CreateCollectionTemplatePageComponent', () => {
  let component: CreateCollectionTemplatePageComponent;
  let fixture: ComponentFixture<CreateCollectionTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCollectionTemplatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCollectionTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
