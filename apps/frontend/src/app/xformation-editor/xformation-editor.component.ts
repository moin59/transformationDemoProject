/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

interface Transform {
  name: any;
  description: any;
}

@Component({
  selector: 'app-xformation-editor',
  templateUrl: './xformation-editor.component.html',
  styleUrls: ['./xformation-editor.component.scss']
})
export class XformationEditorComponent {

  //transformsList: Transform[] = [{ name: 'Transformation 1', description: 'Test Description1' }, { name: 'Transformation 2', description: 'Test Description2'}];
  transformsList: Transform[] = [] ;
  transform = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    
  });

  onCreate() {
    // TODO: Use EventEmitter with form value
    
    this.transform.patchValue({
      name: this.transform.controls['name']?.value,
      description: this.transform.controls['description']?.value
    });

    this.transformsList.push({
      //name: this.transform.get('name')?.value + " is created",
      name: this.transform.controls['name']?.value,
      description: this.transform.controls['description']?.value
    });
    this.clearTransform()
  }

  clearTransform() {
    this.transform.patchValue({
      name: '',
      description: ''
    });
  }

  deleteTransform() {
    console.clear();
  }


}