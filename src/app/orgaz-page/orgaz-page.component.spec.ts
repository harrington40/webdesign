import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgazPageComponent } from './orgaz-page.component';

describe('OrgazPageComponent', () => {
  let component: OrgazPageComponent;
  let fixture: ComponentFixture<OrgazPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgazPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgazPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
