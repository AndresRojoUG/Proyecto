import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecedentVoyagerComponent } from './precedent-voyager.component';

describe('PrecedentVoyagerComponent', () => {
  let component: PrecedentVoyagerComponent;
  let fixture: ComponentFixture<PrecedentVoyagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecedentVoyagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecedentVoyagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
