import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumSimpleContainerComponent } from './aquarium-simple-container.component';

describe('AquariumSimpleContainerComponent', () => {
  let component: AquariumSimpleContainerComponent;
  let fixture: ComponentFixture<AquariumSimpleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumSimpleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumSimpleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
