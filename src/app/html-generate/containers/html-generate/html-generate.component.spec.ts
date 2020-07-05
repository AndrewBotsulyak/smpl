import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlGenerateComponent } from './html-generate.component';

describe('HtmlGenerateComponent', () => {
  let component: HtmlGenerateComponent;
  let fixture: ComponentFixture<HtmlGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
