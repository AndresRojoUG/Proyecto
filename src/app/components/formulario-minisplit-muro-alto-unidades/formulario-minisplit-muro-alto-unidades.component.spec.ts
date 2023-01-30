import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMinisplitMuroAltoUnidadesComponent } from './formulario-minisplit-muro-alto-unidades.component';

describe('FormularioMinisplitMuroAltoUnidadesComponent', () => {
  let component: FormularioMinisplitMuroAltoUnidadesComponent;
  let fixture: ComponentFixture<FormularioMinisplitMuroAltoUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMinisplitMuroAltoUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMinisplitMuroAltoUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
