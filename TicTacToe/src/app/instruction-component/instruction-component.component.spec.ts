import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionComponentComponent } from './instruction-component.component';

describe('InstructionComponentComponent', () => {
  let component: InstructionComponentComponent;
  let fixture: ComponentFixture<InstructionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
