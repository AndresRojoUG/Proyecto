import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSplitComponent } from './mini-split.component';

describe('MiniSplitComponent', () => {
  let component: MiniSplitComponent;
  let fixture: ComponentFixture<MiniSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniSplitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
