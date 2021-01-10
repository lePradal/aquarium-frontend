import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumCreateComponent } from './aquarium-create.component';

describe('AquariumCreateComponent', () => {
  let component: AquariumCreateComponent;
  let fixture: ComponentFixture<AquariumCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
