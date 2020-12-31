import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumDetailedComponent } from './aquarium-detailed.component';

describe('AquariumDetailedComponent', () => {
  let component: AquariumDetailedComponent;
  let fixture: ComponentFixture<AquariumDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
