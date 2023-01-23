import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R410asplitComponent } from './r410asplit.component';

describe('R410asplitComponent', () => {
  let component: R410asplitComponent;
  let fixture: ComponentFixture<R410asplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R410asplitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R410asplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
