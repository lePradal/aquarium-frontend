import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumSimpleComponent } from './aquarium-simple.component';

describe('AquariumSimpleComponent', () => {
  let component: AquariumSimpleComponent;
  let fixture: ComponentFixture<AquariumSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
