import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumUpdateComponent } from './aquarium-update.component';

describe('AquariumUpdateComponent', () => {
  let component: AquariumUpdateComponent;
  let fixture: ComponentFixture<AquariumUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
