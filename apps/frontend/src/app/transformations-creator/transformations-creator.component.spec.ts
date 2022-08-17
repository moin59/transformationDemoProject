import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationsCreatorComponent } from './transformations-creator.component';

describe('TransformationsCreatorComponent', () => {
  let component: TransformationsCreatorComponent;
  let fixture: ComponentFixture<TransformationsCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransformationsCreatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransformationsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
