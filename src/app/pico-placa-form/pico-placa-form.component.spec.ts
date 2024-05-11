import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaFormComponent } from './pico-placa-form.component';

describe('PicoPlacaFormComponent', () => {
  let component: PicoPlacaFormComponent;
  let fixture: ComponentFixture<PicoPlacaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicoPlacaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicoPlacaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
