/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-xformation-editor',
  templateUrl: './xformation-editor.component.html',
  styleUrls: ['./xformation-editor.component.scss']
})
export class XformationEditorComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}