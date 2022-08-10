import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'transformation-demo-project-root',
  templateUrl: './description.component.html'
})
export class DescriptionComponent {
  name = new FormControl('');
  description = new FormControl('');
}
