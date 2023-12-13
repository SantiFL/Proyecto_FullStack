import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditarformularioComponent } from './agregareditarformulario.component';

describe('AgregareditarformularioComponent', () => {
  let component: AgregareditarformularioComponent;
  let fixture: ComponentFixture<AgregareditarformularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregareditarformularioComponent]
    });
    fixture = TestBed.createComponent(AgregareditarformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
