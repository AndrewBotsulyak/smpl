import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlGenerateFormComponent } from './html-generate-form.component';

describe('HtmlGenerateFormComponent', () => {
  let component: HtmlGenerateFormComponent;
  let fixture: ComponentFixture<HtmlGenerateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlGenerateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlGenerateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
