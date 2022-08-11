import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XformationEditorComponent } from './xformation-editor.component';

describe('XformationEditorComponent', () => {
  let component: XformationEditorComponent;
  let fixture: ComponentFixture<XformationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XformationEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XformationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
