import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbookPageComponent } from './yearbook-page.component';

describe('YearbookPageComponent', () => {
  let component: YearbookPageComponent;
  let fixture: ComponentFixture<YearbookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearbookPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
